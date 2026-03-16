"use client"

export function MarqueeDivider() {
  const items = [
    "ARTESANAL",
    "UNICO",
    "EXCLUSIVO",
    "HECHO A MANO",
    "IRREPETIBLE",
    "ARTE",
    "DISENO",
    "TEXTURA",
    "AVANT-GARDE",
    "HANDMADE",
  ]

  return (
    <div className="relative overflow-hidden border-y border-[#1e2550]/40 bg-[#0d1129] py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((word, i) => (
          <span key={i} className="mx-6 flex items-center gap-6">
            <span className="font-[family-name:var(--font-space)] text-xs font-medium uppercase tracking-[0.2em] text-[#7a80a0]/60">
              {word}
            </span>
            <Star />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  )
}

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="opacity-40">
      <path
        d="M10 0L10.9 7.5L18.1 3.8L12.5 9.1L20 10L12.5 10.9L18.1 16.2L10.9 12.5L10 20L9.1 12.5L1.9 16.2L7.5 10.9L0 10L7.5 9.1L1.9 3.8L9.1 7.5L10 0Z"
        fill="#3355ff"
      />
    </svg>
  )
}
