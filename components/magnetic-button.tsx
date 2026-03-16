"use client"

import { useMagnetic } from "@/hooks/use-animations"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
}

export function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const { ref, style } = useMagnetic(0.3, 10)

  const content = (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={style}
    >
      {children}
    </div>
  )

  return content
}
