// funciones declarativas
function saludar(nombre) {
//(nombre) es un parametro de la funcion, es una variable local, solo existe dentro de la funcion
    console.log (`Hola ${nombre}`);
}

saludar ('juan'); //juan es un argumento de la funcion, es el valor que se le pasa al parametro
saludar ('maria');
saludar ('pedro');

// funciones expresivas
const saludar2 = function(nombre) {
    console.log (`Hola ${nombre}`);
}

saludar2 ('mario2');
saludar2 ('david2');

// function arrow
const saludar3 = (nombre) => {
    console.log (`Hola ${nombre}`);
}
saludar3 ('ana3');
saludar3 ('luis3');

// funciones con parametros por defecto
const actividad= (nombre , rol) => {
    console.log (`La persona ${nombre}, esta realizando la actividad de ${rol}`);
}
actividad ('ana4' , 'admin');
actividad ('luis4' , 'user');
actividad ('maria4' , 'moderator');
actividad ('pedro4' , 'guest');
actividad ('juan4' , 'superadmin');


//parametros por defecto de las funciones 
const actividad2 = (nombre , rol = 'programador') => {
    console.log (`La persona ${nombre}, esta realizando la actividad de ${rol}`);
}

actividad2 ('ana5');
actividad2 ('luis5');
actividad2 ('maria5');

