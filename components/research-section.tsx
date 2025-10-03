"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Shield, GraduationCap, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionCard = motion(Card)

export function ResearchSection() {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const handleCardClick = (link: string | undefined) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        scale: {
          duration: 0.3
        }
      }
    }
  }

  const badgeVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }

  const researchProjects = [
    {
      title: t("Remote Preanesthetic Evaluation", "Zdalna ocena przedznieczuleniowa"),
      description: t(
        "Developing AI-powered systems for remote patient assessment before anesthesia, improving safety and efficiency in surgical preparation.",
        "Rozwój systemów opartych na AI do zdalnej oceny pacjenta przed znieczuleniem, poprawiających bezpieczeństwo i efektywność przygotowania chirurgicznego."
      ),
      icon: Shield,
      status: t("Active", "Aktywny"),
    },
    {
      title: t("FIDMAA: 3D Face Analysis for Difficult Intubation", "FIDMAA: Analiza twarzy 3D dla trudnej intubacji"),
      description: t(
        "Using advanced 3D facial recognition and AI to predict difficult intubation cases, enhancing patient safety during anesthesia induction.",
        "Wykorzystanie zaawansowanego rozpoznawania twarzy 3D i AI do przewidywania trudnych przypadków intubacji, zwiększając bezpieczeństwo pacjenta podczas indukcji znieczulenia."
      ),
      icon: Microscope,
      status: t("Active", "Aktywny"),
      link: "https://github.com/fidmaa/",
    },
    {
      title: t("Board Exam Question Quality Evaluation", "Ocena jakości pytań egzaminacyjnych"),
      description: t(
        "Applying artificial intelligence to assess and improve the quality of anesthesiology board examination questions for better medical education.",
        "Zastosowanie sztucznej inteligencji do oceny i poprawy jakości pytań egzaminacyjnych z anestezjologii dla lepszej edukacji medycznej."
      ),
      icon: GraduationCap,
      status: t("Active", "Aktywny"),
    },
  ]

  return (
    <section id="research" className="py-16 md:py-24 bg-primary/5 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <Microscope className="w-12 h-12 text-primary mx-auto mb-4" />
          </motion.div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Current Research", "Aktualne badania")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "Pioneering AI-driven research projects focused on improving patient safety and advancing anesthesiology practice.",
              "Pionierskie projekty badawcze oparte na AI, skoncentrowane na poprawie bezpieczeństwa pacjentów i rozwoju praktyki anestezjologicznej."
            )}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {researchProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <MotionCard
                key={index}
                className={`flex flex-col ${project.link ? 'cursor-pointer' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                style={{ perspective: 1000 }}
                onClick={() => handleCardClick(project.link)}
              >
                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-10 h-10 text-primary" />
                    <motion.div
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <Badge variant="secondary">{project.status}</Badge>
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl leading-tight text-balance">{project.title}</CardTitle>
                  <CardDescription className="mt-3 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                {project.link && (
                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={(e) => e.stopPropagation()}
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t("View on GitHub", "Zobacz na GitHub")}
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                )}
              </MotionCard>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}