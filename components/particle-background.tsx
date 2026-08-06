"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

const PARTICLE_COLOR = "109, 179, 170"
const LINK_DISTANCE = 120
const MOUSE_RADIUS = 150

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Respect the user's motion preference: draw a single static frame instead of animating.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let animationFrameId = 0
    let particles: Particle[] = []
    let mouseX = Number.NEGATIVE_INFINITY
    let mouseY = Number.NEGATIVE_INFINITY

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createParticles = () => {
      const { innerWidth: w, innerHeight: h } = window
      const count = Math.min(90, Math.floor((w * h) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = () => {
      const { innerWidth: w, innerHeight: h } = window
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!reducedMotion) {
          p.x += p.vx
          p.y += p.vy

          const mdx = mouseX - p.x
          const mdy = mouseY - p.y
          const mouseDistance = Math.hypot(mdx, mdy)
          if (mouseDistance > 0 && mouseDistance < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - mouseDistance) / MOUSE_RADIUS
            p.vx -= (mdx / mouseDistance) * force * 0.02
            p.vy -= (mdy / mouseDistance) * force * 0.02
          }

          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1

          const speed = Math.hypot(p.vx, p.vy)
          if (speed > 2) {
            p.vx = (p.vx / speed) * 2
            p.vy = (p.vy / speed) * 2
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const distance = Math.hypot(p.x - other.x, p.y - other.y)
          if (distance < LINK_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${0.15 * (1 - distance / LINK_DISTANCE)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
      if (reducedMotion) draw()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    resizeCanvas()
    createParticles()
    draw()

    window.addEventListener("resize", handleResize)
    if (!reducedMotion) window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="fixed inset-0 pointer-events-none z-0" />
}
