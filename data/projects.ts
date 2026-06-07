import { Project } from "@/types/project";

export const projects: Project[] = [
  {
        slug: "sistema-ansiedad",
        title: "Sistema Predictivo de Ansiedad",
        description:
        "Clasificación de niveles de ansiedad mediante Machine Learning.",
        technologies: [
        "Flutter",
        "Spring Boot",
        "Flask",
        "Docker",
        "PostgreSQL",
        ],

        problem:
        "Identificar automáticamente niveles de ansiedad en estudiantes.",

    solution:
        "Aplicación móvil integrada con un modelo de Machine Learning.",

    architecture: [
        "Flutter",
        "Spring Boot",
        "Flask ML",
        "PostgreSQL",
        "Docker",
    ],

    results: [
        "Arquitectura desacoplada",
        "Clasificación automática",
        "API REST",
        "Clasificación automática de estudiantes",
        "Integración Flutter + Spring Boot + Flask",
        "Persistencia de datos en PostgreSQL",
    ],

    stack: [
        {
            category: "Frontend",
            technology: "Flutter",
        },
        {
            category: "Backend",
            technology: "Spring Boot",
        },
        {
            category: "Machine Learning",
            technology: "Flask",
        },
        {
            category: "Database",
            technology: "PostgreSQL",
        },
        {
            category: "DevOps",
            technology: "Docker",
        },
    ],

    github:
        "https://github.com/tuusuario/sistema-ansiedad",

    demo:
        "https://demo.com",

    year: "2026",

    status: "Completado",
        
  },
];