"use client"

import { Button } from "@/components/ui/button"
import { Brain, Activity, FileText, Stethoscope, BookOpen, Microscope, User, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t } = useLanguage()

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 text-primary">
            <motion.div
              variants={iconVariants}
            >
              <Brain className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
            <motion.div
              variants={iconVariants}
            >
              <Activity className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("AI in Medicine", "AI w medycynie")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
          >
            {t(
              "My name is Michał Pasternak and I specialize in artificial intelligence applications in medicine. I would like to propose that you consider AI solutions for medical text processing, clinical decision support, and patient safety in anesthesiology and intensive care.",
              "Nazywam się Michał Pasternak i zajmuję się zastosowaniami sztucznej inteligencji w medycynie. Chciałbym zaproponować Ci rozważenie zastosowania rozwiązań AI do przetwarzania tekstu medycznego, wspomagania decyzji klinicznych i bezpieczeństwa pacjentów w anestezjologii i intensywnej terapii.",
            )}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 w-full max-w-4xl"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Button
                size="lg"
                className="relative text-base w-full h-auto py-5 px-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:from-blue-50/20 hover:to-blue-100/10 border border-primary/20 hover:border-blue-200/30 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-200/20"
                variant="outline"
                onClick={() => scrollToSection("nlp")}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <FileText className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{t("Text Processing", "Przetwarzanie tekstu")}</span>
                </div>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Button
                size="lg"
                className="relative text-base w-full h-auto py-5 px-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:from-blue-50/20 hover:to-blue-100/10 border border-primary/20 hover:border-blue-200/30 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-200/20"
                variant="outline"
                onClick={() => scrollToSection("services")}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <Stethoscope className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{t("Anesthesiology & ICU", "Anestezjologia i OIT")}</span>
                </div>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Button
                size="lg"
                className="relative text-base w-full h-auto py-5 px-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:from-blue-50/20 hover:to-blue-100/10 border border-primary/20 hover:border-blue-200/30 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-200/20"
                variant="outline"
                onClick={() => scrollToSection("publications")}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <BookOpen className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{t("Publications", "Publikacje")}</span>
                </div>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Button
                size="lg"
                className="relative text-base w-full h-auto py-5 px-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:from-blue-50/20 hover:to-blue-100/10 border border-primary/20 hover:border-blue-200/30 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-200/20"
                variant="outline"
                onClick={() => scrollToSection("research")}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <Microscope className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{t("Research", "Badania")}</span>
                </div>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Button
                size="lg"
                className="relative text-base w-full h-auto py-5 px-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:from-blue-50/20 hover:to-blue-100/10 border border-primary/20 hover:border-blue-200/30 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-200/20"
                variant="outline"
                onClick={() => scrollToSection("about")}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <User className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{t("About Me", "O mnie")}</span>
                </div>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <Button
                size="lg"
                className="relative text-base w-full h-auto py-5 px-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:from-blue-50/20 hover:to-blue-100/10 border border-primary/20 hover:border-blue-200/30 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-200/20"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                    <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-semibold text-foreground/90 group-hover:text-foreground transition-colors">{t("Contact", "Kontakt")}</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
