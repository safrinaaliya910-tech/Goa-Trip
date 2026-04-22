"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Crown, Diamond, Star } from "lucide-react";

const benefits = [
  "Priority access to all partner venues",
  "Complimentary yacht & villa upgrades",
  "Personal lifestyle concierge 24/7",
  "Exclusive member-only events",
  "Airport VIP lounge access",
  "Private chef & butler services",
];

const tiers = [
  {
    name: "Gold",
    price: "₹2,50,000",
    period: "per year",
    icon: Star,
    features: [
      "Access to 50+ partner venues",
      "10 complimentary yacht days",
      "Lifestyle concierge (9am-9pm)",
      "Member events access",
    ],
  },
  {
    name: "Platinum",
    price: "₹5,00,000",
    period: "per year",
    icon: Crown,
    featured: true,
    features: [
      "Access to all partner venues",
      "Unlimited yacht charters",
      "24/7 personal concierge",
      "Exclusive member events",
      "Private villa upgrades",
      "Airport VIP transfers",
    ],
  },
  {
    name: "Diamond",
    price: "₹12,00,000",
    period: "per year",
    icon: Diamond,
    features: [
      "Everything in Platinum",
      "Dedicated lifestyle manager",
      "Private jet partnerships",
      "Global elite network access",
      "Bespoke experience curation",
    ],
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-secondary py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-24"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Join The Elite
          </p>
          <h2 className="mb-6 text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Membership <span className="font-medium text-primary">Tiers</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Membership Card Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex justify-center"
        >
          <div className="relative h-64 w-full max-w-md md:h-80">
            <Image
              src="/images/membership-card.jpg"
              alt="Premium membership card"
              fill
              className="object-contain"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl" />
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative flex flex-col border bg-card p-8 transition-all duration-500 hover:border-primary/50 ${
                tier.featured
                  ? "border-primary lg:scale-105"
                  : "border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-4 py-1 text-xs uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 flex items-center gap-3">
                <tier.icon className={`h-6 w-6 ${tier.featured ? "text-primary" : "text-muted-foreground"}`} />
                <h3 className="text-2xl font-medium tracking-wide text-foreground">
                  {tier.name}
                </h3>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-light text-primary">
                  {tier.price}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  {tier.period}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 text-sm uppercase tracking-widest transition-all duration-300 ${
                  tier.featured
                    ? "border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                    : "border border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Select {tier.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
