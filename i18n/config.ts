export const locales = [
  'en', 'ta', 'hi', 'zh', 'es', 'fr', 'ar', 'pt', 'de', 'ml',
  'ms', 'ko', 'ja', 'ru', 'kn', 'as', 'bn', 'gu', 'ks', 'kok',
  'ne', 'or', 'pa', 'sa', 'ur', 'te', 'mr'
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
  ms: 'Bahasa Melayu',
  ko: '한국어',
  ja: '日本語',
  ru: 'Русский',
  kn: 'ಕನ್ನಡ',
  as: 'অসমীয়া',
  bn: 'বাংলা',
  gu: 'ગુજરાતી',
  ks: 'कॉशुर / كأشُر',
  kok: 'कोंकणी',
  ne: 'नेपाली',
  or: 'ଓଡ଼ିଆ',
  pa: 'ਪੰਜਾਬੀ',
  sa: 'संस्कृतम्',
  ur: 'اردو',
  te: 'తెలుగు',
  mr: 'मराठी'
};

export const rtlLocales: Locale[] = ['ar', 'ur', 'ks'];

export const defaultLocale: Locale = 'en';