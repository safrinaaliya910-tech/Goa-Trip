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
      amount,
      plan,
      membershipId,
      memberName,
      email,
      phone,
      city,
    } = body;

    const accessToken = await getPayPalAccessToken();
    const baseUrl = process.env.PAYPAL_BASE_URL!;

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
            reference_id: membershipId,
            description: `${plan} Membership`,
            amount: {
              currency_code: "USD",
              value: String(amount),
            },
            custom_id: membershipId,
          },
        ],
        application_context: {
          brand_name: "GOA MOMENTS",
          user_action: "PAY_NOW",
        },
        payer: {
          name: memberName
            ? {
                given_name: memberName,
              }
            : undefined,
          email_address: email || undefined,
          phone: phone
            ? {
                phone_type: "MOBILE",
                phone_number: {
                  national_number: phone,
                },
              }
            : undefined,
          address: city
            ? {
                address_line_1: city,
                admin_area_2: city,
                country_code: "US",
              }
            : undefined,
        },
      }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Failed to create PayPal order.");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("PayPal create order error:", error);
    return NextResponse.json(
      { error: "Unable to create PayPal order." },
      { status: 500 }
    );
  }
}