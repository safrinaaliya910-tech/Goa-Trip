import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PolicySectionProps = {
  number: string;
  title: string;
  children: ReactNode;
};

type PolicySubsectionProps = {
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

function PolicySubsection({
  number,
  title,
  children,
}: PolicySubsectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg font-medium text-foreground sm:text-xl">
        {number} {title}
      </h3>

      <div className="space-y-3">{children}</div>
    </div>
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

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <p className="text-sm font-medium text-[#C5A059]">
            Last Updated: 2 August 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <section className="space-y-4 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5 sm:p-7">
            <p>
              This Privacy Policy explains how LOTLAN EXPERT PRIVATE
              LIMITED, operating the Goa Moments platform, collects, uses,
              stores, shares and protects personal information.
            </p>

            <p>
              In this Privacy Policy, “Goa Moments”, “Company”, “we”, “us”
              and “our” refer to LOTLAN EXPERT PRIVATE LIMITED.
            </p>

            <p>
              This Policy applies to the Goa Moments website, mobile
              application, membership platform, physical and digital
              membership cards, QR-code verification systems,
              partner-enquiry facilities, customer-support channels and
              related services.
            </p>

            <p>
              By using Goa Moments, creating an account, purchasing a
              membership or submitting information through the platform,
              you acknowledge that you have read this Privacy Policy.
            </p>
          </section>

          <PolicySection number="1" title="Scope of This Privacy Policy">
            <p>This Privacy Policy applies when a person:</p>

            <BulletList
              items={[
                "Visits the Goa Moments website.",
                "Downloads or uses the Goa Moments mobile application.",
                "Creates a user account.",
                "Purchases or activates a membership.",
                "Uses a physical or digital membership card.",
                "Uses a membership ID or QR code.",
                "Uses location-based membership verification.",
                "Searches for a participating partner business.",
                "Submits a hotel, restaurant or activity enquiry.",
                "Contacts customer support.",
                "Submits a complaint, review or refund request.",
                "Participates in an event, survey, promotion or campaign.",
                "Communicates with an authorised Goa Moments representative.",
                "Uses any other service operated by Goa Moments.",
              ]}
            />
          </PolicySection>

          <PolicySection number="2" title="Information We May Collect">
            <p>
              We collect only information that is reasonably required to
              operate, protect and improve Goa Moments services.
            </p>

            <p>
              The information collected may depend on the features used by
              the user.
            </p>

            <PolicySubsection
              number="2.1"
              title="Account and identity information"
            >
              <p>We may collect:</p>

              <BulletList
                items={[
                  "Full name.",
                  "Email address.",
                  "Mobile number.",
                  "Date of birth or age, where required.",
                  "Gender, where voluntarily provided.",
                  "Profile photograph.",
                  "Residential or delivery address.",
                  "Preferred language.",
                  "Account username or identifier.",
                  "Encrypted login and authentication information.",
                  "Identity-verification information, where required.",
                  "Parent or guardian details where legally necessary.",
                ]}
              />

              <p>Users must provide accurate and current information.</p>
            </PolicySubsection>

            <PolicySubsection
              number="2.2"
              title="Membership information"
            >
              <p>
                When a user purchases or uses a Goa Moments membership, we
                may collect:
              </p>

              <BulletList
                items={[
                  "Membership plan or category.",
                  "Membership ID.",
                  "Digital or physical membership-card details.",
                  "QR-code or verification information.",
                  "Membership activation date.",
                  "Membership validity and expiry date.",
                  "Membership status.",
                  "Verification history.",
                  "Partner-benefit redemption records.",
                  "Offer usage information.",
                  "Details of authorised device changes.",
                  "Records of suspected misuse or unauthorised sharing.",
                ]}
              />
            </PolicySubsection>

            <PolicySubsection
              number="2.3"
              title="Payment and transaction information"
            >
              <p>
                When a user makes a payment, we may collect or receive:
              </p>

              <BulletList
                items={[
                  "Order number.",
                  "Transaction reference number.",
                  "UTR or payment reference.",
                  "Payment date and time.",
                  "Amount paid.",
                  "Tax information.",
                  "Payment status.",
                  "Refund status.",
                  "Payment-method category.",
                  "Limited payment-confirmation information received from the payment provider.",
                  "Chargeback or payment-dispute information.",
                ]}
              />

              <p>
                Payments may be processed by authorised banks, card
                networks, UPI providers or payment gateways.
              </p>

              <p>Goa Moments does not ordinarily store complete:</p>

              <BulletList
                items={[
                  "Credit-card numbers.",
                  "Debit-card numbers.",
                  "CVV numbers.",
                  "UPI PINs.",
                  "Banking passwords.",
                  "OTP authentication codes.",
                ]}
              />

              <p>
                Sensitive payment credentials are entered and processed
                through the relevant payment provider’s secure system.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.4"
              title="Location information"
            >
              <p>
                The Goa Moments website or mobile application may request
                location permission for purposes including:
              </p>

              <BulletList
                items={[
                  "Confirming that a user is physically present in Goa or another eligible service area.",
                  "Verifying membership eligibility.",
                  "Preventing fake-location or unauthorised membership use.",
                  "Showing nearby partner businesses.",
                  "Displaying location-relevant offers.",
                  "Improving partner search results.",
                  "Protecting the membership-verification system.",
                ]}
              />

              <p>
                Depending on the permission selected by the user, the
                location may be approximate or precise.
              </p>

              <p>
                Goa Moments does not intend to continuously track a user’s
                background location unless a separate feature genuinely
                requires it and the purpose is clearly explained before
                permission is requested.
              </p>

              <p>
                Users may disable location access through their device
                settings. Some verification or nearby-partner features may
                not work without location access.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.5"
              title="Device and technical information"
            >
              <p>
                We may automatically collect limited technical information,
                including:
              </p>

              <BulletList
                items={[
                  "Device type.",
                  "Device model and manufacturer.",
                  "Operating-system version.",
                  "Browser type.",
                  "Application version.",
                  "Device language.",
                  "IP address.",
                  "General country or region.",
                  "Internet and network information.",
                  "Screen and display information.",
                  "App-installation identifier.",
                  "Session identifier.",
                  "Login date and time.",
                  "Error logs.",
                  "Crash reports.",
                  "Performance information.",
                  "Security and fraud-detection logs.",
                  "Failed login or verification attempts.",
                ]}
              />

              <p>
                This information is used to maintain compatibility, improve
                performance, investigate errors and protect the platform.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.6"
              title="Website and application usage information"
            >
              <p>
                We may collect information about how users interact with the
                platform, including:
              </p>

              <BulletList
                items={[
                  "Pages viewed.",
                  "Features used.",
                  "Partner listings viewed.",
                  "Searches performed.",
                  "Offers selected.",
                  "Links clicked.",
                  "Time spent on a page.",
                  "Referral source.",
                  "Application navigation.",
                  "Login and logout activity.",
                  "General interaction and performance information.",
                ]}
              />
            </PolicySubsection>

            <PolicySubsection
              number="2.7"
              title="Cookies and similar technologies"
            >
              <p>
                The Goa Moments website may use cookies, pixels, local
                storage or similar technologies.
              </p>

              <p>These technologies may be used to:</p>

              <BulletList
                items={[
                  "Maintain login sessions.",
                  "Remember user preferences.",
                  "Protect account security.",
                  "Process payments.",
                  "Understand website performance.",
                  "Detect fraudulent activity.",
                  "Measure campaign effectiveness.",
                  "Improve user experience.",
                  "Provide relevant communications.",
                ]}
              />

              <p>
                Essential cookies may be required for the website to
                function correctly.
              </p>

              <p>
                Where required, users will be given the option to accept,
                reject or manage non-essential cookies.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.8"
              title="Partner-enquiry information"
            >
              <p>
                Where a user sends an enquiry to a hotel, restaurant,
                resort, activity provider or another partner, we may
                collect:
              </p>

              <BulletList
                items={[
                  "User’s name.",
                  "Email address.",
                  "Mobile number.",
                  "Selected business.",
                  "Requested service.",
                  "Preferred date and time.",
                  "Number of guests.",
                  "Enquiry message.",
                  "Membership status.",
                  "Relevant preferences.",
                  "Consent to share the enquiry with the selected partner.",
                ]}
              />

              <p>
                Only information reasonably required to process the enquiry
                should be shared with the selected partner.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.9"
              title="Customer-support information"
            >
              <p>
                When a user contacts customer support, we may collect:
              </p>

              <BulletList
                items={[
                  "Name and contact details.",
                  "Membership ID.",
                  "Order number.",
                  "Payment reference.",
                  "Description of the issue.",
                  "Screenshots.",
                  "Documents submitted as evidence.",
                  "Email, chat or call records.",
                  "Complaint history.",
                  "Refund-request information.",
                  "Technical information relevant to the issue.",
                  "Support resolution and follow-up records.",
                ]}
              />
            </PolicySubsection>

            <PolicySubsection
              number="2.10"
              title="Camera, photos and file information"
            >
              <p>
                Where the user chooses to use a related feature, the mobile
                application may request access to the camera, selected
                photographs or files for purposes such as:
              </p>

              <BulletList
                items={[
                  "Scanning a membership QR code.",
                  "Uploading a profile photograph.",
                  "Capturing a verification document.",
                  "Uploading payment evidence.",
                  "Attaching information to a complaint.",
                  "Uploading partner-business logos or photographs.",
                  "Downloading a membership card, receipt or invoice.",
                ]}
              />

              <p>
                Camera or file access should only occur after user action
                and permission.
              </p>

              <p>
                Where technically possible, the application should allow
                users to select only the necessary photograph or file
                rather than granting unrestricted access to the entire
                device library.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.11"
              title="Notification information"
            >
              <p>
                With the user’s permission, Goa Moments may send
                notifications relating to:
              </p>

              <BulletList
                items={[
                  "OTP verification.",
                  "Membership activation.",
                  "Membership expiry.",
                  "Payment status.",
                  "Refund status.",
                  "Account-security alerts.",
                  "Customer-support responses.",
                  "Important service announcements.",
                  "Partner offers.",
                  "Promotional campaigns.",
                ]}
              />

              <p>
                Users may manage notifications through the application or
                device settings.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.12"
              title="Reviews, ratings and user-submitted content"
            >
              <p>
                Where the platform supports reviews, ratings, comments or
                feedback, we may collect:
              </p>

              <BulletList
                items={[
                  "Review or rating content.",
                  "Photographs uploaded with a review.",
                  "Date and time of submission.",
                  "Relevant partner or service.",
                  "Membership or account information needed to verify authenticity.",
                  "Moderation and complaint records.",
                ]}
              />

              <p>
                Reviews may be displayed publicly with the user’s chosen
                name or profile identifier.
              </p>

              <p>
                Users should not include sensitive personal information in
                a public review.
              </p>
            </PolicySubsection>

            <PolicySubsection
              number="2.13"
              title="Information collected from partner businesses"
            >
              <p>
                For hotels, restaurants, resorts, cafés, activity providers
                and other partners, we may collect:
              </p>

              <BulletList
                items={[
                  "Business name.",
                  "Owner or authorised representative’s name.",
                  "Contact details.",
                  "Business address.",
                  "GST, PAN or registration information.",
                  "Business licences and verification documents.",
                  "Partner agreement details.",
                  "Business logo.",
                  "Property or service photographs.",
                  "Offer and discount details.",
                  "Menu or pricing information.",
                  "Operating hours.",
                  "Location coordinates.",
                  "Customer complaint information.",
                  "Bank information where necessary for an authorised transaction or settlement.",
                ]}
              />
            </PolicySubsection>
          </PolicySection>

          <PolicySection number="3" title="How We Collect Information">
            <p>We may collect information:</p>

            <BulletList
              items={[
                "Directly from users.",
                "Through account-registration forms.",
                "During membership purchase or activation.",
                "Through the website or mobile application.",
                "Through device permissions.",
                "From authorised payment providers.",
                "From participating partner businesses.",
                "Through customer-support communication.",
                "Through cookies and analytics tools.",
                "During authorised events or promotions.",
                "From publicly available business information.",
                "From an authorised representative acting for the user.",
              ]}
            />
          </PolicySection>

          <PolicySection
            number="4"
            title="Purposes for Using Personal Information"
          >
            <p>We may use personal information to:</p>

            <BulletList
              items={[
                "Create and manage user accounts.",
                "Authenticate users.",
                "Process membership purchases.",
                "Activate memberships.",
                "Issue digital or physical membership cards.",
                "Verify membership IDs and QR codes.",
                "Confirm eligibility for partner benefits.",
                "Perform location-based verification.",
                "Display nearby partners and offers.",
                "Process hotel, restaurant or activity enquiries.",
                "Communicate with users.",
                "Send payment and membership confirmations.",
                "Process refunds.",
                "Respond to complaints.",
                "Provide customer support.",
                "Deliver physical membership cards.",
                "Prevent fraud and membership misuse.",
                "Detect fake accounts or fake-location activity.",
                "Secure the website and mobile application.",
                "Diagnose technical errors.",
                "Improve services and user experience.",
                "Maintain accounting and transaction records.",
                "Analyse platform performance.",
                "Measure marketing campaigns.",
                "Enforce our Terms and Conditions.",
                "Comply with applicable legal obligations.",
                "Establish, exercise or defend legal claims.",
                "Protect the safety and rights of users, partners and the Company.",
              ]}
            />

            <p>
              We will not use personal information for a materially
              unrelated purpose without providing an appropriate notice or
              obtaining additional consent where required.
            </p>
          </PolicySection>

          <PolicySection
            number="5"
            title="Consent and Other Permitted Processing"
          >
            <p>
              Where required, Goa Moments will request consent before
              collecting or using personal information.
            </p>

            <p>A consent request should explain:</p>

            <BulletList
              items={[
                "What information is being collected.",
                "Why the information is required.",
                "How the information will be used.",
                "Whether the information will be shared.",
                "Whether the permission is required or optional.",
                "How consent may be withdrawn.",
              ]}
            />

            <p>
              In certain situations, information may also be processed
              where reasonably necessary to:
            </p>

            <BulletList
              items={[
                "Complete a service requested by the user.",
                "Process a payment.",
                "Protect the platform against fraud.",
                "Respond to a user complaint.",
                "Comply with a legal obligation.",
                "Protect a person during an emergency.",
                "Establish or defend a legal claim.",
                "Perform another purpose permitted under applicable law.",
              ]}
            />
          </PolicySection>

          <PolicySection number="6" title="Application Permissions">
            <p>
              Depending on the feature used, the Goa Moments application
              may request:
            </p>

            <BulletList
              items={[
                "Location permission.",
                "Camera permission.",
                "Selected photo or file access.",
                "Notification permission.",
                "Internet and network access.",
              ]}
            />

            <p>
              Permissions should be requested only when the user attempts
              to use the relevant feature.
            </p>

            <p>
              Users may deny or withdraw optional permissions through their
              device settings.
            </p>

            <p>
              Denying a permission may disable the feature that depends on
              that permission, but unrelated features should remain
              available where technically possible.
            </p>
          </PolicySection>

          <PolicySection number="7" title="How We Share Information">
            <p>
              We may share limited personal information with the following
              recipients where necessary.
            </p>

            <PolicySubsection
              number="7.1"
              title="Participating partner businesses"
            >
              <p>
                Where the user submits an enquiry or requests a partner
                service, relevant information may be shared with the
                selected partner.
              </p>

              <p>
                The partner may then process the information according to
                its own privacy practices.
              </p>
            </PolicySubsection>

            <PolicySubsection number="7.2" title="Payment providers">
              <p>
                Information may be shared with banks, card networks, UPI
                providers and payment gateways to:
              </p>

              <BulletList
                items={[
                  "Process payments.",
                  "Confirm transactions.",
                  "Process refunds.",
                  "Prevent fraud.",
                  "Handle chargebacks and disputes.",
                ]}
              />
            </PolicySubsection>

            <PolicySubsection
              number="7.3"
              title="Technology and service providers"
            >
              <p>We may use service providers for:</p>

              <BulletList
                items={[
                  "Website and application hosting.",
                  "Cloud database services.",
                  "File storage.",
                  "Authentication.",
                  "Email and SMS communication.",
                  "Notifications.",
                  "Analytics.",
                  "Customer support.",
                  "Cybersecurity.",
                  "Fraud prevention.",
                  "Physical-card printing.",
                  "Courier and delivery services.",
                ]}
              />

              <p>
                These providers should receive only the information
                reasonably necessary to perform their authorised services.
              </p>
            </PolicySubsection>

            <PolicySubsection number="7.4" title="Professional advisers">
              <p>Information may be shared with authorised:</p>

              <BulletList
                items={[
                  "Lawyers.",
                  "Accountants.",
                  "Auditors.",
                  "Insurers.",
                  "Tax advisers.",
                  "Compliance consultants.",
                ]}
              />
            </PolicySubsection>

            <PolicySubsection
              number="7.5"
              title="Government and legal authorities"
            >
              <p>Information may be disclosed where reasonably required:</p>

              <BulletList
                items={[
                  "By applicable law.",
                  "By a valid court order.",
                  "By an authorised government request.",
                  "To investigate suspected fraud or crime.",
                  "To protect the rights or safety of users and others.",
                  "To establish, exercise or defend a legal claim.",
                ]}
              />
            </PolicySubsection>

            <PolicySubsection number="7.6" title="Business restructuring">
              <p>
                Where the Company is involved in a merger, acquisition,
                financing, restructuring or transfer of business, relevant
                information may be disclosed under appropriate
                confidentiality and legal protections.
              </p>
            </PolicySubsection>
          </PolicySection>

          <PolicySection number="8" title="Sale of Personal Information">
            <p>
              Goa Moments does not sell users’ personal information for
              money.
            </p>

            <p>
              Goa Moments does not permit an independent third party to use
              personal information for its own unrelated marketing merely
              because that third party provides a service to Goa Moments.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Marketing Communications">
            <p>
              Where the user has provided consent or where otherwise
              permitted, Goa Moments may send:
            </p>

            <BulletList
              items={[
                "Membership promotions.",
                "Renewal reminders.",
                "Partner offers.",
                "New-feature information.",
                "Event invitations.",
                "Campaign announcements.",
                "Tourism-related promotional content.",
              ]}
            />

            <p>
              Users may unsubscribe from promotional emails or messages
              through the available unsubscribe method or by contacting
              customer support.
            </p>

            <p>
              Users may continue to receive essential communications
              relating to:
            </p>

            <BulletList
              items={[
                "Payments.",
                "Refunds.",
                "Security.",
                "Membership activation.",
                "Membership expiry.",
                "Account requests.",
                "Customer-support cases.",
              ]}
            />
          </PolicySection>

          <PolicySection number="10" title="Data Retention">
            <p>
              Personal information will be retained only for as long as
              reasonably necessary for the purpose for which it was
              collected.
            </p>

            <p>Retention periods may depend on:</p>

            <BulletList
              items={[
                "Whether a membership is active.",
                "Whether an account remains open.",
                "Transaction and refund requirements.",
                "Accounting and taxation obligations.",
                "Fraud-prevention requirements.",
                "Customer complaints.",
                "Legal disputes.",
                "Contractual obligations.",
                "Security requirements.",
                "Applicable legal requirements.",
              ]}
            />

            <p>
              When personal information is no longer required, it may be
              securely deleted or irreversibly anonymised.
            </p>

            <p>
              Certain transaction, invoice, accounting, fraud-prevention or
              legal records may be retained after account deletion where
              retention is reasonably required.
            </p>
          </PolicySection>

          <PolicySection number="11" title="Data Security">
            <p>
              Goa Moments will take reasonable technical and organisational
              measures to protect personal information.
            </p>

            <p>Security measures may include:</p>

            <BulletList
              items={[
                "Access controls.",
                "Authentication.",
                "Encryption during transmission where appropriate.",
                "Restricted administrative access.",
                "Secure cloud infrastructure.",
                "Database security rules.",
                "Security logging.",
                "Monitoring for suspicious activity.",
                "Backup and disaster-recovery procedures.",
                "Staff and service-provider confidentiality obligations.",
                "Regular system updates and vulnerability management.",
              ]}
            />

            <p>
              No website, application, internet transmission or database
              can be guaranteed to be completely secure.
            </p>

            <p>Users are responsible for protecting their:</p>

            <BulletList
              items={[
                "Passwords.",
                "OTPs.",
                "Membership IDs.",
                "QR codes.",
                "Devices.",
                "Registered email and mobile accounts.",
              ]}
            />

            <p>
              Users should immediately report suspected unauthorised access.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Personal Data Breaches">
            <p>
              Where a security incident affects personal information, Goa
              Moments may:
            </p>

            <BulletList
              items={[
                "Investigate and contain the incident.",
                "Restrict compromised access.",
                "Preserve relevant evidence.",
                "Take steps to reduce possible harm.",
                "Notify affected users where required.",
                "Inform the appropriate authority where required.",
                "Update security controls to prevent recurrence.",
              ]}
            />

            <p>
              Notices may be delivered through email, SMS, application
              notification or another appropriate communication method.
            </p>
          </PolicySection>

          <PolicySection number="13" title="International Data Processing">
            <p>
              Some authorised technology, hosting, analytics, communication
              or payment providers may process information using systems
              located outside the user’s state or country.
            </p>

            <p>
              Where personal information is processed outside India, Goa
              Moments will take reasonable steps to use providers offering
              appropriate contractual, organisational and security
              protections, subject to applicable law and government
              restrictions.
            </p>
          </PolicySection>

          <PolicySection number="14" title="Children and Minors">
            <p>
              Users below the legally permitted age may require the
              involvement or consent of a parent or lawful guardian.
            </p>

            <p>
              Goa Moments may request reasonable information to verify
              parental or guardian consent where required.
            </p>

            <p>Goa Moments does not knowingly intend to:</p>

            <BulletList
              items={[
                "Conduct harmful tracking of children.",
                "Target children with inappropriate advertising.",
                "Process children’s personal information without the required permission.",
                "Encourage minors to independently complete transactions they are not legally permitted to make.",
              ]}
            />

            <p>
              A parent or guardian who believes that a minor’s information
              has been collected improperly may contact Goa Moments to
              request review or deletion.
            </p>
          </PolicySection>

          <PolicySection number="15" title="User Rights and Choices">
            <p>
              Subject to applicable law and reasonable identity
              verification, users may request:
            </p>

            <BulletList
              items={[
                "Information about personal data associated with their account.",
                "Correction of inaccurate information.",
                "Completion or updating of incomplete information.",
                "Deletion of eligible personal information.",
                "Withdrawal of consent for optional processing.",
                "Removal from promotional communications.",
                "A review of a privacy-related complaint.",
                "Information about the manner in which a request was handled.",
                "Nomination or account assistance where recognised under applicable law.",
              ]}
            />

            <p>
              Withdrawal of consent does not affect processing already
              lawfully completed before withdrawal.
            </p>

            <p>
              Withdrawing consent may prevent Goa Moments from providing a
              feature or service that genuinely requires the relevant
              information.
            </p>
          </PolicySection>

          <PolicySection number="16" title="How to Make a Privacy Request">
            <p>
              Users may submit a privacy, correction, consent-withdrawal or
              deletion request by contacting:
            </p>

            <ContactList
              items={["Privacy Email: [PRIVACY EMAIL ADDRESS]"]}
            />

            <p>The request should include:</p>

            <BulletList
              items={[
                "Full name.",
                "Registered email address.",
                "Registered mobile number.",
                "Membership ID, where applicable.",
                "Description of the request.",
                "Information necessary to verify ownership of the account.",
              ]}
            />

            <p>Users must not send:</p>

            <BulletList
              items={[
                "Passwords.",
                "OTPs.",
                "UPI PINs.",
                "CVV numbers.",
                "Complete payment-card details.",
              ]}
            />

            <p>
              Goa Moments may request reasonable verification before
              providing, changing or deleting personal information.
            </p>
          </PolicySection>

          <PolicySection number="17" title="Account and Data Deletion">
            <p>
              Users may request deletion of their account and eligible
              personal information.
            </p>

            <p>Account deletion may result in:</p>

            <BulletList
              items={[
                "Loss of access to the user profile.",
                "Loss of access to the digital membership.",
                "Deactivation of membership-verification features.",
                "Removal of saved preferences.",
                "Removal of eligible location and usage information.",
                "Inability to recover deleted information.",
              ]}
            />

            <p>Some information may be retained where required for:</p>

            <BulletList
              items={[
                "Payments and refunds.",
                "Taxation and accounting.",
                "Fraud prevention.",
                "Legal disputes.",
                "Security investigations.",
                "Compliance with applicable law.",
              ]}
            />

            <p>
              Further details are available in the Goa Moments Data
              Deletion Policy.
            </p>
          </PolicySection>

          <PolicySection number="18" title="Third-Party Websites and Services">
            <p>The Goa Moments platform may contain links to:</p>

            <BulletList
              items={[
                "Partner websites.",
                "Payment gateways.",
                "Map services.",
                "Messaging applications.",
                "Social-media platforms.",
                "External booking platforms.",
              ]}
            />

            <p>
              Third parties independently control their own privacy
              practices.
            </p>

            <p>
              Goa Moments is not responsible for the privacy or security
              practices of an independent third party merely because the
              third party’s service is linked through Goa Moments.
            </p>

            <p>
              Users should review the relevant third party’s privacy policy
              before submitting information or completing a payment.
            </p>
          </PolicySection>

          <PolicySection number="19" title="Partner Responsibilities">
            <p>
              Partner businesses receiving user information through Goa
              Moments must:
            </p>

            <BulletList
              items={[
                "Use the information only for the authorised enquiry or service.",
                "Protect the information against unauthorised access.",
                "Avoid using the information for unrelated marketing without permission.",
                "Avoid selling or improperly sharing user information.",
                "Retain information only for a necessary or lawful period.",
                "Respond appropriately to user privacy requests.",
                "Inform Goa Moments about a relevant security incident where required.",
              ]}
            />

            <p>
              A partner acting independently may have its own separate
              privacy obligations.
            </p>
          </PolicySection>

          <PolicySection number="20" title="Analytics">
            <p>Goa Moments may use analytics tools to understand:</p>

            <BulletList
              items={[
                "Website and application traffic.",
                "Frequently used features.",
                "Partner-listing engagement.",
                "Technical errors.",
                "Application crashes.",
                "Campaign performance.",
                "Device compatibility.",
                "General usage patterns.",
              ]}
            />

            <p>
              Where reasonably possible, analytics information may be
              aggregated or anonymised.
            </p>

            <p>
              Non-essential analytics and advertising technologies may be
              controlled through available cookie or application settings.
            </p>
          </PolicySection>

          <PolicySection
            number="21"
            title="Automated Security and Fraud Checks"
          >
            <p>
              Goa Moments may use automated technical checks to identify:
            </p>

            <BulletList
              items={[
                "Fake accounts.",
                "Duplicate memberships.",
                "Unusual login activity.",
                "Repeated failed verification attempts.",
                "Fake-location activity.",
                "Manipulated QR codes.",
                "Payment fraud.",
                "Unauthorised device use.",
              ]}
            />

            <p>
              Where an account is restricted based on a security check, the
              user may contact customer support and provide information for
              manual review.
            </p>
          </PolicySection>

          <PolicySection number="22" title="Grievance Redressal">
            <p>
              For privacy complaints or unresolved personal-data requests,
              users may contact:
            </p>

            <ContactList
              items={[
                "Grievance Officer: [FULL NAME]",
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Privacy Email: [PRIVACY EMAIL ADDRESS]",
                "Grievance Email: [GRIEVANCE EMAIL ADDRESS]",
                "Customer Support: [CUSTOMER-SUPPORT NUMBER]",
                "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
                "Support Hours: [WORKING DAYS AND HOURS]",
              ]}
            />

            <p>A complaint should include:</p>

            <BulletList
              items={[
                "User’s name.",
                "Registered contact details.",
                "Membership or order number, where applicable.",
                "Description of the privacy issue.",
                "Previous request reference, where available.",
                "Supporting information.",
              ]}
            />

            <p>
              Goa Moments will endeavour to acknowledge and resolve
              complaints within a reasonable period and within any timeline
              required under applicable law.
            </p>
          </PolicySection>

          <PolicySection number="23" title="Changes to This Privacy Policy">
            <p>
              Goa Moments may update this Privacy Policy to reflect changes
              in:
            </p>

            <BulletList
              items={[
                "Platform features.",
                "Membership services.",
                "Application permissions.",
                "Partner integrations.",
                "Payment providers.",
                "Data-processing practices.",
                "Security requirements.",
                "Applicable laws and regulations.",
              ]}
            />

            <p>
              The updated Policy will be published with a revised “Last
              Updated” date.
            </p>

            <p>
              Where a material change significantly affects users, Goa
              Moments may provide notice through the website, mobile
              application, email, SMS or another appropriate method.
            </p>
          </PolicySection>

          <PolicySection number="24" title="Contact Information">
            <p>For privacy-related questions or requests:</p>

            <ContactList
              items={[
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Website: www.goamoments.com",
                "Privacy Email: [PRIVACY EMAIL ADDRESS]",
                "Data Deletion Email: [DATA DELETION EMAIL ADDRESS]",
                "Grievance Email: [GRIEVANCE EMAIL ADDRESS]",
                "Customer Support: [CUSTOMER-SUPPORT NUMBER]",
                "Grievance Officer: [FULL NAME]",
                "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
                "Support Hours: [WORKING DAYS AND HOURS]",
              ]}
            />
          </PolicySection>
        </div>
      </article>
    </main>
  );
}