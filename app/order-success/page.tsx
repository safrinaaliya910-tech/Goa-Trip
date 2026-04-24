"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();

  const membershipId = searchParams.get("membershipId") || "GM-XXX-000000";
  const plan = searchParams.get("plan") || "Membership";
  const amountPaid = searchParams.get("amountPaid") || "0";
  const memberName = searchParams.get("memberName") || "Member";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const city = searchParams.get("city") || "";
  const validity = searchParams.get("validity") || "Lifetime Membership";
  const orderId = searchParams.get("paymentId") || `ORDER-${Date.now()}`;
  const paymentMethod = searchParams.get("paymentMethod") || "Secure Checkout";
  const emailSentRef = useRef(false);

  useEffect(() => {
    if (emailSentRef.current) return;
    if (!email) return;

    emailSentRef.current = true;

    fetch("/api/send-membership-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        membershipId,
        plan,
        amountPaid,
        memberName,
        email,
        phone,
        city,
        paymentId: orderId,
        validity,
        paymentMethod,
      }),
    }).catch((error) => {
      console.error("Failed to send membership email:", error);
    });
  }, [
    membershipId,
    plan,
    amountPaid,
    memberName,
    email,
    phone,
    city,
    orderId,
    validity,
    paymentMethod,
  ]);

  const downloadCard = () => {
    const link = document.createElement("a");
    link.href = "/images/membership-card.png";
    link.download = `${membershipId}-membership-card.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-primary">
              Order Confirmed
            </p>

            <h1 className="mt-5 text-5xl font-light text-foreground md:text-6xl lg:text-7xl">
              Order Successful
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Welcome to GOA MOMENTS. Your membership has been activated
              successfully. Your card, support access, and premium member
              benefits are now ready.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-widest">
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                1. Details
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                2. Confirm Order
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                3. Payment Method
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
                4. Order Successful
              </span>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border border-primary/30 bg-card p-4 shadow-[0_0_40px_rgba(212,175,55,0.10)] md:p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">
                    Membership Card Preview
                  </p>
                  <p className="mt-2 text-lg text-foreground">
                    {plan} Membership
                  </p>
                </div>

                <button
                  type="button"
                  onClick={downloadCard}
                  className="border border-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Download Card
                </button>
              </div>

              <div className="mt-6 flex min-h-72 items-center justify-center bg-black/40 p-4 md:min-h-96">
                <div className="relative h-56 w-full max-w-[700px] md:h-[380px]">
                  <Image
                    src="/images/membership-card.png"
                    alt="Membership card"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Your membership access is now active
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      You can now use your GOA MOMENTS membership card for
                      eligible venue-based benefits, premium support guidance,
                      and member savings at selected partner locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-light text-foreground">
                  Order Details
                </h2>
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div className="mt-8 space-y-5 text-sm text-muted-foreground">
                <div className="flex items-start justify-between gap-4">
                  <span>Membership ID</span>
                  <span className="text-right text-foreground">
                    {membershipId}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Plan</span>
                  <span className="text-right text-foreground">{plan}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Amount Paid</span>
                  <span className="text-right text-foreground">
                    ${amountPaid}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Member Name</span>
                  <span className="text-right text-foreground">
                    {memberName}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Email</span>
                  <span className="break-all text-right text-foreground">
                    {email}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Phone</span>
                  <span className="text-right text-foreground">{phone}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>City</span>
                  <span className="text-right text-foreground">{city}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Payment Method</span>
                  <span className="text-right capitalize text-foreground">
                    {paymentMethod}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Order ID</span>
                  <span className="break-all text-right text-foreground">
                    {orderId}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Status</span>
                  <span className="text-right font-medium text-primary">
                    Confirmed
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-t border-border pt-5">
                  <span>Validity</span>
                  <span className="text-right text-foreground">
                    {validity}
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={downloadCard}
                  className="w-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
                >
                  Download Membership Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}