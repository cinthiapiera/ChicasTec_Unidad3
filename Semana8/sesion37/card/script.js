const apiURL = "https://www.mmobomb.com/api1/games";

async function getGames() {
    try {
        const respuesta = await fetch(apiURL);
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        mostrarDatos(datos);
    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
    }
}

function mostrarDatos(datos) {
    const resultadoDiv = document.getElementById("resultado");

    for (let i = 0; i < datos.length; i++) {
        // Crear el contenedor para cada juego
        let flexChild = document.createElement("div");
        flexChild.className = "flex-child";

        // Crear y agregar la imagen
        let img = document.createElement("img");
        img.src = datos[i].thumbnail;
        img.alt = "Foto de videojuego";
        flexChild.appendChild(img);

        // Crear y agregar la div de información
        let infoDiv = document.createElement("div");
        infoDiv.className = "info";

        // Crear y agregar el título
        let h3 = document.createElement("h3");
        h3.textContent = datos[i].title;
        infoDiv.appendChild(h3);

        // Crear y agregar la descripción
        let p = document.createElement("p");
        p.textContent = datos[i].short_description;
        infoDiv.appendChild(p);

        // Agregar la div de información al contenedor principal
        flexChild.appendChild(infoDiv);

        // Agregar el contenedor principal al resultado
        resultadoDiv.appendChild(flexChild);
    }
}

getGames();
