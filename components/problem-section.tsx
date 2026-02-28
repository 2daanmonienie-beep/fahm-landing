import { AlertTriangle } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="probleme" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-[96px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
            <AlertTriangle className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">{"Le problème"}</span>
          </div>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {"La barrière académique cachée."}
          </h2>
        </div>

        <div className="rounded-2xl border border-border/40 bg-card/50 p-8 backdrop-blur-sm md:p-12">
          <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            {"De nombreux étudiants algériens suivent des cours universitaires en français ou en anglais sans maîtriser pleinement la langue. La difficulté ne réside pas dans l'intelligence, mais dans la compréhension."}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border/30 bg-secondary/30 p-6 text-center">
              <div className="font-mono text-3xl font-bold text-primary">72%</div>
              <p className="mt-2 text-sm text-muted-foreground">{"des étudiants algériens étudient en français"}</p>
            </div>
            <div className="rounded-xl border border-border/30 bg-secondary/30 p-6 text-center">
              <div className="font-mono text-3xl font-bold text-primary">+1M</div>
              <p className="mt-2 text-sm text-muted-foreground">{"d'étudiants confrontés à la barrière linguistique"}</p>
            </div>
            <div className="rounded-xl border border-border/30 bg-secondary/30 p-6 text-center">
              <div className="font-mono text-3xl font-bold text-foreground">{"≠"}</div>
              <p className="mt-2 text-sm text-muted-foreground">{"Le problème est linguistique, pas intellectuel"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
