'use client'

import { useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'
import landingImg from '../assets/landing.webp'
import steamImg from '../assets/steam1.webp'
import financieroImg from '../assets/financiero.webp'
import ocrImg from '../assets/ocr.webp'

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
      'Landing promocional para una hacienda, con galería de imágenes, información de servicios y formulario de contacto.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    image: landingImg,
    status: 'Completado',
    highlight: true,
    github: 'https://github.com/LuisECV0/Landing',
    demo: 'https://hacienda-montalvan.pages.dev/',
  },
    {
    id: 2,
    title: 'Steam Lens',
    description:
      'Analizador de perfiles Steam que muestra estadísticas de juegos, actividad y datos obtenidos desde la API de Steam.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: steamImg,
    status: 'Completado',
    github: 'https://github.com/LuisECV0/SteamLens',
    demo: 'https://steam-lens.vercel.app/',
  },
  {
    id: 3,
    title: 'Simulador Financiero',
    description:
      'Aplicación para analizar ingresos y gastos mediante gráficos interactivos y proyecciones financieras.',
    technologies: ['React', 'TypeScript', 'Chart.js'],
    image: financieroImg,
    status: 'Completado',
    highlight: true,
    github: 'https://github.com/LuisECV0/Projection-Wallet',
    demo: 'https://projection-wallet.vercel.app/',
  },

  {
    id: 4,
    title: 'OCR Web App',
    description:
      'Herramienta para convertir el texto de una imagen en texto editable y reutilizable.',
    technologies: ['React', 'Tesseract.js'],
    image: ocrImg,
    status: 'Completado',
    github: '#',
    demo: 'https://ocr-beta-eight.vercel.app/',
  },
  {
  id: 5,
  title: 'Sistema de Login',
  description:
    'Sistema de autenticación que permite el registro e inicio de sesión de usuarios mediante validación de credenciales y gestión básica de sesiones.',
  technologies: [ 'PHP', 'MySQL','CSS', 'JavaScript'],
  image: 'https://i.ibb.co/KxP5FXQ/p4-min.png',
  status: 'Completado',
  github: 'https://github.com/LuisECV0/login-php',
  demo: 'https://github.com/LuisECV0/login-php',
},
]

export function Projects() {
  const [filter] = useState('todos')

  const filteredProjects =
    filter === 'todos'
      ? projectsData
      : projectsData.filter((p) => p.status === filter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16 space-y-4">
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
                    className="
                      text-xs font-medium
                      px-3 py-1
                      rounded-full
                      bg-zinc-800/80
                      text-zinc-200
                      border border-zinc-700/60
                      shadow-sm
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:bg-zinc-700/80"
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
