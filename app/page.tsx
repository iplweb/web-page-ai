import { HeroSection } from "@/components/hero-section"
import { NLPSection } from "@/components/nlp-section"
import { SpecializationSection } from "@/components/specialization-section"
import { PublicationsSection } from "@/components/publications-section"
import { ResearchSection } from "@/components/research-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { ContactSection } from "@/components/contact-section"
import { NavigationBar } from "@/components/navigation-bar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <LanguageSelector />
      <HeroSection />
      <NLPSection />
      <SpecializationSection />
      <PublicationsSection />
      <ResearchSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
