import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  return NextResponse.json({ status: "Razorpay webhook endpoint working" });
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !secret) {
      return NextResponse.json({ error: "Missing verification credentials" }, { status: 400 });
    }

    const expectedSignature = createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Webhook signature mismatch.");
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
    }

    const body = JSON.parse(rawBody);
    const event = body.event;
    const payload = body.payload;

    // 1. Always log the raw webhook for financial auditing
    await supabaseAdmin.from("payment_webhooks").insert([
      { event_type: event, payload: body, created_at: new Date().toISOString() },
    ]);

    let orderId = "";
    let paymentId = "";

    // 2. SUCCESS LOGIC: Only attach the payment_id. Do NOT change status to active.
    if (event === "payment.captured" || event === "order.paid") {
      const entity = event === "payment.captured" ? payload.payment.entity : payload.order.entity;
      orderId = entity.order_id || entity.id;
      paymentId = payload.payment?.entity?.id || "";

      if (orderId && paymentId) {
        const { error: updateError } = await supabaseAdmin
          .from("members")
          .update({
            payment_id: paymentId,
            updated_at: new Date().toISOString(),
            // We deliberately omit 'status' here so it remains "pending" for the App OTP flow
          })
          .eq("razorpay_order_id", orderId);

        if (updateError) throw new Error("Database update failed");
      }
    } 
    // 3. FAILURE LOGIC: If payment fails, mark them as failed so the app denies entry.
    else if (event === "payment.failed") {
      const entity = payload.payment.entity;
      orderId = entity.order_id;
      
      if (orderId) {
        await supabaseAdmin
          .from("members")
          .update({
            status: "failed",
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_order_id", orderId);
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err: any) {
    console.error("Webhook crash:", err.message);
    return NextResponse.json({ error: "Internal processing error" }, { status: 500 });
  }
}