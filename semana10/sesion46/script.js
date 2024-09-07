function Persona(nombre, apellido, edad, genero, intereses) {
    // Asignar propiedades al objeto
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;

    this.bio = function () {
        // Usar plantillas literales para una mejor legibilidad
        return `Mi nombre es ${this.nombre} ${this.apellido}. Tengo ${this.edad} años y me gusta ${this.intereses[0]} y también ${this.intereses[1]}.`;
    }

    this.saludar = function () {
        return `Hola, soy ${this.nombre}.`;
    }
}

// Crear una instancia de Persona
const persona1 = new Persona("Cinthia", "Maldonado", 35, "femenino", ["bailar", "programar"]);

// Mostrar la biografía de la persona usando alert
alert(persona1.bio());
