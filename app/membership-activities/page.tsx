"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  BadgeCheck,
  ConciergeBell,
  Hotel,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TicketPercent,
  UtensilsCrossed,
  HelpCircle,
  ChevronDown,
  Crown,
  Gem,
  Users,
  Plane,
  Martini,
  Zap,
  Check,
  LockKeyhole,
} from "lucide-react";

const supportPhone = "+91 98765 43210";
const supportEmail = "support@goamoments.com";

const benefits = [
  {
    icon: TicketPercent,
    title: "10%–70% Venue Savings",
    description:
      "Enjoy member-only savings at selected hotels, restaurants, nightlife spots, cafés, travel partners, and curated lifestyle venues across Goa.",
  },
  {
    icon: BadgeCheck,
    title: "Lifetime Accessibility",
    description:
      "GOA MOMENTS is designed as a long-term lifestyle membership, giving you continued access to premium support and member-first guidance.",
  },
  {
    icon: ConciergeBell,
    title: "Strong GOA MOMENTS Support",
    description:
      "From planning where to stay to choosing where to dine, our support helps members make better decisions with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Premium Guidance",
    description:
      "We help you discover suitable venues, better experiences, and premium choices instead of leaving you to search alone.",
  },
];

const detailedMemberships = [
  {
    name: "Diamond Membership",
    icon: Gem,
    badge: "Highest Priority",
    title: "The Most Powerful GOA MOMENTS Access",
    description:
      "Diamond is created for members who want the highest level of comfort, strongest support, and first preference wherever possible. This is the membership for people who do not want to wait, search, or compromise. Diamond members receive premium attention and stronger guidance across Goa experiences.",
    access: "Up to 8 members can use the card accessibility",
    support: "Strongest GOA MOMENTS support among all memberships",
    highlight:
      "Best for VIP travellers, premium families, luxury groups, business guests, and people who want top-class Goa treatment.",
    points: [
      "Discounts across hotels, restaurants, travel, accommodation, bars, clubs, nightlife, cafés, and selected premium venues",
      "Up to 10%–70% savings at selected partner places",
      "High priority and first preference wherever partner access allows",
      "Strongest support for choosing places, planning experiences, and using membership benefits",
      "Premium guidance so members feel confident, respected, and supported",
      "Designed for people who want the best Goa lifestyle access without confusion",
    ],
  },
  {
    name: "Platinum Membership",
    icon: Star,
    badge: "Most Balanced",
    title: "Bigger Access For Families, Groups & Regular Goa Visitors",
    description:
      "Platinum is a powerful membership for members who want more categories, better comfort, and wider Goa access. It gives more value than Gold and stronger support for people who want to enjoy hotels, restaurants, travel, accommodation, bars, clubs, and premium places with confidence.",
    access: "Up to 8 members can use the card accessibility",
    support: "Stronger support than Gold membership",
    highlight:
      "Best for families, groups, frequent visitors, premium travellers, and people who want wider Goa benefits.",
    points: [
      "Discounts at hotels, restaurants, travel partners, accommodation, bars, clubs, and selected lifestyle venues",
      "Up to 10%–70% savings at selected partner places",
      "Better category coverage than Gold membership",
      "Premium support for choosing where to stay, dine, travel, and enjoy",
      "A strong value membership for people who want more access without going to the highest tier",
      "Perfect for members who visit Goa often and want reliable benefits every time",
    ],
  },
  {
    name: "Gold Membership",
    icon: Crown,
    badge: "Smart Entry",
    title: "Smart Savings For Hotels & Travel",
    description:
      "Gold is the perfect starting membership for people who want to experience GOA MOMENTS benefits with smart savings and reliable support. It is simple, useful, and ideal for smaller groups who mainly need hotel and travel benefits.",
    access: "Up to 4 members can use the card accessibility",
    support: "Reliable GOA MOMENTS support included",
    highlight:
      "Best for couples, solo travellers, small families, and smart visitors who want premium savings.",
    points: [
      "Hotels and travel benefits included",
      "Up to 10%–70% discounts at selected partners",
      "Useful support for basic stay and travel guidance",
      "Great entry-level membership for people starting their GOA MOMENTS journey",
      "Perfect for small groups who want savings without complexity",
      "A smart card for people who want value, comfort, and trusted guidance",
    ],
  },
];

