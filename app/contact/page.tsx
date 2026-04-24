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
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Direct Member Support",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Concierge Email",
    value: "concierge@goamoments.com",
    href: "mailto:concierge@goamoments.com",
  },
  {
    icon: MapPin,
    label: "Support Location",
    value: "Panjim, Goa, India",
    href: "#",
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
    text: "Gold members receive trusted support for hotel and travel guidance, helping them use their membership confidently and save better.",
  },
  {
    icon: Star,
    title: "Platinum Priority Support",
    text: "Platinum members receive stronger support for hotels, restaurants, travel, accommodation, bars, clubs, and premium Goa experiences.",
  },
  {
    icon: Gem,
    title: "Diamond Elite Support",
    text: "Diamond members receive the strongest GOA MOMENTS attention, high-priority guidance, and faster assistance for premium access wherever available.",
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
                Whether you are buying a membership, planning your Goa experience,
                or need help using your benefits, our concierge team is ready to
                guide you with clear and reliable support.
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
                  Dedicated Assistance
                </p>

                <h2 className="mt-4 text-4xl font-light leading-tight text-foreground md:text-5xl">
                  Real Support for Your Goa Journey
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                  GOA MOMENTS is built to make members feel supported before,
                  during, and after their purchase. If you need help choosing the
                  right membership, understanding benefits, finding better venues,
                  or planning a premium Goa experience, our team is here to assist.
                </p>

                <div className="mt-8 rounded-sm border border-primary/20 bg-card/60 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Our goal is simple: you should never feel confused after
                      becoming a GOA MOMENTS member. You get access, guidance, and
                      a trusted support point whenever you need help.
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
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
                    </motion.a>
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
                  Tell Us What You Need
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share your requirement and our team will respond with the right
                  guidance. You can ask about membership, discounts, venue access,
                  hotel support, taxi support, restaurants, nightlife, or curated
                  experiences.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input type="text" placeholder="First Name" aria-label="First Name" className="border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary" />
                    <input type="text" placeholder="Last Name" aria-label="Last Name" className="border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary" />
                  </div>

                  <input type="email" placeholder="Email Address" aria-label="Email Address" className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary" />
                  <input type="tel" placeholder="Phone Number" aria-label="Phone Number" className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary" />

                  <label htmlFor="supportType" className="sr-only">
                    Support Type
                  </label>
                  <select id="supportType" name="supportType" className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary">
                    <option className="bg-background" value="">Select Support Type</option>
                    <option className="bg-background" value="membership">Membership Inquiry</option>
                    <option className="bg-background" value="benefits">Benefits / Discounts Support</option>
                    <option className="bg-background" value="travel">Hotel / Taxi / Travel Guidance</option>
                    <option className="bg-background" value="experience">Goa Experience Support</option>
                  </select>

                  <textarea rows={4} placeholder="Tell us about your requirement..." aria-label="Message" className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition focus:border-primary" />

                  <button type="submit" className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90">
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
                Special Member Contact Access
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-light leading-tight text-foreground md:text-5xl">
                Membership Card Holders Receive{" "}
                <span className="text-primary">Stronger Priority Support</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Once a customer becomes a GOA MOMENTS member, they are not treated
                like a normal visitor. Members receive special support contact
                access, dedicated email assistance, and stronger guidance for
                hotels, travel, dining, nightlife, and premium Goa experiences.
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
        Special Member Phone Access
      </p>
      <p className="mt-2 text-lg text-foreground">
        Available Only for Paid Members
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Membership card holders receive a private support contact after
        purchase, giving them faster guidance and stronger assistance whenever
        they need help.
      </p>
    </div>
  </div>

  <div className="flex gap-4 border border-primary/25 bg-background/40 p-5">
    <Mail className="mt-1 h-6 w-6 shrink-0 text-primary" />
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-primary">
        Special Member Email Access
      </p>
      <p className="mt-2 text-lg text-foreground">
        Shared Only After Membership Activation
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Paid members receive dedicated email support for benefit guidance,
        partner venue assistance, travel help, and premium GOA MOMENTS support.
      </p>
    </div>
  </div>
</div>
            <div className="mt-8 flex gap-3 border border-primary/20 bg-primary/10 p-5">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                GOA MOMENTS membership is not only about discounts. It is about
                feeling supported, guided, respected, and connected to better Goa
                experiences whenever you need help.
              </p>
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
                  When someone reaches GOA MOMENTS, they are not treated like a
                  normal inquiry. Our support is designed to guide members clearly
                  and help them feel confident about their Goa plans.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {supportPoints.map((point) => (
                  <div key={point} className="flex gap-3 border border-border bg-background/30 p-4">
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point}
                    </p>
                  </div>
                ))}

                <div className="flex gap-3 border border-border bg-background/30 p-4">
                  <Clock3 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Average response time: within 2–4 hours during business hours.
                  </p>
                </div>

                <div className="flex gap-3 border border-border bg-background/30 p-4">
                  <ConciergeBell className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Concierge-style support for a smoother Goa experience.
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