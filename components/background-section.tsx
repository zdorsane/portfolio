"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, GraduationCap, Languages, Users } from "lucide-react"
import { certifications, community, education, languages } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"
import { SectionHeader } from "@/components/section-header"

export function BackgroundSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useI18n()

  const columns = [
    {
      key: "education",
      icon: GraduationCap,
      title: t.background.education,
      rows: education.map((item) => ({
        key: item.id,
        title: t.background.educationItems[item.id],
        meta: item.school,
        aside: item.year,
      })),
    },
    {
      key: "community",
      icon: Users,
      title: t.background.community,
      rows: community.map((item) => ({
        key: item.id,
        title: t.background.communityItems[item.id],
        meta: item.org,
        aside: item.year,
      })),
    },
    {
      key: "certifications",
      icon: Award,
      title: t.background.certifications,
      rows: certifications.map((item) => ({
        key: item.id,
        title: t.background.certificationItems[item.id],
        meta: item.issuer,
        aside: item.year,
      })),
    },
    {
      key: "languages",
      icon: Languages,
      title: t.background.languages,
      rows: languages.map((item) => ({
        key: item.id,
        title: t.background.languageItems[item.id],
        meta: t.background.levels[item.level],
        aside: "",
      })),
    },
  ]

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow={t.background.eyebrow}
          title={t.background.title}
          lead={t.background.lead}
          isInView={isInView}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {columns.map((column, index) => {
            const Icon = column.icon
            return (
              <motion.div
                key={column.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border/60 p-6"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Icon className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm uppercase tracking-wide">{column.title}</h3>
                </div>

                <ul className="space-y-3.5">
                  {column.rows.map((row) => (
                    <li key={row.key} className="flex items-baseline justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{row.title}</p>
                        <p className="text-xs text-muted-foreground">{row.meta}</p>
                      </div>
                      {row.aside && (
                        <span className="text-xs font-mono text-muted-foreground shrink-0">
                          {row.aside}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
