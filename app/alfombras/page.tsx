import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AlfombrasContent } from "@/components/alfombras-content"

export const metadata: Metadata = {
  title: "Alfombras | hechoarte",
  description: "Explora nuestra coleccion de alfombras artesanales. Urbano, De Diseno, Personalizada, Marcas, Clasico, Minimalista.",
}

export default function AlfombrasPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b1a]">
      <Navigation />
      <AlfombrasContent />
      <Footer />
    </main>
  )
}
