# Three-In-A-Row-React

Juego clásico de "Tres en Raya" implementado con React y Vite.

## 🧩 Características

- Interfaz interactiva desarrollada con React.
- Configuración moderna utilizando Vite.
- Soporte para recarga en caliente (HMR) durante el desarrollo.
- Arquitectura sencilla y fácil de mantener.
- ESLint configurado para mantener la calidad del código.

## 🚀 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/TheAlexey7123/Three-In-A-Row-React.git
   cd Three-In-A-Row-React
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173` para jugar.

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) con soporte para Fast Refresh vía Babel
- [ESLint](https://eslint.org/) para control de calidad del código

## 📁 Estructura del proyecto

```bash
├── public/                 # Archivos estáticos
├── src/                    # Código fuente de la aplicación
│   ├── App.css
│   ├── App.jsx             # Componente principal
│   ├── assets/
│   │   └── react.svg
│   ├── components/         # Componentes reutilizables
│   │   ├── Pointer.jsx
│   │   ├── Square.jsx
│   │   └── Winner.jsx
│   ├── index.css
│   ├── logic/              # Lógica del juego
│   │   ├── board.js
│   │   └── constants.js
│   └── main.jsx            # Punto de entrada de la app
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite y plugins
├── package.json            # Scripts y dependencias
└── README.md               # Documentación
```
