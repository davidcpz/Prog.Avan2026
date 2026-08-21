// arreglos
//const numeros = [1, 2, 3, 4, 5];
//console.log(numeros);

// accerder a los elementos del arreglo

//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);


//const carrito = [ 
//    {nombre: "producto 1", precio : 100},
//    {nombre: "producto 2", precio : 200},
//    {nombre: "producto 3", precio : 300},
//    {nombre: "producto 4", precio : 400},
//];

//console.log(carrito);


//concatenacion de arreglos con el metodo concat

// const carrito1 = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'];
// const carrito2 = ['Producto 6', 'Producto 7', 'Producto 8', 'Producto 9', 'Producto 10'];

// const carrito3 = carrito1.concat(carrito2);

// console.log(carrito3);  

// concatenacion de arreglos con el operador spread
const carrito1 = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5']
const carrito2 = ['Producto 6', 'Producto 7', 'Producto 8', 'Producto 9', 'Producto 10']

const carrito3 = [...carrito1, ...carrito2]

console.log(carrito3)  

