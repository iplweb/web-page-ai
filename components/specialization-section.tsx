"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, FileCheck, ScanText, ClipboardCheck, ArrowRight, ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionCard = motion(Card)

export function SpecializationSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const cardVariants = {
    hidden: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
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
        duration: 0.3
      }
    }
  }

  const arrowVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const cards = [
    {
      icon: ClipboardCheck,
      title: t("TISS-28 Verification", "Weryfikacja TISS-28"),
      description: t(
        "Verification of TISS-28 code correctness for intensive care scoring.",
        "Weryfikacja poprawności kodów TISS-28 do oceny intensywnej terapii."
      ),
      hasExample: true
    },
    {
      icon: Stethoscope,
      title: t("Medical Data Analysis", "Analiza danych medycznych"),
      description: t(
        "Analytics for anesthesiology and ICU patient data, using AI for pattern recognition and insights.",
        "Analityka danych pacjentów anestezjologicznych i OIT, wykorzystująca AI do rozpoznawania wzorców i wniosków."
      ),
      hasMedicalExample: true
    },
    {
      icon: FileCheck,
      title: t("Documentation Verification", "Sprawdzanie dokumentacji"),
      description: t(
        "Automated checking of medical documentation correctness and completeness.",
        "Automatyczne sprawdzanie poprawności i kompletności dokumentacji medycznej."
      )
    },
    {
      icon: ScanText,
      title: t("Order Card Reading", "Odczytywanie kart zleceń"),
      description: t(
        "Reading and extracting data from scanned order cards using OCR and AI.",
        "Odczytywanie i ekstrakcja danych z zeskanowanych kart zleceń przy użyciu OCR i AI."
      )
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Anesthesiology & Intensive Care", "Anestezjologia i intensywna terapia")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "AI solutions for anesthesiology and critical care.",
              "Rozwiązania AI dla anestezjologii i intensywnej terapii."
            )}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {cards.map((card, index) => (
            <MotionCard
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className="overflow-hidden"
            >
              <CardHeader>
                <card.icon className="w-12 h-12 text-primary mb-3" />
                <CardTitle className="text-2xl">{card.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {card.description}
                </CardDescription>

                {card.hasExample && (
                  <motion.div
                    className="mt-4 flex flex-col md:flex-row items-center gap-4"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.div
                      className="flex-1 p-4 bg-muted rounded-lg border border-border"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p className="text-sm font-medium mb-2 text-foreground">
                        {t("Example verification prompt:", "Przykładowy prompt weryfikacyjny:")}
                      </p>
                      <div className="text-xs text-foreground/80 space-y-2 font-mono leading-relaxed">
                        <motion.p
                          initial={{ opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <span className="font-semibold">1G:</span>{" "}
                          {t(
                            "Does the description indicate that the patient's dressings were changed at least 3 times per nursing shift?",
                            "czy z opisu wynika, że pacjentowi co najmniej 3 razy na zmianę pielęgniarską zmieniano opatrunki?"
                          )}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <span className="font-semibold">1H:</span>{" "}
                          {t(
                            "Does the description indicate that the patient has a surgical wound drain, abdominal drain, pleural cavity drain, percutaneous PEG stoma, or suprapubic catheter?",
                            "czy z opisu wynika, że pacjent ma założony drenaż rany operacyjnej, brzucha, jamy opłucnowej, przezskórną stomię PEG, cewnik nadłonowy?"
                          )}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <span className="font-semibold">2A:</span>{" "}
                          {t(
                            "Does the description indicate that the patient is mechanically ventilated through an endotracheal tube, tracheostomy tube, or CPAP/NIV mask?",
                            "czy z opisu wynika, że pacjent jest wentylowany mechanicznie przez rurkę intubacyjną, tracheotomijną lub maskę CPAP/NIV?"
                          )}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <span className="font-semibold">3A:</span>{" "}
                          {t(
                            "Answer 'true' only if the patient description explicitly mentions one of the following medications: epinephrine, norepinephrine, dopamine, vasopressin, terlipressin, amrinone, dobutamine, levosimendan, milrinon...",
                            "Odpowiedz 'true' tylko wtedy, gdy w opisie pacjenta wyraźnie wymieniono, że pacjent przyjmuje jeden z następujących leków: adrenalina, noradrenalina, dopamina, wazopresyna, terlipresyna, amrinon, dobutamina, lewosimendan, milrinon..."
                          )}
                        </motion.p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={arrowVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <ArrowRight className="w-8 h-8 text-primary flex-shrink-0 rotate-90 md:rotate-0" />
                    </motion.div>

                    <motion.div
                      className="flex-1 p-4 bg-primary/10 rounded-lg border border-primary/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p className="text-sm font-medium mb-2 text-foreground">{t("Resulting JSON:", "Wynikowy JSON:")}</p>
                      <pre className="text-xs font-mono text-foreground/80 overflow-x-auto">
                        {`{
  "1G": true,
  "1H": false,
  "2A": true,
  "3A": false
  ...
}`}
                      </pre>
                    </motion.div>
                  </motion.div>
                )}

                {card.hasMedicalExample && (
                  <motion.div
                    className="mt-6 space-y-4"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.div
                      className="p-4 bg-muted rounded-lg border border-border"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p className="text-sm font-medium mb-2 text-foreground">
                        {t("Input: Medical note", "Wejście: Notatka medyczna")}
                      </p>
                      <div className="text-xs text-foreground/80 font-mono leading-relaxed">
                        UKŁAD MOCZOWY: diureza stymulowana diuretykiem pętlowym we wlewie ciągłym (Furosemid 120 mg/24h).
                        DZM: 3500 mL, DBP (+)300 mL. CRRT CVVHDF Ci-Ca UF 100/min.
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <div className="flex flex-col items-center">
                        <ArrowDown className="w-6 h-6 text-primary" />
                        <span className="text-xs text-muted-foreground mt-1">
                          {t("AI Extraction", "Ekstrakcja AI")}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-4 bg-primary/10 rounded-lg border border-primary/30"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p className="text-sm font-medium mb-2 text-foreground">
                        {t("Output: Structured JSON", "Wyjście: Strukturalny JSON")}
                      </p>
                      <pre className="text-xs font-mono text-foreground/80 overflow-x-auto">
{`{
  "DZM": 3500,
  "DBP": 300,
  "CRRT": true,
  "stimulated_diuresis": true,
  "diuretic_details": {
    "drug": "Furosemid",
    "total_daily_dose": 120
  }
}`}
                      </pre>
                    </motion.div>
                  </motion.div>
                )}
              </CardHeader>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}