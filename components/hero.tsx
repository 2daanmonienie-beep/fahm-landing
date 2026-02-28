import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/8 blur-[96px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            Assistant académique IA
          </span>
        </div>

        <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {"Supprimer la barrière linguistique à l'université."}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl text-pretty">
          {"Téléversez votre PDF académique en français ou en anglais. FAHM le comprend et l'explique clairement en darija, en arabe, en français ou en anglais."}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-[0_0_32px_rgba(59,130,246,0.3)]"
          >
            {"Téléverser mon cours"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/50 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
          >
            <Play className="h-4 w-4 text-primary" />
            {"Voir la démo"}
          </a>
        </div>
      </div>
    </section>
  )
}
