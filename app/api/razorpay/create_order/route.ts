import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { membershipPlans, MembershipPlanKey } from "@/lib/membership-plans";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, name, email, phone, city } = body as {
      plan: MembershipPlanKey;
      name: string;
      email: string;
      phone: string;
      city: string;
    };

    if (!plan || !membershipPlans[plan]) {
      return NextResponse.json({ error: "Invalid membership plan." }, { status: 400 });
    }

    if (!name || !email || !phone || !city) {
      return NextResponse.json({ error: "All customer details are required." }, { status: 400 });
    }

    const selectedPlan = membershipPlans[plan];

    const order = await razorpay.orders.create({
      amount: selectedPlan.price * 100,
      currency: "INR",
      receipt: `receipt_${plan}_${Date.now()}`,
      notes: {
        plan: selectedPlan.name,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerCity: city,
      },
    });

    return NextResponse.json({
      success: true,
      order,
      plan: selectedPlan,
    });
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { error: "Failed to create Razorpay order." },
      { status: 500 }
    );
  }
}