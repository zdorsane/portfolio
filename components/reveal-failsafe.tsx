"use client"

import { useEffect } from "react"

type WindowWithFailsafe = Window & { __cancelRevealFailsafe?: () => void }

/**
 * Cancels the reveal failsafe armed by the inline script in app/layout.tsx.
 *
 * Reaching this effect proves React is running, so Framer Motion is about to
 * reveal the sections itself and the failsafe is not needed. If the bundle
 * never arrives, this never runs and the timer fires instead.
 */
export function RevealFailsafe() {
  useEffect(() => {
    ;(window as WindowWithFailsafe).__cancelRevealFailsafe?.()
  }, [])

  return null
}
