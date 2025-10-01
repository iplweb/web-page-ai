"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Contact Information", "Informacje kontaktowe")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {t(
              "Get in touch to discuss AI solutions for your medical practice.",
              "Skontaktuj się, aby omówić rozwiązania AI dla Twojej praktyki medycznej.",
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-xl font-semibold mb-3">{t("Phone", "Telefon")}</div>
              <a href="tel:+48793668733" className="text-base text-primary hover:underline">
                +48 793 668 733
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-xl font-semibold mb-3">{t("Email", "E-mail")}</div>
              <a href="mailto:michal.dtz@gmail.com" className="text-base text-primary hover:underline break-all">
                michal.dtz@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-xl font-semibold mb-3">{t("Schedule Meeting", "Umów spotkanie")}</div>
              <Button variant="outline" className="mt-2 bg-transparent" asChild>
                <a href="http://calendly.com/mpasternak" target="_blank" rel="noopener noreferrer">
                  {t("Book on Calendly", "Zarezerwuj przez Calendly")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
