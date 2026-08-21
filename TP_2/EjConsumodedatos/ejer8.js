async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    return usuarios;
}

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(function(usuario) {
        return usuario.email === email;
    });
}

async function buscarUsuario() {
    const usuarios = await obtenerUsuarios();

    const usuarioEncontrado = buscarUsuarioPorEmail(
        usuarios,
        "Sincere@april.biz"
    );

    console.log(usuarioEncontrado);
}

buscarUsuario();