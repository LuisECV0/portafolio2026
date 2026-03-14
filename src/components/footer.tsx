import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      category: "Navegación",
      links: [
        { name: "Inicio", href: "#home" },
        { name: "Sobre mí", href: "#about" },
        { name: "Skills", href: "#skills" },
      ],
    },
    {
      category: "Proyectos",
      links: [
        { name: "Portafolio", href: "#projects" },
        { name: "Casos de uso", href: "#projects" },
        { name: "Contacto", href: "#contact" },
      ],
    },
    {
      category: "Legal",
      links: [
        { name: "Privacidad", href: "#" },
        { name: "Términos", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hola@ejemplo.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              Dev<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desarrollo soluciones digitales escalables con enfoque en arquitectura limpia y experiencia de usuario.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Tu Nombre. Construido con React + Tailwind.
          </p>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3 }}
                className="p-3 rounded-lg border border-border bg-card hover:border-primary hover:text-primary text-muted-foreground transition-all"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}