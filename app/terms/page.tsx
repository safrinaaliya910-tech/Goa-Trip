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
          Terms and Conditions
        </h1>
        <p className="mb-12 text-sm text-[#C5A059]">Last Updated: 4 August 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <p>
              Welcome to Goa Moments, a tourism membership, partner-discovery and visitor-benefit
              platform operated by LOTLAN EXPERT PRIVATE LIMITED.
            </p>
            <p className="mt-3">In these Terms and Conditions:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>&ldquo;Goa Moments&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to LOTLAN EXPERT PRIVATE LIMITED.</li>
              <li>&ldquo;Platform&rdquo; refers to the Goa Moments website, mobile application, membership systems and related services.</li>
              <li>&ldquo;User&rdquo;, &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to any person accessing or using the Platform.</li>
              <li>&ldquo;Member&rdquo; refers to a person holding an active Goa Moments membership.</li>
              <li>&ldquo;Partner&rdquo; refers to an independent hotel, restaurant, resort, activity provider, tourism business or other participating business listed on the Platform.</li>
            </ul>
            <p className="mt-3">
              These Terms govern your use of the Goa Moments website, mobile application, membership
              cards, partner offers, verification services, enquiry facilities and related features.
            </p>
            <p className="mt-3">
              By accessing the Platform, creating an account, purchasing a membership or using any Goa
              Moments service, you confirm that you have read, understood and agreed to these Terms.
            </p>
            <p className="mt-3">If you do not agree with these Terms, you must not use the Platform.</p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">1. About Goa Moments</h2>
            <p>Goa Moments is a tourism membership and visitor-benefit platform that may provide:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Physical or digital membership cards.</li>
              <li>Access to offers and discounts from participating Partners.</li>
              <li>Information about hotels, resorts, villas, restaurants, cafés, tourism activities and other businesses.</li>
              <li>Partner contact details and enquiry facilities.</li>
              <li>Redirection to Partner websites, booking pages, phone numbers or messaging services.</li>
              <li>Membership-ID and QR-code verification.</li>
              <li>Location-based verification within Goa or another eligible area.</li>
              <li>Tourism-related information and promotional content.</li>
              <li>Customer support relating to Goa Moments services.</li>
            </ul>
            <p className="mt-3">
              The exact features and benefits available may depend on the membership plan, location,
              Partner participation and Platform availability.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">2. Nature of the Platform</h2>
            <p>
              Goa Moments primarily operates as a membership, promotion, discovery and facilitation
              platform. Unless expressly confirmed otherwise in writing:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Goa Moments does not own or operate the independent businesses listed on the Platform.</li>
              <li>Goa Moments does not itself provide hotel accommodation, restaurant services, transport or tourism activities offered by Partners.</li>
              <li>A Partner remains responsible for its own products, services, employees, licences, prices, safety standards and operations.</li>
              <li>An enquiry submitted through Goa Moments is not a confirmed reservation.</li>
              <li>Redirection to a Partner does not make Goa Moments the seller of the Partner&rsquo;s service.</li>
              <li>A payment made directly to a Partner is a transaction between the User and that Partner.</li>
            </ul>
            <p className="mt-3">
              Where Goa Moments directly sells a particular service or collects payment for a specific
              booking, the applicable terms will be displayed before payment or included in the
              confirmation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">3. Eligibility</h2>
            <p>
              A User must be at least 18 years old and legally capable of entering into a binding
              agreement to independently purchase a membership.
            </p>
            <p className="mt-3">
              A person below 18 years old may use the Platform only with the permission and supervision
              of a parent or legal guardian.
            </p>
            <p className="mt-3">
              The parent or guardian will be responsible for the minor&rsquo;s use of the Platform, where
              permitted.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">4. Account Registration</h2>
            <p>Certain features may require Users to create an account.</p>
            <p className="mt-3">Users must:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide accurate, complete and current information.</li>
              <li>Maintain the confidentiality of their account credentials.</li>
              <li>Protect OTPs, passwords, membership IDs and QR codes.</li>
              <li>Immediately inform Goa Moments about suspected unauthorised access.</li>
              <li>Update contact or account information when it changes.</li>
            </ul>
            <p className="mt-3">Users must not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Create an account using a false identity.</li>
              <li>Impersonate another person.</li>
              <li>Create multiple accounts for fraudulent purposes.</li>
              <li>Access another User&rsquo;s account without permission.</li>
              <li>Submit false or altered verification documents.</li>
            </ul>
            <p className="mt-3">
              Goa Moments may require email, mobile, identity or membership verification before allowing
              access to certain features.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">5. Membership Purchase</h2>
            <p>Users may purchase a Goa Moments membership through:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The Goa Moments website.</li>
              <li>The Goa Moments mobile application.</li>
              <li>An authorised sales representative.</li>
              <li>An authorised event or promotional campaign.</li>
              <li>Another officially approved sales channel.</li>
            </ul>
            <p className="mt-3">Before payment, the User should review:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Membership price.</li>
              <li>Applicable taxes.</li>
              <li>Validity period.</li>
              <li>Included benefits.</li>
              <li>Delivery method.</li>
              <li>Activation conditions.</li>
              <li>Cancellation and refund conditions.</li>
              <li>Any special promotional restrictions.</li>
            </ul>
            <p className="mt-3">
              A membership purchase is confirmed only after the payment has been successfully received
              and the membership has been activated by Goa Moments.
            </p>
            <p className="mt-3">
              A payment-success message from a bank or payment application alone does not necessarily
              confirm that Goa Moments received the payment.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">6. Membership Activation</h2>
            <p>A membership may be activated after:</p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>Successful payment confirmation.</li>
              <li>Verification of the information submitted by the User.</li>
              <li>Completion of any required identity or account verification.</li>
              <li>Issuance of a membership ID, digital card or QR code.</li>
            </ol>
            <p className="mt-3">Goa Moments may delay activation where:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Payment is pending or cannot be verified.</li>
              <li>Required information is incomplete.</li>
              <li>Fraud or unauthorised use is suspected.</li>
              <li>Additional verification is reasonably required.</li>
              <li>A technical issue affects activation.</li>
            </ul>
            <p className="mt-3">
              Where payment has been received but activation cannot be completed, Goa Moments may
              correct the account, issue a replacement membership or process an eligible refund.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">7. Membership Validity</h2>
            <p>The validity period will be displayed on:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The membership card.</li>
              <li>The User&rsquo;s account.</li>
              <li>The payment or purchase page.</li>
              <li>The order confirmation.</li>
              <li>Another official Goa Moments communication.</li>
            </ul>
            <p className="mt-3">Unless otherwise stated, validity begins on the membership activation date.</p>
            <p className="mt-3">The membership validity will not ordinarily be paused or extended because:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The User did not travel to Goa.</li>
              <li>The User did not use available offers.</li>
              <li>The User&rsquo;s personal plans changed.</li>
              <li>A specific Partner offer was not used.</li>
              <li>The User temporarily uninstalled the application.</li>
            </ul>
            <p className="mt-3">
              Any extension offered by Goa Moments will be discretionary unless required by applicable
              law or the purchased plan.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">8. Personal Use of Membership</h2>
            <p>
              A Goa Moments membership is intended for use by the registered Member unless the plan
              expressly allows additional Users.
            </p>
            <p className="mt-3">Members must not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Sell, rent or commercially resupply a membership.</li>
              <li>Share the membership with an unauthorised person.</li>
              <li>Copy or duplicate a physical or digital card.</li>
              <li>Publicly share a membership QR code.</li>
              <li>Use screenshots to bypass live verification.</li>
              <li>Modify or create a fake membership ID.</li>
              <li>Allow another person to impersonate the Member.</li>
              <li>Use benefits for unauthorised resale.</li>
              <li>Manipulate location or identity verification.</li>
              <li>Attempt repeated redemptions against offer conditions.</li>
            </ul>
            <p className="mt-3">
              A Partner may request reasonable proof of identity before providing a membership benefit.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">9. Partner Offers and Discounts</h2>
            <p>
              Offers and discounts displayed through Goa Moments are provided by independent
              participating Partners.
            </p>
            <p className="mt-3">An offer may be subject to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Availability.</li>
              <li>Prior reservation.</li>
              <li>Minimum spending.</li>
              <li>Maximum discount limits.</li>
              <li>Eligible items or services.</li>
              <li>Operating days and hours.</li>
              <li>Blackout dates.</li>
              <li>Seasonal restrictions.</li>
              <li>Number of permitted redemptions.</li>
              <li>Taxes and service charges.</li>
              <li>Partner-specific conditions.</li>
              <li>Exclusion from other promotions.</li>
            </ul>
            <p className="mt-3">
              Users must inform the Partner that they intend to use a Goa Moments benefit before
              ordering, booking, consuming or paying for a service.
            </p>
            <p className="mt-3">Unless expressly stated, an offer cannot be combined with:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Another coupon.</li>
              <li>A Partner promotion.</li>
              <li>A negotiated price.</li>
              <li>A package discount.</li>
              <li>Another membership programme.</li>
            </ul>
            <p className="mt-3">
              Users should confirm the current offer conditions and final payable amount directly with
              the Partner before completing the transaction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">10. Changes to Partner Offers</h2>
            <p>A Partner may modify, suspend or discontinue an offer because of:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Operational requirements.</li>
              <li>Capacity restrictions.</li>
              <li>Seasonal changes.</li>
              <li>Business closure.</li>
              <li>Emergency circumstances.</li>
              <li>Changes in the partnership.</li>
              <li>Events outside reasonable control.</li>
            </ul>
            <p className="mt-3">
              Goa Moments will make reasonable efforts to update the Platform after receiving confirmed
              information from the Partner.
            </p>
            <p className="mt-3">
              A change involving one Partner or offer does not automatically make the entire membership
              eligible for cancellation or refund where other membership services remain available.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              11. Hotel, Restaurant and Activity Enquiries
            </h2>
            <p>The Platform may allow Users to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Submit an enquiry.</li>
              <li>Call or message a Partner.</li>
              <li>Visit a Partner website.</li>
              <li>Access an external booking page.</li>
              <li>Request information about availability.</li>
            </ul>
            <p className="mt-3">Unless Goa Moments expressly issues a booking confirmation:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>An enquiry does not guarantee availability.</li>
              <li>The Partner is responsible for confirming the booking.</li>
              <li>Prices are determined by the Partner.</li>
              <li>The Partner&rsquo;s cancellation and refund rules apply.</li>
              <li>The User must review the Partner&rsquo;s terms before making payment.</li>
              <li>Goa Moments is not a party to the direct booking agreement.</li>
            </ul>
            <p className="mt-3">
              Disputes relating to a direct Partner booking should normally be raised with the relevant
              Partner. Goa Moments may provide reasonable assistance but cannot guarantee the Partner&rsquo;s
              resolution.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">12. Prices and Taxes</h2>
            <p>Membership prices will be displayed before payment.</p>
            <p className="mt-3">
              Prices may include or exclude applicable taxes depending on the information shown during
              checkout.
            </p>
            <p className="mt-3">Users are responsible for reviewing:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Membership price.</li>
              <li>Applicable GST or other taxes.</li>
              <li>Delivery charges.</li>
              <li>Card-personalisation charges.</li>
              <li>Payment-related charges.</li>
              <li>Promotional deductions.</li>
            </ul>
            <p className="mt-3">Goa Moments may change future membership prices at any time.</p>
            <p className="mt-3">
              A price change will not ordinarily affect a membership already purchased and confirmed.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">13. Payments</h2>
            <p>Payments may be processed through authorised:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Banks.</li>
              <li>Payment gateways.</li>
              <li>UPI providers.</li>
              <li>Card networks.</li>
              <li>Net-banking services.</li>
              <li>Other approved payment methods.</li>
            </ul>
            <p className="mt-3">Users are responsible for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Using an authorised payment method.</li>
              <li>Providing accurate payment information.</li>
              <li>Reviewing the payable amount.</li>
              <li>Maintaining sufficient account balance.</li>
              <li>Completing OTP or payment authentication.</li>
              <li>Verifying the order before confirming payment.</li>
            </ul>
            <p className="mt-3">
              Goa Moments does not ordinarily store complete debit-card numbers, credit-card numbers,
              CVV numbers, UPI PINs, passwords or OTPs.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">14. Failed or Pending Payments</h2>
            <p>Where money appears to have been debited but the order is failed or pending, the User should provide:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Registered name.</li>
              <li>Registered mobile number or email address.</li>
              <li>Order number.</li>
              <li>Payment date.</li>
              <li>Amount.</li>
              <li>Transaction or UTR reference.</li>
              <li>Payment screenshot, where requested.</li>
            </ul>
            <p className="mt-3">Goa Moments will check whether the payment was received.</p>
            <p className="mt-3">
              Where Goa Moments did not receive the amount, the reversal will generally be handled by the
              relevant bank, payment gateway or payment provider.
            </p>
            <p className="mt-3">
              Where Goa Moments received the payment but the order failed, Goa Moments may activate the
              membership or process an eligible refund after verification.
            </p>
            <p className="mt-3">
              Users should not repeatedly make the same payment while the original transaction remains
              pending unless instructed by support.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">15. Duplicate Payments</h2>
            <p>
              Where Goa Moments successfully receives more than one payment for the same order, the
              verified additional payment will be eligible for refund.
            </p>
            <p className="mt-3">
              The refund will ordinarily be issued to the original payment method after verification.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">16. Cancellation and Refunds</h2>
            <p>
              Membership cancellation and refund eligibility are governed by the Goa Moments
              Cancellation and Refund Policy.
            </p>
            <p className="mt-3">A refund may generally be considered where:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>A duplicate payment was received.</li>
              <li>The membership could not be activated because of a verified Goa Moments error.</li>
              <li>An incorrect amount was charged due to a Goa Moments error.</li>
              <li>A valid cancellation request was approved before activation and card processing.</li>
              <li>Goa Moments permanently cancelled the purchased service before providing access.</li>
              <li>A refund is required under applicable law.</li>
            </ul>
            <p className="mt-3">A refund will generally not be available where:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The digital membership has been activated.</li>
              <li>The membership ID or QR code has been issued and made usable.</li>
              <li>A benefit has been redeemed.</li>
              <li>A personalised card has been printed or dispatched.</li>
              <li>The User changed their mind after activation.</li>
              <li>The User did not travel to Goa.</li>
              <li>The membership expired without being used.</li>
              <li>The membership was cancelled because of proven fraud or misuse.</li>
              <li>The complaint concerns a service purchased directly from a Partner.</li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms removes any mandatory consumer right available under applicable
              law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">17. Physical Membership Cards</h2>
            <p>
              Where a physical card is included, the User must provide a complete and accurate delivery
              address.
            </p>
            <p className="mt-3">Estimated delivery times may be affected by:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Courier delays.</li>
              <li>Incorrect address information.</li>
              <li>Public holidays.</li>
              <li>Weather.</li>
              <li>Transport disruption.</li>
              <li>Events outside reasonable control.</li>
            </ul>
            <p className="mt-3">Additional charges may apply for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Replacement of a lost card.</li>
              <li>Replacement of a damaged card caused by the User.</li>
              <li>Re-delivery caused by incorrect information.</li>
              <li>Changes requested after printing.</li>
              <li>Special or international delivery.</li>
            </ul>
            <p className="mt-3">
              A delayed physical card does not necessarily prevent use of an already activated digital
              membership.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">18. Location Verification</h2>
            <p>The Platform may request approximate or precise location permission to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Confirm that the Member is in Goa or another eligible area.</li>
              <li>Verify membership-benefit eligibility.</li>
              <li>Display nearby Partners.</li>
              <li>Protect the Platform against misuse.</li>
              <li>Detect manipulated or fake-location activity.</li>
            </ul>
            <p className="mt-3">
              Location permission should normally be requested when the User chooses to use a
              location-based feature.
            </p>
            <p className="mt-3">
              Users must not use fake-location applications, device manipulation or other methods to
              bypass verification.
            </p>
            <p className="mt-3">
              Disabling location permission may prevent location-based features from working.
            </p>
            <p className="mt-3">
              The collection and use of location information are further explained in the Privacy Policy
              and Data Collection and Permissions Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">19. User Responsibilities</h2>
            <p>Users agree to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use the Platform lawfully.</li>
              <li>Provide accurate information.</li>
              <li>Review membership and offer conditions.</li>
              <li>Verify Partner terms before paying.</li>
              <li>Protect account and membership credentials.</li>
              <li>Follow Partner safety instructions.</li>
              <li>Treat staff and other Users respectfully.</li>
              <li>Report suspected fraud or account misuse.</li>
              <li>Use tourism activities according to their age, health and ability.</li>
              <li>Comply with local laws and safety requirements.</li>
            </ul>
            <p className="mt-3">
              Users are responsible for decisions made based on information obtained from the Platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">20. Prohibited Activities</h2>
            <p>Users must not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Commit or attempt fraud.</li>
              <li>Submit fake payment evidence.</li>
              <li>Manipulate refunds or chargebacks.</li>
              <li>Create counterfeit membership cards.</li>
              <li>Copy or alter QR codes.</li>
              <li>Scrape or extract Platform data without permission.</li>
              <li>Attempt to hack or disrupt the Platform.</li>
              <li>Upload malware or harmful files.</li>
              <li>Threaten or harass staff or Partners.</li>
              <li>Post illegal, abusive or misleading content.</li>
              <li>Collect another User&rsquo;s information without permission.</li>
              <li>Use Goa Moments branding without authorisation.</li>
              <li>Pretend to represent Goa Moments.</li>
              <li>Use automated bots to misuse the Platform.</li>
              <li>Violate intellectual-property or privacy rights.</li>
              <li>Use the Platform for unlawful commercial activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">21. User Reviews and Content</h2>
            <p>
              Where Users may submit reviews, ratings, photographs, comments or other content, the User
              confirms that:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The content is based on a genuine experience.</li>
              <li>The User owns the content or has permission to submit it.</li>
              <li>The content is accurate to the best of the User&rsquo;s knowledge.</li>
              <li>The content does not violate another person&rsquo;s rights.</li>
              <li>The content does not contain threats, harassment or private information.</li>
              <li>The content is not fake, manipulated or commercially misleading.</li>
            </ul>
            <p className="mt-3">
              Goa Moments may remove or restrict content that violates these Terms or the Community
              Guidelines.
            </p>
            <p className="mt-3">
              Goa Moments will not ordinarily remove a genuine negative review merely because it
              criticises a Partner.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">22. Intellectual Property</h2>
            <p>
              The Goa Moments name, logo, membership-card designs, software, text, graphics, videos,
              databases and original Platform content are owned by or licensed to LOTLAN EXPERT PRIVATE
              LIMITED.
            </p>
            <p className="mt-3">
              Users must not copy, reproduce, modify, sell, publish or commercially use Goa Moments
              intellectual property without written permission.
            </p>
            <p className="mt-3">
              Partner names, logos and photographs remain the property of their respective rights
              holders.
            </p>
            <p className="mt-3">
              Additional information is provided in the Goa Moments Copyright Information and
              Intellectual Property Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">23. Privacy and Personal Data</h2>
            <p>Goa Moments may collect and process information for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Account registration.</li>
              <li>Membership activation.</li>
              <li>Payment confirmation.</li>
              <li>Location verification.</li>
              <li>Customer support.</li>
              <li>Fraud prevention.</li>
              <li>Partner enquiries.</li>
              <li>Platform security.</li>
              <li>Legal and operational requirements.</li>
            </ul>
            <p className="mt-3">
              Information will be handled according to the Goa Moments Privacy Policy, Data Collection
              and Permissions Policy and Data Deletion Policy.
            </p>
            <p className="mt-3">
              By using the Platform, Users acknowledge that these policies form part of these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">24. Communications</h2>
            <p>Users may receive essential communications concerning:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Account registration.</li>
              <li>OTP verification.</li>
              <li>Membership activation.</li>
              <li>Payment status.</li>
              <li>Refund status.</li>
              <li>Membership expiry.</li>
              <li>Security alerts.</li>
              <li>Customer-support requests.</li>
              <li>Material changes to purchased services.</li>
            </ul>
            <p className="mt-3">
              Promotional communications may be sent according to the User&rsquo;s preferences and
              applicable requirements.
            </p>
            <p className="mt-3">
              Users may unsubscribe from promotional communications, but essential service and security
              messages may continue.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">25. Third-Party Services</h2>
            <p>The Platform may contain links or integrations involving:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Partner websites.</li>
              <li>Booking platforms.</li>
              <li>Map services.</li>
              <li>Payment gateways.</li>
              <li>Social-media platforms.</li>
              <li>Messaging applications.</li>
              <li>Other external services.</li>
            </ul>
            <p className="mt-3">
              Third-party services are governed by their own terms and privacy policies.
            </p>
            <p className="mt-3">
              Goa Moments is not responsible for the availability, security or practices of an
              independent third-party service merely because it is accessible through the Platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">26. Platform Availability</h2>
            <p>Goa Moments will make reasonable efforts to maintain the Platform.</p>
            <p className="mt-3">However, uninterrupted or error-free access is not guaranteed.</p>
            <p className="mt-3">The Platform may be temporarily unavailable because of:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Maintenance.</li>
              <li>Software updates.</li>
              <li>Server or network failure.</li>
              <li>Cybersecurity incidents.</li>
              <li>Third-party outages.</li>
              <li>Government restrictions.</li>
              <li>Internet disruption.</li>
              <li>Force majeure events.</li>
            </ul>
            <p className="mt-3">
              Goa Moments may modify, suspend or discontinue a feature where reasonably required.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">27. Disclaimer Regarding Partners</h2>
            <p>Goa Moments does not guarantee:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Continuous availability of every Partner.</li>
              <li>Availability of every advertised service.</li>
              <li>That every enquiry will become a booking.</li>
              <li>The quality of every Partner service.</li>
              <li>That Partner information will remain unchanged at all times.</li>
              <li>That travel or activity services will be suitable for every User.</li>
              <li>That a Partner will accept an expired or ineligible offer.</li>
            </ul>
            <p className="mt-3">
              Partners are independently responsible for their services, safety, fulfilment and legal
              compliance.
            </p>
            <p className="mt-3">
              Goa Moments may remove or suspend a Partner listing when a serious verified issue is
              identified.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">28. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Goa Moments will not be responsible for
              indirect or consequential loss arising from:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>A Partner&rsquo;s acts or omissions.</li>
              <li>A direct booking made with a Partner.</li>
              <li>Partner cancellations or delays.</li>
              <li>Injury or property damage caused by an independent provider.</li>
              <li>A User&rsquo;s failure to follow safety instructions.</li>
              <li>Incorrect information supplied by a User or Partner.</li>
              <li>External payment-provider or network failure.</li>
              <li>Unauthorised account access caused by the User sharing credentials.</li>
              <li>Events outside Goa Moments&rsquo; reasonable control.</li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms excludes liability that cannot lawfully be excluded or restricts
              mandatory consumer rights.
            </p>
            <p className="mt-3">
              Where a verified loss is directly caused by Goa Moments, liability will be assessed
              according to the facts and applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">29. Indemnity</h2>
            <p>
              To the extent permitted by law, a User may be responsible for reasonable losses, claims or
              expenses suffered by Goa Moments because of the User&rsquo;s:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Fraudulent activity.</li>
              <li>Deliberate misuse of membership.</li>
              <li>Violation of another person&rsquo;s rights.</li>
              <li>Unlawful content.</li>
              <li>False representations.</li>
              <li>Material breach of these Terms.</li>
            </ul>
            <p className="mt-3">
              This section does not apply where the loss was caused by Goa Moments or where such
              responsibility cannot legally be imposed.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">30. Suspension and Termination</h2>
            <p>Goa Moments may warn, restrict, suspend or terminate an account or membership where:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Fraud or attempted fraud is suspected.</li>
              <li>False information was submitted.</li>
              <li>Membership was copied, sold or shared without permission.</li>
              <li>Payment was unauthorised or reversed.</li>
              <li>A Partner or employee was threatened or abused.</li>
              <li>The User attempted to bypass identity or location verification.</li>
              <li>The User attempted to damage or disrupt the Platform.</li>
              <li>The User materially violated these Terms or Community Guidelines.</li>
              <li>Action is required by law or a lawful authority.</li>
            </ul>
            <p className="mt-3">
              Where reasonably appropriate, Goa Moments may allow the User to provide an explanation or
              appeal the decision.
            </p>
            <p className="mt-3">
              No refund will ordinarily be issued where termination results from proven fraud, deliberate
              misuse or a serious violation, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">
              31. Government or Third-Party Affiliation
            </h2>
            <p>Goa Moments is a privately operated platform.</p>
            <p className="mt-3">
              Unless expressly stated and supported by valid official documentation, Goa Moments does
              not claim to be:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>A government department.</li>
              <li>Operated by Goa Tourism.</li>
              <li>Operated by IRCTC.</li>
              <li>Officially endorsed by a government agency.</li>
              <li>An agent of every Partner listed on the Platform.</li>
            </ul>
            <p className="mt-3">
              References to public destinations, tourism authorities or third-party organisations do not
              automatically indicate sponsorship, approval or endorsement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">32. Force Majeure</h2>
            <p>
              Goa Moments will not be responsible for delay or failure caused by events beyond its
              reasonable control, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Natural disasters.</li>
              <li>Severe weather.</li>
              <li>Epidemics or public emergencies.</li>
              <li>Strikes.</li>
              <li>Civil disturbances.</li>
              <li>Government actions.</li>
              <li>Internet or power failure.</li>
              <li>Transport disruption.</li>
              <li>War.</li>
              <li>Widespread technical outages.</li>
            </ul>
            <p className="mt-3">
              Goa Moments will make reasonable efforts to restore affected services when possible.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">33. Grievance Redressal</h2>
            <p>
              For complaints relating to membership, payments, refunds, Platform access, Partner offers
              or these Terms, Users may contact:
            </p>
            <ul className="mt-4 space-y-2 font-medium">
              <li>Grievance Officer: [FULL NAME]</li>
              <li>Company: LOTLAN EXPERT PRIVATE LIMITED</li>
              <li>Brand: Goa Moments</li>
              <li>Email: [GRIEVANCE EMAIL ADDRESS]</li>
              <li>Support Email: [SUPPORT EMAIL ADDRESS]</li>
              <li>Phone: [CUSTOMER-SUPPORT NUMBER]</li>
              <li>Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]</li>
              <li>Support Hours: [WORKING DAYS AND HOURS]</li>
            </ul>
            <p className="mt-4">The complaint should include:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>User&rsquo;s full name.</li>
              <li>Registered email or mobile number.</li>
              <li>Membership or order number.</li>
              <li>Transaction details, where relevant.</li>
              <li>Clear description of the issue.</li>
              <li>Supporting screenshots or documents.</li>
            </ul>
            <p className="mt-3">
              Goa Moments will acknowledge and address complaints within the timelines required by
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">34. Governing Law and Disputes</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p className="mt-3">
              Users should first contact Goa Moments and provide a reasonable opportunity to resolve the
              complaint.
            </p>
            <p className="mt-3">
              Nothing in these Terms prevents a consumer from approaching a competent consumer
              commission, court, regulator or statutory grievance mechanism.
            </p>
            <p className="mt-3">
              Subject to mandatory consumer-jurisdiction rules, other disputes will be handled by the
              courts having lawful jurisdiction over the registered office of LOTLAN EXPERT PRIVATE
              LIMITED.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">35. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining
              provisions will continue to apply.
            </p>
            <p className="mt-3">
              The affected provision will be interpreted or modified only to the minimum extent necessary
              to make it lawful and enforceable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">36. No Waiver</h2>
            <p>
              Failure by Goa Moments to immediately enforce a provision does not mean that the Company
              has permanently waived its right to enforce it later.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">37. Changes to These Terms</h2>
            <p>Goa Moments may update these Terms to reflect changes in:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Platform features.</li>
              <li>Membership plans.</li>
              <li>Partner operations.</li>
              <li>Payment systems.</li>
              <li>Business practices.</li>
              <li>Security requirements.</li>
              <li>Applicable laws.</li>
            </ul>
            <p className="mt-3">The updated version will be published with a revised &ldquo;Last Updated&rdquo; date.</p>
            <p className="mt-3">
              Material changes may also be communicated through the website, application, email, SMS or
              another appropriate method.
            </p>
            <p className="mt-3">
              Changes will not be applied unfairly to transactions completed under an earlier version.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">38. Contact Information</h2>
            <p>For questions relating to these Terms:</p>
            <ul className="mt-4 space-y-2 font-medium">
              <li>Company: LOTLAN EXPERT PRIVATE LIMITED</li>
              <li>Brand: Goa Moments</li>
              <li>Website: www.goamoments.com</li>
              <li>Support Email: [SUPPORT EMAIL ADDRESS]</li>
              <li>Grievance Email: [GRIEVANCE EMAIL ADDRESS]</li>
              <li>Customer Support: [CUSTOMER-SUPPORT NUMBER]</li>
              <li>Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-foreground">39. User Acceptance</h2>
            <p>
              By accessing the Platform, creating an account, purchasing a membership or using a Goa
              Moments benefit, the User confirms that they have read, understood and accepted:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>These Terms and Conditions.</li>
              <li>The Privacy Policy.</li>
              <li>The Cancellation and Refund Policy.</li>
              <li>The Data Deletion Policy.</li>
              <li>The Data Collection and Permissions Policy.</li>
              <li>The Community Guidelines.</li>
              <li>The Copyright Information and Intellectual Property Policy.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}