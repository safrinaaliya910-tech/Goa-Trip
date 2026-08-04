import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type SectionProps = { number: string; title: string; children: ReactNode };

function PolicySection({ number, title, children }: SectionProps) {
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
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function ContactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5">
      {items.map((item) => (
        <li key={item} className="font-medium text-foreground">{item}</li>
      ))}
    </ul>
  );
}

export default function CopyrightPolicy() {
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
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C5A059]">Goa Moments</p>
          <h1 className="mb-3 font-serif text-3xl font-medium uppercase tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Copyright Information and Intellectual Property Policy
          </h1>
          <p className="text-sm font-medium text-[#C5A059]">Last Updated: 2 August 2026</p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          <section className="space-y-4 rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-5 sm:p-7">
            <p>This Copyright Information and Intellectual Property Policy explains the ownership and permitted use of content available through the Goa Moments website, mobile application, membership platform and related digital services.</p>
            <p>Goa Moments is operated by LOTLAN EXPERT PRIVATE LIMITED, referred to in this Policy as “Goa Moments”, “Company”, “we”, “us” or “our”.</p>
            <p>By accessing or using Goa Moments, users agree to respect the intellectual-property rights of Goa Moments, its partner businesses, content creators and other third parties.</p>
          </section>

          <PolicySection number="1" title="Copyright Notice">
            <p>© 2026 LOTLAN EXPERT PRIVATE LIMITED. All Rights Reserved.</p>
            <p>Except where otherwise stated, the content available through Goa Moments is owned by, created for, licensed to or lawfully used by LOTLAN EXPERT PRIVATE LIMITED.</p>
            <p>Nothing on the Goa Moments platform should be interpreted as transferring ownership of any intellectual property to a user.</p>
          </PolicySection>

          <PolicySection number="2" title="Content Covered by This Policy">
            <p>This Policy applies to content including:</p>
            <BulletList items={[
              "Website text and written materials.",
              "Mobile-application content.",
              "Goa Moments logos and brand elements.",
              "Membership-card designs.",
              "Graphics and illustrations.",
              "Photographs and images.",
              "Videos and animations.",
              "Advertisements and promotional materials.",
              "Social-media creatives.",
              "Audio recordings.",
              "Icons and interface elements.",
              "Website and application layouts.",
              "Databases and collections.",
              "Software code and technical components.",
              "QR-code designs and membership-verification materials.",
              "Reports, presentations and business documents.",
              "Partner listings, descriptions and promotional content.",
              "Other original content published through Goa Moments.",
            ]} />
          </PolicySection>

          <PolicySection number="3" title="Ownership of Goa Moments Content">
            <p>Content created directly by Goa Moments or created for Goa Moments under an appropriate agreement may be owned by LOTLAN EXPERT PRIVATE LIMITED.</p>
            <p>Content provided by employees, designers, developers, photographers, agencies, freelancers or contractors will be owned or used according to the applicable employment, assignment or licensing agreement.</p>
            <p>Goa Moments may also use content owned by third parties under permission, licence, contractual authorisation or another lawful basis.</p>
          </PolicySection>

          <PolicySection number="4" title="Partner Business Content">
            <p>Hotels, restaurants, cafés, resorts, activity operators and other partner businesses may provide:</p>
            <BulletList items={[
              "Business names.", "Logos.", "Photographs.", "Videos.", "Menus.",
              "Property descriptions.", "Offer details.", "Price information.",
              "Promotional materials.", "Contact and location information.",
            ]} />
            <p>Ownership of this content remains with the relevant partner or original rights holder unless it has been legally transferred to Goa Moments.</p>
            <p>By submitting content to Goa Moments, a partner confirms that:</p>
            <BulletList items={[
              "It owns the content or has permission to use it.",
              "The content does not knowingly infringe another person’s rights.",
              "Goa Moments may display, reproduce, resize, format and promote the content for partnership and platform-related purposes.",
              "The necessary consent has been obtained from people identifiable in submitted photographs or videos.",
            ]} />
            <p>Goa Moments may remove partner content where ownership or permission cannot be reasonably verified.</p>
          </PolicySection>

          <PolicySection number="5" title="Limited Permission for Users">
            <p>Goa Moments grants users a limited, personal, non-exclusive, non-transferable and revocable permission to access and use the platform for lawful personal purposes.</p>
            <p>Users may:</p>
            <BulletList items={[
              "Browse publicly available information.",
              "View participating partner details.",
              "Access their membership information.",
              "Download an invoice, receipt or membership card intended for them.",
              "Share an official public Goa Moments page using the available sharing features.",
              "Use membership materials according to the Terms and Conditions.",
            ]} />
            <p>This permission does not give users ownership of Goa Moments content.</p>
          </PolicySection>

          <PolicySection number="6" title="Prohibited Use">
            <p>Without prior written permission, users must not:</p>
            <BulletList items={[
              "Copy or republish substantial website content.",
              "Download or collect content for commercial use.",
              "Reproduce Goa Moments graphics, photographs or videos.",
              "Modify or remove copyright notices.",
              "Copy the website or mobile-application design.",
              "Create an imitation of a Goa Moments membership card.",
              "Copy or manipulate membership QR codes.",
              "Sell, license or redistribute Goa Moments content.",
              "Use Goa Moments content in advertisements.",
              "Create misleading edited versions of official materials.",
              "Use automated tools to scrape content or partner data.",
              "Extract or reuse databases or partner collections.",
              "Reverse-engineer software except where legally permitted.",
              "Present Goa Moments content as their own.",
              "Use content to create a competing or misleading platform.",
              "Upload Goa Moments materials to stock-content or resale platforms.",
              "Use copyrighted content for training or operating another commercial system without appropriate permission.",
            ]} />
          </PolicySection>

          <PolicySection number="7" title="Goa Moments Name and Logo">
            <p>The names, logos, slogans, designs, membership symbols and other brand identifiers associated with Goa Moments may also be protected under trademark and other intellectual-property laws.</p>
            <p>Users must not:</p>
            <BulletList items={[
              "Pretend to represent Goa Moments.",
              "Create fake Goa Moments pages or accounts.",
              "Use the Goa Moments logo on unauthorised documents.",
              "Claim an unofficial partnership or endorsement.",
              "Register a confusingly similar business, domain or social-media identity.",
              "Collect payments using Goa Moments branding without authorisation.",
              "Produce counterfeit membership cards or merchandise.",
            ]} />
            <p>Permission to use the Goa Moments logo must be obtained in writing.</p>
          </PolicySection>

          <PolicySection number="8" title="User-Submitted Content">
            <p>Users may submit content such as:</p>
            <BulletList items={[
              "Reviews and ratings.", "Comments.", "Photographs.", "Enquiry messages.",
              "Feedback.", "Complaints.", "Support documents.", "Promotional-event submissions.",
            ]} />
            <p>Users continue to own content they lawfully created.</p>
            <p>By submitting content to Goa Moments, the user gives Goa Moments a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, display, format and use the content only as reasonably necessary to:</p>
            <BulletList items={[
              "Operate the platform.",
              "Publish an approved review.",
              "Process an enquiry.",
              "Resolve a complaint.",
              "Verify a transaction.",
              "Improve or promote Goa Moments services.",
              "Meet security and legal requirements.",
            ]} />
            <p>This permission ends when the content is deleted, except where continued retention is legally required or the content has already been included in lawful records or materials.</p>
          </PolicySection>

          <PolicySection number="9" title="User Responsibility">
            <p>A user who uploads or submits content confirms that:</p>
            <BulletList items={[
              "The content belongs to them or they have permission to use it.",
              "The content does not infringe copyright, trademark, privacy or publicity rights.",
              "Necessary consent has been obtained from identifiable individuals.",
              "The content is not copied from another website without permission.",
              "The submission is accurate and not intentionally misleading.",
              "The content does not contain illegal or prohibited material.",
            ]} />
            <p>Users may be responsible for claims or losses arising from content they submit without proper authority.</p>
          </PolicySection>

          <PolicySection number="10" title="Third-Party Content and Links">
            <p>The Goa Moments platform may contain:</p>
            <BulletList items={[
              "Partner-owned photographs and logos.",
              "Maps.",
              "Social-media content.",
              "Payment-gateway interfaces.",
              "Videos or content embedded from external platforms.",
              "Links to partner or third-party websites.",
            ]} />
            <p>Such content remains subject to the rights and policies of its respective owner.</p>
            <p>The presence of third-party content or a link does not mean Goa Moments owns that content.</p>
            <p>Users must obtain permission directly from the relevant rights holder before copying or commercially using third-party content.</p>
          </PolicySection>

          <PolicySection number="11" title="Permitted Legal Use">
            <p>Nothing in this Policy is intended to prevent a use that is expressly permitted under applicable law.</p>
            <p>Certain limited uses may be permitted for purposes such as private use, research, criticism, review or reporting current events, subject to the conditions and limitations of applicable law.</p>
            <p>A user should not assume that every educational, personal or non-commercial use is automatically permitted.</p>
            <p>Where there is uncertainty, permission should be obtained from the relevant copyright owner.</p>
          </PolicySection>

          <PolicySection number="12" title="Copyright Infringement Complaints">
            <p>A person who believes that content available on Goa Moments infringes their copyright may submit a written complaint to:</p>
            <ContactList items={["Copyright Email: [COPYRIGHT COMPLAINT EMAIL]"]} />
            <p>The complaint should contain:</p>
            <BulletList items={[
              "Full name of the copyright owner or authorised representative.",
              "Contact email address and telephone number.",
              "Description of the copyrighted work.",
              "Identification or link to the allegedly infringing content.",
              "Explanation of why the use is unauthorised.",
              "Evidence of ownership or authority to act for the owner.",
              "A statement that the complaint is submitted honestly and in good faith.",
              "A statement confirming that the information provided is accurate.",
              "Physical or electronic signature of the complainant.",
            ]} />
            <p>Incomplete complaints may require additional information before they can be reviewed.</p>
          </PolicySection>

          <PolicySection number="13" title="Review of Infringement Complaints">
            <p>After receiving a sufficiently detailed complaint, Goa Moments may:</p>
            <BulletList items={[
              "Acknowledge receipt of the complaint.",
              "Request additional ownership evidence.",
              "Temporarily restrict access to the disputed content.",
              "Contact the user or partner who submitted the content.",
              "Remove or disable access to the content.",
              "Restore the content where the complaint is unsupported.",
              "Preserve records required for a dispute or legal proceeding.",
              "Take action against repeated infringers.",
            ]} />
            <p>Removal of content does not necessarily mean that Goa Moments accepts legal liability or confirms that infringement occurred.</p>
          </PolicySection>

          <PolicySection number="14" title="Response From the Content Provider">
            <p>A user or partner whose content has been removed may submit a response containing:</p>
            <BulletList items={[
              "Their full name and contact information.",
              "Identification of the removed content.",
              "Evidence of ownership, licence or permission.",
              "An explanation of why the content is lawful.",
              "Any relevant agreement, invoice, licence or authorisation.",
              "A statement confirming that the information is accurate.",
              "Physical or electronic signature.",
            ]} />
            <p>Goa Moments may review the complaint and response before deciding whether the content should remain restricted or be restored.</p>
          </PolicySection>

          <PolicySection number="15" title="Repeat Infringement">
            <p>Goa Moments may warn, restrict, suspend or terminate the account of a user or partner who repeatedly:</p>
            <BulletList items={[
              "Uploads copyrighted content without permission.",
              "Submits counterfeit documents.",
              "Copies content from other platforms.",
              "Ignores previous infringement warnings.",
              "Misrepresents ownership.",
              "Submits fraudulent copyright complaints.",
            ]} />
            <p>Serious or deliberate infringement may result in immediate removal or account termination.</p>
          </PolicySection>

          <PolicySection number="16" title="False Copyright Complaints">
            <p>Users must not submit a copyright complaint:</p>
            <BulletList items={[
              "To harass another person.",
              "To remove a genuine review merely because it is negative.",
              "For content they do not own or represent.",
              "Using fabricated ownership documents.",
              "To gain an unfair commercial advantage.",
              "While knowingly providing false or misleading information.",
            ]} />
            <p>Goa Moments may reject false or abusive complaints and take appropriate action against the complainant’s account.</p>
          </PolicySection>

          <PolicySection number="17" title="Requesting Permission">
            <p>Anyone wishing to use Goa Moments content for:</p>
            <BulletList items={[
              "Media publication.",
              "Advertising.",
              "Commercial promotion.",
              "Education or training materials.",
              "Events or presentations.",
              "Business partnerships.",
              "Printed publications.",
              "Video production.",
              "Merchandise.",
              "Another website or application.",
            ]} />
            <p>must request written permission by contacting:</p>
            <ContactList items={["Licensing Email: [LICENSING EMAIL ADDRESS]"]} />
            <p>The request should identify:</p>
            <BulletList items={[
              "The specific content requested.",
              "The intended purpose.",
              "Where the content will appear.",
              "The duration of use.",
              "The geographic area of use.",
              "Whether the use is commercial.",
              "Any proposed modifications.",
            ]} />
            <p>Permission is valid only when granted in writing by an authorised representative of LOTLAN EXPERT PRIVATE LIMITED.</p>
          </PolicySection>

          <PolicySection number="18" title="No Implied Licence">
            <p>Access to the Goa Moments website or mobile application does not create an implied licence to copy, reproduce or commercially use its content.</p>
            <p>Failure by Goa Moments to immediately enforce an intellectual-property right does not mean that the right has been waived.</p>
          </PolicySection>

          <PolicySection number="19" title="Changes to This Policy">
            <p>Goa Moments may update this Policy to reflect:</p>
            <BulletList items={[
              "Changes in platform features.",
              "New types of content.",
              "Changes in partnerships.",
              "Legal or regulatory developments.",
              "New copyright-reporting procedures.",
            ]} />
            <p>The updated version will be published with a revised “Last Updated” date.</p>
          </PolicySection>

          <PolicySection number="20" title="Contact Information">
            <p>For copyright and intellectual-property matters:</p>
            <ContactList items={[
              "Company: LOTLAN EXPERT PRIVATE LIMITED",
              "Brand: Goa Moments",
              "Website: www.goamoments.com",
              "Copyright Complaints: [COPYRIGHT COMPLAINT EMAIL]",
              "Licensing Requests: [LICENSING EMAIL ADDRESS]",
              "Customer Support: [CUSTOMER-SUPPORT NUMBER]",
              "Grievance Officer: [FULL NAME]",
              "Registered Office: [COMPLETE REGISTERED-OFFICE ADDRESS]",
            ]} />
          </PolicySection>
        </div>
      </article>
    </main>
  );
}
