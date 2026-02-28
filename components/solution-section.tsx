import { FileText, Languages, MessageSquareText, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Analyse complète du PDF",
    description: "FAHM lit et comprend l'intégralité de votre document académique, quel que soit le sujet.",
  },
  {
    icon: Languages,
    title: "Explication en Darija",
    description: "Recevez des explications claires dans votre langue maternelle pour mieux comprendre.",
  },
  {
    icon: MessageSquareText,
    title: "Arabe, Français & Anglais",
    description: "Choisissez la langue de votre choix : darija, arabe, français ou anglais.",
  },
  {
    icon: ShieldCheck,
    title: "Basé sur votre document",
    description: "Les réponses sont strictement basées sur le contenu de votre PDF. Pas d'hallucinations.",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
            <span className="text-xs font-medium text-muted-foreground">La solution</span>
          </div>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Une IA qui comprend votre document.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/40 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
