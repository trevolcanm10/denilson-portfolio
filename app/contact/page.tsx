"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ExternalLink, Check, Send } from "lucide-react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");

      // Hide toast after 4 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    }, 1500);
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-24 relative">
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
        <form onSubmit={handleSubmit} className="space-y-4">
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
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
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
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none disabled:opacity-50"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar mensaje
              </>
            )}
          </button>
        </form>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-xl border bg-card shadow-lg text-foreground max-w-sm"
          >
            <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">¡Mensaje enviado con éxito!</p>
              <p className="text-xs text-muted-foreground">Gracias por escribir, te responderé pronto.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}