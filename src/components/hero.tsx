import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import './hero.css';
export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      aria-label="Sección principal"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/20 px-4 pt-32 pb-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/15 blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/15 blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="mx-auto max-w-4xl space-y-8 text-center animate-fade-in">
    

        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
          Castañeda Vega
        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Luis
        </span>
        </h1>


        <div className="inline-flex cursor-default items-center gap-2 rounded-full border border-accent/100 bg-accent/50 px-4 py-2 transition-colors hover:border-accent/60">
        <Sparkles className="h-4 w-4 text-foreground" aria-hidden="true" />
        <span className="text-sm font-medium text-foreground">
            💻 Desarrollador Web
        </span>
        </div>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Especializado en la creación de aplicaciones web escalables y responsivas
        </p>

        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <Button
            onClick={() => scrollTo('projects')}
            className="group w-full sm:w-auto"
          >
            Ver mis proyectos
            <ArrowRight
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollTo('contact')}
            className="w-full bg-transparent sm:w-auto"
          >
            Contactarme
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-12">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll hacia abajo"
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
