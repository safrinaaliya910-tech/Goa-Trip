"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const values = [
  {
    title: "Excellence",
    description: "We curate only the finest experiences, ensuring every moment exceeds expectations.",
  },
  {
    title: "Exclusivity",
    description: "Access to private venues, reserved tables, and experiences money alone cannot buy.",
  },
  {
    title: "Authenticity",
    description: "Genuine connections with Goa's most prestigious establishments and hidden gems.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Aerial view of luxury Goa resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="px-6 text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto mb-6 h-px w-24 bg-primary"
            />
            <h1 className="text-4xl font-light uppercase tracking-[0.2em] text-foreground md:text-6xl lg:text-7xl">
              Our Story
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mx-auto mt-6 h-px w-24 bg-primary"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-light leading-relaxed text-foreground md:text-4xl lg:text-5xl">
              We don&apos;t plan trips.
              <br />
              <span className="text-primary">We create unforgettable experiences.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Born from a passion for Goa&apos;s unparalleled beauty and a vision for exceptional service, 
              GOA MOMENTS was founded to bridge the gap between travelers and the extraordinary. 
              We believe luxury should be effortless, authentic, and transformative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
              The Pillars of Excellence
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50"
              >
                <span className="text-5xl font-light text-primary/30">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-medium uppercase tracking-wider text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Our Vision
            </span>
            <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              To make every traveler feel like
              <span className="text-primary"> royalty</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              We envision a world where extraordinary experiences are accessible to those who 
              seek them. Where every sunset, every meal, every moment in Goa becomes a cherished 
              memory that lasts a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-light text-foreground md:text-4xl">
            Ready to Experience Goa Moments?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join an exclusive community of discerning travelers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/membership"
              className="group relative overflow-hidden border border-primary bg-primary px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              View Membership
            </a>
            <a
              href="/contact"
              className="border border-border px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}