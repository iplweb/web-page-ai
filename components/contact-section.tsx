"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionCard = motion(Card)

export function ContactSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 25px 40px -15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: {
        scale: {
          duration: 0.3
        }
      }
    }
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  }

  const cards = [
    {
      icon: Phone,
      title: t("Phone", "Telefon"),
      content: "+48 793 668 733",
      href: "tel:+48793668733",
      color: "text-blue-500",
      external: false
    },
    {
      icon: Mail,
      title: t("Email", "E-mail"),
      content: "m+ai@iplweb.pl",
      href: "mailto:m+ai@iplweb.pl",
      color: "text-green-500",
      external: false
    },
    {
      icon: Calendar,
      title: t("Schedule Meeting", "Umów spotkanie"),
      isButton: true,
      buttonText: t("Book on Calendly", "Zarezerwuj przez Calendly"),
      href: "https://calendly.com/mpasternak/ai-healthcare",
      color: "text-purple-500",
      external: true
    }
  ]

  const handleCardClick = (href: string, external: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = href
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Contact Information", "Informacje kontaktowe")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "Whether you're looking for AI solutions for your medical practice or seeking a collaborator for scientific research and IT development, I'm excited to explore innovative opportunities together. My work spans from developing clinical decision support systems to advancing natural language processing for medical documentation. I'm particularly interested in partnerships that push the boundaries of what's possible in healthcare AI. Let's connect and discuss how we can advance healthcare through artificial intelligence and create meaningful impact in patient care.",
              "Niezależnie od tego, czy szukasz rozwiązań AI dla swojej praktyki medycznej, czy współpracownika do badań naukowych i rozwoju IT, z entuzjazmem podejmuję się innowacyjnych wyzwań. Moja praca obejmuje zarówno tworzenie systemów wspomagania decyzji klinicznych, jak i rozwój przetwarzania języka naturalnego dla dokumentacji medycznej. Szczególnie interesują mnie partnerstwa, które przesuwają granice możliwości AI w ochronie zdrowia. Skontaktujmy się i porozmawiajmy, jak możemy wspólnie rozwijać opiekę zdrowotną poprzez sztuczną inteligencję i tworzyć znaczący wpływ na opiekę nad pacjentem."
            )}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cards.map((card, index) => (
            <MotionCard
              key={index}
              className="text-center cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => handleCardClick(card.href, card.external)}
            >
              <CardContent className="pt-8 pb-8">
                <div className={`inline-block ${card.color || 'text-primary'}`}>
                  <card.icon className="w-12 h-12 mx-auto mb-4" />
                </div>
                <motion.div
                  className="text-xl font-semibold mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index + 0.3 }}
                >
                  {card.title}
                </motion.div>
                {card.isButton ? (
                  <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      variant="outline"
                      className="mt-2 bg-transparent"
                      onClick={(e) => e.stopPropagation()}
                      asChild
                    >
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {card.buttonText}
                      </a>
                    </Button>
                  </motion.div>
                ) : (
                  <motion.a
                    href={card.href}
                    className="text-base text-primary hover:underline break-all inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {card.content}
                  </motion.a>
                )}
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}