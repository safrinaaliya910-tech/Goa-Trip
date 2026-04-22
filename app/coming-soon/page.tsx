"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navigation />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/coming-soon-hero.jpg"
          alt="Golden particles"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-primary/50 bg-primary/10 backdrop-blur-sm"
          >
            <Sparkles className="h-10 w-10 text-primary" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
          
          <h1 className="text-5xl font-light uppercase tracking-[0.15em] text-foreground md:text-7xl lg:text-8xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block"
            >
              We Are
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-primary"
            >
              Launching Soon
            </motion.span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Exclusive Goa membership is coming. Early members get priority 
            access to the most coveted experiences in paradise.
          </motion.p>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mx-auto mt-12 max-w-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-border bg-background/50 px-6 py-4 text-foreground backdrop-blur-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button className="group flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                Notify Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Be the first to know. No spam, ever.
            </p>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-widest text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              VIP Access
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Exclusive Venues
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Concierge Service
            </span>
          </motion.div>
        </motion.div>

        {/* Back Link */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute bottom-12 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          Back to Home
        </motion.a>
      </div>
    </main>
  );
}
