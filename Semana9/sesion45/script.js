// Ejemplos de uso de typeof para mostrar el tipo de dato
console.log(typeof "hola mundo");  // string
console.log(typeof true);  // boolean
console.log(typeof 15);  // number

// Los arreglos y objetos son de tipo 'object'
console.log(typeof [1,2,3]);  // object
console.log(typeof {});  // object

// Los objetos de fecha también son de tipo 'object'
console.log(typeof new Date());  // object

// Creando instancias de objetos primitivos, aunque es poco común
console.log(new Number(100));  // Objeto Number
console.log(new String("hola"));  // Objeto String
console.log(new Boolean(false));  // Objeto Boolean

// Creación de un objeto instanciando la clase Object
const Persona2 = new Object();  // Forma menos común de crear objetos
console.log(Persona2);  // Muestra un objeto vacío

// Creación de un objeto de forma literal (la más usada)
const Persona = {};  // Inicializa un objeto vacío
console.log(Persona);

// Agregando propiedades a un objeto usando notación de punto
Persona.nombre = 'Jose';  // Añade la propiedad nombre
Persona.apellido = 'Perez';  // Añade la propiedad apellido
Persona.edad = 25;  // Añade la propiedad edad
Persona.programador = true;  // Añade un valor booleano
Persona.genero = 'Masculino';  // Añade un valor string
console.log(Persona);  // Muestra el objeto con las propiedades agregadas

// Agregando propiedades a un objeto usando notación de corchetes
Persona2['nombre'] = 'Maria';  // Funciona igual que la notación de punto
Persona2['apellido'] = 'Flores';
Persona2['edad'] = 18;
Persona2['programador'] = false;
Persona2['genero'] = 'Femenino';
console.log(Persona2);

// Creación de otro objeto literal
const Carro = {};  // Inicializa un nuevo objeto vacío
Carro['marca'] = 'Toyota';  // Añade una propiedad con corchetes
Carro['fechaProduccion'] = 2023;
Carro['propulsion'] = 'gasolina';
Carro['tipo'] = 'Mecánico';
Carro['aceleracion'] = '8.2g';
Carro['color'] = 'rojo';

console.log(Carro);  // Muestra el objeto con sus propiedades

// Acceder a las propiedades del objeto usando notación de punto y corchetes
console.log(Carro.aceleracion);  // '8.2g'
console.log(Carro.fechaProduccion);  // 2023
console.log(Carro["marca"]);  // 'Toyota'

// Modificar/actualizar propiedades de un objeto
Carro.tipo = "Automático";  // Cambia el valor de 'tipo'
console.log(Carro);  // Muestra el objeto con el cambio

// Añadir una nueva propiedad como un arreglo
Carro.complementos = ['tablet', 'parlante', 'ventiladores', 'cámaras'];
console.log(Carro);  // Muestra el objeto con el arreglo complementos

// Agregar un método (función) al objeto
Carro.asientosDeBebe = function () {
    console.log(`El carro de la marca: ${Carro.marca}, sí tiene asientos de bebé`);
};
console.log(Carro);  // Muestra el objeto con la nueva función

// Ejecutar el método del objeto
Carro.asientosDeBebe();  // 'El carro de la marca: Toyota, sí tiene asientos de bebé'


//Objeto de Tarjeta de credito
const TarjetaDeCredito = {};  // Inicializa un objeto vacío

// Asignación de propiedades a la tarjeta
TarjetaDeCredito["titular"] = "Maria Faria";  // Nombre del titular
TarjetaDeCredito["tipo"] = "MasterCard";  // Tipo de tarjeta
TarjetaDeCredito["numero"] = 1377543210987654;  // Número de tarjeta
TarjetaDeCredito["saldo"] = 1000;  // Saldo disponible en la tarjeta
TarjetaDeCredito["activa"] = true;  // Estado de la tarjeta (activa o no)

// Se agrega una propiedad que es un arreglo para guardar los accesos recientes
TarjetaDeCredito["accesosRecientes"] = [
    { fecha: '2024-09-01', monto: 100, tipo: 'compra' },
    { fecha: '2024-09-02', monto: 50, tipo: 'retiro' },
    { fecha: '2024-09-03', monto: 200, tipo: 'compra' }
];

// Método para verificar si la tarjeta está activa
TarjetaDeCredito["verificar"] = function () {
    return TarjetaDeCredito.activa ? 'está activa' : 'está desactivada';
};

// Mostrar los accesos recientes
console.log("Accesos recientes:");
TarjetaDeCredito.accesosRecientes.forEach((acceso) => {
    console.log(`Fecha: ${acceso.fecha}, Monto: ${acceso.monto}, Tipo: ${acceso.tipo}`);
});

// Imprime el objeto TarjetaDeCredito con todas sus propiedades
console.log(TarjetaDeCredito);

// Actualización del estado de la tarjeta (se desactiva)
TarjetaDeCredito["activa"] = false;

// Usa template literals para mostrar información de la tarjeta y el resultado de la verificación
console.log(`El tipo de la tarjeta es ${TarjetaDeCredito.tipo} y ${TarjetaDeCredito.verificar()}`);
