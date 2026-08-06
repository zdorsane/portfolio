"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Check, Dna, Layout } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { SectionHeader } from "@/components/section-header"

const icons = { frontend: Layout, ai: Brain } as const

export function FocusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useI18n()

  const cards = (["frontend", "ai"] as const).map((id) => ({ id, ...t.focus.cards[id] }))

  return (
    <section id="focus" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow={t.focus.eyebrow}
          title={t.focus.title}
          lead={t.focus.lead}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = icons[card.id]
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass rounded-2xl p-7 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{card.body}</p>

                <ul className="space-y-2.5 mt-auto">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 glass rounded-2xl p-7 md:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-primary to-cyan-500" />

          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Dna className="w-5 h-5 text-primary" />
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1.5">
                {t.focus.domainLabel}
              </p>
              <h3 className="text-xl font-bold mb-3">{t.focus.domainTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.focus.domainBody}</p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-sm text-muted-foreground text-center"
        >
          {t.focus.aside}
        </motion.p>
      </div>
    </section>
  )
}
