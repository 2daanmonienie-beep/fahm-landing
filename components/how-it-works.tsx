import { Upload, Brain, MessageCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Téléchargement",
    description: "Téléversez votre PDF académique en français ou en anglais.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Analyse IA",
    description: "FAHM analyse et comprend le contenu de votre document en profondeur.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Explications claires",
    description: "Recevez des explications détaillées dans la langue de votre choix.",
  },
]

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
            <span className="text-xs font-medium text-muted-foreground">Comment ça marche</span>
          </div>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Trois étapes simples.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-[60px] hidden h-px w-full bg-gradient-to-r from-primary/30 to-transparent md:block" />
              )}

              <div className="relative mb-6 flex h-[120px] w-[120px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/5" />
                <div className="absolute inset-3 rounded-full border border-primary/20 bg-card/80" />
                <step.icon className="relative z-10 h-8 w-8 text-primary" />
              </div>

              <span className="mb-2 font-mono text-xs font-medium text-primary">{step.step}</span>
              <h3 className="font-mono text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
