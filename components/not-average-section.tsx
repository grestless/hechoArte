"use client"

import Image from "next/image"
import { useParallax } from "@/hooks/use-animations"
import { MagneticButton } from "@/components/magnetic-button"
import { useInView } from "@/hooks/use-in-view"

export function NotAverageSection() {
  const { ref, inView } = useInView(0.05)
  const { ref: parallaxRef, offset } = useParallax(0.15)

  return (
    <section className="relative overflow-hidden bg-[#080b1a] py-24 md:py-32">
      {/* Large outlined WOW text in the background */}
      <div className="absolute top-8 left-4 pointer-events-none select-none md:left-10 lg:left-16">
        <span
          className="font-[family-name:var(--font-display)] text-[6rem] md:text-[10rem] lg:text-[14rem] uppercase leading-none"
          style={{
            WebkitTextStroke: "2px #3355ff",
            WebkitTextFillColor: "transparent",
            opacity: 0.15,
          }}
        >
          ARTE
        </span>
      </div>

      <div ref={ref} className="relative z-10 px-5 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left: circle image */}
          <div
            className={`relative mx-auto h-56 w-56 flex-shrink-0 overflow-hidden rounded-full md:mx-0 md:h-72 md:w-72 transition-all duration-800 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            ref={parallaxRef}
          >
            <div style={{ transform: `translateY(${offset}px)`, position: "absolute", inset: "-10%", width: "120%", height: "120%" }}>
              <Image
                src="/images/rug-gallery-2.jpg"
                alt="Alfombra artesanal detalle"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: headline + text */}
          <div className="flex-1">
            <h2
              className={`font-[family-name:var(--font-display)] text-4xl uppercase leading-[1.05] text-[#e8eaf0] md:text-6xl lg:text-7xl transition-all duration-800 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              ARTE QUE SE
              <br />
              <span className="italic text-[#3355ff]">PISA</span>
            </h2>
            <p
              className={`mt-6 max-w-lg text-sm leading-relaxed text-[#7a80a0] md:text-base transition-all duration-800 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Cada pieza nace del tufting artesanal: una técnica donde el hilo se inyecta a mano, punto por punto, sobre un bastidor. No hay máquinas. No hay atajos. Solo dedicación, textura y colores que no se desvanecen.
            </p>
            <div
              className={`mt-8 transition-all duration-800 delay-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <MagneticButton>
                <a
                  href="#proceso"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#3355ff] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#3355ff] transition-all duration-300 hover:bg-[#3355ff] hover:text-white"
                >
                  CONOCÉ EL PROCESO
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
