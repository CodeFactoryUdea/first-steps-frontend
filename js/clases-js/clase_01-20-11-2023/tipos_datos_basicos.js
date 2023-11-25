/*
En java el orden para variables es:
TIPO_DATO variable
String name;

En JS, el orden es: 
variable: TIPO_DATO
name: String

*/


// variables y los tipos de datos.

let numero = 10
console.log("mi numero es: "+numero);
numero = numero + 1;
console.log("Mi numero nuevo es: "+numero);

const numero_const = 20; // const: crea una valor constante
console.log("Mi numero const: "+numero_const);
// NO SE PEUDE HACER LAS DOS LINEAS SUBSIGUIENTES. 
//numero_const = numero_const + 1;
//console.log("Mi numero const nuevo: "+numero_const)

var flotantes = 0.4
console.log("soy un flotante: "+flotantes);

var juan = "Juan"
console.log(`Mi nombre es: ${juan}`);

var esActivo = "false";
console.log("Es activo: " + esActivo);
console.log(typeof esActivo);

