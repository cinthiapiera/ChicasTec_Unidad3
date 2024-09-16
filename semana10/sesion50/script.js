//https://pokeapi.co/api/v2/pokemon/{id o nombre}/

$(document).ready(function () {
  
    // Evento para el botón de buscar Pokémon
    $("#btnBuscar").click(function (e) {
      e.preventDefault(); // Previene que el botón recargue la página
  
      // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
      let nombrePokemon = $("#campoBuscar").val().toLowerCase(); 
      //console.log(nombrePokemon);
  
      // Si se ha ingresado un nombre o ID, llama a la función para buscar el Pokémon
      if (nombrePokemon) {
        buscarPokemon(nombrePokemon);
      }
    });
  
    // Evento para el botón de limpiar resultados
    $("#btnLimpiar").click(function (e) {
      e.preventDefault();
  
      // Limpia el contenedor que muestra los Pokémon
      $("#pokemon-container").empty(); 
  
      // Limpia el campo de búsqueda
      $("#campoBuscar").val("");
    });
  
    // Función para hacer la solicitud a la API de Pokémon y obtener los datos
    function buscarPokemon(pokemon) {

      $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
        dataType: "json", 
        success: function (data) {
          // Si la solicitud es exitosa, llama a la función para mostrar los datos del Pokémon
          renderPokeData(data);
        },
        error: function () {
          // Si ocurre un error (por ejemplo, si no se encuentra el Pokémon), muestra un mensaje de alerta
          alert("Pokémon no encontrado, intenta con otro nombre o ID.");
        }
      });
    }
  
    // Función para crear y mostrar la tarjeta del Pokémon con los datos recibidos
    function renderPokeData(data) {
    //   console.log(data); 
  
      // Crear un nuevo div para la tarjeta del Pokémon
      let div = $("<div></div>");
      div.addClass("card");
  
      // Crear un elemento h3 para el nombre y el ID del Pokémon
      let name = $("<h3></h3>");
      name.addClass("card-title");
      name.append(`${data.id} ${data.name.toUpperCase()}`); 
      div.append(name); 
  
      // Crear un elemento img para mostrar la imagen oficial del Pokémon
      let img = $("<img>");
      img.attr("src", data.sprites.other["official-artwork"].front_default); 
      img.addClass("card-img"); 
      div.append(img); 
  
      // Crear un div para el cuerpo de la tarjeta que mostrará el tipo del Pokémon
      let body = $("<div></div>");
      body.addClass("card-body"); 
  
      // Obtener el tipo de Pokémon (puede tener más de uno)
      let pokeType = data.types;
      let tipos = "";
      
      pokeType.forEach(function (type, index) {
        tipos += `${type['type']['name'].toUpperCase()}`; 
        if (index < pokeType.length - 1) {
          tipos += " - "; // Añade un guion si hay más de un tipo
        }
      });
      // Añadir los tipos al cuerpo de la tarjeta
      body.append(`<div>Tipo: ${tipos}</div>`);
      div.append(body);
  
      // Finalmente, añade la tarjeta al contenedor de Pokémon en la página
      $("#pokemon-container").append(div);
    }
  });