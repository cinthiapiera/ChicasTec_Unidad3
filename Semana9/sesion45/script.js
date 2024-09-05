// console.log(typeof "hola mundo");
// console.log(typeof true);
// console.log(typeof 15);

// console.log(typeof [1,2,3]);
// console.log(typeof {});

// console.log(typeof new Date());
// console.log(new Number(100));
// console.log(new String("hola"));
// console.log(new Boolean(false));

//creacion de objeto instanciando la clase Object
const Persona2 = new Object();
console.log(Persona2);

// creacion de objeto literal
const Persona = {};
console.log(Persona);

//agregar con notacion de punto
Persona.nombre = 'Jose';
Persona.apellido = 'Perez';
Persona.edad = 25;
Persona.programador = true;
Persona.genero ='Masculino';
console.log(Persona);

//agregar con notacion de bracket
Persona2['nombre'] = 'Maria';
Persona2['apellido'] = 'Flores';
Persona2['edad'] = 18;
Persona2['programador'] = false;
Persona2['genero'] = 'Femenino';
console.log(Persona2);

const Carro = {};
Carro['marca']='Toyota';
Carro['fechaProduccion'] = 2023;
Carro['propulsion'] = 'gasolina';
Carro['tipo'] = 'Mecanico';
Carro['aceleracion'] = '8.2g';
Carro['color'] = 'rojo';

console.log(Carro);
