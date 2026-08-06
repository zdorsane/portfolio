"use client"

import { DNABackground } from "@/components/dna-background"
import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FocusSection } from "@/components/focus-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ReferenceSection } from "@/components/reference-section"
import { SkillsSection } from "@/components/skills-section"
import { BackgroundSection } from "@/components/background-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <>
      <DNABackground />
      <ParticleBackground />

      <div className="relative z-10">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <Navbar />

        <main>
          <HeroSection />
          <FocusSection />
          <ProjectsSection />
          <ExperienceSection />
          <ReferenceSection />
          <SkillsSection />
          <BackgroundSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
