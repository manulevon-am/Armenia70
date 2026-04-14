import content from "@/config/content.json";

export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];
export type LandingContent = (typeof content)["ru"];

export const landingContent = content as Record<Locale, LandingContent>;

export function getContent(locale: Locale): LandingContent {
  return landingContent[locale];
}
