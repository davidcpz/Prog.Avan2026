function elevarAlCuadrado(numeros) {
    return numeros.map(function(numero) {
        return numero * numero;
    });
}

let numeros = [1, 2, 3, 4, 5];

let resultado = elevarAlCuadrado(numeros);

console.log(resultado);