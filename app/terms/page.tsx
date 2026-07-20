import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="mb-2 font-serif text-3xl font-medium tracking-wide text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mb-12 text-sm text-[#C5A059]">Last Updated: July 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the GOA MOMENTS platform, you agree to be bound by these Terms of Service. 
              Our luxury services are designed for discerning members, and maintaining the integrity of our community is paramount.
              [Replace this with your actual content later].
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">2. Membership Rules</h2>
            <p>
              GOA MOMENTS reserves the right to approve or decline membership applications at our sole discretion. 
              Members are expected to uphold the highest standards of conduct at all partnered venues and events.
              [Replace this with your actual content later].
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">3. Payments & Cancellations</h2>
            <p>
              All luxury bookings, yacht charters, and VIP reservations require advance payment. 
              Cancellations must be made within the specified window to qualify for a refund.
              [Replace this with your actual content later].
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}