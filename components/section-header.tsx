"use client"

import { motion } from "framer-motion"

export function SectionHeader({
  eyebrow,
  title,
  lead,
  isInView,
  align = "center",
}: {
  eyebrow: string
  title: string
  lead?: string
  isInView: boolean
  align?: "center" | "left"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center mb-12" : "mb-12"}
    >
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {lead && (
        <p
          className={`text-muted-foreground text-lg ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  )
}
