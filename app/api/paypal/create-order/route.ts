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
    const { 
      amount, plan, membershipId, memberName, email, phone, address, city,
      isCorporate, gstin, companyName, companyAddress 
    } = body;

    const accessToken = await getPayPalAccessToken();
    const baseUrl = process.env.PAYPAL_BASE_URL!;

    let appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    if (!appUrl.startsWith("http")) {
      appUrl = `https://${appUrl}`;
    }

    const queryParams = new URLSearchParams({
      membershipId,
      plan,
      amountPaid: String(amount),
      memberName,
      email,
      phone,
      address,
      city,
      paymentMethod: "paypal",
      isCorporate: String(isCorporate || false),
      gstin: gstin || "",
      companyName: companyName || "",
      companyAddress: companyAddress || "",
    });

    const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: String(amount),
            },
            description: `${plan} Membership`,
          },
        ],
        application_context: {
          brand_name: "GOA MOMENTS",
          user_action: "PAY_NOW",
          return_url: `${appUrl}/order-success?${queryParams.toString()}`,
          cancel_url: `${appUrl}/payment`,
        },
      }),
      cache: "no-store",
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("PayPal API Rejection Reason:", data);
      throw new Error(data?.message || "Failed to create PayPal order.");
    }
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("PayPal create order error:", error);
    return NextResponse.json({ error: error.message || "Unable to create PayPal order." }, { status: 500 });
  }
}