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

    timeline: [
        {
            title: "Recolección de Datos",
            description:
            "Obtención y análisis de información para entrenar el modelo.",
        },
        {
            title: "Preprocesamiento",
            description:
            "Limpieza, transformación y preparación de los datos.",
        },
        {
            title: "Entrenamiento del Modelo",
            description:
            "Construcción y evaluación del modelo de Machine Learning.",
        },
        {
            title: "Desarrollo de la Aplicación",
            description:
            "Implementación de Flutter, Spring Boot y Flask.",
        },
        {
            title: "Despliegue",
            description:
            "Contenerización y puesta en marcha con Docker.",
        },
    ],

    gallery: [
        {
            image: "/projects/ansiedad/login.png",
            title: "Pantalla de Inicio",
            description:
            "Autenticación de usuarios.",
        },
        {
            image: "/projects/ansiedad/dashboard.png",
            title: "Dashboard",
            description:
            "Visualización de métricas.",
        },
        {
            image: "/projects/ansiedad/prediccion.png",
            title: "Predicción",
            description:
            "Resultado generado por ML.",
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