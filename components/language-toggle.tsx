"use client"

import { locales } from "@/lib/i18n/config"
import { useI18n } from "@/lib/i18n/context"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.nav.switchLanguage}
      className={`inline-flex items-center rounded-full border border-border/60 p-0.5 ${className}`}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
