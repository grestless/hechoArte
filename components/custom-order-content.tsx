"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function CustomOrderContent() {
  const { ref, inView } = useInView(0.05)

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32">
      {/* Header area with image + title side by side */}
      <div className="px-5 md:px-10 lg:px-16">
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

        <div ref={ref} className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Left: hero image circle */}
          <div
            className={`relative mx-auto h-56 w-56 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#3355ff]/30 md:mx-0 md:h-72 md:w-72 transition-all duration-800 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Image
              src="/images/hero-rug.jpg"
              alt="Alfombra personalizada hechoarte"
              fill
              className="object-cover"
            />
            {/* Blue circle badge */}
            <div className="absolute top-4 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3355ff]">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>

          {/* Right: title and text */}
          <div className="flex-1">
            <span
              className={`mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#3355ff] transition-all duration-800 delay-100 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              PERSONALIZADAS / A MEDIDA
            </span>
            <h1
              className={`font-[family-name:var(--font-display)] text-5xl uppercase leading-none text-[#e8eaf0] md:text-7xl lg:text-8xl transition-all duration-800 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              ALFOMBRAS
              <br />
              <span className="italic text-[#3355ff]">A MEDIDA</span>
            </h1>
            <p
              className={`mt-6 max-w-lg text-sm leading-relaxed text-[#7a80a0] md:text-base transition-all duration-800 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              ¿Tenés una idea para una obra maestra bajo tus pies? Vamos a darle vida. Colaborá con nuestros artesanos para tejer tu narrativa personal en cada nudo.
            </p>
            <div
              className={`mt-6 transition-all duration-800 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#form-section"
                className="inline-flex items-center gap-2 rounded-full bg-[#3355ff] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#4466ff] hover:shadow-[0_0_20px_rgba(51,85,255,0.4)]"
              >
                VAMOS A HACERLO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Process images row */}
      <div className="mt-20 px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {[
            { src: "/images/rug-process.jpg", label: "El Telar" },
            { src: "/images/rug-gallery-4.jpg", label: "Tintes Naturales" },
            { src: "/images/hero-rug.jpg", label: "Textura" },
          ].map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b1a]/80 to-transparent" />
              </div>
              <div className="absolute bottom-3 left-4">
                <span className="font-[family-name:var(--font-space)] text-xs font-medium text-[#e8eaf0] md:text-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* READY TO START? Form section */}
      <div id="form-section" className="mt-20 px-5 md:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-2xl bg-[#3355ff] p-8 md:p-12 lg:p-16">
          {/* Wavy top border decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2244ee] via-[#4466ff] to-[#2244ee]" />

          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase text-white md:text-6xl">
              ¿ESTÁS LISTO?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
              Completá el formulario a continuación. Nuestro equipo suele responder en menos de 24 horas. Tu privacidad es primordial.
            </p>
          </div>

          {/* Form card */}
          <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-[#0d1129] p-6 md:p-10">
            {/* Google Form Embed - replace the URL with your actual Google Form URL */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE/viewform?embedded=true"
              className="w-full border-0"
              height="800"
              title="Formulario de alfombra personalizada"
              style={{
                background: "transparent",
                colorScheme: "dark",
              }}
            >
              Cargando formulario...
            </iframe>
            <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-[#7a80a0]">
              Respondemos todas las consultas en 24-48 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
