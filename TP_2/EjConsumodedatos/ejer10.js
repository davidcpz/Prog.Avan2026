const usuario = {
    nombre: "Juan",
    edad: 30,
    email: "juan@email.com"
};

const cambios = {
    edad: 31,
    email: "juan.nuevo@email.com"
};

function actualizarUsuario(usuario, cambios) {
    return Object.assign({}, usuario, cambios);
}

const usuarioActualizado = actualizarUsuario(usuario, cambios);

console.log(usuarioActualizado);