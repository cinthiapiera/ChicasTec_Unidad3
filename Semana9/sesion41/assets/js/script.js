const autos = ["audi","bmw","ferrari","fiat","ford","lexus"];
let text ="";
for (let i = 0; i < autos.length; i++) {
    text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
}
document.getElementById("demo").innerHTML=text;


let b1 = document.getElementById("btn-push");
b1.onclick = functionPush;

function functionPush() {
    autos.push("saab");
    text = "";
    for (let i = 0; i < autos.length; i++) {
        text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=text;
}

let b2 = document.getElementById("btn-pop");
b2.onclick = functionPop;

function functionPop() {
    if (autos.length > 0) {
        autos.pop();
        text = "";
        for (let i = 0; i < autos.length; i++) {
            text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML=text;
    } else {
        console.log("no puede eliminar más valores porque el arreglo esta vacio");
    }
}

let b3 = document.getElementById("btn-unshift");
b3.onclick = functionUnShift;

function functionUnShift() {
    autos.unshift("volvo");
    text = "";
    for (let i = 0; i < autos.length; i++) {
        text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=text;
}

let b4 = document.getElementById("btn-shift");
b4.onclick = functionShift;

function functionShift() {
    if (autos.length > 0) {
        autos.shift();
        text = "";
        for (let i = 0; i < autos.length; i++) {
            text += '<img src="assets/img/'+ autos[i] +'.png" width="100"></img>';
        }
        document.getElementById("demo").innerHTML=text;
    } else {
        console.log("no puede eliminar más valores porque el arreglo esta vacio");
    }
}