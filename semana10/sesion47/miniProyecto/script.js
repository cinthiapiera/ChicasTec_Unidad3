$(document).ready(function () {
    
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        datatype: "json",
        async: true,
        success : function (data) { mostrarInfo(data)}
    })

    function mostrarInfo(data){

        data.forEach(user => {

            let userCard = $("<div></div>").addClass("user-card");

            $("<h3></h3>").text(user.username).appendTo(userCard);
            $("<p></p>").text(user.email).appendTo(userCard);
            $("<p></p>").text(user.phone).appendTo(userCard);

            $("#user-container").append(userCard)
        });
    }

})