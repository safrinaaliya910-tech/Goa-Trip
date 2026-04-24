"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "./providers";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.membership"), href: "/membership" },
    { label: "Membership Activities", href: "/membership-activities" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          <a href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="GOA MOMENTS Logo"
              width={100}
              height={100}
              className="h-10 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <div className="sm:hidden">
                <span className="block whitespace-nowrap text-sm font-medium tracking-wider text-foreground">
                  GOA MOMENTS
                </span>
                <span className="block whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-primary">
                  LUXURY LIVING
                </span>
              </div>

              <div className="hidden flex-col sm:flex">
                <span className="text-base font-medium tracking-wider text-foreground sm:text-lg">
                  GOA MOMENTS
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary">
                  LUXURY LIVING
                </span>
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground xl:text-sm"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/coming-soon"
              className="border border-primary bg-transparent px-4 py-2 text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground xl:px-6"
            >
              {t("nav.joinNow")}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 sm:gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center text-lg uppercase tracking-widest text-foreground transition-colors hover:text-primary sm:text-2xl"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="/coming-soon"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 border border-primary px-6 py-3 text-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:px-8"
              >
                {t("nav.joinNow")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}