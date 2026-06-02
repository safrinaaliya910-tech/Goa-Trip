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
        className={`fixed left-0 right-0 top-0 z-50 flex flex-col transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-md pb-2" : "bg-transparent pb-2"
        }`}
      >
        {/* Main Navigation Bar */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <a href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="GOA MOMENTS Logo"
              width={100}
              height={100}
              className="h-10 w-auto object-contain"
              priority
            />

            <div className="flex flex-col leading-tight">
              <div className="sm:hidden">
                <span className="block whitespace-nowrap text-sm font-medium tracking-wider text-foreground">
                  GOA MOMENTS
                </span>
                <span className="block whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">
                  LUXURY LIVING
                </span>
              </div>

              <div className="hidden flex-col sm:flex">
                <span className="text-base font-medium tracking-wider text-foreground sm:text-lg">
                  GOA MOMENTS
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059]">
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
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/coming-soon"
              className="border border-[#C5A059] bg-transparent px-4 py-2 text-xs uppercase tracking-widest text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-black xl:px-6"
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

        {/* Secondary Navigation / Partner Bar */}
        <div className="hidden w-full lg:block">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-4 sm:px-6">
            
            {/* Tourism Partners Section */}
            <div className="flex items-center">
              
              {/* SMALLER Badge & Text */}
              <div className="flex items-center gap-3 pr-2">
                {/* 3D Metallic Gold Shield SVG - Reduced width/height to make it smaller */}
                <svg width="24" height="30" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                  <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8a6125" />
                      <stop offset="50%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="#5c3f13" />
                    </linearGradient>
                    <linearGradient id="shieldInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f6d365" />
                      <stop offset="100%" stopColor="#b38222" />
                    </linearGradient>
                  </defs>
                  <path d="M18 0L36 8V21C36 31.5 28.5 41 18 44C7.5 41 0 31.5 0 21V8L18 0Z" fill="url(#shieldGrad)" />
                  <path d="M18 2.5L33.5 9.5V21C33.5 29.5 27 38 18 40.5C9 38 2.5 29.5 2.5 21V9.5L18 2.5Z" fill="url(#shieldInnerGrad)" />
                  <path d="M11 21L15.5 26L25 15" stroke="#231709" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="flex flex-col justify-center font-serif">
                  {/* Slightly reduced text size to match smaller badge */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] mb-[2px]">
                    Official
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#d4af37]">
                    Tourism Partner
                  </span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="mx-3 h-14 w-px bg-white/20" />

              {/* LARGER Logos Area */}
              <div className="flex items-center gap-1">
                {/* Government of Goa Logo - Increased h-12 to h-16 (approx 64px tall) */}
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/images/government_logo.png"
                    alt="Government of Goa"
                    width={70}
                    height={70}
                    className="h-16 w-auto object-contain drop-shadow-md"
                  />
                  <span className="mt-1.5 text-[10px] font-medium tracking-wide text-white/90">
                    Government of Goa
                  </span>
                </div>

                {/* Goa Tourism Logo - Increased h-12 to h-16 (approx 64px tall) */}
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/images/goa_tourism.png"
                    alt="Goa Tourism"
                    width={120}
                    height={70}
                    className="h-16 w-auto object-contain drop-shadow-md"
                  />
                  <span className="mt-1.5 text-[10px] font-medium tracking-wide text-white/90">
                    Goa Tourism
                  </span>
                </div>
              </div>
              
            </div>

          </div>
        </div>
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
                  className="text-center text-lg uppercase tracking-widest text-foreground transition-colors hover:text-[#C5A059] sm:text-2xl"
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
                className="mt-4 border border-[#C5A059] px-6 py-3 text-sm uppercase tracking-widest text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-black sm:px-8"
              >
                {t("nav.joinNow")}
              </motion.a>

              {/* Mobile Partner Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-8 flex w-full max-w-[340px] flex-col items-center gap-6 border-t border-white/10 pt-8"
              >
                <div className="flex items-center gap-3">
                  {/* Smaller Mobile SVG */}
                  <svg width="20" height="25" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                    <defs>
                      <linearGradient id="shieldGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8a6125" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#5c3f13" />
                      </linearGradient>
                      <linearGradient id="shieldInnerGradMob" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f6d365" />
                        <stop offset="100%" stopColor="#b38222" />
                      </linearGradient>
                    </defs>
                    <path d="M18 0L36 8V21C36 31.5 28.5 41 18 44C7.5 41 0 31.5 0 21V8L18 0Z" fill="url(#shieldGradMob)" />
                    <path d="M18 2.5L33.5 9.5V21C33.5 29.5 27 38 18 40.5C9 38 2.5 29.5 2.5 21V9.5L18 2.5Z" fill="url(#shieldInnerGradMob)" />
                    <path d="M11 21L15.5 26L25 15" stroke="#231709" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="flex flex-col text-left font-serif">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">Official</span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#d4af37]">Tourism Partner</span>
                  </div>
                </div>

                {/* Larger Mobile Logos */}
                <div className="flex items-center justify-center gap-10">
                  <div className="flex flex-col items-center gap-1.5">
                    <Image 
                      src="/images/government_logo.png" 
                      alt="Government of Goa" 
                      width={60} 
                      height={60} 
                      className="h-14 w-auto object-contain" 
                    />
                    <span className="text-center text-[9px] font-medium tracking-wide text-white/90">Government<br/>of Goa</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <Image 
                      src="/images/goa_tourism.png" 
                      alt="Goa Tourism" 
                      width={100} 
                      height={60} 
                      className="h-14 w-auto object-contain" 
                    />
                    <span className="text-center text-[9px] font-medium tracking-wide text-white/90">Goa<br/>Tourism</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}