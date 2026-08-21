
const persona = {
    nombre: "Juan",
    edad: 30,
};

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
    return persona;
}

console.log(persona);

actualizarEdad(persona, 35);

console.log(persona);