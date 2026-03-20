# Aves Frontend 🦅

Frontend moderno en React + Vite para la aplicación Aves de Chile.

## Características

- 🎨 Interfaz moderna con Bootstrap 5
- 🔍 Búsqueda en tiempo real
- 🖼️ Modal con imágenes de las aves desde Wikimedia Commons
- 📱 Totalmente responsive
- ⚡ Rendimiento optimizado con Vite

## Requisitos

- Node.js >= 16
- npm o yarn

## Instalación

```bash
# Instalar dependencias
npm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`
2. Asegúrate que tu backend esté corriendo en `http://localhost:3001`

```bash
cp .env.example .env
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo (puerto 5173)
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Build

```bash
# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## Estructura del Proyecto

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Componente principal
├── App.css               # Estilos globales
└── components/
    └── AveModal.jsx      # Modal de detalles del ave

index.html               # Template HTML
vite.config.js          # Configuración de Vite
package.json            # Dependencias
```

## API Endpoints Utilizados

- `GET /api/aves` - Obtener todas las aves
- `GET /api/aves/buscar?nombre=` - Buscar aves por nombre
- `GET /api/aves/con-imagenes` - Obtener aves con imágenes

## Uso

1. **Buscar aves**: Escribe un nombre en la barra de búsqueda
2. **Ver todas**: Haz click en "Todas (Rápido)"
3. **Con imágenes**: Haz click en "Con Imágenes" para cargar aves con sus fotos
4. **Ver detalles**: Haz click en una tarjeta de ave para ver el modal completo

## Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool
- **Axios** - Cliente HTTP
- **Bootstrap 5** - Framework CSS
- **JavaScript ES6+** - Lenguaje

## Autor

Creado para el proyecto Aves de Chile 🇨🇱