const venues = [
  "Luxury Hotels & Resorts",
  "Beach Clubs",
  "Premium Restaurants",
  "Nightlife Venues",
  "Travel & Taxi Assistance",
  "Curated Goa Experiences",
];

const reviews = [
  {
    name: "Aarav Mehta",
    text: "GOA MOMENTS made my Goa trip feel premium. The membership support helped me choose better places and save more.",
  },
  {
    name: "Rhea Fernandes",
    text: "It felt like having a luxury local guide. The discounts are good, but the support is what makes it truly valuable.",
  },
  {
    name: "Naina Joseph",
    text: "The membership feels classy, useful, and reliable. Perfect for people who want better Goa experiences.",
  },
];

const faqs = [
  {
    question: "How does GOA MOMENTS support members?",
    answer:
      "GOA MOMENTS helps members with hotel suggestions, restaurant guidance, taxi and travel assistance, nightlife recommendations, and premium Goa experience planning.",
  },
  {
    question: "Can I get help after buying the membership?",
    answer:
      "Yes. After buying the membership, members can contact GOA MOMENTS support for guidance on where to use the membership and how to get better value across selected venues.",
  },
  {
    question: "Are discounts available everywhere in Goa?",
    answer:
      "Discounts are available only at selected partner venues and may vary based on venue, category, timing, availability, and offer conditions.",
  },
  {
    question: "What kind of discounts can members get?",
    answer:
      "Members can access selected venue-based benefits ranging from 10% to 70%, depending on the partner venue and active membership offer.",
  },
  {
    question: "Is GOA MOMENTS only a discount card?",
    answer:
      "No. GOA MOMENTS is designed as a premium lifestyle membership with savings, guidance, concierge-style support, and curated Goa recommendations.",
  },
  {
    question: "Why should I buy the membership?",
    answer:
      "The membership helps you save money, discover better places, avoid confusion, and enjoy Goa with stronger support from the GOA MOMENTS team.",
  },
];

