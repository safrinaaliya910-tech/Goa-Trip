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
              By accessing and using the GOA MOMENTS website and platform ("Platform"), you agree to be bound by these Terms of Service. These terms govern your use of our digital memberships, concierge services, and curated luxury experiences. If you do not agree with any part of these terms, you must refrain from using our Platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">2. Services Description</h2>
            <p>
              GOA MOMENTS facilitates the sale of premium digital memberships (Gold, Platinum, Diamond) that grant users access to exclusive benefits, priority support, and premium privileges at partnered venues in Goa, India. We reserve the right to modify, suspend, or discontinue any membership tier, website feature, or benefit at our sole discretion without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">3. Account Security & Registration</h2>
            <p>
              To purchase a membership, you must be at least 18 years of age and capable of forming a binding contract. You agree to provide accurate, current, and complete information during the checkout and registration process. You are solely responsible for maintaining the confidentiality of your membership details and passkeys. You agree to notify GOA MOMENTS immediately of any unauthorized use of your membership or any other breach of security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">4. Prohibited Uses & Website Conduct</h2>
            <p className="mb-3">
              You agree to use the Platform only for lawful purposes. You are strictly prohibited from engaging in any of the following activities:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Using the Platform in any way that violates applicable national or international law.</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Platform.</li>
              <li>Using any robot, spider, scraper, or other automated means to access the Platform for any purpose without our express written permission.</li>
              <li>Impersonating any person or entity, or misrepresenting your affiliation with a person or entity.</li>
              <li>Reselling, transferring, or attempting to monetize GOA MOMENTS memberships without explicit authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">5. Payments, Pricing & Taxes</h2>
            <p>
              All prices displayed on the Platform are subject to change. Payments for memberships are processed securely via our authorized payment gateway partners (including Razorpay). By submitting your payment details, you authorize us to charge the applicable fees to your selected payment method. Corporate clients seeking B2B invoices must provide valid GSTIN details at the time of purchase. You are responsible for all applicable taxes and fees associated with your purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">6. Cancellations & Refunds</h2>
            <p>
              Due to the immediate digital activation of our memberships and access to exclusive concierge resources, refunds and cancellations are governed by a strict policy. Please refer to our separate <Link href="/refund-policy" className="text-primary hover:underline">Cancellation & Refund Policy</Link> for detailed information regarding your eligibility for a refund.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">7. Third-Party Links & Services</h2>
            <p>
              Our Platform may contain links to third-party websites or services that are not owned or controlled by GOA MOMENTS. We assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that GOA MOMENTS shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of such external content or services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">8. Intellectual Property</h2>
            <p>
              All content on the GOA MOMENTS Platform, including but not limited to logos, digital membership card designs, text, graphics, UI design, and underlying source code, is the exclusive property of GOA MOMENTS and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of our Platform without our explicit written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">9. Disclaimer of Warranties</h2>
            <p>
              The Platform and all services are provided on an "AS IS" and "AS AVAILABLE" basis. GOA MOMENTS makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content, or materials included therein. You expressly agree that your use of the Platform is at your sole risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, GOA MOMENTS, its directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Platform; (ii) any conduct or content of any third party on the Platform; or (iii) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless GOA MOMENTS and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Platform, or b) a breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">12. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Coimbatore, Tamil Nadu, India.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">13. Contact Information</h2>
            <p>
              If you have any questions, concerns, or require support regarding these Terms of Service or your membership, please contact our support team:
            </p>
            <ul className="mt-4 space-y-2 font-medium">
              <li>Email: goamoments.com@gmail.com</li>
              <li>Phone: +91 9150216333</li>
              <li>Address: Panji Goa, India</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}