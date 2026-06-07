import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Página no encontrada</h2>
        <p className="text-muted-foreground">
          Lo siento, la página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}