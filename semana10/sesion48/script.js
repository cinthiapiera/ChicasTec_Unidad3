function generateUrl() {
    // Generamos un número aleatorio entre 0 y 500
    let id = Math.round(Math.random() * 500);
    return `https://picsum.photos/id/${id}/info`;
}

function renderPic(data) {
    // Manipulamos el DOM para agregar las imágenes
    let div = $("<div></div>");
    div.addClass("pic card");

    let img = $("<img></img>");
    img.attr("src", data.download_url);
    img.addClass("card-img");
    div.append(img);

    let author = $("<h3></h3>");
    author.addClass("card-title");
    author.append(data.author);
    div.append(author);

    $('#pictures-container').append(div);
}

function getPic() {
    // Consumimos la API
    $.ajax({
        type: 'GET',
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function (data) {renderPic(data)}, // En caso de consulta exitosa se ejecuta esto
    });
}

$(document).ready(function () {
    // Desplegamos 9 imágenes
    for (let i = 0; i < 9; i++) {
        getPic();
    }
})