# Directorio de usuarios — React

Implementación del directorio de usuarios con React 19 y Vite. Consume https://jsonplaceholder.typicode.com/users.

## Instalación y ejecución

Abra una terminal **dentro de `react/gestor`** y ejecute:

```bash
npm install
npm run dev
```

Abra la dirección que muestre Vite, normalmente http://localhost:5173/. Para detenerlo, pulse `Ctrl + C`.

## Funcionalidades

- Consulta de usuarios con `fetch`.
- Tarjetas con nombre, correo y ciudad.
- Búsqueda por nombre mientras se escribe.
- Favoritos con contador actualizado.
- Mensajes de carga y error.

Los favoritos son temporales: no se guardan en una base de datos.

## Comandos disponibles

```bash
npm run build
npm run lint
npm run preview
```

En la versión revisada todavía no hay un script `npm test`; antes de entregar hay que configurar una prueba unitaria y añadir su comando al README.

## Requisitos

Node.js compatible con Vite 8, npm y conexión a Internet. No necesita json-server ni backend propio.

Consulte el [README principal](../../README.md) para ejecutar ambos frameworks y agregar evidencias.
