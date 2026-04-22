import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { membershipPlans, MembershipPlanKey } from "@/lib/membership-plans";

function generateMembershipId(planName: string) {
  const prefix = planName.slice(0, 3).toUpperCase();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `GT-${prefix}-${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      plan,
      name,
      email,
      phone,
      city,
    } = body as {
      razorpay_order_id: string;
      razorpay_payment_id: string;
      razorpay_signature: string;
      plan: MembershipPlanKey;
      name: string;
      email: string;
      phone: string;
      city: string;
    };

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !plan ||
      !membershipPlans[plan]
    ) {
      return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json({ error: "Payment verification failed." }, { status: 400 });
    }

    const selectedPlan = membershipPlans[plan];
    const membershipId = generateMembershipId(selectedPlan.name);

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
      membership: {
        membershipId,
        plan: selectedPlan.name,
        amountPaid: selectedPlan.price,
        memberName: name,
        email,
        phone,
        city,
        validity: "Lifetime Membership",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      },
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { error: "Payment verification failed." },
      { status: 500 }
    );
  }
}