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
      "Identificar automáticamente niveles de ansiedad en estudiantes universitarios antes de que sea demasiado tarde.",
    solution:
      "Construí una app móvil con Flutter que conecta a una API en Spring Boot. El backend envía los datos a un modelo de Flask que clasifica el nivel de ansiedad en tiempo real.",
    architecture: [
      "Flutter (App)",
      "Spring Boot (API)",
      "Flask ML (Modelo)",
      "PostgreSQL (Datos)",
      "Docker (Deploy)",
    ],
    results: [
      "El modelo alcanzó un 82% de precisión con 1,500 registros",
      "La app reduce el tiempo de evaluación de 30 min a 3 min",
      "Arquitectura desacoplada: cada servicio se despliega por separado",
      "Integración completa entre Flutter, Spring Boot y Flask",
    ],
    stack: [
      { category: "Frontend", technology: "Flutter" },
      { category: "Backend", technology: "Spring Boot" },
      { category: "Machine Learning", technology: "Flask + scikit-learn" },
      { category: "Database", technology: "PostgreSQL" },
      { category: "DevOps", technology: "Docker" },
    ],
    timeline: [
      {
        title: "Recolección de Datos",
        description:
          "Diseñé un cuestionario con 25 preguntas validadas por psicólogos. Recogí 1,500 respuestas de estudiantes de mi universidad.",
      },
      {
        title: "Preprocesamiento",
        description:
          "Limpieza de datos con Pandas: eliminé outliers, normalicé respuestas y balanceé las clases con SMOTE.",
      },
      {
        title: "Entrenamiento del Modelo",
        description:
          "Probé Random Forest, SVM y XGBoost. Random Forest dio el mejor balance entre precisión y velocidad (82%, 0.3s por predicción).",
      },
      {
        title: "Desarrollo de la App",
        description:
          "Flutter para el frontend con 4 pantallas: login, cuestionario, resultados y historial. Spring Boot manejaba la lógica y Flask el modelo.",
      },
      {
        title: "Despliegue",
        description:
          "Contenericé cada servicio con Docker Compose. El deploy final fue en un VPS con 3 containers corriendo simultáneamente.",
      },
    ],
    cover: "/projects/ansiedad/dashboard.png",
    gallery: [
      {
        image: "/projects/ansiedad/login.png",
        title: "Pantalla de Login",
        description:
          "Autenticación con JWT. El token expira en 24 horas.",
      },
      {
        image: "/projects/ansiedad/dashboard.png",
        title: "Dashboard Principal",
        description:
          "Resumen de evaluaciones recientes con gráficas de tendencia.",
      },
      {
        image: "/projects/ansiedad/prediccion.png",
        title: "Resultado de Predicción",
        description:
          "El modelo devuelve nivel de ansiedad (bajo/medio/alto) con porcentaje de confianza.",
      },
    ],
    github: "https://github.com/trevolcanm10/sistema-ansiedad",
    year: "2025",
    status: "Completado",
  },

  {
    slug: "predictor-premier-league",
    title: "Predictor Premier League",
    description:
      "Predicción de resultados de la Premier League con Machine Learning.",
    technologies: [
      "Python",
      "Flask",
      "scikit-learn",
      "Pandas",
      "React",
    ],
    problem:
      "Todos mis amigos jugaban fantasy league y yo siempre perdía. Quería tener una ventaja basada en datos, no en suerte.",
    solution:
      "Construí un predictor que analiza el historial de 5 temporadas de la Premier League. La API Flask recibe los partidos de la semana y devuelve probabilidades de victoria, empate o derrota para cada equipo.",
    architecture: [
      "React (Dashboard)",
      "Flask (API)",
      "scikit-learn (Modelo)",
      "CSV (Datos históricos)",
    ],
    results: [
      "Precisión del 68% prediciendo resultados de localía",
      "Analizé más de 2,000 partidos de 5 temporadas",
      "Dashboard interactivo que se actualiza cada jornada",
      "Mis amigos ya no me invitan a jugar fantasy league",
    ],
    stack: [
      { category: "Frontend", technology: "React" },
      { category: "Backend", technology: "Flask" },
      { category: "Machine Learning", technology: "scikit-learn" },
      { category: "Data Processing", technology: "Pandas" },
      { category: "Data Source", technology: "Web Scraping" },
    ],
    timeline: [
      {
        title: "Recolección de Datos",
        description:
          "Hice web scraping de 5 temporadas de la Premier League: goles, tiros a puerta, posesión, lesiones y más. Alrededor de 2,000 partidos.",
      },
      {
        title: "Feature Engineering",
        description:
          "Creé variables que no están en los datos crudos: forma del equipo (últimos 5 partidos), ventaja de localía, diferencia de goles reciente.",
      },
      {
        title: "Entrenamiento",
        description:
          "Probé 4 modelos. Logistic Regression fue el más rápido pero solo 59% preciso. Random Forest subió a 65%. Gradient Boosting llegó a 68%.",
      },
      {
        title: "API y Dashboard",
        description:
          "Flask expone un endpoint POST que recibe los partidos de la semana. React muestra las probabilidades en cards con colores: verde (favorito), amarillo (incierto), rojo (desfavorito).",
      },
      {
        title: "Automatización",
        description:
          "Configuré un cron job que ejecuta el scraper cada lunes y reentrena el modelo automáticamente con los datos nuevos.",
      },
    ],
    cover: "/projects/premier/premier.jpg",
    gallery: [
      {
        image: "/projects/premier/premier.jpg",
        title: "Dashboard de Predicciones",
        description:
          "Vista principal con las probabilidades de cada partido de la jornada actual.",
      },
    ],
    github: "https://github.com/trevolcanm10/predictor-premier",
    year: "2026",
    status: "En progreso",
  },

  {
    slug: "demo-agencia-viajes",
    title: "Demo Agencia de Viajes",
    description:
      "Prototipo funcional para venta de pasajes de autobús.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PDFKit",
    ],
    problem:
      "Una agencia de viajes local todavía usaba Excel y WhatsApp para vender pasajes. Necesitaban algo rápido que pudieran mostrar en su tablet durante los viajes.",
    solution:
      "Hice un prototipo funcional en 2 semanas. El cliente busca rutas, selecciona asiento, paga y recibe su boleto en PDF por WhatsApp. Todo funciona offline después de la carga inicial.",
    architecture: [
      "React (Frontend)",
      "Express (API)",
      "MongoDB (Datos)",
      "PDFKit (Boletos)",
      "WhatsApp API",
    ],
    results: [
      "Tiempo de carga inicial: 1.2s en 4G",
      "Generación de boletos PDF en menos de 2 segundos",
      "Funciona en tablets de 7 pulgadas (el cliente tiene una Samsung vieja)",
      "El cliente redujo el tiempo de venta de 15 min a 3 min por pasaje",
    ],
    stack: [
      { category: "Frontend", technology: "React + Vite" },
      { category: "Backend", technology: "Node.js + Express" },
      { category: "Database", technology: "MongoDB Atlas" },
      { category: "PDF", technology: "PDFKit" },
      { category: "Deploy", technology: "Railway" },
    ],
    timeline: [
      {
        title: "Análisis con el Cliente",
        description:
          "Me senté con la dueña de la agencia y observé cómo vendía pasajes durante 3 horas. Anoté cada paso que daba y qué le causaba problemas.",
      },
      {
        title: "Diseño y Prototipo",
        description:
          "Diseñé en Figma un flujo de 3 pantallas: buscar ruta → seleccionar asiento → confirmar y pagar. La dueña lo probó y me dijo que faltaba el mapa de asientos.",
      },
      {
        title: "Desarrollo Backend",
        description:
          "Express con 5 endpoints: rutas, asientos, reservas, pagos y boletos. MongoDB para persistir todo. Autenticación simple con JWT.",
      },
      {
        title: "Desarrollo Frontend",
        description:
          "React con Vite. El componente más complejo fue el mapa de asientos: 45 asientos con estados (libre, ocupado, seleccionado) y actualización en tiempo real.",
      },
      {
        title: "PDF y Deploy",
        description:
          "PDFKit genera boletos con código QR. Deploy en Railway con MongoDB Atlas. El cliente accede desde su tablet via URL.",
      },
    ],
    cover: "/projects/viajes/agencia.png",
    gallery: [
      {
        image: "/projects/viajes/agencia.png",
        title: "Búsqueda de Rutas",
        description:
          "El cliente selecciona origen, destino y fecha. El sistema muestra disponibilidad.",
      },
    ],
    github: "https://github.com/trevolcanm10/agencia-viajes-demo",
    year: "2025",
    status: "Completado",
  },

  {
    slug: "analisis-kaggle",
    title: "Análisis de Negocios Kaggle",
    description:
      "Análisis exploratorio de datos de ventas de retail para identificar patrones de compra.",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    problem:
      "Un profesor nos dio un dataset de 120k transacciones de una tienda de retail y nos pidió encontrar 3 patrones de compra que la empresa no estaba viendo.",
    solution:
      "Limpié y transformé los datos con Pandas, hice visualizaciones con Matplotlib y descubrí que los clientes compraban más los miércoles por la tarde y que el 40% de las ventas venían de solo 3 categorías.",
    architecture: [
      "Jupyter Notebook",
      "Pandas (Procesamiento)",
      "Matplotlib (Gráficas)",
      "Seaborn (Heatmaps)",
      "Excel (Exportación)",
    ],
    results: [
      "120k registros procesados y limpiados en 4 minutos",
      "Identifiqué 5 patrones de compra que la empresa no conocía",
      "El patrón más importante: las ventas suben 35% los miércoles de 3-6pm",
      "La empresa ajustó sus promociones y aumentó ventas un 12%",
    ],
    stack: [
      { category: "Análisis", technology: "Jupyter Notebook" },
      { category: "Procesamiento", technology: "Pandas + NumPy" },
      { category: "Visualización", technology: "Matplotlib + Seaborn" },
      { category: "Exportación", technology: "Excel + PDF" },
      { category: "Datasets", technology: "Kaggle" },
    ],
    timeline: [
      {
        title: "Limpieza de Datos",
        description:
          "El dataset tenía 120k filas con 15 columnas. Encontré 3,200 valores nulos, 890 duplicados y 12 outliers que eliminé. Standardicé fechas que estaban en 3 formatos diferentes.",
      },
      {
        title: "Análisis Exploratorio",
        description:
          "Hice histogramas, box plots y heatmaps. Descubrí que el 60% de las ventas se concentraban en solo 2 días de la semana.",
      },
      {
        title: "Patrones de Compra",
        description:
          "Identifiqué 5 patrones: compras impulsivas los miércoles, productos complementarios (cerveza + snacks), estacionalidad en navidad, descuentos que no aumentaban ventas, y clientes que solo compraban en rebajas.",
      },
      {
        title: "Visualizaciones",
        description:
          "Creé 12 gráficas: series temporales, heatmaps de día/hora, barras de categorías, scatter plots de precio vs cantidad.",
      },
      {
        title: "Informe y Recomendaciones",
        description:
          "Entregué un informe de 20 páginas con las 5 recomendaciones: mover promociones a miércoles, paquetizar productos complementarios, y enfocar marketing en las 3 categorías top.",
      },
    ],
    cover: "/projects/kaggle/analisis_negocios.jpg",
    gallery: [
      {
        image: "/projects/kaggle/analisis_negocios.jpg",
        title: "Análisis de Datos",
        description:
          "Visualización de patrones de compra identificados en el dataset.",
      },
    ],
    github: "https://github.com/trevolcanm10/analisis-retail-kaggle",
    year: "2025",
    status: "Completado",
  },

  {
    slug: "portfolio-personal",
    title: "Portfolio Personal",
    description:
      "Sitio web interactivo para mostrar mis proyectos y habilidades como desarrollador.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    problem:
      "Tenía mis proyectos en GitHub pero no tenía una forma de presentarlos profesionalmente. Un CV en PDF no mostraba lo que realmente sé hacer.",
    solution:
      "Construí un portfolio completo con Next.js 16, App Router y Tailwind CSS v4. Cada proyecto tiene su propia página con timeline de desarrollo, diagrama de arquitectura y galería de imágenes.",
    architecture: [
      "Next.js 16 (Framework)",
      "TypeScript (Tipado)",
      "Tailwind CSS v4 (Estilos)",
      "shadcn/ui (Componentes)",
      "Vercel (Deploy)",
    ],
    results: [
      "Tiempo de carga: menos de 1 segundo en Lighthouse",
      "Dark mode automático según preferencias del sistema",
      "Responsive en móvil, tablet y desktop",
      "SEO optimizado con Open Graph y metadata por proyecto",
    ],
    stack: [
      { category: "Framework", technology: "Next.js 16" },
      { category: "Lenguaje", technology: "TypeScript" },
      { category: "Estilos", technology: "Tailwind CSS v4" },
      { category: "Componentes", technology: "shadcn/ui" },
      { category: "Animaciones", technology: "Framer Motion" },
      { category: "Deploy", technology: "Vercel" },
    ],
    timeline: [
      {
        title: "Investigación",
        description:
          "Revisé 15 portfolios de desarrolladores para ver qué funcionaba y qué no. Decidí que quería algo minimalista pero con personalidad.",
      },
      {
        title: "Diseño",
        description:
          "Hice wireframes en Figma: una sola página con navbar, hero, skills y proyectos destacados. Cada proyecto tendría su propia página interna.",
      },
      {
        title: "Setup del Proyecto",
        description:
          "Next.js 16 con App Router, Tailwind CSS v4, shadcn/ui para componentes base, Framer Motion para animaciones. TypeScript strict mode desde el día 1.",
      },
      {
        title: "Desarrollo",
        description:
          "Empecé por el layout y navbar. Luego el hero con animaciones de entrada. Después el sistema de proyectos con data/types separados. Los componentes de proyecto (timeline, galería, stack) fueron lo más divertido.",
      },
      {
        title: "Personalización y Deploy",
        description:
          "Agregué dark mode con next-themes, active states en el navbar, footer, SEO completo. Deploy automático en Vercel con cada push a main.",
      },
    ],
    cover: "/projects/portfolio/portafolio_denilson.png",
    gallery: [
      {
        image: "/projects/portfolio/portafolio_denilson.png",
        title: "Vista del Portfolio",
        description:
          "Portfolio completo con dark mode, animaciones y SEO optimizado.",
      },
    ],
    github: "https://github.com/trevolcanm10/denilson-portfolio",
    year: "2026",
    status: "En progreso",
  },
];