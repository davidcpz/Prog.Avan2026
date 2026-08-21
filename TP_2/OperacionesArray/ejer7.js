function hayNegativos(numeros) {
    return numeros.some(function (numero) {
        return numero < 0;
    });
}

const numeros = [5, 10, -3, 20, 25];
const numerosPositivos = [1, 2, 3, 4, 5];

console.log(hayNegativos(numeros));
console.log(hayNegativos(numerosPositivos));
