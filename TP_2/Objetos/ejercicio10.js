
const libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    _añoDePublicacion: 1605,

    // Getter: permite obtener el año de publicación
    get añoDePublicacion() {
        return this._añoDePublicacion;
    },

    // Setter: permite modificar el año de publicación
    set añoDePublicacion(nuevoAño) {
        this._añoDePublicacion = nuevoAño;
    }
};

// Mostrar el año original
console.log(`Año original: ${libro.añoDePublicacion}`);

// Actualizar el año utilizando el setter
libro.añoDePublicacion = 1615;

// Mostrar el nuevo año utilizando el getter
console.log(`Nuevo año: ${libro.añoDePublicacion}`);


//getter (get) sirve para obtener el valor de una propiedad 
//setter (set) sirve para modificar el valor de una propiedad
