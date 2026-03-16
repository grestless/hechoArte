"use client"

import Image from "next/image"
import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useInView } from "@/hooks/use-in-view"

export function CollabSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section className="relative overflow-hidden bg-[#080b1a] py-24 md:py-32">
      <div ref={ref} className="px-5 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left: text */}
          <div className="flex-1">
            <h2
              className={`font-[family-name:var(--font-display)] text-5xl uppercase leading-[1.0] text-[#e8eaf0] md:text-7xl lg:text-8xl transition-all duration-800 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              COLABO
              <br />
              <span className="text-[#3355ff]">RACIONES</span>
            </h2>
            <p
              className={`mt-6 max-w-lg text-sm leading-relaxed text-[#7a80a0] md:text-base transition-all duration-800 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Trabajamos con artistas, marcas y estudios de diseño para crear piezas que rompen los límites entre alfombra y arte. Si querés colaborar, escribinos.
            </p>
            <div
              className={`mt-6 text-sm text-[#7a80a0] transition-all duration-800 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="block">
                {"collaborate@hechoarte.com"}
              </span>
            </div>
            <div
              className={`mt-8 transition-all duration-800 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <MagneticButton>
                <a
                  href="mailto:collaborate@hechoarte.com"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#3355ff] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#3355ff] transition-all duration-300 hover:bg-[#3355ff] hover:text-white"
                >
                  CONTACTANOS
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right: tilted image */}
          <div
            className={`relative flex-shrink-0 transition-all duration-800 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative h-80 w-72 overflow-hidden rounded-2xl md:h-96 md:w-80 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/rug-process.jpg"
                alt="Colaboraciones hechoarte"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b1a]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
