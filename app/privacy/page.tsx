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
            <h2 className="mb-4 font-serif text-xl text-foreground">1. Introduction</h2>
            <p>
              At GOA MOMENTS, we are committed to protecting the privacy and security of our members. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, purchase a luxury membership, or utilize our concierge services. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">2. Information We Collect</h2>
            <p className="mb-3">
              To provide our premium services, we may collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, physical address, and city, collected during the checkout and registration process.</li>
              <li><strong>Business Information:</strong> Company name and GSTIN (for corporate/B2B clients requesting tax invoices).</li>
              <li><strong>Payment Information:</strong> Transaction details securely processed through our authorized payment gateways (e.g., Razorpay, PayPal). We do not directly store your full credit card numbers or UPI PINs on our servers.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Platform, including IP addresses, browser types, and device identifiers.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">3. How We Use Your Data</h2>
            <p className="mb-3">
              We strictly utilize your data to enhance your luxury experience and fulfill our service obligations. Your information is used to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Process transactions and deliver your digital membership card securely.</li>
              <li>Verify your identity and membership status at partnered venues in Goa.</li>
              <li>Send administrative information, including order confirmations, security alerts, and policy updates.</li>
              <li>Provide personalized customer support and concierge assistance.</li>
              <li>Comply with legal obligations, including tax reporting and fraud prevention.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">4. Information Sharing & Disclosure</h2>
            <p>
              GOA MOMENTS does not sell, rent, or trade your personal information to third parties. We only share information with trusted third-party service providers who assist us in operating our Platform, conducting our business, or servicing you. This includes secure cloud hosting providers (e.g., Vercel, Supabase), email delivery services, and payment processors. All third-party providers are bound by strict confidentiality agreements and data protection laws. We may also disclose your information if required to do so by law or in response to valid requests by public authorities.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">5. Data Security</h2>
            <p>
              We implement enterprise-grade, commercially reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes utilizing encrypted server architectures, secure socket layer (SSL) technology for data transmission, and strict Row Level Security (RLS) database policies. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">6. Cookies & Tracking Technologies</h2>
            <p>
              Our Platform may use "cookies" and similar tracking technologies to enhance user experience, analyze website traffic, and remember your preferences. You can set your browser to refuse all or some browser cookies, but doing so may limit your ability to use certain features of the GOA MOMENTS platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">7. Your Data Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, update, or request the deletion of your personal data stored on our systems. If you wish to exercise these rights, or if you have questions about the data we hold regarding your membership, please contact our support team using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">8. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be effective immediately upon posting the updated policy on this page, with a revised "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact our designated Privacy Officer at:
            </p>
            <ul className="mt-4 space-y-2 font-medium">
              <li>Email: goamoments.com@gmail.com</li>
              <li>Phone: +91 9150216333</li>
              <li>Address: Panjim , Goa , India </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}