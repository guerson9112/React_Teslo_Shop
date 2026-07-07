# Teslo Shop

Una aplicación de e-commerce moderna y escalable desarrollada con **React 19**, **TypeScript** y **Vite**. Teslo Shop es una tienda online de ropa con funcionalidades de administración, autenticación de usuarios y gestión de productos.

## 🚀 Características Principales

- ✅ **Tienda Pública** - Catálogo de productos con filtros por género y búsqueda
- ✅ **Sistema de Autenticación** - Login y registro de usuarios
- ✅ **Panel Administrativo** - Dashboard para gestión de productos e inventario
- ✅ **Gestión de Productos** - CRUD completo de productos con tallas, imágenes y stock
- ✅ **Paginación Inteligente** - Navegación eficiente entre productos
- ✅ **Integración con API** - Conexión con backend mediante Axios
- ✅ **Caché de Datos** - React Query para manejo optimizado de estado
- ✅ **Interfaz Responsiva** - Diseño mobile-first con Tailwind CSS
- ✅ **Componentes UI** - Biblioteca completa con shadcn/ui

## 📋 Requisitos Previos

- **Node.js** >= 18.x
- **npm** o **yarn**
- API backend disponible (Teslo API o similar)

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **React** 19.2.6 - Framework UI moderno
- **TypeScript** 6.0.2 - Tipado estático
- **Vite** 8.0.12 - Build tool ultrarrápido

### Enrutamiento & Estado
- **React Router** 7.15.1 - Navegación SPA
- **TanStack React Query** 5.101.0 - Gestión de datos y caché
- **Axios** 1.17.0 - Cliente HTTP

### Estilos & UI
- **Tailwind CSS** 4.3.0 - Utilidades CSS
- **shadcn/ui** 4.8.0 - Componentes accesibles
- **Lucide React** 1.16.0 - Iconografía
- **tw-animate-css** 1.4.0 - Animaciones

### Herramientas de Desarrollo
- **ESLint** 10.3.0 - Linting de código
- **Babel** 7.29.0 - Compilación de JavaScript
- **React Compiler** 1.0.0 - Optimizaciones automáticas

## 📁 Estructura del Proyecto

```
src/
├── admin/                    # Panel administrativo
│   ├── components/          # Componentes del admin
│   │   ├── ActivityFeed.tsx
│   │   ├── AdminHeader.tsx
│   │   ├── AdminSidebar.tsx
│   │   ├── Chart.tsx
│   │   ├── QuickActions.tsx
│   │   ├── StatCard.tsx
│   │   └── AdminTitle.tsx
│   ├── layouts/
│   │   └── AdminLayout.tsx
│   └── pages/
│       ├── dashboard/       # Dashboard principal
│       ├── product/         # Detalles de un producto
│       └── products/        # Listado de productos
│
├── auth/                     # Autenticación
│   ├── layouts/
│   │   └── AuthLayout.tsx
│   └── pages/
│       ├── login/           # Página de login
│       └── register/        # Página de registro
│
├── shop/                     # Tienda pública
│   ├── actions/             # Acciones de datos
│   │   └── get-products.action.ts
│   ├── components/
│   │   ├── CustomHeader.tsx
│   │   ├── CustomFooter.tsx
│   │   ├── CustomJumbotron.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── ProductCart.tsx
│   │   └── ProductsGrid.tsx
│   ├── hooks/
│   │   └── useProducts.tsx  # Hook para obtener productos
│   ├── layouts/
│   │   └── ShopLayout.tsx
│   └── pages/
│       ├── home/            # Página principal
│       ├── gender/          # Filtro por género
│       └── product/         # Detalle de producto
│
├── components/               # Componentes reutilizables
│   ├── custom/              # Componentes personalizados
│   │   ├── CustomLogo.tsx
│   │   └── CustomPagination.tsx
│   └── ui/                  # Componentes shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── radio-group.tsx
│       ├── separator.tsx
│       └── table.tsx
│
├── interfaces/               # Tipos TypeScript
│   ├── product.interface.ts
│   ├── products.response.ts
│   └── user.interface.ts
│
├── api/                      # Configuración de API
│   └── tesloApi.ts
│
├── lib/                      # Utilidades
│   └── utils.ts
│
├── mocks/                    # Datos de prueba
│   └── products.mock.ts
│
├── app.router.tsx            # Configuración de rutas
├── TesloShopApp.tsx          # Componente raíz
├── main.tsx                  # Entrada de la aplicación
└── index.css                 # Estilos globales
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd teslo-shop
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno

Crear un archivo `.env.local` basado en `.env.template`:

```bash
cp .env.template .env.local
```

Luego editar `.env.local` con los valores correctos:

```env
VITE_API_URL=http://localhost:3000/api
```

Asegúrate de ajustar la URL según tu backend.

### 4. Verificar Backend

Asegúrate de que el backend esté corriendo en el puerto 3000 (o ajusta la URL en `.env.local`):

```bash
# En otra terminal
cd backend
npm run dev  # o similar según tu backend
```

### 5. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run lint` | Ejecuta ESLint para revisar el código |

