async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    return usuarios;
}

function mapearUsuarios(usuarios) {
    return usuarios.map(function(usuario) {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });
}

async function mostrarUsuariosMapeados() {
    const usuarios = await obtenerUsuarios();
    const usuariosMapeados = mapearUsuarios(usuarios);

    console.log(usuariosMapeados);
}

mostrarUsuariosMapeados();