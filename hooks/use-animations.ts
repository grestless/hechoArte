"use client"

import { useEffect, useRef, useState, useCallback } from "react"

/**
 * Parallax hook — moves element based on scroll position.
 * @param speed - Multiplier for parallax intensity (0.1 = subtle, 0.5 = strong)
 * @param disableOnMobile - Disable on screens < 768px (default: true)
 */
export function useParallax(speed = 0.15, disableOnMobile = false) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (disableOnMobile && window.innerWidth < 768) return

    function handleScroll() {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      // Only calculate when element is near viewport
      if (rect.bottom < -200 || rect.top > windowH + 200) return
      const center = rect.top + rect.height / 2 - windowH / 2
      setOffset(center * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, disableOnMobile])

  return { ref, offset }
}

/**
 * Count-up animation hook.
 * @param target - The number to count up to
 * @param duration - Animation duration in ms (default: 2000)
 */
export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [started, target, duration])

  return { ref, count }
}

/**
 * Magnetic button hook — element subtly follows cursor.
 * @param strength - How strongly the element attracts (default: 0.3)
 * @param maxDistance - Max pixels the element moves (default: 10)
 */
export function useMagnetic(strength = 0.3, maxDistance = 10) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      // Disable on touch devices
      if ("ontouchstart" in window) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = (e.clientX - centerX) * strength
      const distY = (e.clientY - centerY) * strength

      setTransform({
        x: Math.max(-maxDistance, Math.min(maxDistance, distX)),
        y: Math.max(-maxDistance, Math.min(maxDistance, distY)),
      })
    },
    [strength, maxDistance]
  )

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if ("ontouchstart" in window) return

    el.addEventListener("mousemove", handleMouseMove)
    el.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      el.removeEventListener("mousemove", handleMouseMove)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return {
    ref,
    style: {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
      transition: transform.x === 0 ? "transform 0.4s ease-out" : "transform 0.15s ease-out",
    },
  }
}

/**
 * Scroll-driven clip-path reveal.
 * Image reveals from a closed clip-path as it scrolls into view.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [clipPercent, setClipPercent] = useState(100)

  useEffect(() => {
    function handleScroll() {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      // Start revealing when element enters viewport
      const progress = 1 - Math.max(0, Math.min(1, (rect.top - windowH * 0.3) / (windowH * 0.5)))
      setClipPercent(100 - progress * 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    ref,
    style: {
      clipPath: `inset(${clipPercent * 0.5}% ${clipPercent * 0.3}% ${clipPercent * 0.5}% ${clipPercent * 0.3}%)`,
      transition: "clip-path 0.1s ease-out",
    },
  }
}
