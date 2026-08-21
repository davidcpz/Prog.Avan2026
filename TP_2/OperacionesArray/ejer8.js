function todosPares(numeros) {
    return numeros.every(function (numero) {
        return numero % 2 === 0;
    });
}

const numerosPares = [2, 4, 6, 8, 10];
const numerosMixtos = [2, 4, 5, 8, 10];

console.log(todosPares(numerosPares));
console.log(todosPares(numerosMixtos));