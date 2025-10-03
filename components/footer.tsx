"use client"

import { Mail, Github, Twitter, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <p>© Michał Pasternak 2025</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:m+ai@iplweb.pl"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">m+ai@iplweb.pl</span>
            </a>
            <a
              href="https://twitter.com/mpasternak79"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a
              href="https://github.com/fidmaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://iplweb.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">iplweb.pl</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
