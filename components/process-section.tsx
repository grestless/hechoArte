"use client"

import Image from "next/image"
import { useCountUp } from "@/hooks/use-animations"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    num: "01",
    title: "Consulta",
    text: "Hablamos sobre tu espacio, paleta y preferencias. Hacemos un esquema preliminar juntos.",
  },
  {
    num: "02",
    title: "Diseño y Color",
    text: "Seleccionamos los hilos exactos y colores para lograr la esencia exacta de tu visión.",
  },
  {
    num: "03",
    title: "Creación",
    text: "Artesanos maestros dan vida al diseño en el telar, hilo a hilo, con semanas de dedicación.",
  },
]

const stats = [
  { target: 500, suffix: "+", label: "Piezas creadas" },
  { target: 12000, suffix: "+", label: "Horas de trabajo" },
  { target: 180, suffix: "+", label: "Colores disponibles" },
  { target: 100, suffix: "%", label: "Hecho a mano" },
]

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(target, 2500)

  return (
    <div ref={ref} className="text-center">
      <span className="font-[family-name:var(--font-display)] text-4xl text-[#3355ff] md:text-5xl lg:text-6xl">
        {count.toLocaleString()}{suffix}
      </span>
      <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#7a80a0] md:text-sm">
        {label}
      </p>
    </div>
  )
}

export function ProcessSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="proceso" className="relative overflow-hidden bg-[#080b1a] py-24 md:py-32">
      <div ref={ref} className="px-5 md:px-10 lg:px-16">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2
            className={`font-[family-name:var(--font-display)] text-5xl uppercase leading-none text-[#e8eaf0] md:text-7xl transition-all duration-800 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            EL PROCESO
          </h2>
        </div>

        {/* Three process cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group rounded-xl border border-[#1e2550] bg-[#0d1129] p-8 transition-all duration-800 hover:border-[#3355ff]/40 hover:bg-[#111738]"
              style={{
                transitionDelay: `${200 + i * 200}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(2rem)",
              }}
            >
              <span className="font-[family-name:var(--font-display)] text-4xl text-[#3355ff] md:text-5xl">
                {step.num}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-space)] text-xl font-bold text-[#e8eaf0]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#7a80a0]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Video hero — uses image as fallback with subtle animation */}
        <div
          className={`mt-12 relative overflow-hidden rounded-2xl transition-all duration-800 delay-800 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="relative aspect-[21/9] md:aspect-[3/1]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/rug-process.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              aria-label="Video que muestra el proceso de creación de una alfombra con la técnica de tufting"
            >
              <source src="/images/video/videoTufting.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#080b1a]/80 via-[#080b1a]/30 to-[#080b1a]/80" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#3355ff]">
                Tufting a mano
              </span>
              <p className="mt-1 max-w-xs text-sm text-[#e8eaf0]/80">
                Cada hilo se inyecta con precisión sobre el bastidor
              </p>
            </div>
          </div>
        </div>

        {/* Animated counters */}
        <div
          className={`mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 transition-all duration-800 delay-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>

    </section>
  )
}

