# Directorio de usuarios — Angular

Implementación del directorio de usuarios con Angular 22. Consulta los datos desde https://jsonplaceholder.typicode.com/users.

## Instalación y ejecución

Abra una terminal **dentro de `angular/gestor`** y ejecute:

```bash
npm install
npm start
```

Abra http://localhost:4200/ en el navegador. Para detener el servidor, pulse `Ctrl + C`.

## Funcionalidades

- Consulta de usuarios mediante un servicio Angular.
- Tarjetas con nombre, correo y ciudad.
- Búsqueda por nombre en tiempo real.
- Favoritos con contador actualizado.
- Mensajes de carga y error.

Los favoritos son temporales: no se guardan en una base de datos.

## Comandos disponibles

```bash
npm test -- --watch=false
npm run build
```

El primero ejecuta las pruebas configuradas; el segundo compila el proyecto. Verifique los resultados en su equipo antes de documentarlos como aprobados.

## Requisitos

Node.js compatible con Angular 22 (por ejemplo, Node.js 22.22.3 o superior dentro de la rama 22), npm y conexión a Internet. No necesita json-server.

Consulte el [README principal](../../README.md) para ejecutar ambos frameworks y agregar evidencias.
