//Recordar: template literal (backticks)
// let nombre='Fiorella';
// let edad=25;

// console.log("Hola, mi nombre es "+nombre+" y mi edad es "+edad);
// console.log(`hola mi nombre es ${nombre} y mi edad es ${edad}`);

function generateUrl() {
    let id = Math.round(Math.random()*500);
    return `https://picsum.photos/id/${id}/info`
}

function renderPic(data) {
    let div = $("<div></div>");
    div.addClass("pic card");

    let img = $("<img>");
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
    $.ajax({
        type: 'GET',
        url: generateUrl(), 
        datatype: 'json',
        async: true,
        success: function(data){renderPic(data)}
    })
}

$(document).ready(function(){
    for (let index = 1; index < 7; index++) {
        getPic();
    }
})