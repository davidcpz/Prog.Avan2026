function filtrarMayoresDe(numeros, valorReferencia) {
    return numeros.filter(function (numero) {
        return numero > valorReferencia;
    });
}

const numeros = [5, 10, 15, 20, 25];
const valorReferencia = 10;

const resultado = filtrarMayoresDe(numeros, valorReferencia);

console.log(resultado);