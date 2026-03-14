import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      aria-label="Sección principal"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-background via-background to-card/20 px-6"

    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/15 blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/15 blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center space-y-8">

        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            Desarrollador Web Fullstack
          </span>
        </div>

        <h1 className="font-extrabold tracking-tight leading-tight text-4xl sm:text-6xl lg:text-7xl">
          <span className="text-foreground">
            Castañeda Vega
          </span>

          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Luis
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Button
            onClick={() => scrollTo("projects")}
            size="lg"
            className="group px-8"
          >
            Ver mis proyectos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("contact")}
            className="px-8"
          >
            Contactarme
          </Button>
        </div>

        <div className="pt-16">
          <button
            onClick={() => scrollTo("about")}
            className="animate-bounce text-muted-foreground hover:text-primary"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
