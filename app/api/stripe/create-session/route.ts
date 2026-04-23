import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { amount, plan, membershipId, memberName, email, phone, city } = body;

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email || undefined,

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${plan} Membership`,
              description: `GOA MOMENTS ${plan} membership`,
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],

      success_url:
        `${baseUrl}/order-success?membershipId=${encodeURIComponent(membershipId)}&plan=${encodeURIComponent(plan)}&amountPaid=${encodeURIComponent(String(amount))}&memberName=${encodeURIComponent(memberName)}&email=${encodeURIComponent(email || "")}&phone=${encodeURIComponent(phone || "")}&city=${encodeURIComponent(city || "")}&paymentId={CHECKOUT_SESSION_ID}&validity=${encodeURIComponent("Lifetime Membership")}&paymentMethod=stripe`,

      cancel_url: `${baseUrl}/payment?membershipId=${encodeURIComponent(
        membershipId
      )}&plan=${encodeURIComponent(plan)}&amount=${encodeURIComponent(
        String(amount)
      )}&memberName=${encodeURIComponent(memberName)}&email=${encodeURIComponent(
        email || ""
      )}&phone=${encodeURIComponent(phone || "")}&city=${encodeURIComponent(
        city || ""
      )}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe create session error:", error);
    return NextResponse.json(
      { error: "Unable to create Stripe checkout session." },
      { status: 500 }
    );
  }
}