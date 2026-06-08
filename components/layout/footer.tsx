import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Denilson Morales &middot; Hecho con Next.js y mucho caf&eacute;
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground link-underline transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground link-underline transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
