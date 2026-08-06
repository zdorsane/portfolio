"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"
import { SectionHeader } from "@/components/section-header"

const INITIAL_OTHERS = 6

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })
  const { t } = useI18n()
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const visibleOthers = showAll ? others : others.slice(0, INITIAL_OTHERS)

  return (
    <section id="work" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          lead={t.projects.lead}
          isInView={isInView}
        />

        <div className="space-y-6 mb-16">
          {featured.map((project, index) => {
            const copy = t.projects.items[project.id]
            const primaryLink = project.liveUrl ?? project.repos[0]?.url ?? "#"

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] group"
              >
                <a
                  href={primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative h-56 md:h-auto md:min-h-76 overflow-hidden bg-secondary/40 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                  aria-label={copy.title}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/20 via-secondary/40 to-transparent">
                      <span className="font-mono text-3xl md:text-4xl font-bold text-primary/40 px-6 text-center">
                        {copy.title.split("—")[0].trim()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
                </a>

                <div className="p-7 md:p-9 flex flex-col justify-center">
                  <p className="font-mono text-xs text-muted-foreground mb-3">{project.year}</p>

                  <h3 className="text-2xl font-bold mb-3 leading-snug">
                    <a
                      href={primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-start gap-1.5"
                    >
                      {copy.title}
                      <ArrowUpRight className="w-4 h-4 mt-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">{copy.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.live}
                      </a>
                    )}
                    {project.repos.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        {project.repos.length > 1 ? `${t.projects.code} · ${repo.label}` : t.projects.code}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold mb-1">{t.projects.otherTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.projects.otherLead}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleOthers.map((project, index) => {
            const copy = t.projects.items[project.id]
            const primaryLink = project.liveUrl ?? project.repos[0]?.url ?? null
            const Card = primaryLink ? motion.a : motion.div

            return (
              <Card
                key={project.id}
                {...(primaryLink
                  ? { href: primaryLink, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + (index % 6) * 0.06 }}
                className={`glass rounded-xl overflow-hidden group flex flex-col ${
                  primaryLink ? "hover:border-primary/40 transition-colors" : ""
                }`}
              >
                <div className="relative aspect-16/10 bg-secondary/40 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/15 to-transparent">
                      <span className="font-mono text-sm text-primary/40 px-4 text-center">
                        {copy.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {copy.title}
                    </h4>
                    {primaryLink && (
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {copy.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-primary/70 font-mono bg-primary/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {others.length > INITIAL_OTHERS && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
            >
              {showAll ? (
                <>
                  {t.projects.showLess}
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  {t.projects.showAll} ({others.length})
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
