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
            renderCountryData(info.timeline,country,time);
        },
        error: function(){
            alert("No se conecto con la API");
        }
    })
}

function renderCountryData(timeline,country,time) {
    // console.log(timeline,country,time);
    var chart = new CanvasJS.Chart(chartContainer,{
        animationEnabled: true,
        theme: "light2",
        title:{
            text: `Casos Covid19 en ${country}`
        },
        axisX: {
            labelAngle: 50,
            title: "Fecha",
        },
        axisY: {
            title: "Número de casos",
        },
        axisY2: {
            title: "Número de fallecimientos",
        },
        data: [{
            type: "line",
            showInLegend: true,
            legendText: "Nuevos casos",
            indexLabelFontSize: 16,
            dataPoints: createArr(timeline, time)[0],
        },
        {
            type: "line",
            axisYType: "secondary",
            showInLegend: true,
            legendText: "Nuevos fallecimientos",
            indexLabelFontSize: 16,
            dataPoints: createArr(timeline, time)[1],
        }]
    });
    chart.render();
}

function createArr(timeline, time) {

    let dates = Object.keys(timeline.cases).slice(-time);
    let newCases = Object.values(timeline.cases).slice(-time);
    let newDeaths = Object.values(timeline.deaths).slice(-time);

    let dataPointsCases = [];
    let dataPointsDeaths = [];

    for (let i = 0; i < time; i++) {
        dataPointsCases.push({
            label: dates[i],
            y: newCases[i]
        });
        dataPointsDeaths.push({
            label: dates[i],
            y: newDeaths[i]
        });
    }
    return[dataPointsCases,dataPointsDeaths];

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