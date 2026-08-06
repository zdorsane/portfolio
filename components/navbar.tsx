"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { useState } from "react"
import { EMAIL, SOCIALS } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"
import { LanguageToggle } from "@/components/language-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  const navItems = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="glass-strong mx-4 mt-4 rounded-2xl px-5 py-3 md:mx-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="text-lg font-bold gradient-text shrink-0">
            Dorsane Zertit
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <span className="h-5 w-px bg-border/60" aria-hidden />
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

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden mt-4 pt-4 border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={t.contact.emailLabel}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
