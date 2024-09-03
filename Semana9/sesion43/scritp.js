// Repaso de métodos de busqueda:

let array = [2,9,5,2,4,6,10];
// indexOf devuelve el índice de la primera aparición del elemento '2'
console.log(array.indexOf(2)); // Output: 0
// lastIndexOf devuelve el índice de la última aparición del elemento '2'
console.log(array.lastIndexOf(2)); // Output: 3

// Otro array con letras
let letras = ['A','B','C','D','E','A','B','C','D','E','A','B','C','D','E'];
// lastIndexOf encuentra el índice de la última 'A' en el array
console.log(letras.lastIndexOf('A')); // Output: 10

// includes verifica si el elemento 'Z' está en el array
console.log(letras.includes('Z')); // Output: false
// Agregamos 'Z' al final del array
letras.push('Z');
console.log(letras); // Output: [...,'Z']

// findIndex devuelve el índice del primer elemento que cumple la condición
let busqueda = letras.findIndex((element)=>{return element === 'Z'});
console.log(busqueda); // Output: 15

// filter crea un nuevo array con todos los números menores o iguales a 6
let nuevoArray = array.filter((numero)=>{return numero <= 6});
console.log(nuevoArray); // Output: [2,5,2,4,6]
console.log(array); // El array original no cambia


//Métodos de modificación:

// Otro array con edades
let edades = [4,2,8,7,1,9];
// map crea un nuevo array multiplicando cada elemento por 5
let nuevoArrayEdades = edades.map(n => n * 5);
console.log(nuevoArrayEdades); // Output: [20,10,40,35,5,45]
console.log(edades); // El array original no cambia

// reduce suma todos los elementos del array
let array2 = [1,2,3,4,5];
let sumaElementos = array2.reduce(function (a,b) {
    return a+b;
});
console.log(sumaElementos); // Output: 15

// Promedio de notas
let notas = [11,15,20,14,17];
let promedio = notas.reduce((a,b)=>{
    return a + b;
});
// Calculamos el promedio dividiendo la suma por el número de elementos
console.log(promedio/notas.length); // Output: 15.4
console.log(notas); // El array original no cambia

// Ordenamos un array de letras alfabéticamente
let abecedario = ['B','T','A','Z','F','Q','L'];
console.log(abecedario.sort()); // Output: ['A','B','F','L','Q','T','Z']

// Ordenamos un array de números, pero como strings
let numeros = [6,10,2,8,4];
console.log(numeros.sort()); // Output: [10,2,4,6,8] (orden alfabético)

// Ordenamos el array de números de menor a mayor
let menorMayor = numeros.sort((a,b)=>a-b);
console.log(menorMayor); // Output: [2,4,6,8,10]
// Ordenamos el array de números de mayor a menor
let mayorMenor = numeros.sort((a,b)=>b-a);
console.log(mayorMenor); // Output: [10,8,6,4,2]

// Invertimos el orden de un array
let matriz = [1,2,3,4,5,6];
console.log(matriz.reverse()); // Output: [6,5,4,3,2,1]

// Invertimos el orden de un array de letras
let matriz2 = ['B','T','A','Z','F','Q','L'];
console.log(matriz2.reverse()); // Output: ['L','Q','F','Z','A','T','B']

// split divide una cadena en un array de palabras
let cadena = 'Mi gato esta en el techo';
console.log(cadena.split(" ",6)); // Output: ['Mi', 'gato', 'esta', 'en', 'el', 'techo']

// Otro ejemplo de split, pero usando '+' como separador
let cadena2 = 'Las+chicas+somos+unas+crack en+programación';
console.log(cadena2.split("+",6)); // Output: ['Las', 'chicas', 'somos', 'unas', 'crack', 'en']

// join une los elementos de un array en una sola cadena
let carros = ['Toyota', 'Ferrari', 'Honda','Audi','Mercedes', 'Lamborghini'];
// Unimos los elementos con '+'
let conjunto = carros.join("+");
console.log(conjunto); // Output: 'Toyota+Ferrari+Honda+Audi+Mercedes+Lamborghini'

