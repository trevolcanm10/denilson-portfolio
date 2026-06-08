"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useScrollSpy } from "@/components/layout/scroll-spy";

const navItems = [
  { id: "inicio", href: "/", label: "Inicio" },
  { id: "sobre-mi", href: "/#sobre-mi", label: "Sobre mí" },
  { id: "ahora", href: "/#ahora", label: "Ahora" },
  { id: "skills", href: "/#skills", label: "Skills" },
  { id: "trayectoria", href: "/#trayectoria", label: "Trayectoria" },
  { id: "proyectos", href: "/#proyectos", label: "Proyectos" },
];

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const spyActive = useScrollSpy(sectionIds, { threshold: 0.05 });

  // D2: smooth scroll si estamos en home; si no, navegar primero a home.
  // Caso especial: "Inicio" (href "/") hace scroll al top en vez de recargar.
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
      // Inicio: scroll al top, evita recargar la página
      if (href === "/") {
        e.preventDefault();
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          router.push("/");
        }
        return;
      }
      if (!href.startsWith("/#")) return;
      e.preventDefault();
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(href);
      }
    },
    [pathname, router]
  );

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.href === "/") return pathname === "/";
    if (pathname === "/") return spyActive === item.id;
    return pathname.startsWith(item.href.replace("/#", "/"));
  };

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Denilson"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          Denilson
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-300 ${
                  active
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <AnimatePresence>
                  {active && (
                    <motion.span
                      layoutId="desktop-nav-active"
                      className="absolute inset-0 bg-secondary rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2" aria-label="Abrir menú">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 mt-10">

                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/avatar.png"
                        alt="Denilson"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Denilson Morales</p>
                      <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.id}>
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href, item.id)}
                          className={`text-lg font-medium hover:translate-x-1 transition duration-300 ${
                            isActive(item)
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="pt-6 border-t">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
