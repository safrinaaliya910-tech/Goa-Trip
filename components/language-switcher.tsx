"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "./providers";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-primary"
      >
        <Globe className="h-4 w-4 text-primary" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full z-50 mt-2 w-48 rounded border border-border bg-card py-2 shadow-xl"
            >
              <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground">
                {t("language.select")}
              </div>
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocale(loc as Locale);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-secondary ${
                    locale === loc ? "text-primary" : "text-foreground"
                  }`}
                >
                  <span className={locale === loc ? "font-medium" : ""}>
                    {localeNames[loc as Locale]}
                  </span>
                  {locale === loc && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
