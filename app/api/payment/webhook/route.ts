import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase with the Service Role Key to bypass RLS for secure backend operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // MUST use service role key, not anon key
);

/**
 * GET: Simple health check to verify the endpoint is reachable
 * Try visiting /api/payment/webhook in your browser to test this.
 */
export async function GET() {
  return NextResponse.json({ status: "Razorpay webhook endpoint working" });
}

/**
 * POST: Securely processes events sent by Razorpay
 */
export async function POST(req: NextRequest) {
  try {
    // 1. Read raw body text for accurate cryptographic signature verification
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !secret) {
      return NextResponse.json(
        { error: "Missing verification credentials" },
        { status: 400 }
      );
    }

    // 2. Verify the x-razorpay-signature using HMAC SHA256
    const expectedSignature = createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Webhook signature mismatch. Possible malicious request.");
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    // 3. Parse the validated JSON payload
    const body = JSON.parse(rawBody);
    const event = body.event;
    const payload = body.payload;

    // 4. Log the raw webhook payload into the payment_webhooks table for your records
    const { error: webhookLogError } = await supabaseAdmin
      .from("payment_webhooks")
      .insert([
        {
          event_type: event,
          payload: body,
          created_at: new Date().toISOString(),
        },
      ]);

    if (webhookLogError) {
      console.error("Failed to log webhook event:", webhookLogError);
    }

    // 5. Extract payment details to update the 'members' table
    let orderId = "";
    let paymentId = "";
    let memberStatus = "";

    if (event === "payment.captured" || event === "order.paid") {
      const entity = event === "payment.captured" ? payload.payment.entity : payload.order.entity;
      orderId = entity.order_id || entity.id; // Fallback depending on event type
      paymentId = payload.payment?.entity?.id || "";
      memberStatus = "active"; // Set member to active upon successful payment
      
    } else if (event === "payment.failed") {
      const entity = payload.payment.entity;
      orderId = entity.order_id;
      paymentId = entity.id;
      memberStatus = "failed"; // Mark as failed
    }

    // 6. Update the members table using the razorpay_order_id
    if (orderId && memberStatus) {
      const { error: updateError } = await supabaseAdmin
        .from("members")
        .update({
          status: memberStatus,
          payment_id: paymentId,
          updated_at: new Date().toISOString(),
        })
        .eq("razorpay_order_id", orderId); // Find the exact user by their order ID

      if (updateError) {
        console.error(`Failed to update member status to ${memberStatus}:`, updateError);
        throw new Error("Database update failed");
      }
    }

    // 7. Return 200 OK so Razorpay knows the event was processed successfully
    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err: any) {
    console.error("Webhook crash:", err.message);
    return NextResponse.json(
      { error: "Internal processing error", details: err.message },
      { status: 500 }
    );
  }
}