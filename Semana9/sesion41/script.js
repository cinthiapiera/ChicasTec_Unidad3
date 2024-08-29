const autos = ["audi","bmw","ferrari","fiat","ford","lexus"];
let text ="";
for (let i = 0; i < autos.length; i++) {
    text += '<img src="assets/img/'+autos[i]+'.png" width="100"></img>';
}
document.getElementById("demo").innerHTML=text;


let b1 = document.getElementById("btn-push");
b1.onclick = functionPush;

function functionPush(elemento) {
    autos.push("saab");
    let text = "";
    for (let i = 0; i < autos.length; i++) {
        text += '<img src="assets/img/'+autos[i]+'.png" width="100"></img>';
    }
    document.getElementById("demo").innerHTML=text;
}

