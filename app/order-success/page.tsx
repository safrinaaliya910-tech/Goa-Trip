"use client";

import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();

  const membershipId = searchParams.get("membershipId") || "GT-XXX-000000";
  const plan = searchParams.get("plan") || "Membership";
  const amountPaid = searchParams.get("amountPaid") || "0";
  const memberName = searchParams.get("memberName") || "Member";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const city = searchParams.get("city") || "";
  const validity = searchParams.get("validity") || "Lifetime Membership";
  const paymentId = searchParams.get("paymentId") || "DEMO";
  const isDemo = searchParams.get("demo") === "true";

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
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Payment Confirmed
            </p>

            <h1 className="mt-5 text-5xl font-light text-foreground md:text-6xl lg:text-7xl">
              Order Successful
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Welcome to Goa Trip. Your membership has been activated successfully,
              and your card is ready to download.
            </p>

            {isDemo && (
              <div className="mx-auto mt-6 inline-flex border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                Demo success mode is enabled because Razorpay is not fully configured yet.
              </div>
            )}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border border-primary/30 bg-card p-4 md:p-6 shadow-[0_0_40px_rgba(212,175,55,0.10)]">
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

              <div className="mt-6 flex min-h-[280px] items-center justify-center bg-black/40 p-4 md:min-h-[420px]">
                <div className="relative h-[220px] w-full max-w-[700px] md:h-[380px]">
                  <Image
                    src="/images/membership-card.png"
                    alt="Membership card"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6 md:p-8">
              <h2 className="text-3xl font-light text-foreground">
                Order Details
              </h2>

              <div className="mt-8 space-y-5 text-sm text-muted-foreground">
                <div className="flex items-start justify-between gap-4">
                  <span>Membership ID</span>
                  <span className="text-right text-foreground">{membershipId}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Plan</span>
                  <span className="text-right text-foreground">{plan}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Amount Paid</span>
                  <span className="text-right text-foreground">₹{amountPaid}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Member Name</span>
                  <span className="text-right text-foreground">{memberName}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Email</span>
                  <span className="text-right break-all text-foreground">{email}</span>
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
                  <span>Payment ID</span>
                  <span className="text-right break-all text-foreground">{paymentId}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span>Status</span>
                  <span className="text-right font-medium text-primary">Confirmed</span>
                </div>

                <div className="flex items-start justify-between gap-4 border-t border-border pt-5">
                  <span>Validity</span>
                  <span className="text-right text-foreground">{validity}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={downloadCard}
                className="mt-10 w-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
              >
                Download Membership Card
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}