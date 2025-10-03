"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const containerVariants = {
    initial: { opacity: 0, scale: 0.8, y: -20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const iconVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1
    }
  }

  const buttonVariants = {
    inactive: { scale: 1 },
    active: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  }

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border rounded-full px-4 py-2"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Languages className="w-4 h-4 text-muted-foreground" />

      <div className="flex gap-2">
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
    </motion.div>
  )
}