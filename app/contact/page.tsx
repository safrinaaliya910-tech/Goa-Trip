"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "concierge@goaelite.com",
    href: "mailto:concierge@goaelite.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 832 123 4567",
    href: "tel:+918321234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Panjim, Goa, India",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Luxury concierge interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        
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
              Contact
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Our concierge team is ready to assist you
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mx-auto mt-6 h-px w-24 bg-primary"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl font-light text-foreground md:text-4xl">
                We&apos;re Here to <span className="text-primary">Assist</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Whether you have questions about membership, need travel recommendations, 
                or want to plan a bespoke Goa experience, our dedicated concierge team 
                is available to help.
              </p>

              <div className="mt-12 space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-center gap-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center border border-border transition-all duration-300 group-hover:border-primary">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {info.label}
                      </span>
                      <p className="mt-1 text-lg text-foreground transition-colors group-hover:text-primary">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary">Response Time:</span> Our team typically 
                  responds within 2-4 hours during business hours.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="border border-border bg-card p-8 md:p-12">
                <h3 className="text-xl font-medium uppercase tracking-wider text-foreground">
                  Send a Message
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Interest
                    </label>
                    <select className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary">
                      <option value="" className="bg-background">Select your interest</option>
                      <option value="membership" className="bg-background">Membership Inquiry</option>
                      <option value="travel" className="bg-background">Travel Planning</option>
                      <option value="partnership" className="bg-background">Partnership</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
