"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"
import { experiences } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"
import { SectionHeader } from "@/components/section-header"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useI18n()

  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          lead={t.experience.lead}
          isInView={isInView}
        />

        <div className="relative">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-linear-to-b from-primary via-primary/40 to-transparent" />

          <ol className="space-y-8">
            {experiences.map((exp, index) => {
              const copy = t.experience.items[exp.id]

              return (
                <motion.li
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <span
                    className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "bg-primary border-primary"
                        : "bg-background border-primary/50"
                    }`}
                    aria-hidden
                  />

                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="text-lg font-bold">{copy.role}</h3>
                      {exp.current && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                          {t.experience.current}
                        </span>
                      )}
                    </div>

                    <p className="text-primary font-medium mb-3">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline underline-offset-4"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4 font-mono">
                      <span>{copy.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {copy.description}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
