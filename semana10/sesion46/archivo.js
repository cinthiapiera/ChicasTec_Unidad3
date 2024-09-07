var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
}

// const numeros = [1, 2, 3, 4, 5, 6];
// numeros.forEach(n => console.log(n));

// console.log(heroes);
// const jsonHeroes = JSON.stringify(heroes);
// console.log(jsonHeroes);

// const jsonString = '{"nombre":"Ana", "edad":25}';
// const personaObject = JSON.parse(jsonString);
// console.log(personaObject);


// Función para generar la lista de poderes
function generatePowersList(powers) {
    return powers.map(power => `<li>${power}</li>`).join('');
}

function displayHeroes() {
    // Obtenemos el elemento donde queremos mostrar la información
    const demoElement = document.getElementById("demo");
    if (!demoElement) {
        console.error("Elemento con id 'demo' no encontrado.");
        return;
    }
  
    // Creamos una cadena para almacenar el HTML
    let htmlContent = `
        <h1>${heroes.squadName}</h1>
        <p>Home Town: ${heroes.homeTown}</p>
        <p>Formed: ${heroes.formed}</p>
        <p>Secret Base: ${heroes.secretBase}</p>
        <p>Active: ${heroes.active}</p>
        <h2>Members:</h2>
    `;
  
    // Recorremos el array de miembros
    heroes.members.forEach(member => {
        htmlContent += `
            <div>
                <h3>${member.name}</h3>
                <p>Age: ${member.age}</p>
                <p>Secret Identity: ${member.secretIdentity}</p>
                <p>Powers:</p>
                <ul>${generatePowersList(member.powers)}</ul>
            </div>
        `;
    });
  
    // Insertamos el HTML en el elemento
    demoElement.innerHTML = htmlContent;
}

// Llamamos a la función para mostrar la información cuando se cargue la página
window.onload = displayHeroes;