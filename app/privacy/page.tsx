import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-[#C5A059]">Last Updated: July 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">1. Information We Collect</h2>
            <p>
              At GOA MOMENTS, we respect your privacy. We collect essential information such as your name, 
              contact details, and payment information (securely processed via PayPal) to provide our luxury services.
              [Replace this with your actual content later].
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">2. How We Use Your Data</h2>
            <p>
              Your data is strictly used to enhance your experience, manage your membership, and facilitate bookings. 
              We do not sell your personal information to third parties.
              [Replace this with your actual content later].
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">3. Data Security</h2>
            <p>
              We implement enterprise-grade security protocols, including secure server architectures and 
              payment gateways, to ensure your high-profile information remains strictly confidential.
              [Replace this with your actual content later].
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}