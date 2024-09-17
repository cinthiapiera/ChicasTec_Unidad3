//https://disease.sh/v3/covid-19/countries

function getAllCountries(){
    $.ajax({
        type: "GET",
        url: "https://disease.sh/v3/covid-19/countries",
        dataType: "json",
        async : true,
        success: function (data) {
            renderAllCountries(data);
        },
        error: function () {
            alert("No se pudo conectar con la API");
        }
    })
}

function renderAllCountries(data){
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        $("#countries").append(`<option value=${data[i].countryInfo.iso2}>${data[i].country}</option>`);
    }
}

$(document).ready(function () {
    getAllCountries();
    // $("#countries").on("change",function () {
    //     let selectCountrie = $("#countries option:selected").val();
    // })
    
})