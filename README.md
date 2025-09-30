# 🚀 Rigon Multiservices - Website

Sitio web corporativo de Rigon Multiservices, empresa especializada en soluciones tecnológicas IT.

## ✨ Características

- **Astro 5.0** - Framework web moderno y rápido
- **View Transitions** - Animaciones suaves entre páginas
- **Responsive Design** - Diseño adaptable a todos los dispositivos
- **SEO Optimizado** - Meta tags y estructura optimizada para buscadores
- **Lazy Loading** - Carga diferida de imágenes para mejor rendimiento

## 🎨 Animaciones Implementadas

El sitio incluye animaciones personalizadas usando View Transitions de Astro:

- **Navegación de servicios**: Al hacer clic en un servicio, el ícono, título e imagen se animan con transiciones suaves
- **Fade transitions**: Cambios de página con efecto fade
- **Scale & Rotate**: Los iconos rotan y escalan durante la navegación
- **Slide animations**: Los títulos se deslizan con efecto elegante

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🛠️ Tecnologías

- **Astro 5.0** - Framework principal
- **Bootstrap** - Sistema de grid y componentes
- **jQuery** - Interactividad (en proceso de migración)
- **Material Icons** - Iconografía
- **Montserrat & Istok Web** - Fuentes tipográficas

## 📁 Estructura del Proyecto

```
rigon-website/
├── public/
│   └── assets/
│       ├── css/
│       ├── img/
│       ├── js/
│       └── fonts/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Plantillas de página
│   ├── pages/          # Páginas del sitio
│   ├── data/           # Datos JSON
│   ├── api/            # Funciones API
│   └── styles/         # Estilos CSS personalizados
└── package.json
```

## 🎯 Páginas Principales

- **/** - Página principal
- **/about** - Quiénes somos
- **/services** - Lista de servicios
- **/services/[id]** - Detalle de servicio individual
- **/contact** - Página de contacto

## 🔧 Configuración

El proyecto usa Node.js 22.x. Asegúrate de tener instalada esta versión o superior.

## 🚀 Deployment

El sitio está configurado para desplegarse en Render.com, pero puede ser desplegado en cualquier servicio que soporte sitios estáticos:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages

## 📝 Notas de Desarrollo

### View Transitions (ClientRouter)
Las transiciones están configuradas usando `<ClientRouter />` de Astro 5.0 en `src/layouts/Layout.astro`.
Los estilos personalizados están en `src/styles/transitions.css` y pueden modificarse:
- Duraciones de animación
- Efectos de entrada/salida
- Keyframes personalizados

> **Nota:** En Astro 5.0+, `ViewTransitions` fue renombrado a `ClientRouter`.

### Añadir nuevos servicios
Edita el archivo `src/data/services.json` para agregar o modificar servicios.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📄 Licencia

© 2025 Rigon Multiservices. Todos los derechos reservados.
