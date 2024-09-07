// manipulacion de DOM version JavaScript
// let demoElement = document.getElementById("demo");
// demoElement.innerText = "Hola Mundo";

// manipulacion de DOM version JQuery
// $(document).ready(function () {
//     $("#demo").text("Hola +chicasTec");
// })

// metodos de eventos version JavaScript
// let btn1 = document.getElementById("btn-ocultar");
// let btn2 = document.getElementById("btn-mostrar");

// btn1.onclick = ocultarTexto;
// btn2.onclick = mostrarTexto;

// function ocultarTexto() {
//     document.getElementById("parrafo").style.display = "none";
// }

// function mostrarTexto() {
//     document.getElementById("parrafo").style.display = "block";
// }

// metodos de eventos version JQuery
$(document).ready(function () {
    
    $("#btn-ocultar").click(function () {
        $("#parrafo").hide("slow");
    })
    $("#btn-mostrar").click(function () {
        $("#parrafo").show("slow");
    })
});
