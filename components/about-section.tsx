"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Stethoscope, Brain } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function AboutSection() {
  const { t } = useLanguage()

  const experience = [
    {
      icon: Stethoscope,
      years: "20+",
      field: t("Anesthesiology", "Anestezjologia"),
      description: t(
        "Years of clinical experience in anesthesiology and intensive care",
        "Lat doświadczenia klinicznego w anestezjologii i intensywnej terapii",
      ),
    },
    {
      icon: Code,
      years: "35+",
      field: t("Programming", "Programowanie"),
      description: t(
        "Years of software development and technical expertise",
        "Lat rozwoju oprogramowania i ekspertyzy technicznej",
      ),
    },
    {
      icon: Brain,
      years: "3+",
      field: t("AI & LLMs", "AI i LLM"),
      description: t(
        "Years specializing in artificial intelligence and large language models",
        "Lat specjalizacji w sztucznej inteligencji i dużych modelach językowych",
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("About Me", "O mnie")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "A unique combination of medical expertise, technical proficiency, and AI innovation.",
              "Unikalne połączenie wiedzy medycznej, biegłości technicznej i innowacji AI.",
            )}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/michal-pasternak-photo-2-s5E03VsnWMW3NMtXkrmO0iA5ek3Vqy.jpg"
              alt="Michał Pasternak"
              fill
              className="object-cover"
              style={{ filter: "brightness(1.15)" }}
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experience.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-8">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.years}
                  </div>
                  <div className="text-xl font-semibold mb-3">{item.field}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base text-foreground leading-relaxed">
            {t(
              "Combining clinical practice with software development to build AI tools that support patient safety in anesthesiology and intensive care.",
              "Łączę praktykę kliniczną z programowaniem, tworząc narzędzia AI wspierające bezpieczeństwo pacjentów w anestezjologii i intensywnej terapii.",
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
