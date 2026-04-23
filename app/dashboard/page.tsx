"use client";

import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  CarTaxiFront,
  Hotel,
  UtensilsCrossed,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  ConciergeBell,
  TicketPercent,
  Star,
  ArrowRight,
} from "lucide-react";

const supportPhone = "+91 98765 43210";
const supportEmail = "support@goamoments.com";
const conciergeEmail = "concierge@goamoments.com";

const serviceSections = [
  {
    title: "Taxi & Travel Assistance",
    description:
      "Need airport pickup, local transport, day travel planning, or premium transfer suggestions? GOA MOMENTS support helps members move around Goa more comfortably and with better choices.",
    icon: CarTaxiFront,
  },
  {
    title: "Hotels & Stay Guidance",
    description:
      "From premium resorts to suitable member-friendly stay options, our team can guide you toward places that fit your mood, budget, and travel style.",
    icon: Hotel,
  },
  {
    title: "Restaurants & Dining Support",
    description:
      "Looking for brunch spots, premium dining, family-friendly restaurants, romantic dinners, or celebration venues? We help you find options that match the experience you want.",
    icon: UtensilsCrossed,
  },
  {
    title: "Experiences & Concierge Help",
    description:
      "Whether you need nightlife ideas, curated outings, leisure suggestions, or premium lifestyle recommendations, GOA MOMENTS is here to support your overall Goa experience.",
    icon: ConciergeBell,
  },
];

const benefitPoints = [
  "10%–70% member savings at selected partner venues",
  "Support-led access to better options across Goa",
  "A stronger experience than a normal discount card",
  "Member-first guidance for stays, dining, transport, and experiences",
];

const reviews = [
  {
    name: "Rhea & Karthik",
    title: "Weekend Members",
    text: "The best part was not just the discount — it was the support. We asked for dining and stay suggestions, and GOA MOMENTS made the whole trip feel easier and more premium.",
  },
  {
    name: "Aarav Mehta",
    title: "Frequent Goa Traveler",
    text: "It felt like having a local premium support contact. From restaurant guidance to travel help, the membership gave real value beyond just offers.",
  },
  {
    name: "Naina Joseph",
    title: "Lifestyle Member",
    text: "The experience feels curated. You don’t just buy a card — you feel like you have access, direction, and someone to help you choose the right places.",
  },
];

