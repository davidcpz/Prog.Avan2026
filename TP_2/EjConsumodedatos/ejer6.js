const datos = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15
];

function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;

    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin);
}

console.log(obtenerPagina(datos, 1));
console.log(obtenerPagina(datos, 2));
console.log(obtenerPagina(datos, 3));

