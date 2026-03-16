"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const pieces = [
  {
    src: "/images/rug-gallery-1.jpg",
    title: "Nomad's Edge",
    collection: "SERIE TRIBAL",
    price: "DESDE $890",
  },
  {
    src: "/images/rug-gallery-2.jpg",
    title: "Azure Dreams",
    collection: "SERIE PROFUNDO",
    price: "DESDE $1.200",
  },
  {
    src: "/images/rug-gallery-3.jpg",
    title: "The Geometric",
    collection: "SERIE DISENO",
    price: "DESDE $950",
  },
  {
    src: "/images/rug-gallery-4.jpg",
    title: "Lune Porteuse",
    collection: "SERIE ABISMO",
    price: "DESDE $1.100",
  },
]

export function GallerySection() {
  const { ref, inView } = useInView(0.05)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", updateScrollButtons, { passive: true })
    updateScrollButtons()
    return () => el.removeEventListener("scroll", updateScrollButtons)
  }, [updateScrollButtons])

  // Drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => setIsDragging(false)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector("[data-gallery-card]")?.clientWidth || 400
    el.scrollBy({ left: direction === "left" ? -cardWidth - 16 : cardWidth + 16, behavior: "smooth" })
  }

  return (
    <section id="galeria" className="relative bg-[#080b1a] py-24 md:py-32">
      <div ref={ref} className="px-5 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className={`font-[family-name:var(--font-display)] text-5xl uppercase leading-none text-[#e8eaf0] md:text-7xl lg:text-8xl transition-all duration-800 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              GALERÍA
              <br />
              VIRTUAL
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p
              className={`max-w-sm text-sm leading-relaxed text-[#7a80a0] transition-all duration-800 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Cada pieza nace de la intencion de quien la crea. No fabricamos alfombras. Creamos arte que transforma espacios.
            </p>
            {/* Navigation arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1e2550] bg-[#0d1129] text-[#e8eaf0] transition-all duration-300 hover:border-[#3355ff] hover:bg-[#111738] disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Anterior"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1e2550] bg-[#0d1129] text-[#e8eaf0] transition-all duration-300 hover:border-[#3355ff] hover:bg-[#111738] disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Siguiente"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto px-5 md:px-10 lg:px-16 pb-4 cursor-grab active:cursor-grabbing transition-opacity duration-800 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {pieces.map((piece, i) => (
          <GalleryCard key={i} piece={piece} index={i} isDragging={isDragging} />
        ))}

        {/* "See all" card */}
        <a
          href="/alfombras"
          data-gallery-card
          className="group flex flex-shrink-0 w-[280px] md:w-[400px] flex-col items-center justify-center rounded-2xl border border-[#1e2550] bg-[#0d1129] transition-all duration-500 hover:border-[#3355ff]/50 hover:bg-[#111738]"
          style={{ scrollSnapAlign: "start" }}
        >
          <svg className="mb-4 h-8 w-8 text-[#3355ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-15deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
          <span className="font-[family-name:var(--font-display)] text-lg uppercase tracking-wider text-[#e8eaf0] md:text-2xl text-center px-6">
            VER TODA LA COLECCIÓN
          </span>
        </a>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

function GalleryCard({
  piece,
  index,
  isDragging,
}: {
  piece: (typeof pieces)[0]
  index: number
  isDragging: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      data-gallery-card
      className="group relative flex-shrink-0 w-[280px] md:w-[400px] overflow-hidden rounded-2xl cursor-pointer"
      style={{ scrollSnapAlign: "start" }}
      onMouseEnter={() => !isDragging && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={piece.src}
          alt={`Alfombra artesanal ${piece.title} de la colección ${piece.collection}`}
          fill
          className={`object-cover transition-all duration-700 ${hovered ? "scale-110" : "scale-100"}`}
          draggable={false}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b1a]/90 via-[#080b1a]/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#3355ff]">
            {piece.collection}
          </span>
          <h3 className="mt-1 font-[family-name:var(--font-space)] text-xl font-bold text-[#e8eaf0] md:text-2xl">
            {piece.title}
          </h3>
          <span className="mt-1 text-xs text-[#7a80a0]">{piece.price}</span>
        </div>
      </div>
    </div>
  )
}
