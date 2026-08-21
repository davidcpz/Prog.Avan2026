const estudiante={
    nombre: "Juan",
    edad: 20,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Springfield",
        pais: "USA"
    }
}

const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));

//console.log(estudiante);
//console.log(copiaEstudiante);

copiaEstudiante.direccion.ciudad="Parana"

console.log(estudiante.direccion.ciudad);
console.log(copiaEstudiante.direccion.ciudad);