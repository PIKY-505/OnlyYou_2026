# 🌌 Only U

> Una experiencia interactiva personalizada construida con tecnologías web modernas, enfocada en la estética, animaciones fluidas y renderizado gráfico avanzado.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)

## 🚀 Visión General Técnica

Este proyecto es una **Single Page Application (SPA)** altamente interactiva que combina lógica de estado global compleja con efectos visuales de alto rendimiento. No es solo una interfaz, es un sistema operativo simulado en el navegador.

### 🧠 Core & Arquitectura

- **Framework:** React 18+ sobre Vite para un HMR (Hot Module Replacement) instantáneo y builds optimizados.
- **Gestión de Estado (Zustand):**
  - Se utiliza un store centralizado (`useGameStore`) para manejar el estado de la aplicación de manera atómica.
  - **Persistencia:** Controla el desbloqueo de la app, el inventario de la tienda y los items equipados (fondos, cursores, mascotas) sin prop-drilling.

### 🎨 UI/UX & Animaciones (Framer Motion)

La interfaz cobra vida gracias a **Framer Motion**, utilizando físicas de resortes para una sensación natural.

- **Dock Dinámico:**
  - Replica el efecto de magnificación de macOS.
  - Utiliza `useMotionValue` y `useTransform` para mapear la posición del ratón a la escala de los iconos en tiempo real (60fps), evitando re-renderizados costosos de React.
- **Transiciones de Pantalla:**
  - Uso de `AnimatePresence` para gestionar el ciclo de vida de componentes al montarse y desmontarse (ej. abrir/cerrar la tienda, desbloquear pantalla).
  - Efectos de desenfoque (`backdrop-filter`) y escala coordinados.

### ⚡ Gráficos & Shaders (WebGL)

El proyecto implementa renderizado gráfico avanzado para los fondos, optimizado para el rendimiento:

1.  **Galaxy Background (OGL):**
    - Implementado con una librería WebGL ligera.
    - Simulación de partículas con **Vertex & Fragment Shaders** personalizados.
    - Interactividad reactiva: Las estrellas responden a la posición del ratón mediante `uniforms` actualizados en cada frame.
2.  **Silk Background:**
    - Shader GLSL procedural para simular fluidos y texturas de seda en movimiento.
    - Renderizado en un plano 3D que ocupa el viewport completo.

### 🛠️ Funcionalidades Clave

#### 🔐 Sistema de Seguridad (Lock Screen)

- Pantalla de bloqueo inicial que protege el contenido.
- Validación de passcode con feedback visual (animación de "shake" en error y feedback háptico visual).
- Transición cinematográfica al desbloquear (desvanecimiento y zoom-in hacia el escritorio).

#### 🛍️ Motor de Personalización (Shop)

- Sistema de equipamiento en tiempo real (**Hot-swapping**).
- Los cambios en fondos, cursores o mascotas se reflejan instantáneamente en toda la aplicación.
- Interfaz de usuario con pestañas animadas y previsualizaciones dinámicas de colores y assets.

#### 🖱️ Cursor Trails & Mascotas

- Sistema de seguimiento del puntero que renderiza elementos gráficos (GIFs/PNGs) siguiendo al ratón.
- Utiliza interpolación lineal o físicas de resorte (`damping` / `stiffness`) para que el movimiento de la mascota se sienta suave y orgánico, no robótico.

#### 🎵 Reproductor de Audio Integrado

- Reproductor flotante persistente.
- Gestión de listas de reproducción (Playlist) con soporte para metadatos.
- Controles completos: Play/Pause, Seek bar interactiva y control de volumen.

## 📂 Estructura del Proyecto

```bash
src/
├── assets/          # Recursos estáticos (imágenes, música, iconos)
├── components/      # Componentes React modulares
│   ├── Backgrounds/ # Implementaciones de WebGL y Canvas
│   ├── Shop/        # Lógica de la tienda y grid de items
│   ├── UI/          # Componentes de interfaz (Dock, Menús, LockScreen)
│   └── ...
├── store/           # Stores de Zustand (lógica de negocio)
├── styles/          # Archivos SCSS modulares para estilos complejos
└── App.jsx          # Punto de entrada y orquestación de capas
```
