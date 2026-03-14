
import { Code2, Server, Database } from 'lucide-react'

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="relative p-6 rounded-2xl border border-border bg-card 
                    hover:border-primary/40 transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm 
                       bg-muted hover:bg-primary/10
                       text-muted-foreground hover:text-foreground
                       border border-border
                       transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section 
      id="skills" 

      className="relative min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Stack & Tecnologías
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Tecnologías que utilizo y practico en mis proyectos personales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <SkillCategory title="Frontend" icon={<Code2 className="w-5 h-5" />} skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']} />
          <SkillCategory title="Backend" icon={<Server className="w-5 h-5" />} skills={['Node.js', 'Express', 'REST APIs']} />
          <SkillCategory title="Bases de Datos" icon={<Database className="w-5 h-5" />} skills={['PostgreSQL', 'MongoDB', 'Git', 'Docker']} />
        </div>
      </div>
    </section>
  )
}
