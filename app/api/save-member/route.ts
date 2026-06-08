import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  console.log("=========================================");
  console.log("🟢 1. DATABASE SAVE API TRIGGERED!");

  try {
    const body = await req.json();
    console.log(`🟢 2. Saving data for: ${body.email} | ID: ${body.membershipId}`);

    // Fetch keys directly to avoid any import/path issues
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("🔴 ERROR: Supabase keys are missing in .env.local!");
      return NextResponse.json({ error: "Missing DB Keys" }, { status: 500 });
    }

    // Initialize Supabase with admin rights
    const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

    // Map exact columns to match your Supabase 'members' table
    const { data, error } = await supabaseAdmin
      .from('members')
      .upsert([
        {
          id: body.membershipId, 
          name: body.memberName,
          email: body.email,
          phone: body.phone,
          address: body.address,
          city: body.city,
          plan_id: body.plan ? body.plan.toLowerCase() : 'unknown',
          plan_tier: body.plan,
          amount_paid: Number(body.amountPaid),
          payment_method: body.paymentMethod,
          payment_id: body.paymentId,
          status: 'pending' // Ready for Flutter app activation
        }
      ])
      .select();

    if (error) {
      console.error("🔴 SUPABASE REJECTED SAVE. Error Details:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("🟢 3. SUCCESS! Database updated:", data[0].id);
    console.log("=========================================");
    
    return NextResponse.json({ success: true, member: data[0] });

  } catch (error: any) {
    console.error("🔴 CATCH BLOCK ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}