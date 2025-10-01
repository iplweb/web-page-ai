"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { ExternalLink, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const publications = [
  {
    citation:
      "Pasternak, M., Szczeklik, W., Białka, S., Andruszkiewicz, P., Szczukocka, M., Pawlak, A., Rypulak, E., Pytliński, D., Borys, M., and Czuczwar, M. (2024). Remote, automatic, digital preanesthetic evaluation – are we there yet?. Anaesthesiology Intensive Therapy, 56(2), pp.91-97.",
    doi: "https://doi.org/10.5114/ait.2024.138959",
  },
  {
    citation:
      "Pluta, M.P., Darocha, T., Pasternak, M., Pasquier, M., Mendrala, K., Gocoł, R. and Kosiński, S. (2025), Eligibility for eCPR Warming in Hypothermic Cardiac Arrest: Lack of Guidelines and the Current Constraints of Artificial Intelligence in Clinical Decision-Making. Artificial Organs, 49: 1192-1196.",
    doi: "https://doi.org/10.1111/aor.14993",
  },
  {
    citation:
      "Kutnik, P. et al. Large language models assessment of caloric provision of hospital meals – A feasibility study. Clinical Nutrition ESPEN, Volume 69, 1146 - 1147.",
    doi: "https://doi.org/10.1016/j.clnesp.2025.07.1006",
  },
]

export function PublicationsSection() {
  const { t } = useLanguage()

  return (
    <section id="publications" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("My Publications", "Moje publikacje")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "Peer-reviewed research advancing the field of AI in anesthesiology and critical care.",
              "Recenzowane badania rozwijające dziedzinę AI w anestezjologii i intensywnej terapii.",
            )}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <p className="text-base leading-relaxed mb-4">{pub.citation}</p>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  {pub.doi}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
