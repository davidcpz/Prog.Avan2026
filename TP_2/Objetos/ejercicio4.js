const producto = {
    nombre: "Camiseta",
    precio: 19.99,
    disponible: true,
}
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

//console.log(producto.nombre);