console.log("hola chicas");

let lista = [];
// console.log(lista);

lista[0]=2;
lista[1]=5;
lista[2]=7;
lista[3]=11;
lista[4]=20;
lista[5]="hola";
lista[6]=true;
lista[15]="soy el ultimo";
console.log(lista);

// console.log(lista[2]);
// console.log(lista[0]);


// lista[3]=15;
// console.log(lista);
// console.log(lista[3]);

// let contador=0;
// while (contador < lista.length) {
//     console.log(lista[contador]);
//     contador = contador +1;
// }

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);    
}

// Ejercicios practica
// Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

// Notas:

// (100 - 90) -> 'A'
// (89 - 80) ->' B '
// (79 - 70) -> 'C'
// (69 - 60) -> 'D'
// (59 - 0) -> 'F'
// Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.


function conversorDeGrados(valor) {
    if (valor > 100 || valor < 0 ) {
        return ("PUNTUACION INVALIDA");
    } else if (valor>=90) {
        return ("A");
    } else if (valor>=80) {
        return ("B");
    } else if (valor>=70) {
        return ("C");
    } else if (valor>=60) {
        return ("D");
    } else {
        return ("F");
    }
}


let resultado = conversorDeGrados(75);
console.log(resultado);