export default function DashboardPage() {
  const params = useSearchParams();

  const name = params.get("name") || "Member";
  const membershipId = params.get("membershipId") || "GM-XXX-000000";
  const plan = params.get("plan") || "Membership";
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const city = params.get("city") || "Goa Visitor";
  const amountPaid = params.get("amountPaid") || "0";
  const validity = params.get("validity") || "Lifetime Membership";

  return (
    <main className="relative bg-background">
      {/* Whole page premium gold background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <div className="absolute inset-0 bg-background" />

        {/* Soft gold haze across entire page */}
        <div className="absolute left-1/2 top-0 h-full w-[82%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),rgba(212,175,55,0.03)_38%,transparent_72%)]" />

        {/* Centered premium panel glow */}
        <div className="absolute left-1/2 top-[140px] h-[620px] w-[84%] -translate-x-1/2 rounded-[40px] border border-primary/8 bg-[linear-gradient(180deg,rgba(212,175,55,0.05),rgba(212,175,55,0.02),rgba(212,175,55,0.03))] shadow-[0_0_180px_rgba(212,175,55,0.05)]" />
        {/* Gold blur texture */}
        <div className="absolute left-1/2 top-[120px] h-[900px] w-[900px] -translate-x-1/2 opacity-[0.10]">
          <Image
            src="/images/gold-blur-bg.png"
            alt="gold texture"
            fill
            className="object-cover"
          />
        </div>

        {/* Additional soft glows */}
        <div className="absolute left-[8%] top-[12%] h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[6%] top-[18%] h-96 w-96 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute left-[24%] top-[48%] h-[26rem] w-[26rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[18%] bottom-[10%] h-[28rem] w-[28rem] rounded-full bg-primary/6 blur-3xl" />

        {/* Thin luxury lines */}
        <div className="absolute left-1/2 top-[220px] h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute left-1/2 bottom-[180px] h-px w-[66%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/12 to-transparent" />
      </div>

      <Navigation />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
  {/* Stronger hero glow */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 opacity-[0.08]">
      <Image
        src="/images/membership-hero.jpg"
        alt="Goa luxury background"
        fill
        className="object-cover"
        priority
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-background/78 via-background/86 to-background" />

    {/* Main gold hero haze */}
    <div className="absolute left-[12%] top-[8%] h-[480px] w-[480px] rounded-full bg-primary/12 blur-[110px]" />
    <div className="absolute left-[26%] top-[14%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px]" />
    <div className="absolute right-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[110px]" />

    {/* Gold blur image behind heading */}
    <div className="absolute left-[8%] top-[6%] h-[520px] w-[760px] opacity-[0.22]">
      <Image
        src="/images/gold-blur-bg.png"
        alt="gold texture"
        fill
        className="object-cover"
      />
    </div>

    {/* Gold blur behind support panel */}
    <div className="absolute right-[4%] top-[8%] h-[480px] w-[520px] opacity-[0.15]">
      <Image
        src="/images/gold-blur-bg.png"
        alt="gold texture"
        fill
        className="object-cover"
      />
    </div>

    {/* Center soft beam */}
    <div className="absolute left-1/2 top-[8%] h-[520px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),rgba(212,175,55,0.03)_42%,transparent_75%)]" />

    {/* subtle premium line */}
    <div className="absolute left-1/2 top-[120px] h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs uppercase tracking-[0.38em] text-primary">
          Member Dashboard
        </p>

        <h1 className="mt-5 max-w-5xl text-4xl font-light leading-tight text-foreground md:text-6xl xl:text-7xl">
          Welcome to <span className="text-primary">GOA MOMENTS</span>, {name}
        </h1>

        <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-xl">
          Your membership is now active. You now have access to your member
          benefits, premium support, and a dedicated GOA MOMENTS experience
          designed to help you enjoy Goa with more value, more comfort, and
          more confidence.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em]">
          <span className="border border-primary/30 bg-primary/10 px-4 py-2 text-primary backdrop-blur-sm">
            10%–70% Member Savings
          </span>
          <span className="border border-border bg-background/30 px-4 py-2 text-muted-foreground backdrop-blur-sm">
            Premium Support Access
          </span>
          <span className="border border-border bg-background/30 px-4 py-2 text-muted-foreground backdrop-blur-sm">
            Goa Lifestyle Guidance
          </span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="overflow-hidden border border-primary/20 bg-card/70 shadow-[0_0_50px_rgba(212,175,55,0.08)] backdrop-blur-md">
            <div className="border-b border-border px-6 py-5">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Your Membership Card
              </p>
              <p className="mt-2 text-xl text-foreground">
                {plan} Membership Access
              </p>
            </div>

            <div className="p-5">
              <div className="relative h-[220px] w-full overflow-hidden bg-black/30 sm:h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <Image
                  src="/images/membership-card.png"
                  alt="GOA MOMENTS membership card"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="border border-border bg-card/70 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-light text-foreground">
                Member Profile
              </h2>
              <BadgeCheck className="h-5 w-5 text-primary" />
            </div>

            <div className="mt-6 space-y-5 text-sm text-muted-foreground">
              <div className="flex items-start justify-between gap-4">
                <span>Name</span>
                <span className="text-right text-foreground">{name}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>Email</span>
                <span className="break-all text-right text-foreground">
                  {email}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>Phone</span>
                <span className="text-right text-foreground">{phone}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>City</span>
                <span className="text-right text-foreground">{city}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>Membership ID</span>
                <span className="text-right text-foreground">
                  {membershipId}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>Plan</span>
                <span className="text-right text-foreground">{plan}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span>Amount Paid</span>
                <span className="text-right text-foreground">
                  ${amountPaid}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-border pt-5">
                <span>Validity</span>
                <span className="text-right text-foreground">
                  {validity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="border border-primary/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.10),rgba(0,0,0,0.55),rgba(212,175,55,0.04))] p-6 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.28em] text-primary">
            Goa Moments Support
          </p>
          <h2 className="mt-3 text-3xl font-light text-foreground">
            You Have Strong Support
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Your membership is not just a card. It is your direct connection to
            GOA MOMENTS support. If you need guidance for taxis, hotels,
            restaurants, nightlife, travel planning, or the best venue options,
            our team is here to help.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  Support Phone
                </p>
                <p className="mt-1 text-foreground">{supportPhone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  Support Email
                </p>
                <p className="mt-1 text-foreground">{supportEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  Concierge Email
                </p>
                <p className="mt-1 text-foreground">{conciergeEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  Member Assistance
                </p>
                <p className="mt-1 text-foreground">
                  Support for stays, transport, restaurants, travel, and premium Goa recommendations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border border-border bg-card/70 backdrop-blur-md">
          <div className="relative h-[280px] w-full">
            <Image
              src="/images/resort.jpg"
              alt="Luxury Goa resort"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.20),transparent_35%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Personalized Guidance
              </p>
              <h3 className="mt-2 text-2xl font-light text-foreground">
                Better Choices, Not Just Discounts
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                GOA MOMENTS helps members discover options that actually fit their needs — from premium stays to dining, local travel, and curated experiences.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.05),transparent_28%),radial-gradient(circle_at_right,rgba(212,175,55,0.04),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-border bg-card/70 p-6 md:p-8 backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Member Benefits
              </p>
              <h2 className="mt-3 text-4xl font-light text-foreground">
                What Your Membership Really Gives You
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                This membership is designed to make Goa more rewarding and more
                convenient for you. It combines venue-based value with strong
                human support, so you do not have to figure everything out alone.
              </p>

              <div className="mt-8 space-y-4">
                {benefitPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-border bg-background/30 p-4 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <TicketPercent className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-lg text-foreground">
                      10%–70% venue-based member savings
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Discount levels depend on the venue, category, availability,
                      and timing. If you are unsure where your card gives the best
                      value, GOA MOMENTS support can help guide you.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="overflow-hidden border border-border bg-card/70 backdrop-blur-md"
            >
              <div className="relative h-[520px] w-full">
                <Image
                  src="/images/nightlife.jpg"
                  alt="Goa nightlife and lifestyle"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_28%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Premium Experience
                  </p>
                  <h3 className="mt-3 text-3xl font-light text-foreground md:text-4xl">
                    A Membership That Feels Like Support
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    When members need the best route, the best venue, the right
                    stay, or the right kind of experience, GOA MOMENTS is there
                    to support the decision — not just provide a card.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Our Services
            </p>
            <h2 className="mt-3 text-4xl font-light text-foreground">
              How GOA MOMENTS Supports Your Journey
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our role is to help members make better choices across Goa — whether
              that means travel convenience, the right hotel, a better restaurant,
              or simply knowing who to contact when help is needed.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceSections.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-border bg-card/70 p-6 backdrop-blur-md transition hover:border-primary/40"
              >
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-2xl font-light text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.04),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden border border-border bg-card/70 backdrop-blur-md"
            >
              <div className="relative h-[420px] w-full">
                <Image
                  src="/images/yacht.jpg"
                  alt="Goa premium experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.15),transparent_28%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Premium Member Feeling
                  </p>
                  <h3 className="mt-2 text-3xl font-light text-foreground">
                    Access, Comfort, Confidence
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    GOA MOMENTS is built to make members feel supported before,
                    during, and throughout their Goa experience.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="border border-primary/20 bg-card/70 p-6 md:p-8 shadow-[0_0_40px_rgba(212,175,55,0.04)] backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Goa Moments Reviews
              </p>
              <h2 className="mt-3 text-4xl font-light text-foreground">
                What Members Feel
              </h2>

              <div className="mt-8 space-y-5">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="border border-border bg-background/30 p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="h-4 w-4 fill-primary" />
                      <Star className="h-4 w-4 fill-primary" />
                      <Star className="h-4 w-4 fill-primary" />
                      <Star className="h-4 w-4 fill-primary" />
                      <Star className="h-4 w-4 fill-primary" />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      “{review.text}”
                    </p>

                    <div className="mt-4">
                      <p className="text-foreground">{review.name}</p>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">
                        {review.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 pt-12 sm:px-6 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-primary/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.06),rgba(0,0,0,0.35),rgba(212,175,55,0.02))] p-8 md:p-10 backdrop-blur-md"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Member Promise
                </p>
                <h2 className="mt-3 text-4xl font-light text-foreground md:text-5xl">
                  Strong Support. Premium Access. Better Goa.
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Your GOA MOMENTS membership is not just about where you save.
                  It is about how confidently you experience Goa. Whether you need
                  help with a taxi, a hotel, a restaurant, a lifestyle venue, or a
                  better recommendation, our team is here to support you.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${supportPhone}`}
                  className="flex items-center justify-between border border-primary bg-primary px-5 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90"
                >
                  Call Member Support
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${supportEmail}`}
                  className="flex items-center justify-between border border-border bg-background/30 px-5 py-4 text-sm uppercase tracking-[0.22em] text-foreground transition hover:border-primary hover:text-primary"
                >
                  Email Support
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${conciergeEmail}`}
                  className="flex items-center justify-between border border-border bg-background/30 px-5 py-4 text-sm uppercase tracking-[0.22em] text-foreground transition hover:border-primary hover:text-primary"
                >
                  Contact Concierge
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}