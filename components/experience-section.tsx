"use client"

import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useInView } from "@/hooks/use-in-view"

const lines = [
  "Vendemos la sensación de llegar a casa y pisar algo que fue creado solo para vos.",
  "Vendemos la mirada de quien entra y pregunta: ¿de dónde sacaste eso?",
  "Vendemos noches en el piso, vino en mano, sobre una pieza que es más arte que objeto.",
  "Vendemos la certeza de que lo que tenés bajo tus pies no lo tiene nadie más.",
]

function RevealLine({ text, inView, lineDelay }: { text: string; inView: boolean; lineDelay: number }) {
  const words = text.split(" ")

  return (
    <p className="font-[family-name:var(--font-space)] text-base leading-relaxed text-[#7a80a0] md:text-lg">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-600"
          style={{
            transitionDelay: inView ? `${lineDelay + i * 50}ms` : "0ms",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            filter: inView ? "blur(0px)" : "blur(4px)",
          }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  )
}

export function ExperienceSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section className="relative overflow-hidden bg-[#0d1129] py-24 md:py-36">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-[family-name:var(--font-display)] text-[6rem] md:text-[12rem] lg:text-[18rem] uppercase leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px #1e2550",
            WebkitTextFillColor: "transparent",
          }}
        >
          EXPERIENCIA
        </span>
      </div>

      <div ref={ref} className="relative z-10 px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h2
            className={`font-[family-name:var(--font-display)] text-4xl uppercase leading-[1.05] text-[#e8eaf0] md:text-6xl lg:text-7xl transition-all duration-800 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            NO VENDEMOS
            <br />
            <span className="italic text-[#3355ff]">ALFOMBRAS</span>
          </h2>

          {/* Subtext lines with word-by-word blur→clear reveal */}
          <div className="mt-10 flex flex-col gap-4">
            {lines.map((line, i) => (
              <RevealLine
                key={i}
                text={line}
                inView={inView}
                lineDelay={400 + i * 300}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-14 transition-all duration-800 delay-[1800ms] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <MagneticButton>
              <Link
                href="/personalizar"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#e8eaf0] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#e8eaf0] transition-all duration-300 hover:bg-[#e8eaf0] hover:text-[#080b1a]"
              >
                CREÁ TU PROPIA OBRA
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
