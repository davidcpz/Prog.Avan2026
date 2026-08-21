async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    return usuarios;
}

async function imprimirNombresUsuarios() {
    const usuarios = await obtenerUsuarios();

    usuarios.forEach(function(usuario) {
        console.log(usuario.name);
    });
}

imprimirNombresUsuarios();