# TP_5 - Gestor de Tareas

Trabajo Práctico de Programación Avanzada.

Aplicación web para la gestión de tareas de proyectos de software, desarrollada con React, Node.js, Express y PostgreSQL. Tanto el frontend como el backend se ejecutan dentro de contenedores Docker.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose

## Funcionalidades

La aplicación permite:

- Crear tareas.
- Listar las tareas almacenadas.
- Editar tareas existentes.
- Finalizar tareas.
- Eliminar tareas.
- Persistir la información en PostgreSQL.
- Validar los datos tanto en frontend como en backend.

## Datos de una tarea

Cada tarea contiene:

- Nombre del Proyecto
- Tipo de Actividad
- Estado
- Resumen
- Descripción
- Prioridad
- Informador
- Persona asignada
- Precondición
- Fecha de Creación
- Fecha de Cierre
- Sprint

## Validaciones

La aplicación realiza, entre otras, las siguientes validaciones:

- Todos los campos son obligatorios.
- La fecha de creación de una nueva tarea no puede ser anterior a la fecha actual.
- La fecha de cierre no puede ser anterior a la fecha de creación.
- El estado debe contener un valor válido.
- La prioridad debe contener un valor válido.
- Al editar una tarea, el botón "Guardar cambios" permanece deshabilitado mientras no se realice ninguna modificación.

## Estructura del proyecto

```text
TP_5/
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── database/
│   └── init.sql
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Ejecución con Docker

Para ejecutar el proyecto es necesario tener Docker Desktop instalado y funcionando.

Desde la carpeta `TP_5` ejecutar:

```bash
docker compose up --build
```

Docker inicia los tres servicios utilizados por la aplicación:

- Frontend
- Backend
- PostgreSQL

Una vez iniciados los contenedores, acceder desde el navegador a:

```text
http://localhost:5173
```

La API del backend se ejecuta en:

```text
http://localhost:3001
```

## Base de datos

La aplicación utiliza PostgreSQL para almacenar las tareas.

El archivo:

```text
database/init.sql
```

contiene la creación de la tabla `tasks`.

La información de PostgreSQL se mantiene mediante un volumen de Docker, permitiendo conservar las tareas aunque los contenedores sean detenidos y creados nuevamente.

## API

El backend implementa las siguientes operaciones principales:

```text
GET    /tasks
POST   /tasks
PUT    /tasks/:id
PATCH  /tasks/:id/complete
DELETE /tasks/:id
```

Estas operaciones permiten listar, crear, editar, finalizar y eliminar tareas respectivamente.

## Detener la aplicación

Para detener los contenedores:

```bash
docker compose down
```

Los datos almacenados en PostgreSQL se conservan gracias al volumen configurado en Docker Compose.