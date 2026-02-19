import '../../src/assets/leon.jpg'

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
                Construyendo y aprendiendo
              </h2>
            </header>

            <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                Estoy formándome como desarrollador a través de proyectos propios, creando y mejorando con cada versión.
                </p> 
                <p>
                 Ahora busco dar el siguiente paso y ganar experiencia en una empresa donde pueda seguir desarrollándome.
                </p>
            </div>


          </div>

            <aside className="relative order-1 md:order-2 flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-2xl border border-border shadow-lg">
                
                <img
                src="../../src/assets/leon.jpg"
                alt="Castañeda Vega Luis"
                className="h-full w-full object-cover"
                />

            </div>
            </aside>


        </div>
      </div>
    </section>
  )
}
