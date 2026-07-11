import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Use body.totalAmount for the API call to Skydo
    
    /* Example:
    const skydoResponse = await fetch("https://api.skydo.com/v1/checkout", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.SKYDO_LIVE_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: body.totalAmount, currency: "USD" }) 
    });
    */

    return NextResponse.json({
      id: `skydo_session_${Date.now()}`,
      url: "https://skydo.com/checkout/test",
    });
  } catch (error) {
    console.error("Skydo session creation failed:", error);
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}