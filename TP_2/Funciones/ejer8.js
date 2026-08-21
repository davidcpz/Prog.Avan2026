const numeros = [1, 2, 3, 4, 5];

function multiplicarPorDos(numero) {
    return numero * 2;
}

function procesarArray(array, funcion) {
    return array.map(funcion);
}

const resultado = procesarArray(numeros, multiplicarPorDos);

console.log(resultado);
