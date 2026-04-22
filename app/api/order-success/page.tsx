"use client";

import { useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);

  const membershipId = searchParams.get("membershipId") || "GT-XXX-000000";
  const plan = searchParams.get("plan") || "Membership";
  const amountPaid = searchParams.get("amountPaid") || "0";
  const memberName = searchParams.get("memberName") || "Member";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const city = searchParams.get("city") || "";
  const validity = searchParams.get("validity") || "Lifetime Membership";
  const paymentId = searchParams.get("paymentId") || "";

  const downloadCard = async () => {
    if (!cardRef.current) return;

    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#0a0a0a",
      scale: 2,
    });

    const link = document.createElement("a");
    link.download = `${membershipId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-24 sm:px-6 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Order Successful
            </p>
            <h1 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              Welcome to Goa Trip
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Your payment was successful and your membership is now active.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-none border border-primary/40 bg-black p-8 shadow-[0_0_40px_rgba(212,175,55,0.12)]"
            >
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="/images/membership-card.jpg"
                  alt="Membership card background"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/logo.png"
                      alt="Goa Trip Logo"
                      width={64}
                      height={64}
                      className="h-14 w-auto object-contain"
                    />
                    <div>
                      <p className="text-2xl font-medium tracking-wider text-white">
                        GOA TRIP
                      </p>
                      <p className="text-xs uppercase tracking-[0.25em] text-primary">
                        Luxury Living
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Membership
                    </p>
                    <p className="mt-1 text-xl text-white">{plan}</p>
                  </div>
                </div>

                <div className="mt-14">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">
                    Member Name
                  </p>
                  <p className="mt-2 text-3xl font-light text-white">{memberName}</p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Membership ID
                    </p>
                    <p className="mt-2 text-lg text-white">{membershipId}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Validity
                    </p>
                    <p className="mt-2 text-lg text-white">{validity}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      City
                    </p>
                    <p className="mt-2 text-lg text-white">{city}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Payment
                    </p>
                    <p className="mt-2 text-lg text-white">₹{amountPaid}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-8">
              <h2 className="text-2xl font-light text-foreground">Order Details</h2>

              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Plan</span>
                  <span className="text-foreground">{plan}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid</span>
                  <span className="text-foreground">₹{amountPaid}</span>
                </div>
                <div className="flex justify-between">
                  <span>Member Name</span>
                  <span className="text-foreground">{memberName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email</span>
                  <span className="text-foreground">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone</span>
                  <span className="text-foreground">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment ID</span>
                  <span className="text-foreground">{paymentId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="text-primary">Confirmed</span>
                </div>
                <div className="flex justify-between">
                  <span>Validity</span>
                  <span className="text-foreground">{validity}</span>
                </div>
              </div>

              <button
                onClick={downloadCard}
                className="mt-8 w-full bg-primary px-6 py-4 text-sm uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90"
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