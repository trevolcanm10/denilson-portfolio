export function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <h1 className="font-bold">
          Denilson Morales
        </h1>

        <div className="flex gap-6">
          <a href="/">Inicio</a>
          <a href="/projects">Proyectos</a>
          <a href="/services">Servicios</a>
          <a href="/contact">Contacto</a>
        </div>
      </nav>
    </header>
  );
}