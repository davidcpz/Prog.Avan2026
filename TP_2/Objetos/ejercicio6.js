const producto = {
    nombre: "Camiseta",
    precio: 19.99,
    disponible: true,
}
 
//console.log(producto.nombre)

function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}

console.log(tienePropiedad(producto, "precio")); // true
console.log(tienePropiedad(producto, "descripcion")); // false