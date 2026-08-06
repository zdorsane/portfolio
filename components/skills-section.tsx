"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { skillGroups } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"
import { SectionHeader } from "@/components/section-header"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const { t } = useI18n()

  const core = skillGroups.filter((g) => g.primary)
  const supporting = skillGroups.filter((g) => !g.primary)

  return (
    <section id="stack" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          lead={t.skills.lead}
          isInView={isInView}
        />

        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
          {t.skills.core}
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {core.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-bold mb-4">{t.skills.groups[group.id]}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          {t.skills.supporting}
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {supporting.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl border border-border/60 p-6"
            >
              <h3 className="font-semibold mb-4 text-muted-foreground">
                {t.skills.groups[group.id]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-foreground/5 text-muted-foreground text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
