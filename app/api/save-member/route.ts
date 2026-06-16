import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  console.log("=========================================");
  console.log("🟢 1. DATABASE SAVE API TRIGGERED!");

  try {
    const body = await req.json();
    console.log(`🟢 2. Saving data for: ${body.email} | ID: ${body.membershipId}`);
    console.log("Payment Method:", body.paymentMethod);

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
    // 🟢 THE FIX: Added fallback safety nets (|| null) to ensure undefined 
    // values from GPay/PayPal don't crash the Supabase insert!
    const { data, error } = await supabaseAdmin
      .from('members')
      .upsert([
        {
          id: body.membershipId, 
          name: body.memberName || 'Member',
          email: body.email,
          phone: body.phone || null,
          address: body.address || null, // Safety Net 1
          city: body.city || null,       // Safety Net 2
          plan_id: body.plan ? body.plan.toLowerCase() : 'unknown',
          plan_tier: body.plan,
          amount_paid: Number(body.amountPaid) || 0,
          payment_method: body.paymentMethod || 'unknown',
          payment_id: body.paymentId || `TXN-${Date.now()}`,
          status: 'pending' // Ready for Flutter app activation
        }
      ], { onConflict: 'id' }) // Explicitly state the primary key for the upsert
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