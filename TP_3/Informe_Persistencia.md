# Informe de verificación de persistencia

Para verificar la persistencia de los datos de la aplicación TODO API se realizó una prueba utilizando PostgreSQL y Docker Compose.

En primer lugar, se creó una nueva tarea mediante el endpoint `POST /tasks`. La tarea fue almacenada correctamente en PostgreSQL y se le asignó el `id = 4`.

Luego se reinició únicamente el contenedor de la API mediante el comando:

`docker compose restart api`

Después del reinicio se realizó una petición `GET /tasks/4` y se obtuvo una respuesta `200 OK`, comprobando que la tarea continuaba almacenada. Esto ocurre porque reiniciar el contenedor de la API no elimina el volumen utilizado por PostgreSQL, por lo que los datos permanecen persistidos.

A continuación, se ejecutó:

`docker compose down -v`

Este comando detuvo y eliminó los contenedores y, mediante la opción `-v`, también eliminó el volumen `tp_3_todo_pgdata` utilizado para almacenar los datos de PostgreSQL.

Finalmente, se volvió a levantar el proyecto con Docker Compose y se realizó nuevamente la petición `GET /tasks/4`. En esta oportunidad la API respondió `404 Not Found`, confirmando que la tarea ya no existía.

Por lo tanto, la prueba permitió comprobar que los datos sobreviven al reinicio del contenedor de la API mientras se conserve el volumen de PostgreSQL, pero se pierden cuando dicho volumen es eliminado.

