"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Shield, GraduationCap, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ResearchSection() {
  const { t, language } = useLanguage()

  const researchProjects = [
    {
      title: t("Remote Preanesthetic Evaluation", "Zdalna ocena przedznieczuleniowa"),
      description: t(
        "Developing AI-powered systems for remote patient assessment before anesthesia, improving safety and efficiency in surgical preparation.",
        "Rozwój systemów opartych na AI do zdalnej oceny pacjenta przed znieczuleniem, poprawiających bezpieczeństwo i efektywność przygotowania chirurgicznego.",
      ),
      icon: Shield,
      status: t("Active", "Aktywny"),
    },
    {
      title: t("FIDMAA: 3D Face Analysis for Difficult Intubation", "FIDMAA: Analiza twarzy 3D dla trudnej intubacji"),
      description: t(
        "Using advanced 3D facial recognition and AI to predict difficult intubation cases, enhancing patient safety during anesthesia induction.",
        "Wykorzystanie zaawansowanego rozpoznawania twarzy 3D i AI do przewidywania trudnych przypadków intubacji, zwiększając bezpieczeństwo pacjenta podczas indukcji znieczulenia.",
      ),
      icon: Microscope,
      status: t("Active", "Aktywny"),
      link: "https://github.com/fidmaa/",
    },
    {
      title: t("Board Exam Question Quality Evaluation", "Ocena jakości pytań egzaminacyjnych"),
      description: t(
        "Applying artificial intelligence to assess and improve the quality of anesthesiology board examination questions for better medical education.",
        "Zastosowanie sztucznej inteligencji do oceny i poprawy jakości pytań egzaminacyjnych z anestezjologii dla lepszej edukacji medycznej.",
      ),
      icon: GraduationCap,
      status: t("Active", "Aktywny"),
    },
  ]

  return (
    <section id="research" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Current Research", "Aktualne badania")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "Pioneering AI-driven research projects focused on improving patient safety and advancing anesthesiology practice.",
              "Pionierskie projekty badawcze oparte na AI, skoncentrowane na poprawie bezpieczeństwa pacjentów i rozwoju praktyki anestezjologicznej.",
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {researchProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-10 h-10 text-primary" />
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight text-balance">{project.title}</CardTitle>
                  <CardDescription className="mt-3 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                {project.link && (
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t("View on GitHub", "Zobacz na GitHub")}
                      </a>
                    </Button>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            {language === "en" &&
              "All research projects are powered by cutting-edge artificial intelligence and machine learning technologies."}
          </p>
        </div>
      </div>
    </section>
  )
}
