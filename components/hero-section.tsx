"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CV_URL } from "@/lib/content"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-28 pb-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1.25fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <p className="text-primary font-mono text-sm mb-4">{t.hero.role}</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-balance">
              {t.hero.headline}
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl text-lg">
              {t.hero.intro}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 glow">
                <a href="#work">{t.hero.ctaWork}</a>
              </Button>
              <Button variant="outline" asChild className="border-primary/50 hover:bg-primary/10">
                <a href="#contact">{t.hero.ctaContact}</a>
              </Button>
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                <a href={CV_URL} download>
                  <Download className="w-4 h-4 mr-2" />
                  {t.hero.ctaCv}
                </a>
              </Button>
            </div>

            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.hero.availability}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/25 blur-3xl rounded-full scale-75" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 glow">
                <Image
                  src="/images/profile.png"
                  alt={t.hero.imageAlt}
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#focus"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">{t.hero.scroll}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
