// Ejercicio 1: Uso de indexOf para encontrar la primera aparición de un elemento en un array
let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let elemento = "b";
let idx = array.indexOf(elemento); // Devuelve el índice de la primera aparición de "b"
console.log(idx); // Resultado esperado: 1

// Ejercicio 2: Uso de lastIndexOf para encontrar la última aparición de un elemento en un array
let abc = ['a', 'b', 'c', 'a', 'd', 'a', 'z'];
let indice = abc.lastIndexOf('a'); // Devuelve el índice de la última aparición de "a"
console.log(indice); // Resultado esperado: 5

// Ejercicio 3: Uso de includes para verificar si un elemento existe en un array desde un índice específico
let abc2 = ['a', 'b', 'c', 'd', 'e'];
let busqueda = abc2.includes('b', 3); // Verifica si "b" existe en el array desde el índice 3 en adelante
console.log(busqueda); // Resultado esperado: false (porque "b" está en el índice 1)

// Ejercicio 4: Uso de findIndex para encontrar el índice de la primera aparición de un elemento que cumpla una condición
let color = ["yellow", "red", "blue", "red", "brown", "purple"];
let found = color.findIndex(elem => elem == "red"); // Devuelve el índice de la primera aparición de "red"
console.log(found); // Resultado esperado: 1

// Ejercicio 5: Uso de filter para crear un nuevo array con elementos que cumplan una condición
let años = [1989, 1800, 1970, 1735, 2000, 2021, 1840, 2035];
let nuevoArray = años.filter(e => e >= 1900 && e < 2000); // Filtra los años entre 1900 y 1999
console.log(nuevoArray); // Resultado esperado: [1989, 1970]
console.log(años); // Muestra el array original sin modificaciones: [1989, 1800, 1970, 1735, 2000, 2021, 1840, 2035]

//Extras:
// Ejercicio 6: Uso de indexOf para manejar un caso donde el elemento no existe
let frutas = ['manzana', 'pera', 'naranja'];
let indiceFruta = frutas.indexOf('mango'); // Intentando encontrar "mango" que no está en el array
console.log(indiceFruta); // Resultado esperado: -1 (indicando que "mango" no está presente)

// Ejercicio 7: Comparación entre indexOf y findIndex
let numeros = [1, 2, 3, 4, 5];
let idxNumero = numeros.indexOf(3); // Busca el número 3
let idxNumeroCondicion = numeros.findIndex(num => num > 3); // Encuentra el índice del primer número mayor que 3
console.log(idxNumero); // Resultado esperado: 2
console.log(idxNumeroCondicion); // Resultado esperado: 3

// Ejercicio 8: Uso de encadenamiento de métodos para combinar findIndex y filter
let letras = ['x', 'y', 'z', 'a', 'b', 'c'];
let condicion = letras.filter(letra => letra > 'x').findIndex(letra => letra == 'z');
console.log(condicion); // Resultado esperado: 0 (índice relativo después del filtro)

// Ejercicio 9: Modificación del array original con splice y uso de filter
let ciudades = ['Londres', 'Paris', 'Roma', 'Berlín'];
ciudades.splice(2, 1); // Elimina la ciudad en el índice 2 ("Roma")
console.log(ciudades); // Resultado esperado: ["Londres", "Paris", "Berlín"]
let grandesCiudades = ciudades.filter(ciudad => ciudad.length > 5);
console.log(grandesCiudades); // Resultado esperado: ["Londres", "Berlín"] (ciudades con nombre de más de 5 letras)
