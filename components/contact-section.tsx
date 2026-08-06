"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EMAIL, SOCIALS } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"
import { SectionHeader } from "@/components/section-header"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useI18n()
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `${form.name}\n${form.email}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          lead={t.contact.lead}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-[0.8fr_1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                  {t.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-medium hover:text-primary transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                  {t.contact.locationLabel}
                </p>
                <p className="font-medium">{t.contact.location}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                {t.contact.followLabel}
              </p>
              <div className="flex gap-3">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-7"
          >
            <h3 className="text-lg font-semibold mb-5">{t.contact.formTitle}</h3>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-sm text-muted-foreground mb-1.5 block">
                    {t.contact.name}
                  </label>
                  <Input
                    id="contact-name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm text-muted-foreground mb-1.5 block">
                    {t.contact.email}
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-sm text-muted-foreground mb-1.5 block">
                  {t.contact.subject}
                </label>
                <Input
                  id="contact-subject"
                  required
                  placeholder={t.contact.subjectPlaceholder}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm text-muted-foreground mb-1.5 block">
                  {t.contact.message}
                </label>
                <Textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow"
              >
                <Send className="w-4 h-4 mr-2" />
                {t.contact.send}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
