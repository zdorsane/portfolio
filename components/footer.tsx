"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { EMAIL, SOCIALS } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-4 md:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
        <p className="text-muted-foreground text-center md:text-left">
          © {year} Dorsane Zertit · {t.footer.rights}
        </p>

        <p className="text-muted-foreground/70 text-xs order-3 md:order-2">{t.footer.built}</p>

        <div className="flex items-center gap-4 order-2 md:order-3">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label={t.contact.emailLabel}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
