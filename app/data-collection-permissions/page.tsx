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

export default function DataCollectionPermissionsPolicy() {
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
            Data Collection and Permissions Policy
          </h1>

          <p className="text-sm font-medium text-[#C5A059]">
            Last Updated: 2 August 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <section className="space-y-4 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5 sm:p-7">
            <p>
              This Data Collection and Permissions Policy explains what
              information is collected when users access or use the Goa
              Moments website, mobile application, membership system and
              related services.
            </p>

            <p>
              Goa Moments is operated by LOTLAN EXPERT PRIVATE LIMITED,
              referred to in this Policy as “Goa Moments”, “Company”, “we”,
              “us” or “our”.
            </p>

            <p>
              This Policy should be read together with the Goa Moments
              Privacy Policy, Terms and Conditions, Data Deletion Policy,
              Refund Policy and Community Guidelines.
            </p>
          </section>

          <PolicySection number="1" title="Scope of This Policy">
            <p>This Policy applies when a user:</p>

            <BulletList
              items={[
                "Visits the Goa Moments website.",
                "Downloads or uses the Goa Moments mobile application.",
                "Creates or manages a Goa Moments account.",
                "Purchases or activates a membership.",
                "Uses a physical or digital membership card.",
                "Uses a membership ID or QR-code verification system.",
                "Searches for participating partner businesses.",
                "Submits an enquiry to a hotel, restaurant, activity provider or another partner.",
                "Uses location-based membership verification.",
                "Contacts Goa Moments customer support.",
                "Participates in promotions, campaigns, surveys or events.",
                "Uses any other Goa Moments digital feature or service.",
              ]}
            />
          </PolicySection>

          <PolicySection
            number="2"
            title="Information Provided Directly by Users"
          >
            <p>
              We may collect information that users voluntarily provide to
              us, including:
            </p>

            <BulletList
              items={[
                "Full name.",
                "Email address.",
                "Mobile number.",
                "Date of birth or age information, where required.",
                "Profile photograph, where provided.",
                "Residential or delivery address.",
                "Membership ID.",
                "Account login information.",
                "Preferred language.",
                "Communication preferences.",
                "Emergency-contact information, where required for a specific service.",
                "Identity-verification information, where reasonably required.",
                "Information submitted through forms, enquiries, surveys or promotions.",
                "Information sent during customer-support communication.",
                "Reviews, ratings, complaints, comments and feedback.",
                "Uploaded documents, images or supporting evidence.",
                "Details provided for the delivery of a physical membership card.",
              ]}
            />

            <p>
              Users must ensure that the information they provide is
              accurate, complete and current.
            </p>
          </PolicySection>

          <PolicySection number="3" title="Membership and Account Information">
            <p>
              When a user registers or purchases a Goa Moments membership,
              we may collect:
            </p>

            <BulletList
              items={[
                "Registered member name.",
                "Registered mobile number and email address.",
                "Membership category or plan.",
                "Membership activation date.",
                "Membership validity and expiry date.",
                "Digital or physical membership-card details.",
                "Membership ID and QR-code information.",
                "Membership-verification history.",
                "Partner-benefit redemption records.",
                "Membership status, including active, expired, suspended or cancelled status.",
                "Account-security and authentication records.",
              ]}
            />

            <p>
              This information is used to create, activate, manage and
              verify the user’s Goa Moments membership.
            </p>
          </PolicySection>

          <PolicySection
            number="4"
            title="Payment and Transaction Information"
          >
            <p>
              When a user purchases a membership or another eligible
              service, we may collect or receive:
            </p>

            <BulletList
              items={[
                "Order number.",
                "Transaction reference number.",
                "Payment date and time.",
                "Amount paid.",
                "Applicable taxes.",
                "Payment status.",
                "Payment method category, such as card, UPI or net banking.",
                "Refund status.",
                "Chargeback or payment-dispute information.",
                "Limited payment-provider confirmation information.",
              ]}
            />

            <p>
              Payments may be processed through authorised banks, payment
              gateways, UPI providers or card networks.
            </p>

            <p>Goa Moments does not ordinarily collect or store complete:</p>

            <BulletList
              items={[
                "Debit-card numbers.",
                "Credit-card numbers.",
                "CVV numbers.",
                "UPI PINs.",
                "Banking passwords.",
                "OTP authentication codes.",
              ]}
            />

            <p>
              Sensitive payment credentials are entered directly through
              the relevant payment provider’s secure interface.
            </p>

            <p>
              The payment provider may independently collect and process
              information according to its own terms, privacy policy and
              legal obligations.
            </p>
          </PolicySection>

          <PolicySection number="5" title="Location Information">
            <p>
              The Goa Moments mobile application or website may request
              access to the user’s location for purposes such as:
            </p>

            <BulletList
              items={[
                "Confirming that the user is physically located in Goa or another eligible service area.",
                "Verifying eligibility for membership benefits.",
                "Preventing fake or unauthorised membership usage.",
                "Detecting attempts to manipulate location verification.",
                "Displaying nearby partner businesses.",
                "Showing location-relevant offers and tourism information.",
                "Improving the accuracy of partner search results.",
                "Protecting the membership-verification system from fraud.",
              ]}
            />

            <p>
              Depending on the device and permission selected by the user,
              location information may be approximate or precise.
            </p>

            <p>
              Goa Moments should normally access location only when the
              relevant location-based feature is being used.
            </p>

            <p>
              Goa Moments does not intend to continuously track users in the
              background unless a separate feature clearly requires
              background access, the purpose is disclosed and the user
              provides the required permission.
            </p>

            <p>
              Users may disable location access through their device
              settings. However, disabling location may prevent
              location-verification and nearby-partner features from working
              correctly.
            </p>
          </PolicySection>

          <PolicySection number="6" title="Device and Technical Information">
            <p>
              When a user accesses the website or mobile application,
              certain technical information may be collected automatically,
              including:
            </p>

            <BulletList
              items={[
                "Device type.",
                "Device manufacturer and model.",
                "Operating-system name and version.",
                "Application version.",
                "Browser type and version.",
                "Internet Protocol address.",
                "Device language.",
                "Country or approximate region.",
                "Screen size and display information.",
                "Network and connection information.",
                "Date and time of access.",
                "App-installation identifier.",
                "Session identifier.",
                "Error reports.",
                "Crash logs.",
                "Security logs.",
                "Performance and diagnostic information.",
                "Information about failed login or verification attempts.",
              ]}
            />

            <p>
              This information may be used to maintain compatibility,
              improve performance, identify errors, prevent fraud and
              protect the security of the platform.
            </p>
          </PolicySection>

          <PolicySection
            number="7"
            title="Website Usage and Cookie Information"
          >
            <p>
              When users visit the Goa Moments website, we may collect
              information through cookies or similar technologies,
              including:
            </p>

            <BulletList
              items={[
                "Pages visited.",
                "Links selected.",
                "Time spent on pages.",
                "Referral source.",
                "Login-session information.",
                "Language and display preferences.",
                "General website-navigation activity.",
                "Browser and device information.",
                "Error and performance information.",
                "Campaign or promotional source.",
              ]}
            />

            <p>Cookies may be used for:</p>

            <BulletList
              items={[
                "Keeping users signed in.",
                "Remembering user preferences.",
                "Protecting account security.",
                "Understanding website performance.",
                "Measuring campaign effectiveness.",
                "Improving platform functionality.",
                "Preventing fraudulent activity.",
              ]}
            />

            <p>
              Where required, users will be provided with options to accept,
              reject or manage non-essential cookies.
            </p>

            <p>
              Essential cookies may be necessary for security, login,
              payment and basic website functionality.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Partner Enquiry Information">
            <p>
              Where a user contacts or submits an enquiry to a Goa Moments
              partner, we may collect:
            </p>

            <BulletList
              items={[
                "User’s name.",
                "Contact number.",
                "Email address.",
                "Selected partner business.",
                "Requested service.",
                "Preferred date or time.",
                "Number of guests.",
                "Enquiry message.",
                "Relevant membership status.",
                "Consent to share enquiry details with the selected partner.",
              ]}
            />

            <p>
              Only information reasonably necessary to process the enquiry
              should be shared with the selected partner.
            </p>

            <p>
              Once the partner independently receives the information, the
              partner may process it according to its own privacy practices.
            </p>

            <p>
              Users should review the partner’s terms and privacy practices
              before completing a direct booking or payment.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Customer-Support Information">
            <p>
              When users contact Goa Moments customer support, we may
              collect:
            </p>

            <BulletList
              items={[
                "Name and contact details.",
                "Membership ID.",
                "Order or transaction number.",
                "Description of the issue.",
                "Screenshots or supporting documents.",
                "Email, chat or call communication records.",
                "Complaint and resolution history.",
                "Refund-request information.",
                "Technical and device details relevant to the issue.",
              ]}
            />

            <p>
              Support records may be used to investigate problems, resolve
              complaints, improve services and prevent repeated fraud or
              misuse.
            </p>
          </PolicySection>

          <PolicySection number="10" title="Information Collected From Partners">
            <p>
              For participating hotels, restaurants, cafés, activity
              providers and other partner businesses, we may collect:
            </p>

            <BulletList
              items={[
                "Business name.",
                "Owner or authorised-representative name.",
                "Business address.",
                "Contact information.",
                "GST, PAN or business-registration details, where required.",
                "Licences and verification documents.",
                "Business logo and photographs.",
                "Offer and discount details.",
                "Menu, pricing and service information.",
                "Operating hours.",
                "Location coordinates.",
                "Bank or payment information, where required for an authorised purpose.",
                "Agreement and partnership records.",
                "Customer-service and complaint information.",
              ]}
            />

            <p>
              Partner information is used to verify businesses, publish
              listings, administer offers and manage the partnership.
            </p>
          </PolicySection>

          <PolicySection number="11" title="Camera Permission">
            <p>
              The mobile application may request camera permission only
              where the user chooses to use a camera-based feature, such as:
            </p>

            <BulletList
              items={[
                "Scanning a Goa Moments QR code.",
                "Verifying a membership card.",
                "Uploading a profile photograph.",
                "Capturing a document for verification.",
                "Attaching evidence to a support request.",
                "Participating in an authorised app feature requiring image capture.",
              ]}
            />

            <p>
              The camera should not be activated without user action or
              permission.
            </p>

            <p>
              Camera images should only be collected when the user chooses
              to capture or upload them.
            </p>

            <p>
              Users may deny camera access and may use another available
              method, such as manually entering a membership ID or selecting
              an existing image, where supported.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Photos, Media and File Permission">
            <p>
              The application may request access to selected photos, media
              or files when a user chooses to:
            </p>

            <BulletList
              items={[
                "Upload a profile photograph.",
                "Upload an identity or verification document.",
                "Attach a payment screenshot.",
                "Submit evidence for a complaint or refund request.",
                "Upload partner-business photographs or logos.",
                "Download or save a membership card, invoice or receipt.",
              ]}
            />

            <p>
              Where technically possible, Goa Moments should use the
              device’s file or photo picker so the user can select only the
              required item instead of giving access to the entire device
              library.
            </p>

            <p>
              Goa Moments does not require unrestricted access to all files
              stored on a user’s device for ordinary membership
              functionality.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Notification Permission">
            <p>
              The mobile application may request permission to send
              notifications relating to:
            </p>

            <BulletList
              items={[
                "OTP or account verification.",
                "Membership activation.",
                "Membership expiry.",
                "Payment confirmation.",
                "Payment failure.",
                "Refund updates.",
                "Account-security alerts.",
                "Important service announcements.",
                "Customer-support responses.",
                "Partner offers and promotional campaigns.",
              ]}
            />

            <p>
              Users may disable promotional notifications through the
              application or device settings.
            </p>

            <p>
              Disabling notifications may prevent the user from receiving
              timely alerts, but essential information may still be
              communicated through registered email or mobile number where
              appropriate.
            </p>
          </PolicySection>

          <PolicySection number="14" title="Internet and Network Access">
            <p>The application requires internet access for features such as:</p>

            <BulletList
              items={[
                "Account registration and login.",
                "Membership verification.",
                "Loading partner information.",
                "Location verification.",
                "Processing payments.",
                "Displaying digital membership cards.",
                "Submitting enquiries.",
                "Receiving service updates.",
                "Contacting customer support.",
                "Synchronising information securely with the Goa Moments system.",
              ]}
            />

            <p>
              The application may also check network status to identify
              whether an internet connection is available.
            </p>
          </PolicySection>

          <PolicySection
            number="15"
            title="Device Identifier and Security Information"
          >
            <p>
              Limited device information or application identifiers may be
              used for:
            </p>

            <BulletList
              items={[
                "Preventing one membership from being misused across unauthorised devices.",
                "Detecting unusual login activity.",
                "Preventing duplicate or fraudulent accounts.",
                "Protecting QR codes and membership IDs.",
                "Identifying security incidents.",
                "Supporting authorised device changes.",
                "Diagnosing technical problems.",
              ]}
            />

            <p>
              Goa Moments does not use device information to secretly
              monitor unrelated user activity.
            </p>
          </PolicySection>

          <PolicySection
            number="16"
            title="Permissions Goa Moments Does Not Ordinarily Require"
          >
            <p>
              Unless a future feature genuinely requires it and the user is
              given a clear explanation and choice, Goa Moments does not
              ordinarily require access to:
            </p>

            <BulletList
              items={[
                "The user’s complete contact list.",
                "Call logs.",
                "SMS inbox.",
                "Microphone.",
                "Calendar.",
                "Health information.",
                "Biometric templates.",
                "Clipboard history.",
                "Files unrelated to Goa Moments services.",
                "Background location.",
                "Other installed applications.",
              ]}
            />

            <p>
              If a new feature requires an additional permission, the
              purpose will be disclosed before the permission is requested.
            </p>
          </PolicySection>

          <PolicySection number="17" title="Purposes for Collecting Information">
            <p>Information may be collected and used to:</p>

            <BulletList
              items={[
                "Register and authenticate users.",
                "Create and manage accounts.",
                "Process membership purchases.",
                "Activate and verify memberships.",
                "Issue digital or physical membership cards.",
                "Confirm eligibility for partner benefits.",
                "Verify whether a member is in an eligible location.",
                "Display nearby partners and relevant offers.",
                "Process enquiries.",
                "Communicate with users.",
                "Provide customer support.",
                "Process refunds and payment disputes.",
                "Prevent fraud and account misuse.",
                "Maintain platform security.",
                "Diagnose technical errors.",
                "Improve the website and mobile application.",
                "Measure service and campaign performance.",
                "Maintain financial and business records.",
                "Comply with applicable legal obligations.",
                "Establish, exercise or defend legal claims.",
                "Enforce Goa Moments policies and agreements.",
              ]}
            />

            <p>
              Information will not be used for an unrelated purpose without
              an appropriate legal basis or additional consent where
              required.
            </p>
          </PolicySection>

          <PolicySection
            number="18"
            title="User Consent and Permission Requests"
          >
            <p>
              Before requesting access to sensitive device information or
              permissions, Goa Moments will aim to explain:
            </p>

            <BulletList
              items={[
                "What information is requested.",
                "Why the information is needed.",
                "How the information will be used.",
                "Whether it will be shared.",
                "Whether the permission is required or optional.",
                "What feature may not work if permission is denied.",
              ]}
            />

            <p>
              Users may choose to allow or deny optional permissions through
              the permission controls provided by their device.
            </p>

            <p>
              A user’s decision to deny an optional permission will not
              prevent access to unrelated features that do not require that
              permission.
            </p>
          </PolicySection>

          <PolicySection
            number="19"
            title="Withdrawing or Changing Permissions"
          >
            <p>
              Users may change application permissions through their device
              settings.
            </p>

            <p>Depending on the device, users may manage permissions such as:</p>

            <BulletList
              items={[
                "Location.",
                "Camera.",
                "Photos and files.",
                "Notifications.",
              ]}
            />

            <p>
              Withdrawing a permission will prevent future access through
              that permission but may not automatically delete information
              collected before the permission was withdrawn.
            </p>

            <p>
              Users may request deletion of previously collected personal
              data according to the Goa Moments Data Deletion Policy.
            </p>
          </PolicySection>

          <PolicySection number="20" title="Information Sharing">
            <p>We may share limited information with:</p>

            <BulletList
              items={[
                "Selected partner businesses when a user submits an enquiry.",
                "Payment gateways, banks and payment-service providers.",
                "Cloud-hosting and database-service providers.",
                "Email, SMS and notification-service providers.",
                "Customer-support service providers.",
                "Website and application analytics providers.",
                "Security, fraud-prevention and technical-service providers.",
                "Delivery or courier providers for physical membership cards.",
                "Professional advisers, auditors or insurers.",
                "Government authorities, courts or regulators where legally required.",
              ]}
            />

            <p>
              Service providers should receive only information reasonably
              necessary to perform their authorised function.
            </p>

            <p>Goa Moments does not sell users’ personal information for money.</p>
          </PolicySection>

          <PolicySection number="21" title="Analytics and Performance Data">
            <p>Goa Moments may use analytics tools to understand:</p>

            <BulletList
              items={[
                "Number of website or application visitors.",
                "Frequently used features.",
                "App crashes and errors.",
                "General user-navigation patterns.",
                "Partner-search activity.",
                "Marketing-campaign performance.",
                "Device and application compatibility.",
              ]}
            />

            <p>
              Where reasonably possible, analytics information may be
              aggregated or anonymised.
            </p>

            <p>
              Users may be given options to control non-essential analytics
              or advertising technologies where required.
            </p>
          </PolicySection>

          <PolicySection
            number="22"
            title="Advertising and Promotional Communication"
          >
            <p>
              Where a user has provided consent or where otherwise
              permitted, Goa Moments may use contact and preference
              information to send:
            </p>

            <BulletList
              items={[
                "Membership offers.",
                "Partner promotions.",
                "New-feature announcements.",
                "Tourism-related updates.",
                "Event invitations.",
                "Renewal reminders.",
              ]}
            />

            <p>
              Users may unsubscribe from promotional communications at any
              time.
            </p>

            <p>
              Users may continue to receive essential communications
              concerning payments, security, membership status and
              requested support.
            </p>
          </PolicySection>

          <PolicySection number="23" title="Children and Minors">
            <p>
              Goa Moments services are not intended to allow minors to
              independently enter into transactions where they are not
              legally capable of doing so.
            </p>

            <p>
              Where personal data relating to a minor is required, Goa
              Moments may request consent or verification from a parent or
              legal guardian as required.
            </p>

            <p>
              Parents or guardians may contact Goa Moments to request
              access, correction or deletion of information relating to a
              minor.
            </p>
          </PolicySection>

          <PolicySection number="24" title="Data Retention">
            <p>
              Personal information will be retained only for as long as
              reasonably necessary for:
            </p>

            <BulletList
              items={[
                "Providing an active membership or service.",
                "Completing a transaction.",
                "Resolving a complaint or refund.",
                "Preventing fraud.",
                "Maintaining accounting and tax records.",
                "Meeting legal obligations.",
                "Handling disputes and legal claims.",
                "Maintaining platform security.",
              ]}
            />

            <p>
              When information is no longer required, it may be securely
              deleted or irreversibly anonymised.
            </p>

            <p>
              Additional information about deletion requests is available in
              the Goa Moments Data Deletion Policy.
            </p>
          </PolicySection>

          <PolicySection number="25" title="Data Security">
            <p>
              Goa Moments will take reasonable technical and organisational
              measures to protect personal information against:
            </p>

            <BulletList
              items={[
                "Unauthorised access.",
                "Accidental loss.",
                "Improper disclosure.",
                "Alteration.",
                "Destruction.",
                "Fraudulent use.",
                "Security attacks.",
              ]}
            />

            <p>
              However, no website, application, database or internet
              transmission can be guaranteed to be completely secure.
            </p>

            <p>
              Users are responsible for protecting their passwords, OTPs,
              membership IDs and devices.
            </p>
          </PolicySection>

          <PolicySection number="26" title="Third-Party Websites and Services">
            <p>
              The Goa Moments platform may contain links to partner
              websites, maps, payment gateways, messaging services or other
              third-party services.
            </p>

            <p>
              Third parties may independently collect information according
              to their own privacy policies.
            </p>

            <p>
              Goa Moments does not control the data practices of a third
              party merely because its service is linked through the Goa
              Moments platform.
            </p>
          </PolicySection>

          <PolicySection number="27" title="User Rights">
            <p>Subject to applicable law, users may request:</p>

            <BulletList
              items={[
                "Information about personal data collected.",
                "Correction of inaccurate information.",
                "Updating of incomplete information.",
                "Withdrawal of consent for optional processing.",
                "Deletion of eligible personal data.",
                "Removal from promotional communications.",
                "Assistance regarding a privacy complaint.",
              ]}
            />

            <p>
              Requests may be subject to reasonable identity verification.
            </p>
          </PolicySection>

          <PolicySection number="28" title="Changes to This Policy">
            <p>Goa Moments may update this Policy to reflect:</p>

            <BulletList
              items={[
                "New platform features.",
                "Changes to application permissions.",
                "New partner or payment integrations.",
                "Security improvements.",
                "Changes in applicable laws.",
                "Changes in data-processing practices.",
              ]}
            />

            <p>
              The updated Policy will be published with a revised “Last
              Updated” date.
            </p>

            <p>
              Where a material change affects users, Goa Moments may provide
              notice through the website, application, email, SMS or another
              appropriate method.
            </p>
          </PolicySection>

          <PolicySection number="29" title="Contact and Grievance Information">
            <p>
              For questions, complaints or requests relating to data
              collection and application permissions, users may contact:
            </p>

            <ContactList
              items={[
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Website: www.goamoments.com",
                "Privacy Email: [PRIVACY EMAIL ADDRESS]",
                "Data Deletion Email: [DATA DELETION EMAIL ADDRESS]",
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