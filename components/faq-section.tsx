"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const faqs = [
  {
    question: "¿CUÁNTO TARDA EN FABRICARSE MI ALFOMBRA?",
    answer:
      "El tiempo de producción depende del tamaño y la complejidad del diseño. En general, una alfombra personalizada tarda entre 3 y 6 semanas. Te mantenemos informado en cada etapa del proceso.",
  },
  {
    question: "¿PUEDO ENVIAR MI PROPIO DISEÑO?",
    answer:
      "¡Por supuesto! Podés enviarnos cualquier imagen, ilustración o boceto y nuestro equipo lo adapta para que quede perfecto en formato alfombra. También te asesoramos si necesitás ajustar colores o proporciones.",
  },
  {
    question: "¿QUÉ MATERIALES UTILIZAN?",
    answer:
      "Trabajamos con hilado acrílico de alta calidad, que garantiza durabilidad, suavidad al tacto y colores vibrantes que no se desgastan con el tiempo. Es resistente al tránsito y fácil de limpiar.",
  },
  {
    question: "¿HACEN ENVÍOS A TODO EL PAÍS?",
    answer:
      "Sí, realizamos envíos a todo el país. El costo y los tiempos de entrega varían según la zona. Una vez que tu alfombra esté lista, te enviamos toda la información de seguimiento.",
  },
  {
    question: "¿CÓMO CUIDO MI ALFOMBRA?",
    answer:
      "Recomendamos aspirar regularmente y limpiar manchas con un paño húmedo. No es necesario un lavado especial. Para una limpieza más profunda, te brindamos una guía detallada con cada pedido.",
  },
  {
    question: "¿TIENEN TAMAÑOS ESTÁNDAR O TODO ES A MEDIDA?",
    answer:
      "Ofrecemos ambas opciones. Tenemos tamaños populares listos para producir, pero también podemos crear alfombras completamente a medida según tus necesidades de espacio.",
  },
]

function PlusIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-7 w-7 shrink-0 md:h-8 md:w-8">
      {/* Horizontal line (always visible) */}
      <span
        className="absolute top-1/2 left-0 block h-[2px] w-full -translate-y-1/2 bg-[#e8eaf0] transition-colors duration-300"
        style={{ backgroundColor: open ? "#3355ff" : "#e8eaf0" }}
      />
      {/* Vertical line (rotates to disappear) */}
      <span
        className="absolute top-0 left-1/2 block h-full w-[2px] -translate-x-1/2 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          backgroundColor: open ? "#3355ff" : "#e8eaf0",
          transform: `translateX(-50%) rotate(${open ? "90deg" : "0deg"})`,
          opacity: open ? 0 : 1,
        }}
      />
    </div>
  )
}

export function FaqSection() {
  const { ref, inView } = useInView(0.05)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="relative overflow-hidden bg-[#080b1a] py-24 md:py-36">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-[family-name:var(--font-display)] text-[6rem] md:text-[12rem] lg:text-[18rem] uppercase leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px #1e2550",
            WebkitTextFillColor: "transparent",
          }}
        >
          FAQ
        </span>
      </div>

      <div ref={ref} className="relative z-10 px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div
            className={`mb-16 text-center transition-all duration-800 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#3355ff]">
              Dudas frecuentes
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[1.05] text-[#e8eaf0] md:text-6xl">
              PREGUNTAS
              <br />
              <span className="italic text-[#3355ff]">FRECUENTES</span>
            </h2>
          </div>

          {/* Accordion list */}
          <div className="border-t border-[#1e2550]">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              const num = String(i + 1).padStart(2, "0")
              return (
                <div
                  key={i}
                  className="border-b border-[#1e2550]"
                  style={{
                    transitionDelay: inView ? `${i * 80}ms` : "0ms",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(1.5rem)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "ease",
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="group flex w-full items-center gap-6 py-6 text-left md:gap-8 md:py-8"
                    aria-expanded={isOpen}
                  >
                    {/* Number */}
                    <span
                      className="font-[family-name:var(--font-display)] text-xl tabular-nums transition-colors duration-300 md:text-2xl"
                      style={{ color: isOpen ? "#3355ff" : "#7a80a0" }}
                    >
                      {num}
                    </span>

                    {/* Question */}
                    <span
                      className="flex-1 font-[family-name:var(--font-display)] text-lg font-bold uppercase leading-tight transition-colors duration-300 md:text-2xl lg:text-3xl"
                      style={{ color: isOpen ? "#e8eaf0" : "#c0c4d8" }}
                    >
                      {faq.question}
                    </span>

                    {/* Plus / Minus icon */}
                    <PlusIcon open={isOpen} />
                  </button>

                  {/* Collapsible answer */}
                  <div
                    className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pl-[calc(1.25rem+1.5rem)] font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[#7a80a0] md:pl-[calc(1.5rem+2rem)] md:text-base lg:max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
