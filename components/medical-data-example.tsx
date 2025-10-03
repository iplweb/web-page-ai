"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MedicalDataExample() {
  const { t } = useLanguage()

  const inputText = `UKŁAD MOCZOWY: diureza stymulowana diuretykiem pętlowym we wlewie ciągłym (Furosemid 120 mg/24h). DZM: 3500 mL, DBP (+)300 mL. CRRT CVVHDF Ci-Ca UF 100/min.`

  const outputJson = {
    DZM: 3500,
    DBP: 300,
    CRRT: true,
    stimulated_diuresis: true,
    diuretic_details: {
      drug: "Furosemid",
      total_daily_dose: 120
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center mb-6">
        {t("Medical Data Analysis", "Analiza danych medycznych")}
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {t("Input: Medical note", "Wejście: Notatka medyczna")}
        </p>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 font-mono text-sm">
          {inputText}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex flex-col items-center">
          <ArrowDown className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {t("AI Extraction", "Ekstrakcja AI")}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {t("Output: Structured JSON", "Wyjście: Strukturalny JSON")}
        </p>
        <pre className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
          <code className="language-json text-sm">
            {JSON.stringify(outputJson, null, 2)}
          </code>
        </pre>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
      >
        <p className="text-sm text-blue-800 dark:text-blue-300">
          <strong>{t("Key extracted data:", "Kluczowe wyekstrahowane dane:")}</strong>
        </p>
        <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>• {t("Daily urine output", "Dobowa zbiórka moczu")}: 3500 mL</li>
          <li>• {t("Fluid balance", "Dobowy bilans płynów")}: +300 mL</li>
          <li>• {t("CRRT therapy active", "Aktywna terapia CRRT")}</li>
          <li>• {t("Loop diuretic infusion", "Wlew diuretyku pętlowego")}: Furosemid 120 mg/24h</li>
        </ul>
      </motion.div>
    </div>
  )
}