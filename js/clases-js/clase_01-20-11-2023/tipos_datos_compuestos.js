
//JSON = JavaScript object Notation
const persona = {
    nombre: "Juan",
    edad: 12,
    sexo: "M"
}

console.log(persona);
console.log(persona.edad);

persona.edad = 13
console.log(persona.edad);

const persona2 = {...persona, nombre: "Steban2", placa: "ert-09r"} //sprend operator
console.log("aqui: "+persona2.nombre);

// similar al spread
const persona3 = persona
persona3.nombre = "Kelly"

console.log(persona3);









