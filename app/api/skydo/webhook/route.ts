import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // NOTE TO SAFRIN: Skydo will have their own way of verifying signatures.
    // You must add their security check here once you have their documentation.

    // 1. Log the webhook for financial auditing
    await supabaseAdmin.from("payment_webhooks").insert([
      { event_type: "skydo.event", payload: body, created_at: new Date().toISOString() },
    ]);

    // 2. Attach the payment ID, but LEAVE STATUS AS "PENDING"
    // (You will need to adjust 'body.order_id' based on Skydo's exact JSON format)
    const orderId = body.order_id; 
    const paymentId = body.transaction_id;

    if (orderId && paymentId) {
      await supabaseAdmin
        .from("members")
        .update({
          payment_id: paymentId,
          updated_at: new Date().toISOString(),
        })
        .eq("payment_id", orderId); // Matches the ID we saved in the frontend
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error("Skydo Webhook crash:", err.message);
    return NextResponse.json({ error: "Internal processing error" }, { status: 500 });
  }
}