"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Database, Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NLPSection() {
  const { t, language } = useLanguage()
  const [viewMode, setViewMode] = useState<"table" | "json">("table")

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
    <section className="py-16 md:py-24 bg-background">
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

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          <Card>
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
                    <pre className="text-xs overflow-x-auto leading-relaxed">{currentExample.json}</pre>
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
          </Card>

          <Card>
            <CardHeader>
              <Database className="w-10 h-10 text-primary mb-2" />
              <CardTitle>{t("Data Structuring", "Strukturyzacja danych")}</CardTitle>
              <CardDescription>
                {t(
                  "Convert free-text medical records into structured, queryable databases",
                  "Konwersja tekstowych zapisów medycznych na ustrukturyzowane, przeszukiwalne bazy danych",
                )}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="w-10 h-10 text-primary mb-2" />
              <CardTitle>{t("AI-Powered Analysis", "Analiza oparta na AI")}</CardTitle>
              <CardDescription>
                {t(
                  "Leverage advanced language models for intelligent medical text understanding",
                  "Wykorzystanie zaawansowanych modeli językowych do inteligentnego rozumienia tekstu medycznego",
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
