import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          {"Étudiez sans limites linguistiques."}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          {"Rejoignez les étudiants qui utilisent FAHM pour comprendre leurs cours sans effort."}
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-[0_0_48px_rgba(59,130,246,0.25)]"
          >
            {"Commencer gratuitement"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
