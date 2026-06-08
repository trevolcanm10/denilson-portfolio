"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/services", label: "Servicios" },
  { href: "/contact", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
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
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm transition-colors rounded-lg ${
                  active
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="desktop-nav-active"
                    className="absolute inset-0 bg-secondary rounded-lg -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
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
                <button className="p-2">
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
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`text-lg font-medium hover:translate-x-1 transition ${
                            isActive(item.href)
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