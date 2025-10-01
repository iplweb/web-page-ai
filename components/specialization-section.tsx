"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, FileCheck, ScanText, ClipboardCheck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SpecializationSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Anesthesiology & Intensive Care", "Anestezjologia i intensywna terapia")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "AI solutions for anesthesiology and critical care.",
              "Rozwiązania AI dla anestezjologii i intensywnej terapii.",
            )}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <ClipboardCheck className="w-12 h-12 text-primary mb-3" />
              <CardTitle className="text-2xl">{t("TISS-28 Verification", "Weryfikacja TISS-28")}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {t(
                  "Verification of TISS-28 code correctness for intensive care scoring.",
                  "Weryfikacja poprawności kodów TISS-28 dla oceny intensywnej terapii.",
                )}
              </CardDescription>

              <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm font-medium mb-2 text-foreground">
                    {t("Example verification prompt:", "Przykładowy prompt weryfikacyjny:")}
                  </p>
                  <div className="text-xs text-muted-foreground space-y-2 font-mono leading-relaxed">
                    <p>
                      <span className="font-semibold">1G:</span>{" "}
                      {t(
                        "Does the description indicate that the patient's dressings were changed at least 3 times per nursing shift?",
                        "czy z opisu wynika, że pacjentowi co najmniej 3 razy na zmianę pielęgniarską zmieniano opatrunki?",
                      )}
                    </p>
                    <p>
                      <span className="font-semibold">1H:</span>{" "}
                      {t(
                        "Does the description indicate that the patient has a surgical wound drain, abdominal drain, pleural cavity drain, percutaneous PEG stoma, or suprapubic catheter?",
                        "czy z opisu wynika, że pacjent ma założony drenaż rany operacyjnej, brzucha, jamy opłucnowej, przezskórną stomię PEG, cewnik nadłonowy?",
                      )}
                    </p>
                    <p>
                      <span className="font-semibold">2A:</span>{" "}
                      {t(
                        "Does the description indicate that the patient is mechanically ventilated through an endotracheal tube, tracheostomy tube, or CPAP/NIV mask?",
                        "czy z opisu wynika, że pacjent jest wentylowany mechanicznie przez rurkę intubacyjną, tracheotomijną lub maskę CPAP/NIV?",
                      )}
                    </p>
                    <p>
                      <span className="font-semibold">3A:</span>{" "}
                      {t(
                        "Answer 'true' only if the patient description explicitly mentions one of the following medications: epinephrine, norepinephrine, dopamine, vasopressin, terlipressin, amrinone, dobutamine, levosimendan, milrinon...",
                        "Odpowiedz 'true' tylko wtedy, gdy w opisie pacjenta wyraźnie wymieniono, że pacjent przyjmuje jeden z następujących leków: adrenalina, noradrenalina, dopamina, wazopresyna, terlipresyna, amrinon, dobutamina, lewosimendan, milrinon...",
                      )}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-primary flex-shrink-0 rotate-90 md:rotate-0" />

                <div className="flex-1 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium mb-2 text-foreground">{t("Resulting JSON:", "Wynikowy JSON:")}</p>
                  <pre className="text-xs font-mono text-muted-foreground overflow-x-auto">
                    {`{
  "1G": true,
  "1H": false,
  "2A": true,
  "3A": false
  ...
}`}
                  </pre>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Stethoscope className="w-12 h-12 text-primary mb-3" />
              <CardTitle className="text-2xl">{t("Medical Data Analysis", "Analiza danych medycznych")}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {t(
                  "Analytics for anesthesiology and ICU patient data, using AI for pattern recognition and insights.",
                  "Analityka danych pacjentów anestezjologicznych i OIT, wykorzystująca AI do rozpoznawania wzorców i wniosków.",
                )}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FileCheck className="w-12 h-12 text-primary mb-3" />
              <CardTitle className="text-2xl">{t("Documentation Verification", "Sprawdzanie dokumentacji")}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {t(
                  "Automated checking of medical documentation correctness and completeness.",
                  "Automatyczne sprawdzanie poprawności i kompletności dokumentacji medycznej.",
                )}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <ScanText className="w-12 h-12 text-primary mb-3" />
              <CardTitle className="text-2xl">{t("Order Card Reading", "Odczytywanie kart zleceń")}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {t(
                  "Reading and extracting data from scanned order cards using OCR and AI.",
                  "Odczytywanie i ekstrakcja danych z zeskanowanych kart zleceń przy użyciu OCR i AI.",
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
