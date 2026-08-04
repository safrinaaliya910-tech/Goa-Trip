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

export default function DataDeletionPolicy() {
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
            Data Deletion Policy
          </h1>

          <p className="text-sm font-medium text-[#C5A059]">
            Last Updated: 2 August 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <section className="space-y-4 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5 sm:p-7">
            <p>
              This Data Deletion Policy explains how users may request the
              deletion of their account and personal data collected through
              the Goa Moments website, mobile application, membership system
              and related services.
            </p>

            <p>
              Goa Moments is operated by LOTLAN EXPERT PRIVATE LIMITED,
              referred to in this Policy as “Goa Moments”, “Company”, “we”,
              “us” or “our”.
            </p>

            <p>
              This Policy should be read together with our Privacy Policy and
              Terms and Conditions.
            </p>
          </section>

          <PolicySection number="1" title="Scope of This Policy">
            <p>This Policy applies to personal data collected when a user:</p>

            <BulletList
              items={[
                "Visits the Goa Moments website.",
                "Creates or uses a Goa Moments account.",
                "Purchases or activates a membership.",
                "Uses a physical or digital membership card.",
                "Uses a membership ID or QR-code verification system.",
                "Submits a hotel, restaurant, activity or partner enquiry.",
                "Contacts customer support.",
                "Allows location access for membership verification.",
                "Receives promotional or service communications.",
                "Uses any Goa Moments website, application or related digital service.",
              ]}
            />
          </PolicySection>

          <PolicySection
            number="2"
            title="User’s Right to Request Deletion"
          >
            <p>Users may request:</p>

            <BulletList
              items={[
                "Deletion of their Goa Moments account.",
                "Deletion of personal data connected to their account.",
                "Withdrawal of consent for optional data processing.",
                "Deletion of location information where it is no longer required.",
                "Removal from marketing and promotional communications.",
                "Deletion of uploaded documents, photographs or profile information, where applicable.",
              ]}
            />

            <p>
              A deletion request does not affect the legality of any
              processing carried out before the request was received.
            </p>
          </PolicySection>

          <PolicySection
            number="3"
            title="How to Submit a Data Deletion Request"
          >
            <p>
              Users may submit a deletion request through any
              account-deletion option made available within the Goa Moments
              website or mobile application.
            </p>

            <p>
              Where an in-app deletion option is not available, the user may
              send an email to:
            </p>

            <ContactList
              items={[
                "Data Deletion Email: [DATA DELETION EMAIL ADDRESS]",
                "Email Subject: Goa Moments Data Deletion Request",
              ]}
            />

            <p>The request should contain:</p>

            <BulletList
              items={[
                "User’s full name.",
                "Registered email address.",
                "Registered mobile number.",
                "Membership ID, where applicable.",
                "Order or payment reference number, where applicable.",
                "A clear statement requesting account or personal-data deletion.",
                "Details of any specific information the user wants deleted.",
              ]}
            />

            <p>
              Users should not send passwords, OTPs, UPI PINs, complete card
              details or CVV numbers.
            </p>
          </PolicySection>

          <PolicySection number="4" title="Identity Verification">
            <p>
              To protect users from unauthorised account deletion, Goa
              Moments may verify the identity of the person submitting the
              request.
            </p>

            <p>Verification may include:</p>

            <BulletList
              items={[
                "Confirmation through the registered email address.",
                "OTP verification through the registered mobile number.",
                "Confirmation of membership or order details.",
                "Reasonable proof that the requester controls the relevant account.",
                "Parent or legal-guardian verification where the account belongs to a minor.",
              ]}
            />

            <p>
              Only information reasonably necessary to verify the request
              will be collected.
            </p>

            <p>
              If the information provided is insufficient, Goa Moments may
              request additional confirmation before processing the
              deletion.
            </p>
          </PolicySection>

          <PolicySection number="5" title="Information That May Be Deleted">
            <p>
              After successful verification, the following information may
              be permanently deleted or anonymised where it is no longer
              required:
            </p>

            <BulletList
              items={[
                "User profile information.",
                "Name, email address and mobile number connected to the account.",
                "Saved addresses.",
                "Profile photograph.",
                "Date of birth or age information, where collected.",
                "Location history or location-verification records no longer required.",
                "Saved preferences.",
                "Marketing and communication preferences.",
                "Device identifiers linked only to the deleted account.",
                "Uploaded documents that are no longer legally required.",
                "Partner enquiries and enquiry messages.",
                "Customer-support information no longer required.",
                "Membership-verification records no longer necessary.",
                "Application activity associated with the account.",
                "Other personal information collected with the user’s consent.",
              ]}
            />

            <p>
              Information may be anonymised instead of deleted where it can
              no longer identify or reasonably be linked to the user.
            </p>
          </PolicySection>

          <PolicySection number="6" title="Information That May Be Retained">
            <p>
              Some information may not be deleted immediately where
              retention is reasonably necessary for:
            </p>

            <BulletList
              items={[
                "Completing an existing membership purchase or service.",
                "Processing a pending payment, refund, chargeback or dispute.",
                "Maintaining transaction, invoice, taxation or accounting records.",
                "Complying with applicable legal or regulatory obligations.",
                "Responding to a court, government or law-enforcement request.",
                "Preventing fraud, misuse, duplicate refunds or unauthorised access.",
                "Investigating security incidents or violations of our Terms.",
                "Establishing, exercising or defending legal claims.",
                "Resolving an open customer complaint.",
                "Maintaining proof that a deletion or consent-withdrawal request was completed.",
                "Protecting the rights, safety and property of Goa Moments, its users and partner businesses.",
              ]}
            />

            <p>
              Retained information will be limited to what is necessary for
              the relevant purpose and will not ordinarily be used for
              marketing.
            </p>

            <p>
              Once the applicable purpose or legal-retention requirement
              ends, the information will be deleted or anonymised according
              to our internal retention process.
            </p>
          </PolicySection>

          <PolicySection number="7" title="Payment Information">
            <p>
              Goa Moments may use third-party banks, payment gateways, UPI
              providers or card networks to process payments.
            </p>

            <p>Goa Moments does not ordinarily store complete:</p>

            <BulletList
              items={[
                "Debit-card numbers.",
                "Credit-card numbers.",
                "CVV numbers.",
                "UPI PINs.",
                "Banking passwords.",
                "OTP authentication details.",
              ]}
            />

            <p>
              Payment providers may retain transaction information
              according to their own privacy policies, legal duties and
              retention requirements.
            </p>

            <p>
              Deleting a Goa Moments account may not automatically delete
              information independently retained by a bank or payment
              provider.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Third-Party Service Providers">
            <p>Goa Moments may use third-party service providers for:</p>

            <BulletList
              items={[
                "Website hosting.",
                "Database management.",
                "Cloud storage.",
                "Membership verification.",
                "Email and SMS communication.",
                "Customer support.",
                "Analytics.",
                "Payment processing.",
                "Application security.",
                "Delivery of physical membership cards.",
              ]}
            />

            <p>
              Where applicable, Goa Moments will take reasonable steps to
              instruct relevant service providers processing personal data
              on our behalf to delete or restrict the user’s data.
            </p>

            <p>
              This does not apply where the third party is legally required
              to retain the information or processes the information as an
              independent service provider under its own legal
              responsibilities.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Partner Business Data">
            <p>
              Where a user directly contacts, books with or makes payment to
              a hotel, restaurant, activity provider or other independent
              partner, that partner may separately collect personal
              information.
            </p>

            <p>
              Deleting the user’s Goa Moments account will not automatically
              delete information independently collected by a partner
              business.
            </p>

            <p>
              The user may need to contact the relevant partner directly to
              request deletion of information held by that partner.
            </p>
          </PolicySection>

          <PolicySection number="10" title="Location Data">
            <p>
              Where the user has allowed location access, Goa Moments may
              use location information for:
            </p>

            <BulletList
              items={[
                "Confirming that the user is within Goa or another eligible service area.",
                "Membership and identity verification.",
                "Preventing misuse or fraudulent redemption.",
                "Displaying nearby partner businesses.",
                "Improving relevant platform services.",
              ]}
            />

            <p>
              Users may disable future location access through their device
              settings.
            </p>

            <p>
              A user may also request deletion of stored location
              information where it is no longer required for security,
              verification, dispute resolution or legal compliance.
            </p>

            <p>
              Disabling location access may prevent certain verification or
              location-based features from operating.
            </p>
          </PolicySection>

          <PolicySection number="11" title="Marketing Data">
            <p>
              Users may withdraw consent for promotional emails, SMS
              messages, WhatsApp messages or application notifications
              without deleting their full account.
            </p>

            <p>Users may unsubscribe through:</p>

            <BulletList
              items={[
                "The unsubscribe option included in a promotional communication.",
                "Communication settings within their account, where available.",
                "A request sent to [SUPPORT EMAIL ADDRESS].",
              ]}
            />

            <p>
              Essential communications relating to payments, security,
              membership activation, refunds or account requests may
              continue while an account remains active.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Deletion Processing Time">
            <p>
              Goa Moments aims to acknowledge a valid deletion request
              within a reasonable period.
            </p>

            <p>
              Verified deletion requests will normally be processed within
              30 days.
            </p>

            <p>Additional time may be required where:</p>

            <BulletList
              items={[
                "Identity verification is incomplete.",
                "The request is complex or covers multiple systems.",
                "A payment, refund or complaint remains pending.",
                "Information must be retained under applicable law.",
                "A third-party service provider must process part of the request.",
                "A security, fraud or legal investigation is ongoing.",
              ]}
            />

            <p>
              Where deletion cannot be completed immediately, Goa Moments
              may inform the user about the reason and the action being
              taken.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Backup Copies">
            <p>
              Deleted information may remain temporarily within encrypted or
              restricted backup systems.
            </p>

            <p>
              Backup copies are maintained for disaster recovery, security
              and system-restoration purposes.
            </p>

            <p>
              Personal data remaining in backups will not ordinarily be
              restored or actively processed except where necessary for
              legitimate recovery or security purposes.
            </p>

            <p>
              Backup copies will be deleted or overwritten according to the
              Company’s normal backup-retention cycle.
            </p>
          </PolicySection>

          <PolicySection number="14" title="Effect of Account Deletion">
            <p>Once an account is deleted:</p>

            <BulletList
              items={[
                "The user may lose access to their Goa Moments profile.",
                "Digital membership information may become unavailable.",
                "Membership-verification features may stop working.",
                "Saved partner offers and preferences may be removed.",
                "Previous membership history may no longer be visible.",
                "Deleted information may not be recoverable.",
                "The user may need to create a new account to use the platform again.",
              ]}
            />

            <p>
              Users should download or save any information they require
              before submitting a deletion request.
            </p>
          </PolicySection>

          <PolicySection number="15" title="Membership and Refunds">
            <p>Account deletion does not automatically:</p>

            <BulletList
              items={[
                "Cancel an activated membership.",
                "Create eligibility for a refund.",
                "Reverse a completed payment.",
                "Cancel a booking made directly with a partner.",
                "Remove an outstanding payment or legal obligation.",
                "Delete records that must be retained for accounting, taxation, fraud prevention or dispute handling.",
              ]}
            />

            <p>
              Refund eligibility will be determined according to the Goa
              Moments Refund Policy and Terms and Conditions.
            </p>
          </PolicySection>

          <PolicySection
            number="16"
            title="Withdrawal of a Deletion Request"
          >
            <p>
              A user may contact Goa Moments to withdraw a deletion request
              before deletion has been completed.
            </p>

            <p>
              Once personal information has been permanently deleted or
              irreversibly anonymised, it may not be possible to restore the
              account or information.
            </p>
          </PolicySection>

          <PolicySection number="17" title="Requests Relating to Minors">
            <p>
              Where a Goa Moments account is used by a person below the age
              permitted to independently provide valid consent, a parent or
              legal guardian may submit a deletion request.
            </p>

            <p>
              Goa Moments may request reasonable proof of the guardian’s
              authority and connection to the relevant account before
              processing the request.
            </p>
          </PolicySection>

          <PolicySection
            number="18"
            title="Rejection or Partial Completion of a Request"
          >
            <p>
              Goa Moments may refuse or partially complete a deletion
              request where:
            </p>

            <BulletList
              items={[
                "The requester’s identity cannot be reasonably verified.",
                "The request relates to another person’s account.",
                "Retention is required under applicable law.",
                "Information is required for an existing transaction or membership service.",
                "A dispute, investigation, chargeback or legal claim is pending.",
                "The request is false, fraudulent or intended to interfere with another user.",
                "The information has already been irreversibly anonymised.",
                "Goa Moments does not control the information requested.",
              ]}
            />

            <p>
              Where appropriate, the user may be informed about the reason
              for the refusal or partial deletion.
            </p>
          </PolicySection>

          <PolicySection number="19" title="Grievance Redressal">
            <p>
              For questions or complaints regarding a data-deletion
              request, users may contact:
            </p>

            <ContactList
              items={[
                "Grievance Officer: [FULL NAME]",
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Email: [GRIEVANCE EMAIL ADDRESS]",
                "Phone: [CUSTOMER-SUPPORT NUMBER]",
                "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
                "Support Hours: [WORKING DAYS AND HOURS]",
              ]}
            />

            <p>
              The complaint should include the deletion-request reference
              number, registered contact details and a description of the
              unresolved issue.
            </p>
          </PolicySection>

          <PolicySection number="20" title="Changes to This Policy">
            <p>
              Goa Moments may update this Data Deletion Policy to reflect
              changes in:
            </p>

            <BulletList
              items={[
                "Applicable laws and regulations.",
                "Platform features.",
                "Membership services.",
                "Data-processing practices.",
                "Security requirements.",
                "Third-party service providers.",
              ]}
            />

            <p>
              The updated Policy will be published on the Goa Moments
              website with a revised “Last Updated” date.
            </p>
          </PolicySection>

          <PolicySection number="21" title="Contact Us">
            <p>For data deletion or privacy-related assistance:</p>

            <ContactList
              items={[
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Website: www.goamoments.com",
                "Data Deletion Email: [DATA DELETION EMAIL ADDRESS]",
                "Privacy Email: [PRIVACY EMAIL ADDRESS]",
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