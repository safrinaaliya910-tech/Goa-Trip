"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { locales, defaultLocale, rtlLocales } from "@/i18n/config";

type Messages = Record<string, unknown>;

type TranslationContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isRTL: boolean;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}

function getNestedValue(obj: Messages, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Messages>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    async function loadMessages() {
      try {
        const msgs = await import(`@/messages/${locale}.json`);
        setMessages(msgs.default);
      } catch {
        const msgs = await import(`@/messages/en.json`);
        setMessages(msgs.default);
      }
    }
    loadMessages();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.dir = rtlLocales.includes(newLocale) ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return getNestedValue(messages, key);
  };

  const isRTL = rtlLocales.includes(locale);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TranslationContext.Provider value={{ locale, setLocale, t, isRTL }}>
        {children}
      </TranslationContext.Provider>
    </ThemeProvider>
  );
}