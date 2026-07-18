import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Helper function to get PayPal Access Token (reused from your other routes)
async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  const baseUrl = process.env.PAYPAL_BASE_URL;

  if (!clientId || !secret || !baseUrl) {
    throw new Error("PayPal environment variables are missing.");
  }

  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");
  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const data = await response.json();
  if (!response.ok) throw new Error("Failed to get PayPal access token.");
  
  return data.access_token as string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headers = req.headers;

    // 1. Get Access Token for Verification
    const accessToken = await getPayPalAccessToken();

    // 2. Verify the Webhook Signature securely with PayPal's API
    const verifyResponse = await fetch(`${process.env.PAYPAL_BASE_URL}/v1/notifications/verify-webhook-signature`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        auth_algo: headers.get("paypal-auth-algo"),
        cert_url: headers.get("paypal-cert-url"),
        transmission_id: headers.get("paypal-transmission-id"),
        transmission_sig: headers.get("paypal-transmission-sig"),
        transmission_time: headers.get("paypal-transmission-time"),
        webhook_id: process.env.PAYPAL_WEBHOOK_ID,
        webhook_event: body, // Pass the raw event payload back to PayPal to verify
      }),
    });

    const verification = await verifyResponse.json();

    if (verification.verification_status !== "SUCCESS") {
      console.error("🔴 PayPal Webhook Verification Failed! Invalid Signature.");
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
    }

    console.log(`🟢 PayPal Webhook Verified Successfully! Event: ${body.event_type}`);

    // 3. Process the Successful Payment Event
    if (body.event_type === "PAYMENT.CAPTURE.COMPLETED") {
      const captureDetails = body.resource;
      
      // PayPal provides a Capture ID and an Order ID. We extract both to be safe.
      const captureId = captureDetails.id; 
      const orderId = captureDetails.supplementary_data?.related_ids?.order_id;

      // Initialize Supabase Admin Client to update the database
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      // Find the user by either the Capture ID or Order ID and mark as confirmed
      const { error } = await supabaseAdmin
        .from("members")
        .update({ status: "Confirmed" })
        .or(`payment_id.eq.${orderId},payment_id.eq.${captureId}`);

      if (error) {
        console.error("🔴 Supabase Update Failed in Webhook:", error);
        throw error;
      }

      console.log(`🟢 Successfully updated member status in Supabase for PayPal transaction!`);
    }

    // Always return 200 OK so PayPal knows you received the message
    return NextResponse.json({ received: true });
    
  } catch (error: any) {
    console.error("🔴 PayPal Webhook Handler Error:", error.message);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}