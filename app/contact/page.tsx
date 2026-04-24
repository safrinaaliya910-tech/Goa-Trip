"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Clock3,
  ConciergeBell,
  BadgeCheck,
  Crown,
  Gem,
  Star,
  Sparkles,
  Headphones,
  LockKeyhole,
  CreditCard,
} from "lucide-react";

const publicContactInfo = [
  {
    icon: Mail,
    label: "General Inquiry",
    value: "coincierge@goamoments.com",
  },
  {
    icon: Phone,
    label: "Membership Questions",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    label: "Support Location",
    value: "Panjim, Goa, India",
  },
];

const supportPoints = [
  "Membership guidance and plan-related support",
  "Hotel, restaurant, taxi, and travel recommendations",
  "Help understanding member benefits and venue savings",
  "Support for curated Goa experiences and premium access",
];

const memberSupport = [
  {
    icon: Crown,
    title: "Gold Member Support",
    text: "Gold members receive trusted support for hotel and travel guidance. It is ideal for members who want smart savings, simple access, and reliable help after purchase.",
  },
  {
    icon: Star,
    title: "Platinum Priority Support",
    text: "Platinum members receive stronger support for hotels, restaurants, travel, accommodation, bars, clubs, and premium Goa experiences with wider lifestyle assistance.",
  },
  {
    icon: Gem,
    title: "Diamond Elite Support",
    text: "Diamond members receive the strongest GOA MOMENTS support, high-priority guidance, faster assistance, and premium attention wherever member priority access is available.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute left-[-150px] top-[40%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-[-150px] top-[58%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <section className="relative h-[48vh] min-h-[380px] overflow-hidden">
          <Image
            src="/images/contact-hero.jpg"
            alt="GOA MOMENTS concierge support"
            fill
            className="object-cover opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/72 to-background" />

          <div className="relative flex h-full items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.38em] text-primary">
                GOA MOMENTS SUPPORT
              </p>

              <h1 className="mt-6 text-5xl font-light text-foreground md:text-7xl">
                We’re Here to Support You
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Whether you are exploring GOA MOMENTS, buying a membership, or
                planning your Goa experience, our team is here to guide you with
                clear and reliable support.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-14 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Public Assistance
                </p>

                <h2 className="mt-4 text-4xl font-light leading-tight text-foreground md:text-5xl">
                  General Support for Every Visitor
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                  This contact page is open for everyone. Even if you have not
                  purchased a membership yet, you can ask questions about GOA
                  MOMENTS, membership plans, benefits, discounts, venue access,
                  support process, and how the card works.
                </p>

                <div className="mt-8 rounded-sm border border-primary/20 bg-card/60 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Visitors can use the form on the right for general doubts.
                      Paid members receive separate special contact access after
                      membership activation.
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  {publicContactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group flex items-center gap-5 border border-border bg-card/50 p-5 transition hover:border-primary"
                    >
                      <div className="flex h-12 w-12 items-center justify-center border border-primary/25">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="mt-1 text-lg text-foreground transition group-hover:text-primary">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="border border-border bg-card/60 p-7 md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Send a Message
                </p>
                <h3 className="mt-4 text-3xl font-light text-foreground">
                  Ask Anything About GOA MOMENTS
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  This form is for all users — visitors, interested customers,
                  and people who want to understand GOA MOMENTS before buying.
                  Ask about plans, discounts, member access, hotels, taxi
                  support, restaurants, nightlife, or curated experiences.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      aria-label="First Name"
                      className="border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      aria-label="Last Name"
                      className="border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />

                  <label htmlFor="supportType" className="sr-only">
                    Support Type
                  </label>
                  <select
                    id="supportType"
                    name="supportType"
                    className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  >
                    <option className="bg-background" value="">
                      Select Support Type
                    </option>
                    <option className="bg-background" value="membership">
                      Membership Inquiry
                    </option>
                    <option className="bg-background" value="benefits">
                      Benefits / Discounts Support
                    </option>
                    <option className="bg-background" value="travel">
                      Hotel / Taxi / Travel Guidance
                    </option>
                    <option className="bg-background" value="experience">
                      Goa Experience Support
                    </option>
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    aria-label="Message"
                    className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary"
                  />

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-10">
          <div className="mx-auto max-w-7xl border border-primary/30 bg-[linear-gradient(135deg,rgba(212,175,55,0.14),rgba(0,0,0,0.65),rgba(212,175,55,0.06))] p-6 shadow-[0_0_70px_rgba(212,175,55,0.13)] md:p-10">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Paid Member Contact Access
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-light leading-tight text-foreground md:text-5xl">
                Special Support Opens{" "}
                <span className="text-primary">After Membership Purchase</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                When a customer buys Gold, Platinum, or Diamond membership, they
                provide their email and phone number during payment. GOA MOMENTS
                uses that same registered email and phone number to identify the
                member, confirm membership access, and provide special support
                information privately.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {memberSupport.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border border-primary/25 bg-background/35 p-6"
                >
                  <item.icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-5 text-2xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="flex gap-4 border border-primary/25 bg-background/40 p-5">
                <Headphones className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Private Member Phone Access
                  </p>
                  <p className="mt-2 text-lg text-foreground">
                    Shared Only After Payment Confirmation
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Paid members receive special contact access privately after
                    activation. This keeps member support exclusive and prevents
                    public misuse of premium support channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border border-primary/25 bg-background/40 p-5">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Registered Email & Phone Verification
                  </p>
                  <p className="mt-2 text-lg text-foreground">
                    Support Uses Payment Details
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The email and phone number entered during payment become the
                    member’s support identity. Using those details, the member
                    can request benefit guidance, venue support, and membership
                    information anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <div className="flex gap-3 border border-primary/20 bg-primary/10 p-5">
                <CreditCard className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  After purchase, the member’s card plan, email, phone number,
                  and membership ID help GOA MOMENTS identify and support them
                  correctly.
                </p>
              </div>

              <div className="flex gap-3 border border-primary/20 bg-primary/10 p-5">
                <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Special phone and email support are not shown publicly. They
                  are provided only to activated members for secure premium
                  assistance.
                </p>
              </div>

              <div className="flex gap-3 border border-primary/20 bg-primary/10 p-5">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Member support is lifetime-access oriented, helping card
                  holders receive guidance, confidence, and premium assistance
                  whenever needed.
                </p>
              </div>
            </div>
          </div>
        </section>
                <section className="relative px-6 pb-10">
          <div className="mx-auto max-w-7xl border border-primary/40 bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.78),rgba(212,175,55,0.08))] p-6 shadow-[0_0_90px_rgba(212,175,55,0.18)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-primary">
                  Contact Access Difference
                </p>
                <h2 className="mt-4 text-4xl font-light leading-tight text-foreground md:text-5xl">
                  Same Contact Page.{" "}
                  <span className="text-primary">Different Support Access.</span>
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Everyone can contact GOA MOMENTS for general enquiries. But
                  special support information, priority guidance, and member-only
                  assistance are provided only to customers who have purchased a
                  GOA MOMENTS membership card.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-primary/25 bg-background/40 p-5">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-2xl font-light text-foreground">
                    General Enquiry Contact
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Non-members can contact us anytime to ask about membership
                    plans, pricing, benefits, discounts, how GOA MOMENTS works,
                    and general website-related doubts.
                  </p>
                </div>

                <div className="border border-primary/25 bg-background/40 p-5">
                  <LockKeyhole className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-2xl font-light text-foreground">
                    Member-Only Support
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Only paid members receive special support details,
                    priority information, private guidance, and membership-based
                    assistance after their card is activated.
                  </p>
                </div>

                <div className="border border-primary/25 bg-background/40 p-5 md:col-span-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-2xl font-light text-foreground">
                    Verified Through Payment Details
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    The email address and phone number given during payment are
                    used to identify the member. Based on those details, GOA
                    MOMENTS provides lifetime membership support information,
                    benefit guidance, and stronger assistance according to the
                    purchased plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-10">
          <div className="mx-auto max-w-7xl border border-primary/20 bg-card/50 p-6 md:p-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  What We Help With
                </p>
                <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
                  You Get More Than a Contact Form
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Visitors can ask general questions through the public contact
                  form. Paid members receive stronger, private support based on
                  the email and phone number used while buying the membership
                  card.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {supportPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 border border-border bg-background/30 p-4"
                  >
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point}
                    </p>
                  </div>
                ))}

                <div className="flex gap-3 border border-border bg-background/30 p-4">
                  <Clock3 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    General inquiries are handled separately from paid member
                    priority support.
                  </p>
                </div>

                <div className="flex gap-3 border border-border bg-background/30 p-4">
                  <ConciergeBell className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Paid members receive concierge-style support for a smoother
                    Goa experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}