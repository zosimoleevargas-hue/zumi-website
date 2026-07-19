# Frontend Architecture

## Objetivo

Construir un sitio web rápido, escalable y fácil de mantener utilizando buenas prácticas modernas de desarrollo frontend.

---

# Stack Tecnológico

## Framework

Next.js

Razón:

Utilizar un framework moderno con excelente rendimiento, SEO y soporte para aplicaciones web profesionales.

---

## Lenguaje

TypeScript

Razón:

Mejorar la seguridad del código, detectar errores temprano y facilitar el mantenimiento.

---

## Estilos

Tailwind CSS

Razón:

Crear interfaces consistentes utilizando el Design System definido.

---

## Animaciones

Framer Motion

Uso:

- Transiciones suaves.
- Aparición de elementos.
- Microinteracciones.

Evitar animaciones excesivas.

---

## Iconos

Lucide React

Mantener consistencia visual.

---

# Arquitectura de Componentes

La aplicación debe estar construida utilizando componentes reutilizables.

---

# Estructura Principal

## Layout

Responsable de:

- Configuración global.
- Fuentes.
- Metadata.
- Estructura base.

---

## Components

Componentes reutilizables:

```
components/

├── ui/
│   ├── Button
│   ├── Card
│   ├── Badge
│   └── Container
│
├── layout/
│   ├── Navbar
│   └── Footer
│
└── sections/
    ├── Hero
    ├── Benefits
    ├── MenuPreview
    ├── About
    ├── Location
    └── Testimonials
```

---

# Reglas de Código

## Componentes

Cada componente debe:

- Tener una sola responsabilidad.
- Ser reutilizable.
- Tener nombres descriptivos.

---

## TypeScript

Reglas:

- Evitar usar `any`.
- Definir tipos correctamente.
- Mantener código limpio.

---

## Responsive

La página debe funcionar correctamente en:

- Mobile.
- Tablet.
- Desktop.

Diseño Mobile First.

---

# Performance

Prioridades:

- Optimizar imágenes.
- Usar componentes Server cuando sea posible.
- Evitar JavaScript innecesario.
- Mantener tiempos de carga rápidos.

---

# SEO Técnico

Implementar:

- Metadata.
- Open Graph.
- Sitemap.
- Robots.txt.
- Structured Data para restaurante.

---

# Accesibilidad

Cumplir buenas prácticas:

- Contraste adecuado.
- Textos alternativos en imágenes.
- Navegación con teclado.
- HTML semántico.

---

# Principio General

La solución debe priorizar:

1. Experiencia del usuario.
2. Claridad del código.
3. Rendimiento.
4. Mantenibilidad.