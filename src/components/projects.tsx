'use client'

import { useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  status: string
  highlight?: boolean
  github?: string
  demo?: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Landing Page Hacienda Montalbán',
    description:
      'Landing profesional para propiedad rural con galería optimizada y formulario funcional.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    image: '../../src/assets/fondo.png',
    status: 'Completado',
    highlight: true,
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Simulador Financiero',
    description:
      'Simulador para proyectar escenarios de gasto con gráficos interactivos y exportación PDF.',
    technologies: ['React', 'TypeScript', 'Chart.js'],
    image: '../../src/assets/fondo.png',
    status: 'Completado',
    highlight: true,
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Steam Lens',
    description:
      'Analizador de perfiles Steam con estadísticas detalladas e integración API.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image:'../../src/assets/fondo.png',
    status: 'Completado',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'OCR Web App',
    description:
      'Aplicación OCR que convierte imágenes en texto editable con soporte multilenguaje.',
    technologies: ['React', 'Tesseract.js'],
    image:'../../src/assets/fondo.png',
    status: 'Completado',
    github: '#',
    demo: '#',
  },
]

export function Projects() {
  const [filter, setFilter] = useState('todos')

  const filteredProjects =
    filter === 'todos'
      ? projectsData
      : projectsData.filter((p) => p.status === filter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl border border-border 
                          bg-card overflow-hidden 
                          transition-all duration-300 
                          hover:-translate-y-2 
                          hover:shadow-2xl 
                          hover:border-accent/60
                          ${project.highlight ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >

              <div className="relative w-full h-52 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 
                             transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-6 space-y-4 flex flex-col">

                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 
                                 bg-accent/10 
                                 text-accent 
                                 rounded-full 
                                 border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.github && (
                    <Button asChild variant="ghost" size="sm" className="flex-1 text-xs">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        Código
                      </a>
                    </Button>
                  )}

                  {project.demo && (
                    <Button asChild variant="ghost" size="sm" className="flex-1 text-xs">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {project.highlight && (
                <div className="absolute top-4 right-4 
                                bg-accent/90 text-accent-foreground 
                                px-3 py-1 rounded-full 
                                text-xs font-semibold 
                                flex items-center gap-1">
                  <ArrowUpRight size={14} />
                  Destacado
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
