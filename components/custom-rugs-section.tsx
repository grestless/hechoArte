"use client"

import Image from "next/image"
import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useInView } from "@/hooks/use-in-view"

export function CustomRugsSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section className="relative overflow-hidden bg-[#080b1a] py-24 md:py-32">
      <div ref={ref} className="px-5 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left: image with entrance scale + fade — GPU-friendly, no scroll listener */}
          <div
            className={`relative mx-auto w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl md:mx-0`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0) scale(1)" : "translateX(-2rem) scale(0.97)",
              transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)",
            }}
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
              className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[1.05] text-[#e8eaf0] md:text-6xl lg:text-7xl"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(2rem)",
                transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s",
              }}
            >
              ALFOMBRAS <span className="italic text-[#3355ff]">A MEDIDA</span>
            </h2>
            <p
              className="mt-6 max-w-lg text-sm leading-relaxed text-[#7a80a0] md:text-base"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(1.5rem)",
                transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.4s",
              }}
            >
              ¿Tenés una idea para una pieza de arte? Hagámosla realidad. Colaboramos directamente con vos para tejer tu visión personal en cada nudo.
            </p>
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(1.5rem)",
                transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.6s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.6s",
              }}
              className="mt-8"
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
