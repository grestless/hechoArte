"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParallax } from "@/hooks/use-animations"
import { MagneticButton } from "@/components/magnetic-button"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax(0.3)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#080b1a]"
    >
      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px) scale(1.15)` }}
        >
          <Image
            src="/images/hero-rug.jpg"
            alt="Alfombra artesanal de hechoarte"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080b1a] via-[#080b1a]/60 to-[#080b1a]" />
      </div>

      {/* Elementos decorativos */}
      <Star className="absolute top-[20%] left-[10%]" delay={0} />
      <Star className="absolute top-[60%] right-[15%]" delay={1.5} />
      <Star className="absolute bottom-[25%] left-[40%]" delay={3} />

      {/* Contenido Principal */}
      <div className="relative z-10 px-5 pt-28 pb-20 md:px-10 lg:px-16">
        {/* Titular Principal */}
        <div className="max-w-6xl">
          <h1 className="flex flex-col">
            <span
              className={`block font-[family-name:var(--font-display)] text-[clamp(2.5rem,10vw,9rem)] uppercase leading-[0.9] text-[#e8eaf0] transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              TRANSFORMA
            </span>
            <span
              className={`block font-[family-name:var(--font-display)] text-[clamp(2.5rem,10vw,9rem)] uppercase leading-[0.9] text-[#e8eaf0] transition-all duration-1000 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              TU ESPACIO
            </span>
            <span
              className={`block font-[family-name:var(--font-display)] text-[clamp(2.5rem,10vw,9rem)] uppercase leading-[0.9] transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              <span className="text-[#e8eaf0]">EN UNA </span>
              <span className="italic text-[#3355ff]">OBRA MAESTRA</span>
            </span>
          </h1>
        </div>

        {/* Etiqueta AVANT-GARDE */}
        <div
          className={`mt-8 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center rounded-full bg-[#111738] px-5 py-2.5 border border-[#1e2550] md:px-6 md:py-3">
            <span className="font-[family-name:var(--font-display)] text-base tracking-[0.15em] text-[#e8eaf0] uppercase md:text-xl">
              AVANT-GARDE
            </span>
          </div>
        </div>

        {/* Image collage */}
        <div
          className={`mt-12 flex flex-wrap items-center gap-3 md:gap-4 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Circle image */}
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#3355ff]/40 md:h-52 md:w-52">
            <Image
              src="/images/rug-gallery-1.jpg"
              alt="Detalle de alfombra artesanal con diseño abstracto azul y blanco"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle image */}
          <div className="relative h-28 w-36 overflow-hidden rounded-2xl md:h-56 md:w-72">
            <Image
              src="/images/rug-gallery-2.jpg"
              alt="Alfombra de diseño moderno en sala de estar minimalista"
              fill
              className="object-cover"
            />
          </div>
          {/* Small circle */}
          <div className="relative h-20 w-20 overflow-hidden rounded-full md:h-36 md:w-36">
            <Image
              src="/images/rug-gallery-3.jpg"
              alt="Textura y patrones de alfombra hecha a mano"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Fila inferior: lema + CTA */}
        <div
          className={`mt-12 md:mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="max-w-md text-sm leading-relaxed text-[#7a80a0] md:text-base">
            Cada alfombra es una obra irrepetible. Arte que se pisa, se vive, se siente. Creadas a mano por artesanos que entienden que el lujo está en lo único.
          </p>
          <div className="flex justify-start">
            <MagneticButton>
              <Link
                href="#galeria"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3355ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#4466ff] hover:shadow-[0_0_30px_rgba(51,85,255,0.4)]"
              >
                DESCUBRÍ LA COLECCIÓN
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function Star({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`pointer-events-none z-20 ${className}`}
      style={{ animation: `star-pulse 3s ease-in-out ${delay}s infinite` }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0L10.9 7.5L18.1 3.8L12.5 9.1L20 10L12.5 10.9L18.1 16.2L10.9 12.5L10 20L9.1 12.5L1.9 16.2L7.5 10.9L0 10L7.5 9.1L1.9 3.8L9.1 7.5L10 0Z"
          fill="#3355ff"
        />
      </svg>
    </div>
  )
}
