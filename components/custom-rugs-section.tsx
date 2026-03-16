"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-animations"
import { MagneticButton } from "@/components/magnetic-button"
import { useInView } from "@/hooks/use-in-view"

export function CustomRugsSection() {
  const { ref, inView } = useInView(0.05)
  const { ref: revealRef, style: revealStyle } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-[#080b1a] py-24 md:py-32">
      <div ref={ref} className="px-5 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left: image with "YOUR DESIGN HERE" overlay */}
          <div
            className={`relative mx-auto w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl md:mx-0 transition-all duration-800 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            ref={revealRef}
            style={revealStyle}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/rug-gallery-3.jpg"
                alt="Alfombra personalizada"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b1a]/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute top-8 left-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#3355ff] text-center">
                <span className="font-[family-name:var(--font-space)] text-[10px] font-bold uppercase leading-tight tracking-wider text-white">
                  TU
                  <br />
                  DISEÑO
                  <br />
                  AQUÍ
                </span>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1">
            <h2
              className={`font-[family-name:var(--font-display)] text-4xl uppercase leading-[1.05] text-[#e8eaf0] md:text-6xl lg:text-7xl transition-all duration-800 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              ALFOMBRAS <span className="italic text-[#3355ff]">A MEDIDA</span>
            </h2>
            <p
              className={`mt-6 max-w-lg text-sm leading-relaxed text-[#7a80a0] md:text-base transition-all duration-800 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
            ¿Tenés una idea para una pieza de arte? Hagámosla realidad. Colaboramos directamente con vos para tejer tu visión personal en cada nudo.
            </p>
            <div
              className={`mt-8 transition-all duration-800 delay-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <MagneticButton>
                <Link
                  href="/personalizar"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3355ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#4466ff] hover:shadow-[0_0_30px_rgba(51,85,255,0.4)]"
                >
                  VAMOS A HACERLO
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
