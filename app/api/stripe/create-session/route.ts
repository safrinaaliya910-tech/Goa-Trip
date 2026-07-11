import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { totalAmount, baseAmount, serviceFee, calculatedGst, plan, membershipId, memberName, email, phone, city } = body;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email || undefined,
      
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: `${plan} Membership` },
            unit_amount: Math.round(Number(baseAmount) * 100),
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Platform Service Fee" },
            unit_amount: Math.round(Number(serviceFee) * 100),
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: { name: "GST (18%)" },
            unit_amount: Math.round(Number(calculatedGst) * 100),
          },
          quantity: 1,
        }
      ],
      
      success_url: `${baseUrl}/order-success?membershipId=${encodeURIComponent(
        membershipId
      )}&plan=${encodeURIComponent(plan)}&amountPaid=${encodeURIComponent(
        String(totalAmount)
      )}&memberName=${encodeURIComponent(memberName)}&email=${encodeURIComponent(
        email || ""
      )}&phone=${encodeURIComponent(phone || "")}&city=${encodeURIComponent(
        city || ""
      )}&paymentId={CHECKOUT_SESSION_ID}&validity=${encodeURIComponent(
        "Lifetime Membership"
      )}&paymentMethod=stripe`,
      
      cancel_url: `${baseUrl}/payment?membershipId=${encodeURIComponent(
        membershipId
      )}&plan=${encodeURIComponent(plan)}&amount=${encodeURIComponent(
        String(baseAmount) 
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