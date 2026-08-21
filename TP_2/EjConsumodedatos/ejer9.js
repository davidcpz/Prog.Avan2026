const usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
};

function generarToken(usuario) {
    const datosUsuario = JSON.stringify(usuario);
    const token = btoa(datosUsuario);

    return token;
}

const tokenGenerado = generarToken(usuario);

console.log(tokenGenerado);