const Libro={ 
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    añoDePublicacion: 1605,
    descripcion: function() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
    }
}

console.log(Libro.descripcion());
