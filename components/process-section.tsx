"use client"

import { useCountUp } from "@/hooks/use-animations"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    num: "01",
    title: "Consulta",
    text: "Hablamos sobre tu espacio, paleta y preferencias. Hacemos un esquema preliminar juntos.",
    tag: "INICIO",
  },
  {
    num: "02",
    title: "Diseño y Color",
    text: "Seleccionamos los hilos exactos y colores para lograr la esencia exacta de tu visión.",
    tag: "CREATIVA",
  },
  {
    num: "03",
    title: "Creación",
    text: "Artesanos maestros dan vida al diseño en el telar, hilo a hilo, con semanas de dedicación.",
    tag: "ARTESANAL",
  },
]

const stats = [
  { target: 50, suffix: "+", label: "Piezas creadas" },
  { target: 1000, suffix: "+", label: "Horas de trabajo" },
  { target: 80, suffix: "+", label: "Colores disponibles" },
  { target: 100, suffix: "%", label: "Hecho a mano" },
]

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(target, 2500)

  return (
    <div ref={ref} className="group relative flex flex-col items-center text-center">
      <div className="relative">
        <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#3355ff] md:text-6xl">
          {count.toLocaleString()}{suffix}
        </span>
        {/* underline accent */}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3355ff] transition-all duration-500 group-hover:w-full" />
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#7a80a0]">{label}</p>
    </div>
  )
}

export function ProcessSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="proceso" className="relative overflow-hidden bg-[#080b1a] py-24 md:py-36">
      {/* Top label */}
      <div
        ref={ref}
        className={`mb-8 flex items-center gap-4 px-5 md:px-10 lg:px-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="h-px flex-1 bg-[#1e2550]" />
        <span className="font-[family-name:var(--font-space)] text-[10px] uppercase tracking-[0.35em] text-[#3355ff]">
          Proceso de creación
        </span>
        <span className="h-px flex-1 bg-[#1e2550]" />
      </div>

      {/* Big headline */}
      <div
        className={`px-5 md:px-10 lg:px-16 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="font-[family-name:var(--font-display)] text-[14vw] uppercase leading-none tracking-tight text-[#e8eaf0] sm:text-[10vw] md:text-[7vw]">
          EL PROCESO
        </h2>
      </div>

      {/* Steps — editorial alternating layout */}
      <div className="relative mt-16 px-5 md:px-10 lg:px-16">
        {/* Vertical connector */}
        <span
          className={`absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#3355ff]/60 via-[#3355ff]/20 to-transparent md:left-10 lg:left-16 transition-all duration-1000 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}
        />

        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`relative mb-0 flex flex-col gap-6 border-b border-[#1e2550] py-12 md:flex-row md:items-start md:gap-0 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${300 + i * 180}ms` }}
          >
            {/* Ghost number */}
            <div className="absolute right-0 top-4 select-none font-[family-name:var(--font-display)] text-[8rem] font-bold leading-none text-[#1e2550]/40 md:text-[10rem]">
              {step.num}
            </div>

            {/* Step tag + dot */}
            <div className="relative flex items-center gap-4 md:w-1/6 md:flex-col md:items-start md:gap-2">
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#3355ff] bg-[#0d1129]">
                <span className="h-2 w-2 rounded-full bg-[#3355ff]" />
              </span>
              <span className="font-[family-name:var(--font-space)] text-[9px] uppercase tracking-[0.3em] text-[#3355ff] md:mt-1">
                {step.tag}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 md:pl-8">
              <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.3em] text-[#7a80a0]">
                {step.num}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl uppercase text-[#e8eaf0] md:text-5xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#7a80a0] md:text-base">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video strip */}
      <div
        className={`relative mt-16 overflow-hidden transition-all duration-700 delay-[750ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Full-bleed — no side padding */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#080b1a]/80 via-transparent to-[#080b1a]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080b1a]/60 to-transparent" />

          {/* Floating label bottom-left */}
          <div className="absolute bottom-6 left-5 md:bottom-10 md:left-10 lg:left-16">
            <span className="font-[family-name:var(--font-space)] text-[10px] uppercase tracking-[0.3em] text-[#3355ff]">
              Tufting a mano
            </span>
            <p className="mt-1 text-sm text-[#e8eaf0]/80">
              Cada hilo se inyecta con precisión sobre el bastidor
            </p>
          </div>

          {/* Floating label top-right */}
          <div className="absolute right-5 top-6 md:right-10 md:top-10 lg:right-16">
            <span className="rounded-full border border-[#e8eaf0]/20 px-4 py-1.5 font-[family-name:var(--font-space)] text-[9px] uppercase tracking-[0.3em] text-[#e8eaf0]/60 backdrop-blur-sm">
              Arte textil
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className={`mt-16 grid grid-cols-2 gap-x-8 gap-y-10 px-5 md:grid-cols-4 md:px-10 lg:px-16 transition-all duration-700 delay-[900ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
