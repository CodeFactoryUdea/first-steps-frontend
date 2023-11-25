1. pedir dos numeros enteros a un usuario y sumarlos y mostrar por consola la suma.
2. dado un arreglo de numeros enteros de 10 posiciones, sumar todos los elementos.
3. solicitar a un usuario un numero y generar la tabla de mutiplicación de dicho numero
4. dado un vector de enteros de 10 posiciones, eliminar los datos duplicados y generar 
dos nuevos vectores, con datos duplicados y sin datos duplicados.

// SOLUCIÓN AL PROBLEMA 2
/*
lo que tenemos: 
int arreglo[] = [1,2,3,4,5] 


salida: 
la suma de los elementos del vector es: 15

*/




// SOLUCIÓN AL PROBLEMA 1
function sumarDosNumeros() { 

    int a = 0
    int b = 0
    escribir("Ingrese un número: \n")
    leer(a)
    
    escribir("Ingrese un número: \n")
    leer(b)

    escribir(a+b)
}