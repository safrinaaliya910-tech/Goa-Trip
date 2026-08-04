import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PolicySectionProps = {
  number: string;
  title: string;
  children: ReactNode;
};

function PolicySection({
  number,
  title,
  children,
}: PolicySectionProps) {
  return (
    <section className="scroll-mt-24">
      <h2 className="mb-4 font-serif text-xl font-medium uppercase tracking-wide text-foreground sm:text-2xl">
        {number}. {title}
      </h2>

      <div className="space-y-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-[#C5A059]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ContactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5">
      {items.map((item) => (
        <li key={item} className="font-medium text-foreground">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 md:py-24">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#C5A059]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <header className="mb-12 border-b border-[#C5A059]/20 pb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C5A059]">
            Goa Moments
          </p>

          <h1 className="mb-3 font-serif text-3xl font-medium uppercase tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Cancellation and Refund Policy
          </h1>

          <p className="text-sm font-medium text-[#C5A059]">
            Last Updated: 2 August 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <section className="space-y-4 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5 sm:p-7">
            <p>
              This Cancellation and Refund Policy explains the conditions
              under which a purchase made through the Goa Moments website,
              mobile application or other authorised sales channel may be
              cancelled or refunded.
            </p>

            <p>
              Goa Moments is operated by LOTLAN EXPERT PRIVATE LIMITED,
              referred to in this Policy as “Goa Moments”, “Company”, “we”,
              “us” or “our”.
            </p>

            <p>
              This Policy must be read together with the Goa Moments Terms
              and Conditions, Privacy Policy, Data Deletion Policy and other
              applicable policies.
            </p>
          </section>

          <PolicySection number="1" title="Scope of This Policy">
            <p>This Policy applies to:</p>

            <BulletList
              items={[
                "Goa Moments membership purchases.",
                "Digital membership cards.",
                "Physical membership cards.",
                "Membership activation payments.",
                "Duplicate or incorrect payments.",
                "Failed or pending transactions.",
                "Purchases made through authorised Goa Moments sales representatives.",
                "Other products or services expressly sold by Goa Moments.",
              ]}
            />

            <p>
              This Policy does not automatically apply to hotel stays,
              restaurant bills, activities, transport, tourism services or
              other purchases made directly from an independent partner
              business.
            </p>
          </PolicySection>

          <PolicySection
            number="2"
            title="Nature of Goa Moments Membership"
          >
            <p>A Goa Moments membership may provide access to:</p>

            <BulletList
              items={[
                "Partner offers and discounts.",
                "Digital or physical membership cards.",
                "Membership-ID or QR-code verification.",
                "Location-based verification in Goa.",
                "Partner-business discovery.",
                "Hotel, restaurant or activity enquiry redirection.",
                "Other benefits displayed for the selected membership plan.",
              ]}
            />

            <p>
              Purchasing a Goa Moments membership does not itself create a
              confirmed hotel, restaurant, activity or transport booking
              unless Goa Moments expressly issues a separate booking
              confirmation.
            </p>
          </PolicySection>

          <PolicySection
            number="3"
            title="Membership Cancellation Before Activation"
          >
            <p>
              A user may request cancellation of a membership purchase
              before:
            </p>

            <BulletList
              items={[
                "The digital membership has been activated.",
                "The membership ID or QR code has been issued.",
                "Any membership benefit has been accessed or redeemed.",
                "A personalised physical card has been printed.",
                "A physical card has been dispatched.",
              ]}
            />

            <p>
              A cancellation request must be submitted as early as possible
              after purchase.
            </p>

            <p>
              Cancellation is not confirmed merely because a request has
              been submitted. Goa Moments will first verify the activation,
              card-printing and usage status.
            </p>
          </PolicySection>

          <PolicySection
            number="4"
            title="Cancellation After Activation"
          >
            <p>
              Once a digital membership has been activated, the membership
              ID or QR code has been issued, or the user has gained access
              to membership benefits, the purchase will generally not be
              eligible for cancellation due to a change of mind.
            </p>

            <p>
              This is because the membership service becomes available
              immediately after activation.
            </p>

            <p>
              Any mandatory rights available to the user under applicable
              law will continue to apply.
            </p>
          </PolicySection>

          <PolicySection
            number="5"
            title="Physical Membership-Card Cancellation"
          >
            <p>
              A physical membership-card order may be cancelled before the
              card enters printing or personalisation.
            </p>

            <p>
              Once a personalised physical card has been printed or
              dispatched, cancellation may not be available.
            </p>

            <p>
              Where the membership includes both digital access and a
              physical card, cancellation of physical-card delivery does
              not automatically cancel an already activated digital
              membership.
            </p>
          </PolicySection>

          <PolicySection number="6" title="Refund Eligibility">
            <p>
              A full or partial refund may be approved in the following
              situations:
            </p>

            <BulletList
              items={[
                "A duplicate payment was successfully received for the same order.",
                "Payment was received, but the membership could not be created or activated because of a verified Goa Moments technical error.",
                "The user was charged an incorrect amount due to an error attributable to Goa Moments.",
                "A cancellation request was approved before membership activation and before physical-card printing or dispatch.",
                "Goa Moments cancelled the membership purchase before providing access to the service.",
                "The purchased plan was unavailable and no acceptable alternative was provided.",
                "A refund is required under applicable law.",
              ]}
            />

            <p>All refund requests are subject to verification.</p>
          </PolicySection>

          <PolicySection number="7" title="Non-Refundable Situations">
            <p>A refund will generally not be available where:</p>

            <BulletList
              items={[
                "The digital membership has already been activated.",
                "The membership ID or QR code has already been issued and made usable.",
                "A membership offer or discount has been accessed or redeemed.",
                "The physical membership card has already been personalised, printed or dispatched.",
                "The user changes their mind after activation.",
                "The user does not travel to Goa.",
                "The user fails to use the membership during its validity period.",
                "The user purchased the wrong membership plan after the plan information was clearly displayed.",
                "Incorrect registration, delivery or contact information was provided by the user.",
                "The membership was suspended or cancelled because of fraud, duplication, resale, unauthorised sharing or misuse.",
                "The user used fake identity information, edited payment evidence or a manipulated location.",
                "A particular partner offer changes, expires or becomes temporarily unavailable.",
                "A partner business closes or withdraws from the platform after other membership benefits have already become available.",
                "The user is dissatisfied with a service purchased directly from an independent partner.",
                "The request is submitted after the relevant membership has expired.",
              ]}
            />

            <p>
              This section does not restrict any refund or remedy that must
              be provided under applicable law.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Partner Offers and Discounts">
            <p>
              Offers and discounts displayed through Goa Moments are
              provided by independent partner businesses.
            </p>

            <p>Partner offers may be subject to:</p>

            <BulletList
              items={[
                "Availability.",
                "Blackout dates.",
                "Advance-booking requirements.",
                "Minimum purchase amounts.",
                "Maximum discount limits.",
                "Eligible products or services.",
                "Operating hours.",
                "Seasonal restrictions.",
                "Partner-specific cancellation conditions.",
                "Other conditions displayed with the offer.",
              ]}
            />

            <p>
              A change to one partner offer does not automatically entitle a
              user to a complete Goa Moments membership refund where other
              membership services and benefits remain available.
            </p>

            <p>
              Goa Moments may, where appropriate, assist the user by
              verifying whether the offer displayed on the platform was
              valid at the relevant time.
            </p>
          </PolicySection>

          <PolicySection
            number="9"
            title="Hotel, Restaurant and Activity Bookings"
          >
            <p>
              Goa Moments may provide contact details, enquiry facilities or
              redirection to hotels, resorts, restaurants, activity
              providers, transport providers and other businesses.
            </p>

            <p>Where the user books or pays the partner directly:</p>

            <BulletList
              items={[
                "The booking contract is between the user and the partner.",
                "The partner’s cancellation and refund policy applies.",
                "The partner is responsible for confirming availability.",
                "The partner is responsible for processing eligible booking refunds.",
                "Goa Moments does not control the partner’s refund timeline.",
                "Deleting a Goa Moments account does not cancel the partner booking.",
              ]}
            />

            <p>
              The user must review the partner’s cancellation terms before
              confirming a booking or making payment.
            </p>
          </PolicySection>

          <PolicySection
            number="10"
            title="Payments Collected by Goa Moments for a Partner Service"
          >
            <p>
              Where Goa Moments expressly collects payment for a specific
              partner service, the applicable cancellation and refund terms
              will be displayed before payment or included in the booking
              confirmation.
            </p>

            <p>Such refunds may depend on:</p>

            <BulletList
              items={[
                "The partner’s cancellation deadline.",
                "Non-refundable deposits.",
                "Services already provided.",
                "No-show conditions.",
                "Third-party processing costs.",
                "Taxes and statutory deductions.",
                "The reason for cancellation.",
                "Applicable law.",
              ]}
            />

            <p>
              No amount will be deducted without an applicable contractual
              or lawful basis.
            </p>
          </PolicySection>

          <PolicySection number="11" title="Failed Payment Transactions">
            <p>
              A failed transaction occurs when money appears to have been
              debited from the user’s account, but the Goa Moments order was
              not successfully completed or confirmed.
            </p>

            <p>In such cases:</p>

            <BulletList
              items={[
                "The user should not repeatedly make the same payment while the earlier transaction remains pending.",
                "The user should check the order and payment status.",
                "The user may contact Goa Moments support with the transaction details.",
                "Goa Moments will verify whether the amount was actually received.",
                "Where Goa Moments did not receive the payment, reversal will normally be handled by the user’s bank, UPI provider, card network or payment gateway.",
                "Where Goa Moments received the payment but the order failed, Goa Moments may activate the membership or process an eligible refund after verification.",
              ]}
            />

            <p>
              A bank debit message alone does not confirm that Goa Moments
              successfully received the payment.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Pending Transactions">
            <p>
              A transaction may remain pending while confirmation is awaited
              from the bank or payment gateway.
            </p>

            <p>
              Users should allow the payment provider a reasonable period to
              update the final status.
            </p>

            <p>
              If the transaction remains pending, the user should submit:
            </p>

            <BulletList
              items={[
                "Registered name.",
                "Registered mobile number.",
                "Registered email address.",
                "Order number.",
                "Transaction date.",
                "Amount paid.",
                "UTR or payment reference number.",
                "Payment screenshot, where available.",
              ]}
            />

            <p>
              Goa Moments will check the transaction against its payment
              records.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Duplicate Payments">
            <p>
              Where Goa Moments successfully receives more than one payment
              for the same membership order, the verified additional
              payment will be eligible for refund.
            </p>

            <p>
              A duplicate-payment refund will normally be processed to the
              original payment method.
            </p>

            <p>
              The user may be asked to provide payment references for each
              transaction.
            </p>
          </PolicySection>

          <PolicySection
            number="14"
            title="Payment Successful but Membership Not Activated"
          >
            <p>
              Where payment is successfully received but membership
              activation does not occur, the user should contact Goa Moments
              support.
            </p>

            <p>After verification, Goa Moments may:</p>

            <BulletList
              items={[
                "Activate the purchased membership.",
                "Correct the membership account.",
                "Issue a new membership ID.",
                "Process an eligible refund where activation cannot be completed.",
              ]}
            />

            <p>
              The user should not create multiple accounts or make repeated
              payments unless instructed by support.
            </p>
          </PolicySection>

          <PolicySection number="15" title="Refund Request Procedure">
            <p>A refund request must be submitted to:</p>

            <ContactList
              items={[
                "Refund Email: [REFUND SUPPORT EMAIL]",
                "Suggested subject: Goa Moments Refund Request – [Order Number]",
              ]}
            />

            <p>The request should include:</p>

            <BulletList
              items={[
                "Full name.",
                "Registered email address.",
                "Registered mobile number.",
                "Membership ID, where available.",
                "Order number.",
                "Transaction or UTR number.",
                "Payment amount.",
                "Payment date.",
                "Reason for the refund request.",
                "Supporting screenshots or documents.",
              ]}
            />

            <p>
              Users must not provide passwords, OTPs, UPI PINs, CVV numbers
              or complete card details.
            </p>
          </PolicySection>

          <PolicySection
            number="16"
            title="Verification of Refund Requests"
          >
            <p>Before approving a refund, Goa Moments may verify:</p>

            <BulletList
              items={[
                "The identity of the requester.",
                "Order and payment records.",
                "Membership-activation status.",
                "Membership usage and redemption records.",
                "Physical-card printing or dispatch status.",
                "Information received from the payment gateway.",
                "Evidence submitted by the user.",
                "Whether the request involves suspected fraud or misuse.",
              ]}
            />

            <p>
              Providing false, altered or misleading documents may result in
              rejection of the request and suspension of the relevant
              account.
            </p>
          </PolicySection>

          <PolicySection number="17" title="Refund Decision Timeline">
            <p>
              Goa Moments aims to acknowledge a complete refund request
              within 48 hours.
            </p>

            <p>
              After receiving all required information, Goa Moments aims to
              approve or reject an eligible request within 7 business days.
            </p>

            <p>More time may be required where:</p>

            <BulletList
              items={[
                "Payment confirmation is awaited from a bank or gateway.",
                "The user has not provided complete information.",
                "A chargeback or payment dispute is pending.",
                "Fraud or account misuse is suspected.",
                "A third-party partner must provide transaction information.",
                "A legal or regulatory review is required.",
              ]}
            />

            <p>
              The user will be informed where additional information is
              needed.
            </p>
          </PolicySection>

          <PolicySection number="18" title="Refund Credit Timeline">
            <p>
              Once approved and initiated by Goa Moments, a refund may
              ordinarily take approximately 7–10 business days to appear in
              the user’s account.
            </p>

            <p>The actual credit time depends on:</p>

            <BulletList
              items={[
                "The original payment method.",
                "The user’s bank.",
                "The payment gateway.",
                "The card network or UPI provider.",
                "Banking holidays.",
                "Internal processing timelines of the payment provider.",
              ]}
            />

            <p>
              Goa Moments cannot guarantee the exact date on which a bank or
              payment provider will credit an already initiated refund.
            </p>
          </PolicySection>

          <PolicySection number="19" title="Refund Method">
            <p>
              Refunds will ordinarily be issued to the original payment
              method used for the purchase.
            </p>

            <p>Goa Moments will not normally process a refund to:</p>

            <BulletList
              items={[
                "A different bank account.",
                "A third person’s account.",
                "An unrelated UPI ID.",
                "Cash, where the original payment was digital.",
                "An account that cannot be reasonably verified.",
              ]}
            />

            <p>
              Where refunding to the original method is technically
              impossible, Goa Moments may request verified alternative
              banking details through an authorised and secure process.
            </p>
          </PolicySection>

          <PolicySection
            number="20"
            title="Taxes, Delivery and Processing Costs"
          >
            <p>
              Where a full refund is approved because of an error
              attributable to Goa Moments, the amount actually collected for
              the affected order may be refunded, subject to applicable law.
            </p>

            <p>
              Delivery, printing, personalisation or processing amounts may
              not be refundable where the related work has already been
              completed.
            </p>

            <p>
              Any deduction from an approved refund will be clearly
              explained and will only be made where contractually and
              legally permitted.
            </p>
          </PolicySection>

          <PolicySection
            number="21"
            title="Promotional and Discounted Memberships"
          >
            <p>
              Memberships purchased through a campaign, coupon, influencer
              code, event offer or limited-time promotion may have separate
              cancellation conditions.
            </p>

            <p>Unless otherwise stated:</p>

            <BulletList
              items={[
                "The refund will not exceed the amount actually paid.",
                "Free gifts do not have a separate cash-refund value.",
                "Used promotional benefits may affect refund eligibility.",
                "Refunds will not be calculated using the regular non-promotional price.",
                "A promotional code cannot ordinarily be reissued after cancellation.",
                "Any special non-refundable condition must be clearly disclosed before purchase.",
              ]}
            />
          </PolicySection>

          <PolicySection
            number="22"
            title="Membership Cancellation by Goa Moments"
          >
            <p>Goa Moments may cancel or suspend a membership where:</p>

            <BulletList
              items={[
                "Payment is reversed, disputed or unauthorised.",
                "False information was submitted.",
                "The membership was duplicated or transferred without permission.",
                "The user misused partner offers.",
                "The user attempted to bypass identity or location verification.",
                "Fraudulent activity is suspected.",
                "The user seriously violates the Terms and Conditions or Community Guidelines.",
                "Cancellation is required by law or a lawful authority.",
              ]}
            />

            <p>
              No refund will ordinarily be provided where cancellation
              results from proven fraud, deliberate misuse or a serious
              policy violation, subject to applicable law.
            </p>
          </PolicySection>

          <PolicySection
            number="23"
            title="Service Cancellation by Goa Moments"
          >
            <p>
              Where Goa Moments permanently cancels a paid membership
              service before activation and cannot provide a reasonable
              replacement, the user may be eligible for a full refund.
            </p>

            <p>
              Where a service is partially completed, Goa Moments may offer:
            </p>

            <BulletList
              items={[
                "A proportionate refund.",
                "An extension of membership validity.",
                "A replacement membership.",
                "An alternative benefit.",
                "Another reasonable resolution accepted by the user.",
              ]}
            />
          </PolicySection>

          <PolicySection
            number="24"
            title="Force Majeure and Unavoidable Events"
          >
            <p>
              Partner services, card delivery or platform functions may be
              affected by events outside reasonable control, including:
            </p>

            <BulletList
              items={[
                "Severe weather.",
                "Natural disasters.",
                "Government restrictions.",
                "Strikes.",
                "Transport disruption.",
                "Public emergencies.",
                "Internet or payment-network outages.",
                "Closure of a partner business.",
                "Other unavoidable events.",
              ]}
            />

            <p>
              Refund eligibility in such cases will depend on the affected
              service, whether membership access was already provided,
              partner terms and applicable law.
            </p>
          </PolicySection>

          <PolicySection
            number="25"
            title="Chargebacks and Payment Disputes"
          >
            <p>
              Users should first contact Goa Moments support before raising
              a chargeback with their bank, where reasonably possible.
            </p>

            <p>
              A user must not submit both a direct refund request and a bank
              chargeback for the same amount without informing Goa Moments.
            </p>

            <p>
              Fraudulent or duplicate refund claims may result in:
            </p>

            <BulletList
              items={[
                "Rejection of the refund request.",
                "Suspension of the membership.",
                "Submission of transaction evidence to the payment provider.",
                "Further action where legally permitted.",
              ]}
            />

            <p>
              A genuine right to dispute an unauthorised or incorrect
              transaction is not restricted by this section.
            </p>
          </PolicySection>

          <PolicySection number="26" title="Account Deletion">
            <p>
              Deleting a Goa Moments account does not automatically:
            </p>

            <BulletList
              items={[
                "Cancel an active membership.",
                "Create refund eligibility.",
                "Reverse a completed payment.",
                "Cancel a direct partner booking.",
                "Stop an already dispatched physical card.",
                "Remove legally required payment records.",
              ]}
            />

            <p>
              Users seeking both account deletion and purchase cancellation
              must submit the relevant requests separately.
            </p>
          </PolicySection>

          <PolicySection number="27" title="Complaints and Escalation">
            <p>
              Where a user is dissatisfied with a refund decision, they may
              request a review by contacting:
            </p>

            <ContactList
              items={[
                "Grievance Officer: [FULL NAME]",
                "Grievance Email: [GRIEVANCE EMAIL ADDRESS]",
                "Customer Support: [CUSTOMER-SUPPORT NUMBER]",
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
                "Support Hours: [WORKING DAYS AND HOURS]",
              ]}
            />

            <p>
              The escalation request should include the original
              refund-request reference, order number and reason for
              requesting reconsideration.
            </p>
          </PolicySection>

          <PolicySection number="28" title="Consumer Rights">
            <p>
              Nothing in this Policy removes or limits any mandatory right,
              remedy or protection available to a consumer under applicable
              Indian law.
            </p>

            <p>
              Users may approach the appropriate consumer grievance or
              dispute-resolution authority where a complaint is not resolved
              through Goa Moments’ internal process.
            </p>
          </PolicySection>

          <PolicySection number="29" title="Changes to This Policy">
            <p>
              Goa Moments may update this Cancellation and Refund Policy to
              reflect changes in:
            </p>

            <BulletList
              items={[
                "Membership plans.",
                "Payment methods.",
                "Card-delivery processes.",
                "Partner services.",
                "Applicable laws and regulations.",
                "Business and operational requirements.",
              ]}
            />

            <p>
              The updated Policy will be published on the website with a
              revised “Last Updated” date.
            </p>

            <p>
              Changes will not be applied unfairly to a transaction that was
              completed under an earlier version of the Policy.
            </p>
          </PolicySection>

          <PolicySection number="30" title="Contact Information">
            <p>For cancellation, payment and refund assistance:</p>

            <ContactList
              items={[
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Website: www.goamoments.com",
                "Refund Email: [REFUND SUPPORT EMAIL]",
                "Grievance Email: [GRIEVANCE EMAIL ADDRESS]",
                "Customer Support: [CUSTOMER-SUPPORT NUMBER]",
                "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
              ]}
            />
          </PolicySection>
        </div>
      </article>
    </main>
  );
}