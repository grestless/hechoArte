import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomOrderContent } from "@/components/custom-order-content"

export const metadata: Metadata = {
  title: "Personalizar | hechoarte",
  description: "Crea tu alfombra personalizada. Colaboramos directamente con vos para tejer tu vision personal en cada nudo.",
}

export default function PersonalizarPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b1a]">
      <Navigation />
      <CustomOrderContent />
      <Footer />
    </main>
  )
}
