//https://pokeapi.co/api/v2/pokemon/{id o nombre}/



$(document).ready(function () {

    $("#btnBuscar").click(function (e) {
        e.preventDefault(); //es un méwtodo que evita que mi pagina se recargue
        let nombrePokemon = $("#campoBuscar").val().toLowerCase();
        // console.log(nombrePokemon);
        if(nombrePokemon){
            buscarPokemon(nombrePokemon);
        }else{
            alert("Necesita colocar un valor en el input");
        }
        $("#campoBuscar").val("");
    })

    $("#btnLimpiar").click(function (e){
        e.preventDefault();
        $("#pokemon-container").empty();
        $("#campoBuscar").val("");
    })

    function buscarPokemon(pokemon) {
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
            dataType: "json",
            async : true,
            success: function (data) {renderPokemon(data)},
            // Error: throw new Error( "The argument provided is incorrect" )
        })
    }

    function renderPokemon(data) {
        console.log(data);

    }

})