export const locales = [
  'en', 'ta', 'hi', 'zh', 'es', 'fr', 'ar', 'pt', 'de', 'ml',
  'ms', 'ko', 'ja', 'ru', 'kn'
] as const;

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
  ms: 'Bahasa Melayu', // Malay
  ko: '한국어',          // Korean
  ja: '日本語',          // Japanese
  ru: 'Русский',         // Russian
  kn: 'ಕನ್ನಡ'            // Kannada
};

export const rtlLocales: Locale[] = ['ar'];

export const defaultLocale: Locale = 'en';