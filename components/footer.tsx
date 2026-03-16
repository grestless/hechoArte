"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-[#1e2550]/40 bg-[#060918]">
      {/* Instagram / social strip */}
      <div className="border-b border-[#1e2550]/40 bg-[#0d1129] py-12">
        <div className="flex flex-col items-center gap-3 px-5 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#3355ff]">
            SIGUE EL PROCESO
          </span>
          <span className="font-[family-name:var(--font-display)] text-3xl uppercase text-[#e8eaf0] md:text-4xl">
            @HECHOARTE.STUDIO
          </span>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { src: "/images/rug-gallery-1.jpg", alt: "Proceso creativo de alfombra" },
              { src: "/images/rug-gallery-2.jpg", alt: "Detalle de texturas artesanales" },
              { src: "/images/rug-gallery-3.jpg", alt: "Alfombra terminada en exposición" },
              { src: "/images/rug-gallery-4.jpg", alt: "Maestro artesano trabajando" },
              { src: "/images/hero-rug.jpg", alt: "Diseño exclusivo Hecho Arte" }
            ].map(
              (item, i) => (
                <div key={i} className="relative h-20 w-20 overflow-hidden rounded-md md:h-28 md:w-28">
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-300 hover:scale-110" />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-5 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex flex-col items-start leading-none transition-opacity hover:opacity-80">
              <span className="font-[family-name:var(--font-inter)] text-xl font-black uppercase tracking-tighter text-[#e8eaf0]">
                Hecho
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] font-light uppercase tracking-[0.6em] text-[#3355ff]">
                Arte
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#7a80a0]">
              Alfombras hechas a mano que unen el arte con la artesanía moderna. Cada pieza es una declaración única.
            </p>
          </div>

          {/* Collections */}
          <div className="md:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8eaf0]">
              COLECCIONES
            </span>
            <div className="mt-5 flex flex-col gap-3">
              <FooterLink href="/alfombras">Modern Minimal</FooterLink>
              <FooterLink href="/alfombras">Fractured Revolt</FooterLink>
              <FooterLink href="/alfombras">Nomad Art</FooterLink>
              <FooterLink href="/alfombras">Limited ed. Series</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8eaf0]">
              EMPRESA
            </span>
            <div className="mt-5 flex flex-col gap-3">
              <FooterLink href="/">Nuestra Historia</FooterLink>
              <FooterLink href="/alfombras">Artesanos</FooterLink>
              <FooterLink href="#">Prensa</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8eaf0]">
              NEWSLETTER
            </span>
            <p className="mt-3 text-xs text-[#7a80a0]">
              Únete para recibir lanzamientos exclusivos y nuevas colecciones.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-lg border border-[#1e2550] bg-[#111738] px-4 py-2.5 text-xs text-[#e8eaf0] placeholder-[#7a80a0] outline-none transition-colors focus:border-[#3355ff]"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3355ff] text-white transition-colors hover:bg-[#4466ff]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#1e2550]/40 pt-8 md:flex-row">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#7a80a0]/50">
            {"2026 Hecho Arte. Todos los derechos reservados."}
          </span>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/hechoarte.studio" target="_blank" rel="noopener noreferrer" className="text-[#7a80a0] transition-colors hover:text-[#e8eaf0]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://twitter.com/hechoarte" target="_blank" rel="noopener noreferrer" className="text-[#7a80a0] transition-colors hover:text-[#e8eaf0]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-xs text-[#7a80a0] transition-colors duration-300 hover:text-[#e8eaf0]">
      {children}
    </Link>
  )
}
