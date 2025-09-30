/**
 * Configuración del sitio web Rigon Multiservices
 * Centraliza toda la información y configuración del sitio
 */

export const siteConfig = {
  // Información general del sitio
  site: {
    name: "RIGON Multiservices",
    title: "RIGON Multiservices - IT Soluciones",
    description:
      "Somos una empresa con amplio dominio tecnológico, amantes de los desafíos y del desarrollo privado y empresarial. Tu mejor asesor tecnológico.",
    url: "https://rigon.onrender.com",
    domain: "rigon.onrender.com",
    language: "es",
    locale: "es-DO",
  },

  // Información de contacto
  contact: {
    email: "rigonmultimedia@gmail.com",
    phone: {
      main: "+1 438 861 8910",
      secondary: "+1 829-966-1186",
      display: "+1 (438) 861-8910",
    },
    address: {
      street: "Santo Domingo",
      city: "Distrito Nacional",
      country: "República Dominicana",
      zipCode: "10205",
      full: "Santo Domingo, Distrito Nacional, R.D. 10205",
      googleMaps:
        "https://www.google.com/maps/place/Santo+Domingo/@18.4800294,-70.0170921,12z/data=!3m1!4b1!4m5!3m4!1s0x8eaf89f1107ea5ab:0xd6c587b82715c164!8m2!3d18.4860575!4d-69.9312117",
    },
  },

  // Redes sociales
  social: {
    youtube: {
      url: "https://www.youtube.com/channel/UCNJ_3AxxedNDGDm1foZN_-Q",
      handle: "@rigonmultiservices",
    },
    facebook: {
      url: "#", // TODO: Agregar URL real
      handle: "@rigonmultiservices",
    },
    instagram: {
      url: "#", // TODO: Agregar URL real
      handle: "@rigonmultiservices",
    },
    linkedin: {
      url: "#", // TODO: Agregar URL real
      handle: "rigon-multiservices",
    },
    twitter: {
      url: "#", // TODO: Agregar URL real
      handle: "@rigonmulti",
    },
  },

  // SEO
  seo: {
    defaultTitle: "RIGON Multiservices - IT Soluciones",
    titleTemplate: "%s | RIGON Multiservices",
    defaultDescription:
      "Somos una empresa con amplio dominio tecnológico, amantes de los desafíos y del desarrollo privado y empresarial. Tu mejor asesor tecnológico.",
    keywords: [
      "desarrollo web",
      "soluciones IT",
      "software empresarial",
      "CCTV",
      "diseño gráfico",
      "República Dominicana",
      "Santo Domingo",
      "desarrollo de software",
      "capacitaciones tecnológicas",
      "seguridad informática",
    ],
    ogImage: "/assets/img/logo.png",
    twitterCard: "summary_large_image",
  },

  // Navegación principal
  navigation: [
    { name: "Inicio", href: "/", title: "Inicio" },
    { name: "Quiénes somos", href: "/about", title: "Quiénes somos" },
    { name: "Servicios", href: "/services", title: "Servicios" },
    { name: "Contáctanos", href: "/contact", title: "Contáctanos" },
  ],

  // Configuración de animaciones
  animations: {
    enabled: true,
    duration: {
      fast: "0.3s",
      normal: "0.5s",
      slow: "0.8s",
    },
    easing: {
      default: "ease-in-out",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // Configuración de features
  features: {
    viewTransitions: true,
    lazyLoading: true,
    imageOptimization: true,
    pwa: false, // TODO: Implementar PWA
    analytics: false, // TODO: Implementar analytics
  },

  // Configuración de desarrollo
  dev: {
    port: 4321,
    host: "localhost",
  },
} as const;

// Type exports para TypeScript
export type SiteConfig = typeof siteConfig;
export type NavigationItem = (typeof siteConfig.navigation)[number];
