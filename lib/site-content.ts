import content from "@/config/site-content.json";

export const localeOptions = [
  { code: "ru", label: "Русский" },
  { code: "hy", label: "Հայերեն" },
  { code: "ar", label: "العربية" },
  { code: "fa", label: "فارسی" },
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "tr", label: "Türkçe" }
] as const;

export type Locale = (typeof localeOptions)[number]["code"];
export type SiteContent = (typeof content)["ru"];

export const siteContent = content as Record<Locale, SiteContent>;

export function getSiteContent(locale: Locale): SiteContent {
  return siteContent[locale];
}
