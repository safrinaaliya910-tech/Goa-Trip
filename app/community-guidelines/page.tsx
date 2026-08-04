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

export default function CommunityGuidelines() {
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
            Community Guidelines
          </h1>

          <p className="text-sm font-medium text-[#C5A059]">
            Last Updated: 2 August 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <section className="space-y-4 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5 sm:p-7">
            <p>
              Goa Moments is committed to maintaining a safe, respectful,
              trustworthy and welcoming platform for travellers, members,
              partner businesses and website visitors.
            </p>

            <p>
              These Community Guidelines explain the standards that all
              users must follow while using the Goa Moments website, mobile
              application, membership services, partner listings, reviews,
              comments, enquiries, customer-support channels and related
              services.
            </p>

            <p>
              By using Goa Moments, you agree to follow these Guidelines
              together with our Terms and Conditions, Privacy Policy and
              other applicable policies.
            </p>
          </section>

          <PolicySection number="1" title="Who These Guidelines Apply To">
            <p>These Guidelines apply to:</p>

            <BulletList
              items={[
                "Website visitors.",
                "Registered users.",
                "Goa Moments members.",
                "Partner businesses.",
                "Employees and authorised representatives of partner businesses.",
                "Users submitting reviews, ratings, comments or enquiries.",
                "Users communicating with Goa Moments customer support.",
                "Users participating in promotional campaigns, events or community activities.",
              ]}
            />
          </PolicySection>

          <PolicySection number="2" title="Be Respectful">
            <p>All users must communicate respectfully with:</p>

            <BulletList
              items={[
                "Other users.",
                "Goa Moments employees.",
                "Partner-business staff.",
                "Customer-support representatives.",
                "Hotel, restaurant, activity and tourism-service staff.",
                "Other members of the public.",
              ]}
            />

            <p>Users must not post or send content that includes:</p>

            <BulletList
              items={[
                "Harassment.",
                "Bullying.",
                "Threats.",
                "Personal abuse.",
                "Humiliation.",
                "Hate speech.",
                "Discriminatory language.",
                "Intimidation.",
                "Repeated unwanted communication.",
                "Offensive or degrading remarks.",
              ]}
            />

            <p>
              Disagreement is allowed, but personal attacks and abusive
              behaviour are not permitted.
            </p>
          </PolicySection>

          <PolicySection
            number="3"
            title="No Hateful or Discriminatory Content"
          >
            <p>
              Goa Moments does not allow content that attacks, insults or
              discriminates against a person or group based on
              characteristics such as:
            </p>

            <BulletList
              items={[
                "Race.",
                "Ethnicity.",
                "Nationality.",
                "Religion.",
                "Caste.",
                "Gender.",
                "Disability.",
                "Language.",
                "Age.",
                "Sexual orientation.",
                "Place of origin.",
                "Economic or social background.",
              ]}
            />

            <p>
              Users must not encourage exclusion, hatred, hostility or
              violence against any individual or group.
            </p>
          </PolicySection>

          <PolicySection number="4" title="No Threats or Violent Content">
            <p>Users must not post, send or promote:</p>

            <BulletList
              items={[
                "Threats of physical harm.",
                "Encouragement of violence.",
                "Content glorifying violent acts.",
                "Instructions intended to harm another person.",
                "Threats against partner staff, users or Goa Moments representatives.",
                "Content that creates a serious safety risk.",
              ]}
            />

            <p>
              Where there is a credible threat to safety, Goa Moments may
              suspend the account and report the matter to the appropriate
              authorities.
            </p>
          </PolicySection>

          <PolicySection number="5" title="Honest and Accurate Information">
            <p>
              Users must provide truthful and accurate information while:
            </p>

            <BulletList
              items={[
                "Registering an account.",
                "Purchasing a membership.",
                "Submitting a review.",
                "Contacting customer support.",
                "Reporting a partner issue.",
                "Requesting a refund.",
                "Providing membership or identity-verification information.",
                "Participating in offers or promotions.",
              ]}
            />

            <p>Users must not:</p>

            <BulletList
              items={[
                "Use a false identity.",
                "Impersonate another person.",
                "Submit fake complaints.",
                "Create fabricated evidence.",
                "Upload edited payment screenshots.",
                "Misrepresent a transaction.",
                "Provide false partner information.",
                "Make misleading claims about Goa Moments or its partners.",
              ]}
            />
          </PolicySection>

          <PolicySection number="6" title="Reviews and Ratings">
            <p>
              Reviews and ratings must be based on a genuine personal
              experience.
            </p>

            <p>Reviews should be:</p>

            <BulletList
              items={[
                "Honest.",
                "Relevant.",
                "Respectful.",
                "Based on actual service received.",
                "Specific enough to help other users.",
                "Free from personal attacks.",
              ]}
            />

            <p>Users must not submit:</p>

            <BulletList
              items={[
                "Fake reviews.",
                "Paid or manipulated reviews.",
                "Reviews for a business they did not visit or use.",
                "Multiple reviews intended to unfairly increase or reduce a rating.",
                "Reviews posted by competitors to damage another business.",
                "Reviews containing threats, abuse or private information.",
                "Reviews demanding money, discounts or free services in exchange for removal.",
              ]}
            />

            <p>
              Partner businesses must not pressure users to submit only
              positive reviews.
            </p>

            <p>
              Partners must not offer rewards in exchange for false,
              misleading or manipulated reviews.
            </p>
          </PolicySection>

          <PolicySection number="7" title="Prohibited Content">
            <p>
              Users must not post, upload, share or send content containing:
            </p>

            <BulletList
              items={[
                "Illegal material.",
                "Fraudulent information.",
                "Obscene or sexually explicit content.",
                "Graphic violent content.",
                "Harassing or threatening material.",
                "Malware, viruses or harmful files.",
                "Spam.",
                "Unauthorised advertisements.",
                "False government-approval claims.",
                "Counterfeit documents.",
                "Stolen personal information.",
                "Content promoting criminal activity.",
                "Content that violates another person’s intellectual-property rights.",
                "Content intended to deceive users or partner businesses.",
              ]}
            />
          </PolicySection>

          <PolicySection number="8" title="Privacy and Personal Information">
            <p>Users must respect the privacy of others.</p>

            <p>Users must not publicly post another person’s:</p>

            <BulletList
              items={[
                "Phone number.",
                "Email address.",
                "Home address.",
                "Identity documents.",
                "Payment details.",
                "Bank details.",
                "Private photographs.",
                "Membership information.",
                "QR code.",
                "Booking details.",
                "Location information.",
                "Private conversations.",
              ]}
            />

            <p>
              Users should not share their own OTP, password, UPI PIN, CVV
              or complete payment-card details with anyone, including Goa
              Moments support staff.
            </p>
          </PolicySection>

          <PolicySection number="9" title="Membership Misuse">
            <p>
              Goa Moments memberships are intended for use by the registered
              member unless otherwise stated.
            </p>

            <p>Users must not:</p>

            <BulletList
              items={[
                "Sell or rent a membership.",
                "Share a membership with unauthorised persons.",
                "Duplicate a membership card.",
                "Share membership QR codes publicly.",
                "Use edited screenshots for verification.",
                "Create fake membership IDs.",
                "Use another member’s identity.",
                "Misuse partner discounts.",
                "Attempt multiple redemptions where an offer allows only one.",
                "Use fake-location tools to bypass location verification.",
                "Use membership benefits for unauthorised commercial resale.",
              ]}
            />

            <p>
              Membership misuse may result in suspension or permanent
              cancellation.
            </p>
          </PolicySection>

          <PolicySection number="10" title="Partner Offer Misuse">
            <p>Users must follow the terms of each partner offer.</p>

            <p>Users must not:</p>

            <BulletList
              items={[
                "Demand a discount that is not listed.",
                "Force a partner to combine multiple offers.",
                "Misrepresent eligibility.",
                "Threaten staff when an offer is unavailable.",
                "Use expired offers.",
                "Alter offer screenshots.",
                "Claim a refund from Goa Moments for a direct partner purchase without valid grounds.",
                "Create a false complaint to obtain free products or services.",
              ]}
            />

            <p>
              Partners must clearly communicate offer restrictions,
              availability, exclusions and additional charges before the
              transaction is completed.
            </p>
          </PolicySection>

          <PolicySection
            number="11"
            title="Partner Business Responsibilities"
          >
            <p>Partner businesses using Goa Moments must:</p>

            <BulletList
              items={[
                "Provide accurate business information.",
                "Honour valid offers that they have officially approved.",
                "Treat Goa Moments members respectfully.",
                "Maintain required licences and permissions.",
                "Provide services safely and lawfully.",
                "Display correct prices and applicable charges.",
                "Avoid misleading advertisements.",
                "Keep contact details and operating hours updated.",
                "Notify Goa Moments about changes to offers.",
                "Protect user information.",
                "Handle customer complaints professionally.",
              ]}
            />

            <p>
              Partners must not falsely claim that Goa Moments guarantees or
              directly operates their service.
            </p>
          </PolicySection>

          <PolicySection
            number="12"
            title="No Spam or Unauthorised Promotion"
          >
            <p>Users must not use the Goa Moments platform to:</p>

            <BulletList
              items={[
                "Send repeated promotional messages.",
                "Advertise unrelated products.",
                "Collect user contact details for marketing.",
                "Post referral links without permission.",
                "Promote unrelated businesses.",
                "Send mass messages.",
                "Create fake enquiries.",
                "Use automated bots.",
                "Scrape website or partner data.",
                "Distribute malware or suspicious links.",
              ]}
            />

            <p>
              Promotional content may be posted only with written permission
              from Goa Moments.
            </p>
          </PolicySection>

          <PolicySection number="13" title="Intellectual Property">
            <p>
              Users must post only content they own or have permission to
              use.
            </p>

            <p>Users must not copy, upload or distribute:</p>

            <BulletList
              items={[
                "Copyrighted photographs without permission.",
                "Partner logos without authority.",
                "Goa Moments branding without permission.",
                "Videos owned by another person.",
                "Trademarks belonging to another company.",
                "Website content copied from another platform.",
                "Fake or modified Goa Moments documents.",
              ]}
            />

            <p>
              By submitting content to Goa Moments, users confirm that they
              have the right to submit it.
            </p>
          </PolicySection>

          <PolicySection number="14" title="Fraud and Deceptive Activity">
            <p>
              Goa Moments does not allow fraudulent or deceptive activity.
            </p>

            <p>Prohibited activities include:</p>

            <BulletList
              items={[
                "Fake payment confirmations.",
                "False refund requests.",
                "Chargeback fraud.",
                "Multiple fake accounts.",
                "Identity theft.",
                "Membership duplication.",
                "Counterfeit documents.",
                "False complaints.",
                "Fake partner listings.",
                "Misleading promotional offers.",
                "Unauthorised collection of user payments.",
                "Pretending to be an employee or authorised representative of Goa Moments.",
              ]}
            />

            <p>
              Suspected fraud may be investigated and reported to banks,
              payment providers or authorities where appropriate.
            </p>
          </PolicySection>

          <PolicySection
            number="15"
            title="Safety During Travel and Activities"
          >
            <p>
              Users must follow all safety instructions provided by hotels,
              restaurants, transport providers and activity operators.
            </p>

            <p>Users should:</p>

            <BulletList
              items={[
                "Check whether an activity is appropriate for their age and health.",
                "Use required safety equipment.",
                "Follow local laws and restrictions.",
                "Avoid entering restricted areas.",
                "Verify weather and operational conditions.",
                "Follow trained staff instructions.",
                "Avoid consuming substances that may affect safe participation.",
                "Inform the service provider about relevant medical or safety concerns.",
              ]}
            />

            <p>
              Goa Moments may remove or suspend a partner listing where
              there is a verified serious safety concern.
            </p>
          </PolicySection>

          <PolicySection
            number="16"
            title="Customer-Support Communication"
          >
            <p>
              Users contacting Goa Moments support must communicate
              respectfully.
            </p>

            <p>Users must not:</p>

            <BulletList
              items={[
                "Threaten support employees.",
                "Use abusive or offensive language.",
                "Repeatedly contact multiple channels for the same issue after receiving a response.",
                "Submit false evidence.",
                "Demand unauthorised payments or benefits.",
                "Impersonate another person.",
                "Share sensitive banking credentials.",
              ]}
            />

            <p>
              Goa Moments may restrict support-channel access where a user
              repeatedly abuses staff or misuses the support system.
            </p>
          </PolicySection>

          <PolicySection number="17" title="Reporting a Violation">
            <p>
              Users may report content, behaviour, partner issues or
              suspected fraud by contacting:
            </p>

            <ContactList
              items={[
                "Email: [COMMUNITY SUPPORT EMAIL]",
                "Phone: [CUSTOMER-SUPPORT NUMBER]",
              ]}
            />

            <p>A report should include:</p>

            <BulletList
              items={[
                "Name of the user or business involved.",
                "Description of the issue.",
                "Date and time of the incident.",
                "Relevant membership or order number.",
                "Screenshots or supporting evidence, where available.",
                "Contact details for follow-up.",
              ]}
            />

            <p>Users should not submit knowingly false reports.</p>
          </PolicySection>

          <PolicySection number="18" title="How Reports Are Reviewed">
            <p>Goa Moments may review:</p>

            <BulletList
              items={[
                "Reported content.",
                "User account activity.",
                "Membership usage records.",
                "Payment records.",
                "Partner communications.",
                "Support conversations.",
                "Technical logs.",
                "Other relevant information.",
              ]}
            />

            <p>
              Where necessary, Goa Moments may ask the reporting user,
              reported user or partner business for additional information.
            </p>

            <p>
              Goa Moments will make decisions based on the available
              evidence, applicable policies and seriousness of the issue.
            </p>
          </PolicySection>

          <PolicySection number="19" title="Actions Goa Moments May Take">
            <p>Where these Guidelines are violated, Goa Moments may:</p>

            <BulletList
              items={[
                "Issue a warning.",
                "Remove content.",
                "Reject or edit a review.",
                "Restrict account features.",
                "Temporarily suspend an account.",
                "Cancel a membership.",
                "Remove a partner listing.",
                "Suspend a partner offer.",
                "Block future registrations.",
                "Restrict customer-support access.",
                "Preserve evidence.",
                "Report suspected illegal activity.",
                "Cooperate with banks, payment providers or lawful authorities.",
              ]}
            />

            <p>
              The action taken will depend on the seriousness, frequency and
              impact of the violation.
            </p>
          </PolicySection>

          <PolicySection number="20" title="Review Removal">
            <p>Goa Moments may remove or restrict a review where it:</p>

            <BulletList
              items={[
                "Is fake or misleading.",
                "Contains abuse or threats.",
                "Reveals private information.",
                "Is unrelated to the service.",
                "Includes promotional spam.",
                "Violates intellectual-property rights.",
                "Contains discriminatory content.",
                "Is posted by a competitor in bad faith.",
                "Demands money or benefits.",
                "Is part of review manipulation.",
                "Violates applicable law or these Guidelines.",
              ]}
            />

            <p>
              Goa Moments will not ordinarily remove a genuine negative
              review only because it is critical of a partner.
            </p>
          </PolicySection>

          <PolicySection
            number="21"
            title="Account Suspension and Appeals"
          >
            <p>
              A user or partner whose account is suspended may contact Goa
              Moments to request a review.
            </p>

            <p>The appeal should include:</p>

            <BulletList
              items={[
                "Registered name.",
                "Account or membership ID.",
                "Reason for the appeal.",
                "Supporting evidence.",
                "Explanation of why the decision should be reconsidered.",
              ]}
            />

            <p>
              Goa Moments may uphold, modify or reverse the original
              decision after reviewing the available information.
            </p>
          </PolicySection>

          <PolicySection number="22" title="Emergency and Illegal Activity">
            <p>Goa Moments is not an emergency-response service.</p>

            <p>
              Where a user faces an immediate safety threat, they should
              contact local emergency services or the appropriate authority.
            </p>

            <p>Goa Moments may report content or conduct involving:</p>

            <BulletList
              items={[
                "Credible threats.",
                "Fraud.",
                "Identity theft.",
                "Child exploitation.",
                "Serious harassment.",
                "Cyberattacks.",
                "Financial crime.",
                "Other suspected illegal activity.",
              ]}
            />
          </PolicySection>

          <PolicySection number="23" title="Changes to These Guidelines">
            <p>
              Goa Moments may update these Community Guidelines to reflect:
            </p>

            <BulletList
              items={[
                "New platform features.",
                "New membership services.",
                "Changes in partner operations.",
                "Safety requirements.",
                "Legal or regulatory changes.",
                "Community feedback.",
              ]}
            />

            <p>
              The latest version will be published on the Goa Moments
              website with an updated date.
            </p>
          </PolicySection>

          <PolicySection number="24" title="Contact Information">
            <p>For questions about these Community Guidelines:</p>

            <ContactList
              items={[
                "Company: LOTLAN EXPERT PRIVATE LIMITED",
                "Brand: Goa Moments",
                "Website: www.goamoments.com",
                "Email: [COMMUNITY SUPPORT EMAIL]",
                "Phone: [CUSTOMER-SUPPORT NUMBER]",
                "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
              ]}
            />
          </PolicySection>
        </div>
      </article>
    </main>
  );
}