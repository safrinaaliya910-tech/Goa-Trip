"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const params = useSearchParams();

  const membershipId = params.get("membershipId") || "";
  const plan = params.get("plan") || "Membership";
  const amountPaid = params.get("amountPaid") || "0";
  const validity = params.get("validity") || "Lifetime Membership";

  const [name, setName] = useState(params.get("memberName") || "");
  const [email, setEmail] = useState(params.get("email") || "");
  const [phone, setPhone] = useState(params.get("phone") || "");
  const [city, setCity] = useState(params.get("city") || "");

  const canContinue =
    name.trim() && email.trim() && phone.trim() && city.trim();

  const handleSubmit = () => {
    const query = new URLSearchParams({
      membershipId,
      name,
      email,
      phone,
      city,
      plan,
      amountPaid,
      validity,
    });

    router.push(`/dashboard?${query.toString()}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Member Access Setup
            </p>
            <h1 className="mt-5 text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
              Complete Your Profile
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Confirm your details to unlock your personal GOA MOMENTS dashboard,
              card access, and support services.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="border border-primary/30 bg-card p-6 md:p-8 shadow-[0_0_40px_rgba(212,175,55,0.10)]">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Profile Details
              </p>
              <h2 className="mt-3 text-3xl font-light text-foreground">
                Member Information
              </h2>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-foreground">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </label>
                  <input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-border bg-background px-4 py-4 text-foreground outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </label>
                  <input
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-border bg-background px-4 py-4 text-foreground outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-border bg-background px-4 py-4 text-foreground outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    City
                  </label>
                  <input
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-border bg-background px-4 py-4 text-foreground outline-none transition focus:border-primary"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canContinue}
                  className="mt-4 flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Confirm & Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-border bg-card p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-light text-foreground">
                    Membership Overview
                  </h2>
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>

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
                    <span className="text-right text-foreground">${amountPaid}</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t border-border pt-5">
                    <span>Validity</span>
                    <span className="text-right text-foreground">{validity}</span>
                  </div>
                </div>
              </div>

              <div className="border border-primary/20 bg-primary/5 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-lg text-foreground">
                      What you unlock next
                    </p>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>• Premium GOA MOMENTS dashboard access</p>
                      <p>• Member support contact details</p>
                      <p>• Travel, taxi, hotel, and dining guidance</p>
                      <p>• Venue-based discounts from 10%–70%</p>
                      <p>• Strong concierge-style support experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border bg-card p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    After confirming your profile, your member dashboard will be
                    ready immediately with all your support access and membership
                    details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}