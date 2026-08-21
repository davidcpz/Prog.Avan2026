function contienePalabra(palabras, palabraBuscada) {
    return palabras.includes(palabraBuscada);
}

const palabras = ["casa", "perro", "gato", "auto"];

console.log(contienePalabra(palabras, "gato"));
console.log(contienePalabra(palabras, "avion"));