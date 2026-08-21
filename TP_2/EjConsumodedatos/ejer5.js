function validarFormulario(formulario) {
    return (
        formulario.nombre &&
        formulario.email &&
        formulario.password
    ) ? true : false;
}

// Formulario válido
const formularioValido = {
    nombre: "David",
    email: "david@email.com",
    password: "123456"
};

// Formulario inválido
const formularioInvalido = {
    nombre: "David",
    email: "",
    password: "123456"
};

console.log(validarFormulario(formularioValido));
console.log(validarFormulario(formularioInvalido));