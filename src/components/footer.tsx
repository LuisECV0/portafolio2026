import { Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/LuisECV0", label: "GitHub - Castañeda Vega Luis" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/luis-castañeda-vega", label: "LinkedIn - Castañeda Vega Luis" },
 ]

  return (
<footer className="border-t border-border bg-background">
  <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">

    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

      <div className="text-center md:text-left max-w-md">
        <h2 className="text-2xl font-bold">
          LuisCV
        </h2>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Desarrollador enfocado en crear aplicaciones web modernas y 
          funcionales.
        </p>
      </div>

      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -3 }}
            className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:text-primary transition-all"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>

    </div>

    <div className="mt-10 text-center text-sm text-muted-foreground">
      © {currentYear} Castañeda Vega Luis.
    </div>

  </div>
</footer>
  )
}