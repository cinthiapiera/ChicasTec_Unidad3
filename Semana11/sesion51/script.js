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

function getCountryInfo(country,time) {
    $.ajax({
        type: "GET",
        url: `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${time}`,
        dataType: "json",
        success: function(info){
            renderCountryData(info,country,time);
        },
        error: function(){
            alert("No se conecto con la API");
        }
    })
}



$(document).ready(function () {
    getAllCountries();
    $("#countries").on("change",function () {
        let selectCountry = $("#countries option:selected").val();
        let timeSpan = $("#time-span option:selected").val();
        if(selectCountry){
            getCountryInfo(selectCountry,timeSpan);
        }
    })
    $("#time-span").on("change",function () {
        let selectCountry = $("#countries option:selected").val();
        let timeSpan = $("#time-span option:selected").val();
        if(selectCountry){
            getCountryInfo(selectCountry,timeSpan);
        }
    })
    
})