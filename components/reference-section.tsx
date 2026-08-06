"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Quote } from "lucide-react"
import { ATTESTATION_URL } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"

export function ReferenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useI18n()

  return (
    <section id="reference" className="py-16 px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-10 relative"
        >
          <Quote className="w-9 h-9 text-primary/30 mb-5" aria-hidden />

          <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 text-pretty">
            {t.reference.quote}
          </blockquote>

          <figcaption className="border-t border-border/60 pt-5">
            <p className="font-semibold">{t.reference.author}</p>
            <p className="text-sm text-primary">{t.reference.authorRole}</p>
            <p className="text-xs text-muted-foreground mt-2 font-mono">{t.reference.meta}</p>
            {t.reference.translated && (
              <p className="text-xs text-muted-foreground/70 mt-1 italic">
                {t.reference.translated}
              </p>
            )}
          </figcaption>

          {ATTESTATION_URL && (
            <a
              href={ATTESTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <FileText className="w-4 h-4" />
              {t.reference.cta}
            </a>
          )}
        </motion.figure>
      </div>
    </section>
  )
}
