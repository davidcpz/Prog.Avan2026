function crearMultiplicador(x) {
    function multiplicar (numero) {
        return numero * x;
    }
    return multiplicar;
}
const multiplicadorPorDos = crearMultiplicador(2);
console.log(multiplicadorPorDos(5));
