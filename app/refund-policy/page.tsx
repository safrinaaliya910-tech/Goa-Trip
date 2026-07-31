import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
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
          Cancellation & Refund Policy
        </h1>
        <p className="mb-12 text-sm text-[#C5A059]">Last Updated: July 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">1. Digital Membership Activation</h2>
            <p>
              At GOA MOMENTS, our luxury memberships (Gold, Platinum, and Diamond) are digital products that are activated immediately upon successful payment. Because members instantly gain access to exclusive concierge resources, partner privileges, and proprietary platform benefits, all membership purchases are generally considered final.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">2. Refund Eligibility</h2>
            <p className="mb-3">
              We uphold the highest standards of customer satisfaction. However, refunds are only granted under the following strict conditions:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Duplicate Charges:</strong> If you were accidentally charged multiple times for a single transaction due to a technical error.</li>
              <li><strong>Non-Delivery of Digital Assets:</strong> If your membership fails to activate in our database and our support team cannot resolve the issue within 48 hours of your report.</li>
              <li><strong>Within 24 Hours (Unused):</strong> If you request a cancellation within 24 hours of purchase AND our system logs show that the membership card and concierge services have not been utilized at any partnered venue.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">3. Non-Refundable Circumstances</h2>
            <p className="mb-3">
              GOA MOMENTS will not issue refunds under the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Change of mind after the 24-hour window has passed.</li>
              <li>Failure to utilize the membership benefits during the validity period.</li>
              <li>Membership revocation due to a violation of our Terms of Service or inappropriate conduct at partnered venues.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">4. How to Request a Cancellation</h2>
            <p>
              To initiate a cancellation or refund request, you must email our support team at <strong>support@goamoments.com</strong> from your registered email address. Please include your Membership ID, Order ID, and a detailed reason for the request. 
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">5. Processing Time</h2>
            <p>
              Once a refund request is received and approved by our team, it will be processed immediately. However, depending on your bank, credit card issuer, or Razorpay's processing times, it may take <strong>5 to 7 business days</strong> for the funds to reflect in your original payment method.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}