# 🦅 Aves Frontend

Frontend moderno en React + Vite para explorar la biodiversidad de aves de Chile. Proporciona una interfaz intuitiva y responsiva para buscar y visualizar información detallada sobre diferentes especies de aves.

## 📋 Características

- 🎨 **Interfaz moderna** - Diseño limpio y profesional con Bootstrap 5
- 🔍 **Búsqueda en tiempo real** - Encuentra aves rápidamente con filtros avanzados
- 🖼️ **Galería de imágenes** - Wikimedia Commons integrado para fotos de alta calidad
- 📱 **100% Responsive** - Funciona perfecto en dispositivos móviles, tablets y desktop
- ⚡ **Rendimiento optimizado** - Vite para builds rápidos y carga instantánea
- 🎯 **Modales interactivos** - Detalles de especies en ventanas modales elegantes
- 🚀 **GitHub Pages Ready** - Deployable a GitHub Pages fácilmente

## 🛠️ Requisitos Previos

- **Node.js** >= 16
- **npm** >= 7 o **yarn** >= 1.22

## 📦 Instalación

1. **Clonar el repositorio**

   ```bash
   cd aves-frontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   Asegúrate que el backend esté corriendo en `http://localhost:3001`

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
# o con yarn
yarn dev
```

El servidor estará disponible en `http://localhost:5173`

## 📦 Build para Producción

```bash
# Build optimizado
npm run build
# o con yarn
yarn build

# Previsualizar build
npm run preview
```

## 🔍 Linting

```bash
# Ejecutar eslint
npm run lint

# Arreglar automáticamente problemas
npm run lint:fix
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   └── AveModal.jsx         # Modal para detalles de especies
├── App.jsx                  # Componente principal
├── App.css                  # Estilos globales
├── main.jsx                 # Punto de entrada
public/
├── bird-blue.avif          # Logo de la app
```

## 🔌 API Integration

La aplicación se conecta a las siguientes rutas del backend:

- `GET /aves` - Obtener lista de todas las aves
- `GET /aves/search` - Buscar aves por criterios
- `POST /usuarios` - Crear nuevo usuario
- `GET /usuarios/:id` - Obtener datos de usuario

## 📚 Dependencias Principales

- **React** ^18.2.0 - Librería UI
- **Vite** ^5.0.0 - Build tool
- **Bootstrap** ^5.3.0 - Framework CSS
- **Axios** ^1.6.0 - HTTP client
- **ESLint** - Code quality

## 🌐 Variables de Entorno

```env
VITE_API_URL=http://localhost:3001
```

## 📝 Scripts Disponibles

| Script             | Descripción                       |
| ------------------ | --------------------------------- |
| `npm run dev`      | Inicia servidor de desarrollo     |
| `npm run build`    | Build para producción             |
| `npm run preview`  | Previsualiza el build             |
| `npm run lint`     | Valida código con ESLint          |
| `npm run lint:fix` | Arregla problemas automáticamente |

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
# Deployer el contenido de dist/
```

### Vercel

```bash
npm install -g vercel
vercel
```

## 🐛 Troubleshooting

**Puerto 5173 ya está en uso:**

```bash
npm run dev -- --port 3000
```

**CORS error con el backend:**

- Verifica que el backend esté corriendo
- Comprueba la URL correcta en `.env`

**Módulos no encontrados:**

```bash
rm node_modules package-lock.json
npm install
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios significativos, abre un issue primero.

## 📄 Licencia

MIT

## 👨‍💻 Autor

Proyecto desarrollado como parte del catálogo de aves de Chile
cp .env.example .env

````

## Desarrollo

```bash
# Iniciar servidor de desarrollo (puerto 5173)
npm run dev
````

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
