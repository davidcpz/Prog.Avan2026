// Usuario predefinido
const usuarioValido = {
    usuario: "admin",
    contraseña: "1234"
};

// Función que verifica las credenciales
function autenticarUsuario(credenciales) {
    return (
        credenciales.usuario === usuarioValido.usuario &&
        credenciales.contraseña === usuarioValido.contraseña
    );
}

// Credenciales correctas
const credencialesCorrectas = {
    usuario: "admin",
    contraseña: "1234"
};

// Credenciales incorrectas
const credencialesIncorrectas = {
    usuario: "admin",
    contraseña: "5678"
};

// Probamos la función
console.log(autenticarUsuario(credencialesCorrectas));
console.log(autenticarUsuario(credencialesIncorrectas));