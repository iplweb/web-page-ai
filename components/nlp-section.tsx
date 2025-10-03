"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Database, Sparkles, ArrowRight, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

const MotionCard = motion(Card)

// JSON syntax highlighting helper
const highlightJSON = (json: string) => {
  // Parse and re-stringify to ensure proper formatting
  try {
    const parsed = JSON.parse(json)
    const formatted = JSON.stringify(parsed, null, 2)

    return formatted
      .replace(/("[\w_]+"):/g, '<span class="text-blue-600 dark:text-blue-400">$1</span>:')
      .replace(/: "([^"]*)"/g, ': <span class="text-green-600 dark:text-green-400">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-purple-600 dark:text-purple-400">$1</span>')
      .replace(/: (true|false)/g, ': <span class="text-orange-600 dark:text-orange-400">$1</span>')
      .replace(/\[/g, '<span class="text-gray-600 dark:text-gray-400">[</span>')
      .replace(/\]/g, '<span class="text-gray-600 dark:text-gray-400">]</span>')
      .replace(/\{/g, '<span class="text-gray-600 dark:text-gray-400">{</span>')
      .replace(/\}/g, '<span class="text-gray-600 dark:text-gray-400">}</span>')
  } catch {
    return json
  }
}

export function NLPSection() {
  const { t, language } = useLanguage()
  const [viewMode, setViewMode] = useState<"table" | "json">("table")
  const [modalImage, setModalImage] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 40px -15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const examples = {
    pl: {
      input:
        "Podaje, że boli go brzuch od wczoraj. Twierdzi, że na nic się nie leczy. Przyjmuje propranolol i betaloc. Ojciec zmarł na zawał.",
      json: `{
  "choroby_pacjenta": [
    {
      "nazwa": "Ból brzucha (inne i nieokreślone)",
      "icd10": "R10.4",
      "zrodlo": "podane przez pacjenta"
    },
    {
      "nazwa": "Nadciśnienie tętnicze (nieokreślone)",
      "icd10": "I10",
      "zrodlo": "domniemane (na podstawie propranololu/betalocu)"
    },
    {
      "nazwa": "Choroba niedokrwienna serca (nieokreślona)",
      "icd10": "I25.9",
      "zrodlo": "domniemane (na podstawie propranololu/betalocu)"
    },
    {
      "nazwa": "Zaburzenia rytmu serca (nieokreślone)",
      "icd10": "I49.9",
      "zrodlo": "domniemane (na podstawie propranololu/betalocu)"
    }
  ],
  "choroby_w_rodzinie": [
    {
      "relacja": "ojciec",
      "nazwa": "Zawał serca (ostry, nieokreślony)",
      "icd10": "I21.9",
      "zrodlo": "informacja rodzinna"
    }
  ]
}`,
      table: [
        {
          category: "Pacjent",
          relation: "–",
          disease: "Ból brzucha (inne i nieokreślone)",
          icd10: "R10.4",
          source: "podane przez pacjenta",
        },
        {
          category: "Pacjent",
          relation: "–",
          disease: "Nadciśnienie tętnicze (nieokreślone)",
          icd10: "I10",
          source: "domniemane (na podstawie propranololu/betalocu)",
        },
        {
          category: "Pacjent",
          relation: "–",
          disease: "Choroba niedokrwienna serca (nieokreślona)",
          icd10: "I25.9",
          source: "domniemane (na podstawie propranololu/betalocu)",
        },
        {
          category: "Pacjent",
          relation: "–",
          disease: "Zaburzenia rytmu serca (nieokreślone)",
          icd10: "I49.9",
          source: "domniemane (na podstawie propranololu/betalocu)",
        },
        {
          category: "Historia rodzinna",
          relation: "Ojciec",
          disease: "Zawał serca (ostry, nieokreślony)",
          icd10: "I21.9",
          source: "informacja rodzinna",
        },
      ],
    },
    en: {
      input:
        "Patient reports chest pain for the past 3 days. States she has diabetes and takes metformin daily. Mother had a stroke at age 65.",
      json: `{
  "patient_conditions": [
    {
      "name": "Chest pain (unspecified)",
      "icd10": "R07.9",
      "source": "patient reported"
    },
    {
      "name": "Type 2 diabetes mellitus (unspecified)",
      "icd10": "E11.9",
      "source": "inferred (based on metformin use)"
    }
  ],
  "family_history": [
    {
      "relation": "mother",
      "name": "Cerebrovascular accident (unspecified)",
      "icd10": "I64",
      "source": "family history"
    }
  ]
}`,
      table: [
        {
          category: "Patient",
          relation: "–",
          disease: "Chest pain (unspecified)",
          icd10: "R07.9",
          source: "patient reported",
        },
        {
          category: "Patient",
          relation: "–",
          disease: "Type 2 diabetes mellitus (unspecified)",
          icd10: "E11.9",
          source: "inferred (based on metformin use)",
        },
        {
          category: "Family history",
          relation: "Mother",
          disease: "Cerebrovascular accident (unspecified)",
          icd10: "I64",
          source: "family history",
        },
      ],
    },
  }

  const currentExample = examples[language as keyof typeof examples] || examples.en

  return (
    <section id="nlp" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t(
              "Natural Language Processing for Medical Text",
              "Przetwarzanie języka naturalnego dla tekstu medycznego",
            )}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "Transform unstructured medical documentation into structured data using AI.",
              "Przekształć nieustrukturyzowaną dokumentację medyczną w ustrukturyzowane dane przy użyciu AI.",
            )}
          </p>
        </div>

        <motion.div
          className="flex flex-col gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <MotionCard
            variants={cardVariants}
            whileHover="hover"
          >
            <CardHeader>
              <FileText className="w-10 h-10 text-primary mb-2" />
              <CardTitle>{t("Text Extraction", "Ekstrakcja tekstu")}</CardTitle>
              <CardDescription>
                {t(
                  "Automatically extract key medical information from clinical notes and reports",
                  "Automatyczna ekstrakcja kluczowych informacji medycznych z notatek klinicznych i raportów",
                )}
              </CardDescription>

              <div className="mt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-md border">
                  <p className="italic text-sm leading-relaxed">{currentExample.input}</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>

                <div className="flex justify-center gap-2">
                  <Button
                    variant={viewMode === "table" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("table")}
                  >
                    {t("Table", "Tabela")}
                  </Button>
                  <Button
                    variant={viewMode === "json" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("json")}
                  >
                    JSON
                  </Button>
                </div>

                {viewMode === "json" ? (
                  <div className="bg-muted/50 p-4 rounded-md border">
                    <pre
                      className="text-xs overflow-x-auto leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: highlightJSON(currentExample.json) }}
                    />
                  </div>
                ) : (
                  <div className="bg-muted/50 p-4 rounded-md border overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">{t("Category", "Kategoria")}</th>
                          <th className="text-left p-2 font-semibold">{t("Relation", "Relacja")}</th>
                          <th className="text-left p-2 font-semibold">{t("Disease Name", "Nazwa choroby")}</th>
                          <th className="text-left p-2 font-semibold">ICD-10</th>
                          <th className="text-left p-2 font-semibold">{t("Source", "Źródło")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentExample.table.map((row, idx) => (
                          <tr key={idx} className="border-b last:border-0">
                            <td className="p-2">{row.category}</td>
                            <td className="p-2">{row.relation}</td>
                            <td className="p-2">{row.disease}</td>
                            <td className="p-2 font-mono">{row.icd10}</td>
                            <td className="p-2 text-muted-foreground">{row.source}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </CardHeader>
          </MotionCard>

          <MotionCard
            variants={cardVariants}
            whileHover="hover"
          >
            <CardHeader>
              <Database className="w-10 h-10 text-primary mb-2" />
              <CardTitle>{t("Data Structuring", "Strukturyzacja danych")}</CardTitle>
              <CardDescription>
                {t(
                  "Convert free-text medical records into structured, queryable databases",
                  "Konwersja tekstowych zapisów medycznych na ustrukturyzowane, przeszukiwalne bazy danych",
                )}
              </CardDescription>

              <div className="mt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-md border">
                  <p className="text-sm font-medium mb-2 text-foreground">
                    {t("Text:", "Tekst:")}
                  </p>
                  <p className="italic text-sm leading-relaxed">
                    {t(
                      "Chest X-ray (AP, bedside): Right hemithorax with significantly increased transparency and disappearance of vascular markings in lung fields, with contour of collapsed lung towards the hilum — image consistent with right tension pneumothorax. Marked mediastinal and tracheal shift to the left, flattening and depression of the right hemidiaphragm. Additionally visible fractures of ribs V–VII on the right side without clear signs of displaced fragments. On the left side perihilar–basal densities, possible congestion/edema. Cardiac silhouette without signs of cardiomegaly.",
                      "RTG klatki piersiowej (AP, przyłóżkowe): Prawa połowa klatki piersiowej z istotnie zwiększoną przejrzystością i zanikiem rysunku naczyniowego w polach płucnych, z zarysem opadającego ku wnęce płuca — obraz zgodny z odmą prężną prawej jamy opłucnej. Zaznaczone przemieszczenie śródpiersia i tchawicy w lewo, spłaszczenie i obniżenie prawej kopuły przepony. Dodatkowo widoczne złamania żeber V–VII po stronie prawej bez jednoznacznych cech odłamów przemieszczonych. Po stronie lewej zagęszczenia około wnękowo–podstawne, możliwy zastój/obrzęk. Sylwetka serca bez cech kardiomegalii."
                    )}
                  </p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>

                <div className="bg-primary/10 p-4 rounded-md border border-primary/30">
                  <p className="text-sm font-medium mb-2 text-foreground">
                    {t("JSON code (formatted):", "Kod JSON (sformatowany):")}
                  </p>
                  <pre
                    className="text-xs font-mono overflow-x-auto leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightJSON(`{
  "${t("anesthesia_risk_assessment", "ocena_ryzyka_znieczulenia")}": {
    "${t("risk_level", "poziom_ryzyka")}": "${t("critical", "krytyczne")}",
    "${t("risk_increasing_factors", "czynniki_zwiekszajace_ryzyko")}": [
      "${t("tension_pneumothorax", "odma_prężna")}",
      "${t("mediastinal_shift", "przemieszczenie_śródpiersia")}",
      "${t("rib_fractures", "zlamania_zeber")}",
      "${t("suspected_left_lung_congestion", "podejrzenie_zastoj_lewego_pluca")}"
    ],
    "${t("requires_urgent_intervention", "wymaga_pilnej_interwencji")}": true,
    "${t("can_anesthetize", "czy_mozna_znieczulac")}": false,
    "${t("conditions_for_anesthesia_approval", "warunki_dopuszczenia_do_znieczulenia")}": [
      "${t("pneumothorax_decompression_and_drainage", "odbarczenie_odmy_i_drenaz")}",
      "${t("respiratory_stabilization", "stabilizacja_oddechowa")}",
      "${t("reassessment_after_recommended_treatment", "ponowna_ocena_po_zalecanym_postepowaniu")}"
    ],
    "${t("contraindicated_drugs", "leki_przeciwwskazane")}": [
      "${t("nitrous_oxide_N2O", "podtlenek_azotu (N2O)")}"
    ],
    "${t("recommended_monitoring", "zalecane_monitorowanie")}": [
      "${t("continuous_pulse_oximetry", "ciągła_pulsoksymetria")}",
      "${t("capnography", "kapnografia")}",
      "${t("blood_gas_analysis", "gazometria")}",
      "${t("invasive_pressure_monitoring", "monitorowanie_inwazyjne_cisnienia")}"
    ]
  }
}`)
                    }}
                  />
                </div>
              </div>
            </CardHeader>
          </MotionCard>

          <MotionCard
            variants={cardVariants}
            whileHover="hover"
          >
            <CardHeader>
              <Sparkles className="w-10 h-10 text-primary mb-2" />
              <CardTitle>{t("AI Model Benchmarking", "Benchmarking modeli AI")}</CardTitle>
              <CardDescription>
                {t(
                  "Evaluation of AI models for suitability in specific medical applications. I systematically test and compare various language models including GPT-4, Claude, Gemini, and specialized medical LLMs to determine their accuracy, reliability, and safety for anesthesiology and intensive care use cases. My benchmarking includes assessment of medical knowledge accuracy, clinical reasoning capabilities, adherence to medical guidelines, and ability to handle edge cases and critical scenarios.",
                  "Ocena modeli AI pod kątem przydatności do użycia w konkretnych zastosowaniach medycznych. Systematycznie testuję i porównuję różne modele językowe, w tym GPT-4, Claude, Gemini oraz specjalistyczne medyczne LLM, aby określić ich dokładność, niezawodność i bezpieczeństwo w zastosowaniach anestezjologicznych i intensywnej terapii. Moje testy obejmują ocenę dokładności wiedzy medycznej, zdolności wnioskowania klinicznego, zgodności z wytycznymi medycznymi oraz umiejętności radzenia sobie z przypadkami granicznymi i scenariuszami krytycznymi.",
                )}
              </CardDescription>

              <div className="mt-6 space-y-4">
                <img
                  src="/benchmarking-results.png"
                  alt={t("AI Model Benchmarking Results", "Wyniki benchmarkingu modeli AI")}
                  className="w-full rounded-lg border shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage("/benchmarking-results.png")}
                />
                <img
                  src="/benchmarking-results-detail.png"
                  alt={t("Detailed Benchmarking Results", "Szczegółowe wyniki benchmarkingu")}
                  className="w-full rounded-lg border shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setModalImage("/benchmarking-results-detail.png")}
                />
              </div>
            </CardHeader>
          </MotionCard>
        </motion.div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label={t("Close", "Zamknij")}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={modalImage}
              alt={t("Benchmarking Results", "Wyniki benchmarkingu")}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
