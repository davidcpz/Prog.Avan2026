// variables declaration
let nombre  = "Juan";
let edad = 30;
let isStudent = false;
let esMayorDeEdad = edad >= 18;
// let puede ser mutable, const es inmutable

//declaraciones de constantes
const PI = 3.14159;
const NOMBRE_DEL_SITIO = "Mi sitio web";
const API_KEY = "1234567890";

// imprimir constantes
console.log (nombre)
console.log (edad)

console.log ('es mayor de edad: ' + esMayorDeEdad )

//template string 
console.log(`El nombre es ${nombre} y tiene ${edad} años.`);
console.log(`El nombre es ${nombre}, Edad:${edad}, Es mayor de edad: ${esMayorDeEdad}`);

//cual seria el scope global de javascript window, (pregunta de junior)
//javascript es sincrono va leendo linea por linea 