import { NextResponse } from "next/server";

async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  const baseUrl = process.env.PAYPAL_BASE_URL;

  if (!clientId || !secret || !baseUrl) {
    throw new Error("PayPal environment variables are missing.");
  }

  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error_description || "Failed to get PayPal access token.");
  }

  return data.access_token as string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderID } = body;

    if (!orderID) {
      return NextResponse.json({ error: "Missing orderID." }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();
    const baseUrl = process.env.PAYPAL_BASE_URL!;

    const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Failed to capture PayPal order.");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("PayPal capture order error:", error);
    return NextResponse.json(
      { error: "Unable to capture PayPal order." },
      { status: 500 }
    );
  }
}