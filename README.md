# Directorio de usuarios — Angular y React

Este repositorio contiene dos implementaciones de un directorio de usuarios: una en **Angular** y otra en **React**. Las dos consultan la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

## Requisitos previos

- Node.js compatible con Angular 22 (por ejemplo, Node.js 22.22.3 o superior dentro de la rama 22).
- npm instalado (`node -v` y `npm -v` permiten comprobarlo).
- Conexión a Internet para consultar la API de usuarios.

**No es necesario instalar json-server, levantar un backend ni configurar una base de datos.**

## Estructura

```text
directorio-usuarios/
├── angular/
│   └── gestor/
├── react/
│   └── gestor/
└── README.md
```

## Descargar el proyecto

En una terminal, ejecute:

```bash
git clone URL_DEL_REPOSITORIO
cd directorio-usuarios
```

Sustituya `URL_DEL_REPOSITORIO` por la URL real del repositorio. También puede descargar el ZIP desde GitHub y descomprimirlo.

## Ejecutar la aplicación Angular

Desde la **raíz del repositorio**:

```bash
cd angular/gestor
npm install
npm start
```

Abrir **http://localhost:4200/** en el navegador.

Para detenerla, usar `Ctrl + C` en la terminal. Las siguientes ejecuciones no requieren repetir `npm install`, salvo que cambien las dependencias.

## Ejecutar la aplicación React

Desde la **raíz del repositorio**, en otra terminal:

```bash
cd react/gestor
npm install
npm run dev
```

Abrir la URL que imprima Vite, normalmente **http://localhost:5173/**.

Para detenerla, usar `Ctrl + C`.

> Si su terminal está dentro de `angular/gestor`, regrese a la raíz antes de seguir las instrucciones de React. También puede abrir dos terminales independientes.

## Funciones a comprobar

1. La aplicación consulta usuarios de la API pública.
2. Muestra tarjetas con nombre, correo y ciudad.
3. La búsqueda filtra usuarios por nombre mientras se escribe.
4. El botón «Favorito» marca o desmarca usuarios y actualiza «Favoritos: N».
5. Mientras carga, muestra un mensaje de carga; ante problemas de conexión, muestra un mensaje de error.

Los favoritos se mantienen en el estado de cada aplicación; no se envían a la API.

## Pruebas y compilación

**Angular** (dentro de `angular/gestor`):

```bash
npm test -- --watch=false
npm run build
```

**React** (dentro de `react/gestor`):

```bash
npm run build
npm run lint
```

**Nota:** en la versión revisada, React todavía no incluye un script `test` ni una prueba unitaria. Antes de entregar, debe agregarse y ejecutarse una prueba conforme a la consigna. No se afirma que las pruebas actuales hayan pasado.

## Evidencias de funcionamiento

Agregar a este README imágenes tomadas durante la ejecución real del proyecto. Se sugiere guardar las capturas en `evidencias/` y referenciarlas así:

```markdown
![Angular: usuarios cargados](evidencias/angular-usuarios.png)
![React: búsqueda y favoritos](evidencias/react-busqueda-favoritos.png)
![Pruebas unitarias](evidencias/pruebas.png)
```

Las capturas no se incluyen aquí porque deben tomarse del equipo donde se ejecutaron las aplicaciones.

## API

- Endpoint de lectura: https://jsonplaceholder.typicode.com/users
- Método: `GET`.
- No se requiere crear, editar ni eliminar datos de la API.
