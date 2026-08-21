function sumarElementos(numeros) {
    return numeros.reduce(function (acumulador, numero) {
        return acumulador + numero;
    }, 0);
}

const numeros = [5, 10, 15, 20, 25];

const resultado = sumarElementos(numeros);

console.log(resultado);