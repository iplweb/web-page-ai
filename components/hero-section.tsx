"use client"

import { Button } from "@/components/ui/button"
import { Brain, Activity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-primary">
            <Brain className="w-12 h-12 md:w-16 md:h-16" />
            <Activity className="w-12 h-12 md:w-16 md:h-16" />
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("AI in Medicine", "AI w medycynie")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            {t(
              "AI solutions for medical text processing, clinical decision support, and patient safety in anesthesiology and intensive care.",
              "Rozwiązania AI do przetwarzania tekstu medycznego, wspomagania decyzji klinicznych i bezpieczeństwa pacjentów w anestezjologii i intensywnej terapii.",
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 w-full max-w-2xl">
            <Button size="lg" className="text-base" onClick={() => scrollToSection("services")}>
              {t("View My Work", "Zobacz moją pracę")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
              onClick={() => scrollToSection("research")}
            >
              {t("Current Research", "Aktualne badania")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
              onClick={() => scrollToSection("publications")}
            >
              {t("My Publications", "Moje publikacje")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              {t("Get in Touch", "Skontaktuj się")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
