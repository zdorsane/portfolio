"use client"

import { useEffect, useRef } from "react"

const STRANDS = [
  { xRatio: 0.15, opacity: 0.6 },
  { xRatio: 0.5, opacity: 0.3 },
  { xRatio: 0.85, opacity: 0.15 },
]

const AMPLITUDE = 80
const FREQUENCY = 0.015
const STEP = 8

export function DNABackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    // Decorative only: on narrow screens the strands crowd the copy and cost battery for nothing.
    if (window.matchMedia("(max-width: 767px)").matches) return

    let animationFrameId = 0
    let time = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const points = Math.ceil(h / STEP) + 8

      for (const { xRatio, opacity } of STRANDS) {
        const centerX = w * xRatio

        for (let i = 0; i < points; i++) {
          const y = i * STEP - ((time * 0.5) % STEP)
          const phase = (y + time * 2) * FREQUENCY
          const x1 = centerX + Math.sin(phase) * AMPLITUDE
          const x2 = centerX + Math.sin(phase + Math.PI) * AMPLITUDE

          // Base pairs — the rungs between the two helixes.
          if (i % 4 === 0) {
            const gradient = ctx.createLinearGradient(x1, y, x2, y)
            gradient.addColorStop(0, `rgba(20, 184, 166, ${opacity * 0.5})`)
            gradient.addColorStop(0.5, `rgba(6, 182, 212, ${opacity * 0.8})`)
            gradient.addColorStop(1, `rgba(20, 184, 166, ${opacity * 0.5})`)

            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.moveTo(x1, y)
            ctx.lineTo(x2, y)
            ctx.stroke()
          }

          // Backbone nodes — size and alpha track depth so the helix reads as 3D.
          const depth1 = Math.cos(phase)
          const depth2 = Math.cos(phase + Math.PI)

          ctx.beginPath()
          ctx.arc(x1, y, Math.max(3 + depth1 * 2, 1), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(20, 184, 166, ${(0.5 + depth1 * 0.5) * opacity})`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(x2, y, Math.max(3 + depth2 * 2, 1), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(6, 182, 212, ${(0.5 + depth2 * 0.5) * opacity})`
          ctx.fill()
        }
      }

      if (!reducedMotion) {
        time++
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    const handleResize = () => {
      resize()
      if (reducedMotion) draw()
    }

    resize()
    draw()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0 opacity-25"
    />
  )
}
