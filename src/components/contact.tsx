import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import Swal from "sweetalert2"

const socialLinks = [
  { icon: Github, href: "https://github.com/LuisECV0", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/luis-castañeda-vega", label: "LinkedIn" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "dc85e2e6-f5e4-4842-bca7-d18a628a2d75",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        Swal.fire({
          title: "Mensaje enviado",
          text: "Gracias por contactarme.",
          icon: "success",
          confirmButtonColor: "#6366f1",
        })

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        throw new Error("Error al enviar")
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje.",
        icon: "error",
      })
    }

    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 px-5 md:px-6 bg-gradient-to-b from-background to-background/80"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Contacto
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Envíame un mensaje.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">

          <form onSubmit={handleSubmit} className="space-y-8">

            {[
              { label: "Nombre", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder-transparent focus:border-primary focus:outline-none transition-all"
                  placeholder={field.label}
                />
                <label
                  className="absolute left-0 top-3 text-muted-foreground transition-all
                  peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary
                  peer-valid:-top-4 peer-valid:text-sm"
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Mensaje"
                className="peer w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder-transparent focus:border-primary focus:outline-none resize-none transition-all"
              />
              <label
                className="absolute left-0 top-3 text-muted-foreground transition-all
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary
                peer-valid:-top-4 peer-valid:text-sm"
              >
                Mensaje
              </label>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </motion.button>

          </form>

          <div className="space-y-8">

            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-semibold">Disponible actualmente</span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                Abierto a proyectos freelance y oportunidades full-time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Email directo
                  </p>
                  <p className="font-medium">
                    luiscv1719@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">
                También puedes encontrarme en
              </h4>

              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  )
}