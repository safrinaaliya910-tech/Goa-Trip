import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    // FIX: Restored to INR to enable UPI, Netbanking, and Wallets in India.
    // Converts the total calculated USD ($309.75) to INR using an approx exchange rate (e.g., 83 INR)
    const exchangeRate = 83; 
    const totalInINR = Number(body.totalAmount) * exchangeRate;
    const amountInPaise = Math.round(totalInINR * 100);

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR", // Restored!
      receipt: `receipt_${Date.now()}`,
      notes: {
        membershipId: body.membershipId || "",
        plan: body.plan || "",
        name: body.name || "",
        email: body.email || "",
        phone: body.phone || "",
        city: body.city || "",
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}