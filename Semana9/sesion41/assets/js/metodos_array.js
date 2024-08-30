// Ejemplo 1: Agregar y eliminar elementos al final del array
let number = [1, 2, 3, 4];
number.push(5); // Agrega 5 al final
console.log(number); // [1, 2, 3, 4, 5]

let number2 = [2, 4, 6, 8, 3, 7, 6, 11, 1, 9, 2, 6, 'a'];
number2.pop(); // Elimina el último elemento ('a')
console.log(number2); // [2, 4, 6, 8, 3, 7, 6, 11, 1, 9, 2, 6]

// Ejemplo 2: Agregar y eliminar elementos al inicio del array
let number3 = ['b', 'e', 'a', 'c'];
number3.unshift('z'); // Agrega 'z' al inicio
console.log(number3); // ['z', 'b', 'e', 'a', 'c']
number3.shift(); // Elimina el primer elemento ('z')
console.log(number3); // ['b', 'e', 'a', 'c']

// Ejemplo 3: Combinando métodos push, pop, shift, unshift
let numeros = [2, 5, 7];
numeros.push(4); // [2, 5, 7, 4]
numeros.pop(); // [2, 5, 7]
numeros.shift(); // [5, 7]
numeros.unshift(1); // [1, 5, 7]
console.log(numeros); // [1, 5, 7]

let arraynuevo = numeros.slice(0, 2); // Copia los primeros 2 elementos
console.log(arraynuevo); // [1, 5]
console.log(numeros); // [1, 5, 7]

// Ejemplo 4: Uso de slice con índices positivos y negativos
let edades = [11, 20, 8, 13, 5, 10];
let rango = edades.slice(2, 4); // [8, 13]
console.log(rango);
console.log(edades); // [11, 20, 8, 13, 5, 10]

let rangoNeg = edades.slice(-3, -2); // [13]
console.log(rangoNeg);
console.log(edades); // [11, 20, 8, 13, 5, 10]

// Ejemplo 5: Uso de splice para modificar el array
let edadesSplice = [11, 20, 8, 13, 5, 10];
edadesSplice.splice(4, 2, 15, 30); // Reemplaza 2 elementos a partir del índice 4
console.log(edadesSplice); // [11, 20, 8, 13, 15, 30]

// Ejemplo 6: uso del concat para combinar varios arrays
let array1 = [2, 4, 6, 8];
let array2 = [3, 5, 7, 9];
let array3 = [5, 10, 15, 20];
let array_concat = array1.concat(array2, array3); // Combina array1, array2 y array3 en uno solo
console.log(array_concat); // [2, 4, 6, 8, 3, 5, 7, 9, 5, 10, 15, 20]
