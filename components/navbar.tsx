"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-xl font-bold tracking-tight text-foreground">
          FAHM<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#probleme" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {"Problème"}
          </a>
          <a href="#solution" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Solution
          </a>
          <a href="#fonctionnement" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Fonctionnement
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-accent"
          >
            <a
   href="/app">
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
>
  Accéder à l'application
</a>
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#probleme"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {"Problème"}
            </a>
            <a
              href="#solution"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#fonctionnement"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fonctionnement
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-accent"
            >
              {"Accéder à l'application"}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
