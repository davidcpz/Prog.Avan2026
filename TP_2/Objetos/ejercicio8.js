const persona1 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Concordia",
}

const persona2 = {
    profesion: "Analista de sistemas",
    nacionalidad: "Argentino",
}

const personacombinada = Object.assign({}, persona1, persona2);
console.log(personacombinada);
