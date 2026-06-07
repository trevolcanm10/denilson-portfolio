import { Mail, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "denilson@example.com",
    href: "mailto:denilson@example.com",
  },
  {
    icon: ExternalLink,
    label: "GitHub",
    value: "github.com/trevolcanm10",
    href: "https://github.com/trevolcanm10",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/denilson",
    href: "https://linkedin.com/in/denilson",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contacto
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ¿Tienes un proyecto o idea? Me encantaría escucharla. Escríbeme y conversamos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border bg-background/60 hover:shadow-md transition group"
            >
              <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />
              <h3 className="font-semibold mb-1">
                {link.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.value}
              </p>
            </a>
          );
        })}
      </div>

      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">
          Envíame un mensaje
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  );
}