export function About() {
  const stats = [
    { value: "6+", label: "Proyectos completados" },
    { value: "2+", label: "Años de experiencia" },
    { value: "15+", label: "Tecnologías dominadas" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Contenido */}
          <div className="space-y-8">
            
            <header className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Sobre mí
              </p>
              <h2 className="text-4xl font-bold">
                Desarrollador apasionado por crear soluciones
              </h2>
            </header>

            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Soy desarrollador full-stack enfocado en aplicaciones modernas y escalables.
                Trabajo en fintech, gaming y análisis de datos, transformando requisitos
                complejos en código limpio y eficiente.
              </p>

              <p>
                Prioritizo experiencia de usuario y rendimiento. Cada decisión técnica
                busca equilibrio entre arquitectura sólida y usabilidad.
              </p>

              <p>
                Disfruto explorar nuevas tecnologías, contribuir a open source
                y mantener aprendizaje continuo.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decoración */}
          <aside className="relative h-80 overflow-hidden rounded-2xl border border-border">
            
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10 transition-colors" />

            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl opacity-60" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 space-y-4">
              <span className="text-6xl">⚡</span>

              <div>
                <p className="text-xl font-bold text-foreground">
                  Innovación & Calidad
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Transformando ideas en código que importa
                </p>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </section>
  )
}
