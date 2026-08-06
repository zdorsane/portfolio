"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { defaultLocale, isLocale, STORAGE_KEY, type Locale } from "./config"
import { dictionaries, type Dictionary } from "./dictionaries"

type LanguageContextValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start on the default locale so the first client render matches the server HTML.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) {
      setLocaleState(stored)
      return
    }
    if (navigator.language.toLowerCase().startsWith("fr")) {
      setLocaleState("fr")
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      toggleLocale: () => setLocale(locale === "en" ? "fr" : "en"),
    }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useI18n must be used inside a LanguageProvider")
  }
  return context
}
