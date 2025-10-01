"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
      <Languages className="w-4 h-4 text-muted-foreground" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 px-3 text-sm"
      >
        EN
      </Button>
      <Button
        variant={language === "pl" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pl")}
        className="h-8 px-3 text-sm"
      >
        PL
      </Button>
    </div>
  )
}
