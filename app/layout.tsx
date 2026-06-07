import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Denilson Morales | Full Stack & AI Developer",
    template: "%s | Denilson Morales",
  },
  description:
    "Portfolio de Denilson Morales - Desarrollador Full Stack y especialista en soluciones de Inteligencia Artificial. Web, móvil y Machine Learning.",
  keywords: [
    "Denilson Morales",
    "Full Stack Developer",
    "AI Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Flutter",
    "Machine Learning",
  ],
  authors: [{ name: "Denilson Morales" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Denilson Morales Portfolio",
    title: "Denilson Morales | Full Stack & AI Developer",
    description:
      "Desarrollador Full Stack y especialista en soluciones de Inteligencia Artificial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denilson Morales | Full Stack & AI Developer",
    description:
      "Desarrollador Full Stack y especialista en soluciones de Inteligencia Artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
