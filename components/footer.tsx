export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-mono text-sm font-semibold text-foreground">
          FAHM<span className="text-primary">.</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {"© 2026 FAHM AI. Tous droits réservés."}
        </p>
      </div>
    </footer>
  )
}
