import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Denilson Morales",
    "jobTitle": "Full Stack & AI Developer",
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Machine Learning",
      "AI Solutions",
      "Next.js",
      "Flutter"
    ],
    "sameAs": [
      "https://github.com/trevolcanm10",
      "https://linkedin.com/in/denilson"
    ]
  };

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-foreground">
        <ThemeProvider>
          {/* Global background layers */}
          <div className="pointer-events-none fixed inset-0 z-0 bg-background" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-dot-grid" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-grid-glow" />

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