## 🏗️ Estructura de Rutas

```
/                          → Página principal de la tienda
├── /product/:idSlug       → Detalle de un producto
├── /gender/:gender        → Productos filtrados por género
│
/auth                      → Autenticación
├── /auth/login            → Página de login
├── /auth/register         → Página de registro
│
/admin                     → Panel administrativo
├── /admin/dashboard       → Dashboard principal
├── /admin/products        → Listado de productos
└── /admin/products/:id    → Detalles/edición de producto
```

## 🔑 Conceptos Clave

### Interfaz de Productos

```typescript
interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: Gender;
  tags: string[];
  images: string[];
  user: User;
}

type Gender = 'kid' | 'men' | 'women' | 'unisex';
type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";
```

### Hook useProducts

Hook personalizado para obtener productos desde la API:

```typescript
const { data } = useProducts();
// Retorna productos paginados con datos del servidor
```

### Cliente API

Configurado con Axios para hacer llamadas HTTP:

```typescript
import { tesloApi } from '@/api/tesloApi';
// Usa baseURL de VITE_API_URL
```

## 🎨 Componentes UI Principales

### Componentes Personalizados
- **CustomHeader** - Encabezado de la tienda
- **CustomFooter** - Pie de página
- **CustomJumbotron** - Banner principal
- **CustomPagination** - Control de paginación
- **FilterSidebar** - Filtros de productos
- **ProductCart** - Tarjeta de producto
- **ProductsGrid** - Rejilla de productos

### Componentes shadcn/ui
- Button, Card, Checkbox, Input, Label, RadioGroup, Separator, Table

## 🔐 Autenticación

La aplicación incluye un sistema de autenticación con:
- **LoginPage** - Formulario de inicio de sesión
- **RegisterPage** - Formulario de registro
- **AuthLayout** - Layout para rutas autenticadas

> ℹ️ La implementación completa de autenticación dependerá de tu backend

## 📊 Panel Administrativo

Dashboard completo para administradores con:
- **Gestión de Productos** - Crear, editar, eliminar productos
- **Monitoreo de Stock** - Control de inventario
- **Estadísticas** - Gráficos y métricas de ventas
- **Feed de Actividad** - Registro de cambios recientes

## 🧪 Datos de Prueba

Hay datos mock disponibles en `src/mocks/products.mock.ts` para testing sin dependencia de API.

## 🚦 Development Tips

### Usar componentes de shadcn/ui
Importar desde el path relativo:

```typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
```

### Tipado de componentes
Siempre usar TypeScript interfaces para props:

```typescript
interface ProductCardProps {
  product: Product;
  onSelect?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  // ...
}
```

### State Management
Usar TanStack React Query para datos remotos y useState para estado local.

## 📈 Performance

La aplicación incluye optimizaciones:
- **React Compiler** - Compilación automática de componentes
- **React Query** - Caché inteligente de datos
- **Lazy Loading** - Carga perezosa de AuthLayout
- **Tailwind CSS v4** - Generación óptima de estilos
- **Vite HMR** - Hot Module Replacement rápido

## 🐛 Troubleshooting

### Puerto 5173 en uso
```bash
npm run dev -- --port 3000
```

### API no disponible
Verificar la variable de entorno `VITE_API_URL` en `.env.local` y asegurar que el backend está corriendo en `http://localhost:3000`.

### Errores de TypeScript
```bash
npm run build
```





## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 💬 Soporte

Para preguntas o problemas:
- Abre un issue en el repositorio
- Contacta al equipo de desarrollo


---

**Última actualización:** Julio 2026  
**Versión:** 0.0.0  
**Estado:** En desarrollo 🚧