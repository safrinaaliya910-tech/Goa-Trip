import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { amount, membershipId, plan, name, email, phone } = body;

    // TODO: When official keys arrive, add Paytm Checksum generation here.
    // For now, using the TEST environment to simulate a successful backend handshake.
    const merchantId = process.env.PAYTM_MID;
    
    // Simulate API processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockPaytmOrderId = `PAYTM_TXN_${Date.now()}`;

    return NextResponse.json({
      success: true,
      id: mockPaytmOrderId,
      message: "Paytm Order Created Successfully",
    });
  } catch (error) {
    console.error("Paytm API initialization failed:", error);
    return NextResponse.json(
      { error: "Paytm order creation failed" },
      { status: 500 }
    );
  }
}