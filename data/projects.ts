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
        "Arquitectura desacoplada",
        "Integración Flutter + Spring Boot + Flask",
        "Persistencia de datos en PostgreSQL",
    ],
  },
];