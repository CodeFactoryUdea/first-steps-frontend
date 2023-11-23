
// operaciones sobre arreglos en js
const frutas = ["manzana", "pera", "fresa", "melon", 
            "manzana", "banano", "pera", "mango"]

/*
- recorrer
- ordenar = TAREA PA ESTEBAN
- buscar = TAREA PA VOS
- filtrar 
- mapear = transformar un dato en otro
*/

// recorridos
for (const i in frutas) {
    console.log("fruta con for in: " + frutas[i]);
}

for(let i=0; i<frutas.length; i++) {
    console.log("mi fruta con for i: " + frutas[i]);
}

// programación funcional - LIPS - ENSAMBLADOR

function imprimir(item) {
    console.log("Imprimir: " + item);
}

// Funcion FLECHA o Arrow Function
const imprimir2 = (item)=> {
    console.log("desde imprimir 2: "+item);
}

frutas.forEach((item) => {
    console.log("fruta con forEach funcional: " + item);
})

frutas.forEach(item => imprimir2(item))

frutas.forEach(item => console.log("REDUCIDO: fruta con forEach: "+item))


// FILTRAR JS
console.log("############### EJERCICIO DE FILTROS");
const frutas_filtradas = [] // arreglo vacio
for(let i=0; i<frutas.length; i++) {

    if(frutas[i]==="manzana"){
        frutas_filtradas.push(frutas[i])
    }
}
console.log(frutas_filtradas);

const frutas_filtradas_filter = frutas.filter((item) => {
   if(item==="manzana"){
    return item
   }
})
const peras = frutas.filter((item) => item=="mango")

/**
 JAVA
 
 int a = 1
 int b = 1

 a == b > true

 JS

 var a = "1"
 var b = 1

 a == b > true
 a === b > false //PA' CURA'TE EN SALU'

 * 
 */

console.log(peras);


console.log("Con funcion filter: "+frutas_filtradas_filter);


//MAPEO JS 
console.log("################ MAP FUNCTION");
const primos = [2, 3, 5, 7, 11, 13, 17, 23]

//TAREA HACER UN MAPEO SIN USAR FUNCIONES DE JS


//Mapeador usando funcion de JS
console.log(primos);
// const primos_string = primos.map((item)=>{
//     var numero_string = item.toString()
//     return numero_string
// })

const primos_string = primos.map(estevan => estevan.toString())

const int2String = (primo) => {
    return primo.toString()
}

const primos_string2 = primos.map(int2String) //paso de función por referencia 

console.log(primos_string2);



// TAREA hacer la operación de busqueda con funciones JS


// TAREA hacer la operación de ordenamiento con funciones JS solamente

// CONSULTAR QUE OTRAS OPERACIONES SOBRE ARREGLOS SE PUEDE HACER CON FUNCIONES JS
// arreglo_x.TAL_FUNCION(CALLBACK)
// QUÉ ES UN CALLBACK? lo vemos despues, pero basicamente es una función que se pasa como parametro a otra


