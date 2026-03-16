"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (hash: string) => {
    if (pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/" + hash)
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[#3355ff] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Saltar al contenido
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080b1a]/95 backdrop-blur-md border-b border-[#1e2550]/60"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-10 lg:px-16">
          <Link href="/" className="group flex items-center transition-opacity hover:opacity-80">
            <div className="flex flex-col items-start leading-none">
              <span className="font-[family-name:var(--font-inter)] text-xl font-black uppercase tracking-tighter text-[#e8eaf0] md:text-2xl">
                Hecho
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] font-light uppercase tracking-[0.6em] text-[#3355ff] md:text-[11px]">
                Arte
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/alfombras"
              className="px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#7a80a0] transition-colors duration-300 hover:text-[#e8eaf0]"
            >
              ALFOMBRAS
            </Link>
            {[
              { label: "GALERÍA", href: "#galeria" },
              { label: "PROCESO", href: "#proceso" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#7a80a0] transition-colors duration-300 hover:text-[#e8eaf0] cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/personalizar"
              className="ml-4 rounded-full bg-[#3355ff] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#4466ff] hover:shadow-[0_0_20px_rgba(51,85,255,0.4)]"
            >
              CREAR PIEZA
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            <span
              className={`h-[2px] w-6 rounded-full bg-[#e8eaf0] transition-all duration-400 ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-[#e8eaf0] transition-all duration-400 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#080b1a]/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-10 text-center">
          <Link
            href="/alfombras"
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-display)] text-3xl uppercase text-[#e8eaf0] transition-colors duration-300 hover:text-[#3355ff]"
          >
            ALFOMBRAS
          </Link>
          {[
            { label: "GALERÍA", href: "#galeria" },
            { label: "PROCESO", href: "#proceso" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                setMenuOpen(false)
                scrollToSection(item.href)
              }}
              className="font-[family-name:var(--font-display)] text-3xl uppercase text-[#e8eaf0] transition-colors duration-300 hover:text-[#3355ff] cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/personalizar"
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded-full bg-[#3355ff] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(51,85,255,0.3)]"
          >
            CREAR PIEZA
          </Link>
        </div>
      </div>
    </>
  )
}
