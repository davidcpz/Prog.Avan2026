const producto = {
    nombre: "Camiseta",
    precio: 19.99,
    disponible: true,
}
//for (let propiedad in producto) {
    //console.log(`${propiedad}: ${producto[propiedad]}`);
//}
producto.precio = 24.99;
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}
//console.log(`Nuevo precio: ${producto.precio}`);

//console.log(producto)