export const locales = ['en', 'ta', 'hi', 'zh', 'es', 'fr', 'ar', 'pt', 'de', 'ml'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ta: 'தமிழ்',
  hi: 'हिन्दी',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  pt: 'Português',
  de: 'Deutsch',
  ml: 'മലയാളം',
};

export const rtlLocales: Locale[] = ['ar'];

export const defaultLocale: Locale = 'en';
