export const locales = ["en", "fr"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
}

export const STORAGE_KEY = "portfolio-locale"

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "fr"
}
