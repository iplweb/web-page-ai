"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function NavigationBar() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)

  const sections = [
    {
      id: "nlp",
      name: t("NLP Processing", "Przetwarzanie tekstu")
    },
    {
      id: "services",
      name: t("Anesthesiology", "Anestezjologia")
    },
    {
      id: "publications",
      name: t("Publications", "Publikacje")
    },
    {
      id: "research",
      name: t("Research", "Badania")
    },
    {
      id: "about",
      name: t("About", "O mnie")
    },
    {
      id: "contact",
      name: t("Contact", "Kontakt")
    },
  ]

  useEffect(() => {
    // Show navigation after scrolling down a bit
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 100)

      // Find active section
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element !== null)

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center h-14">
          <div className="flex gap-1 md:gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium rounded-md transition-colors hover:text-primary",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}