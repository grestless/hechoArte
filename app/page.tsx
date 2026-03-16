import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MarqueeDivider } from "@/components/marquee-divider"
import { NotAverageSection } from "@/components/not-average-section"
import { GallerySection } from "@/components/gallery-section"
import { ProcessSection } from "@/components/process-section"
import { CustomRugsSection } from "@/components/custom-rugs-section"
import { ExperienceSection } from "@/components/experience-section"
import { CollabSection } from "@/components/collab-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#080b1a]">
      <Navigation />
      <HeroSection />
      <MarqueeDivider />
      <NotAverageSection />
      <GallerySection />
      <ProcessSection />
      <CustomRugsSection />
      <MarqueeDivider />
      <ExperienceSection />
      <CollabSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
