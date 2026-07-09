import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // NOTE TO SAFRIN: Here is where you put the actual Skydo API Call once you 
    // get their live documentation. You will send them the amount and currency, 
    // and they will return a secure checkout URL.

    /* Example of what the Skydo fetch will look like:
    const skydoResponse = await fetch("https://api.skydo.com/v1/checkout", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.SKYDO_LIVE_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: body.amount, currency: "INR" }) // etc...
    });
    const skydoData = await skydoResponse.json();
    */

    // For now, this is a placeholder response so your frontend doesn't break
    // Replace "https://skydo.com/checkout/test" with skydoData.url later.
    return NextResponse.json({ 
      id: `skydo_session_${Date.now()}`, 
      url: "https://skydo.com/checkout/test" 
    });

  } catch (error) {
    console.error("Skydo session creation failed:", error);
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
  }
}