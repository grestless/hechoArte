"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const categories = [
  {
    title: "URBANO",
    description: "Líneas urbanas, texturas raw. Para espacios que hablan el idioma de la calle y el arte contemporáneo.",
    image: "/images/cat-urbano.jpg",
    pieces: 12,
    tag: "TENDENCIA",
  },
  {
    title: "DE DISEÑO",
    description: "Piezas creadas con artistas y diseñadores. Geometría, color y movimiento en cada hilo.",
    image: "/images/cat-diseno.jpg",
    pieces: 18,
    tag: "MÁS VENDIDO",
  },
  {
    title: "PERSONALIZADA",
    description: "Tu visión, nuestras manos. Desde tu boceto hasta la pieza final, creamos lo que imagines.",
    image: "/images/cat-personalizada.jpg",
    pieces: null,
    tag: "A MEDIDA",
    href: "/personalizar",
  },
  {
    title: "MARCAS",
    description: "Alfombras con logo, branding o identidad corporativa. Para empresas que quieren diferenciarse.",
    image: "/images/cat-marcas.jpg",
    pieces: 8,
    tag: "B2B",
  },
  {
    title: "CLÁSICO",
    description: "Patrones tradicionales reinterpretados. La herencia artesanal con una mirada contemporánea.",
    image: "/images/cat-clasico.jpg",
    pieces: 14,
    tag: "HERENCIA",
  },
  {
    title: "MINIMALISTA",
    description: "Menos es más. Tonos neutros, texturas sutiles, presencia silenciosa pero poderosa.",
    image: "/images/cat-minimalista.jpg",
    pieces: 10,
    tag: "NUEVO",
  },
]

export function AlfombrasContent() {
  const { ref: headerRef, inView: headerInView } = useInView(0.1)

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32">
      {/* Header */}
      <div ref={headerRef} className="px-5 md:px-10 lg:px-16">
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#7a80a0] transition-colors hover:text-[#3355ff]"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            VOLVER AL INICIO
          </Link>
        </div>
        <h1
          className={`font-[family-name:var(--font-display)] text-5xl uppercase leading-none text-[#e8eaf0] md:text-7xl lg:text-9xl transition-all duration-800 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          NUESTRAS
          <br />
          <span className="italic text-[#3355ff]">ALFOMBRAS</span>
        </h1>
        <p
          className={`mt-6 max-w-lg text-sm leading-relaxed text-[#7a80a0] md:text-base transition-all duration-800 delay-200 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Explorá nuestras categorías. Cada una tiene su propia personalidad, técnica y propósito. Todas comparten una misma obsesión: ser únicas.
        </p>

        {/* Filter pills */}
        <div
          className={`mt-8 flex flex-wrap gap-2 transition-all duration-800 delay-400 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="rounded-full bg-[#3355ff] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
            TODAS
          </span>
          {categories.map((cat) => (
            <span
              key={cat.title}
              className="cursor-pointer rounded-full border border-[#1e2550] px-4 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#7a80a0] transition-all duration-300 hover:border-[#3355ff] hover:text-[#e8eaf0]"
            >
              {cat.title}
            </span>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="mt-16 px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="mt-20 px-5 md:px-10 lg:px-16">
        <div className="rounded-2xl border border-[#1e2550] bg-[#0d1129] p-10 text-center md:p-16">
          <h3 className="font-[family-name:var(--font-display)] text-3xl uppercase text-[#e8eaf0] md:text-5xl">
            ¿NO ENCONTRÁS LO QUE BUSCÁS?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#7a80a0]">
            Creamos alfombras a medida. Contanos tu idea y la hacemos realidad.
          </p>
          <Link
            href="/personalizar"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3355ff] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#4466ff] hover:shadow-[0_0_30px_rgba(51,85,255,0.4)]"
          >
            CREAR MI PIEZA
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  const { ref, inView } = useInView(0.1)
  const [hovered, setHovered] = useState(false)
  const href = category.href || "#"

  return (
    <div
      ref={ref}
      className="group relative block overflow-hidden rounded-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(2rem)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <Link
        href={href}
      >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={category.image}
          alt={`Alfombras ${category.title}`}
          fill
          className={`object-cover transition-all duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b1a] via-[#080b1a]/40 to-transparent" />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-[#3355ff] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            {category.tag}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="font-[family-name:var(--font-display)] text-3xl uppercase text-[#e8eaf0] md:text-4xl">
            {category.title}
          </h3>
          <p
            className={`mt-2 max-w-sm text-xs leading-relaxed text-[#c0c4d8] transition-all duration-500 ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {category.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            {category.pieces ? (
              <span className="text-[10px] uppercase tracking-wider text-[#7a80a0]">
                {category.pieces} piezas
              </span>
            ) : (
              <span className="text-[10px] uppercase tracking-wider text-[#3355ff]">
                A MEDIDA
              </span>
            )}
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#3355ff] text-white transition-all duration-300 ${
                hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
        </Link>
      </div>
    )
  }