export default function MembershipActivitiesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1500px] overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-1/2 top-0 h-full w-[90%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18),rgba(212,175,55,0.08)_38%,transparent_72%)]" />
        <div className="absolute left-[3%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute right-[3%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute left-[8%] top-[36%] h-[24rem] w-[24rem] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-[8%] top-[48%] h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-3xl" />
      </div>

      <Navigation />

      <section className="relative px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.16]">
            <Image
              src="/images/membership-hero.jpg"
              alt="GOA MOMENTS membership activities"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/76 via-background/86 to-background" />
          <div className="absolute left-1/2 top-[12%] h-[560px] w-[980px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.22),rgba(212,175,55,0.08)_42%,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.38em] text-primary"
          >
            Membership Activities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-6 max-w-5xl text-4xl font-light leading-tight text-foreground md:text-6xl xl:text-7xl"
          >
            Experience Goa With{" "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.45)]">
              Premium Member Access
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl"
          >
            GOA MOMENTS is more than a membership card. It is your premium Goa
            lifestyle support system — built for savings, access, comfort,
            guidance, and unforgettable experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="/membership"
              className="group flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:bg-primary/90"
            >
              Buy Membership
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#benefits"
              className="border border-primary/30 bg-background/30 px-8 py-4 text-sm uppercase tracking-[0.22em] text-foreground backdrop-blur-sm transition hover:border-primary hover:text-primary"
            >
              Explore Benefits
            </a>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(212,175,55,0.015)_32%,rgba(212,175,55,0.02)_52%,rgba(212,175,55,0.015)_72%,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.015),transparent_40%),radial-gradient(circle_at_right,rgba(212,175,55,0.015),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Why Members Choose Us
            </p>
            <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              Benefits That Make Goa Better
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-primary/30 bg-background/55 p-6 shadow-[0_0_55px_rgba(212,175,55,0.14)] backdrop-blur-md transition hover:border-primary/70 hover:bg-background/65"
              >
                <benefit.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-2xl font-light text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Membership Accessibility
            </p>
            <h2 className="mx-auto mt-4 max-w-5xl text-4xl font-light leading-tight text-foreground md:text-6xl">
              Every Card Gives Access.{" "}
              <span className="text-primary">
                Higher Cards Give More Power.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
              GOA MOMENTS is built to make members feel valued before, during,
              and after every Goa experience. Choose Gold for smart value,
              Platinum for wider access, or Diamond for the strongest priority
              support and top facility treatment.
            </p>
          </div>

          <div className="space-y-10">
            {detailedMemberships.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className={`relative overflow-hidden border p-6 backdrop-blur-md md:p-10 ${
                  item.name.includes("Diamond")
                    ? "border-primary bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.80),rgba(212,175,55,0.08))] shadow-[0_0_90px_rgba(212,175,55,0.20)]"
                    : "border-primary/30 bg-card/75 shadow-[0_0_55px_rgba(212,175,55,0.08)]"
                }`}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 border-r border-t border-primary/40" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 border-b border-l border-primary/30" />

                <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center border border-primary/40 bg-primary/10">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <span className="border border-primary/40 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-4xl font-light text-foreground md:text-5xl">
                      {item.name}
                    </h3>

                    <h4 className="mt-4 text-2xl font-light text-primary">
                      {item.title}
                    </h4>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <div className="border border-primary/20 bg-background/35 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary">
                          Member Access
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {item.access}
                        </p>
                      </div>
                      <div className="border border-primary/20 bg-background/35 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary">
                          Support Level
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {item.support}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border border-primary/25 bg-background/35 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Why This Card Is Valuable
                      </p>

                      <ul className="mt-6 space-y-4">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 border-l-2 border-primary bg-primary/10 p-5">
                      <p className="text-sm leading-relaxed text-foreground">
                        <span className="text-primary">Best Choice:</span>{" "}
                        {item.highlight}
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        <Hotel className="h-5 w-5 text-primary" />
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          Hotels
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        {item.name.includes("Gold") ? (
                          <Plane className="h-5 w-5 text-primary" />
                        ) : (
                          <UtensilsCrossed className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.name.includes("Gold") ? "Travel" : "Dining"}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        {item.name.includes("Gold") ? (
                          <Users className="h-5 w-5 text-primary" />
                        ) : (
                          <Martini className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.name.includes("Gold") ? "4 Members" : "Clubs"}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 border border-primary/20 bg-background/30 p-4 text-center">
                        {item.name.includes("Diamond") ? (
                          <Zap className="h-5 w-5 text-primary" />
                        ) : (
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.name.includes("Diamond")
                            ? "High Priority"
                            : "Support"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/membership"
              className="group inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:bg-primary/90"
            >
              Choose Your Membership
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-primary/35 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(0,0,0,0.55),rgba(212,175,55,0.08))] p-6 shadow-[0_0_80px_rgba(212,175,55,0.16)] backdrop-blur-md md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                10%–70% Discounts
              </p>
              <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
                Save More at Selected Premium Venues
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Members can unlock 10% to 70% savings depending on the venue,
                category, timing, availability, and partner offer. GOA MOMENTS
                helps you understand where your membership gives the best value.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {venues.map((venue) => (
                  <div
                    key={venue}
                    className="flex items-center gap-3 border border-primary/20 bg-background/35 p-4 backdrop-blur-sm"
                  >
                    <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {venue}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="overflow-hidden border border-primary/25 bg-card/70 shadow-[0_0_60px_rgba(212,175,55,0.10)] backdrop-blur-md"
            >
              <div className="relative h-[520px] w-full">
                <Image
                  src="/images/nightlife.jpg"
                  alt="Goa premium venues"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.30),transparent_30%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    Premium Lifestyle
                  </p>
                  <h3 className="mt-3 text-3xl font-light text-foreground md:text-4xl">
                    Goa Feels Better When You Know Where to Go
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Our membership helps users enjoy better venues, better
                    support, and better confidence while exploring Goa.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.12),transparent_30%),radial-gradient(circle_at_right,rgba(212,175,55,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden border border-primary/25 bg-card/70 shadow-[0_0_60px_rgba(212,175,55,0.10)] backdrop-blur-md">
              <div className="relative h-[460px] w-full">
                <Image
                  src="/images/resort.jpg"
                  alt="Luxury Goa resort"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.30),transparent_30%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    Lifetime Accessibility
                  </p>
                  <h3 className="mt-3 text-3xl font-light text-foreground">
                    One Membership. Long-Term Value.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Your membership keeps you connected to GOA MOMENTS support,
                    premium guidance, and curated Goa lifestyle access.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-primary/30 bg-card/75 p-6 shadow-[0_0_60px_rgba(212,175,55,0.12)] backdrop-blur-md md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Strong Support
              </p>
              <h2 className="mt-4 text-4xl font-light text-foreground">
                We Stand With Every Member
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                GOA MOMENTS is created to make every member feel supported,
                valued, and confident. Whether you need help choosing hotels,
                restaurants, activities, taxi options, nightlife, or premium
                experiences, our support gives you direction.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3 border border-primary/20 bg-background/35 p-4">
                  <Hotel className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Stay guidance for premium and comfortable Goa experiences.
                  </p>
                </div>
                <div className="flex gap-3 border border-primary/20 bg-background/35 p-4">
                  <UtensilsCrossed className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Restaurant, dining, celebration, and nightlife suggestions.
                  </p>
                </div>
                <div className="flex gap-3 border border-primary/20 bg-background/35 p-4">
                  <ConciergeBell className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Dedicated support to help you choose the right places.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SUPPORT BOX BEFORE REVIEWS - OLD STYLE */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl border border-primary/40 bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(0,0,0,0.72),rgba(212,175,55,0.10))] p-6 shadow-[0_0_100px_rgba(212,175,55,0.20)] backdrop-blur-md md:p-10">
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Goa Moments Support
              </p>
              <h2 className="mt-5 text-4xl font-light leading-tight text-foreground md:text-5xl">
                Members Are Never Left Alone
              </h2>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                If a member needs help finding a hotel, arranging transport,
                choosing a restaurant, planning an outing, or understanding how
                to use the membership card, GOA MOMENTS support is there to
                assist.
              </p>
            </motion.div>

            <div className="space-y-5">
              <div className="flex gap-4 border border-primary/30 bg-background/40 p-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Support Phone
                  </p>
                  <p className="mt-2 text-foreground">{supportPhone}</p>
                </div>
              </div>

              <div className="flex gap-4 border border-primary/30 bg-background/40 p-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Email Support
                  </p>
                  <p className="mt-2 text-foreground">{supportEmail}</p>
                </div>
              </div>

              <div className="flex gap-4 border border-primary/30 bg-background/40 p-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Support Scope
                  </p>
                  <p className="mt-2 text-foreground">
                    Hotels, taxis, dining, travel, nightlife, and experiences
                  </p>
                </div>
              </div>
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
            {/* REVIEWS */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Member Reviews
            </p>
            <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              What People Feel About GOA MOMENTS
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-primary/25 bg-card/75 p-6 shadow-[0_0_45px_rgba(212,175,55,0.08)] backdrop-blur-md"
              >
                <div className="flex items-center gap-1 text-primary">
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                  <Star className="h-4 w-4 fill-primary" />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{review.text}”
                </p>
                <p className="mt-5 text-foreground">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION AFTER REVIEWS */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Member Support FAQs
            </p>
            <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
              Questions People Ask Before Joining
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="overflow-hidden border border-primary/25 bg-card/75 shadow-[0_0_45px_rgba(212,175,55,0.08)] backdrop-blur-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-lg font-light text-foreground">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pl-[3.75rem] text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 pb-24 pt-10 sm:px-6 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl border border-primary/35 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(0,0,0,0.50),rgba(212,175,55,0.08))] p-8 text-center shadow-[0_0_90px_rgba(212,175,55,0.16)] backdrop-blur-md md:p-12">
          <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 border-l border-t border-primary/70" />
          <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 border-r border-t border-primary/70" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 border-b border-l border-primary/70" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b border-r border-primary/70" />

          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Become a Member
          </p>
          <h2 className="mt-4 text-4xl font-light text-foreground md:text-5xl">
            Choose Gold, Diamond, or Platinum Membership
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Start your GOA MOMENTS journey today and unlock premium support,
            venue savings, lifestyle guidance, and a better way to experience
            Goa.
          </p>

          <a
            href="/membership"
            className="group mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:bg-primary/90"
          >
            Buy Membership
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

     
      <Footer />
    </main>
  );
}