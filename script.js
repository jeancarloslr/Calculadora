var Result = window.document.getElementById('resultado');
var Number = window.document.getElementsByClassName('number');
var Op = window.document.getElementsByClassName('operador');
var Apagador = window.document.getElementById('apagador')
var Equal = window.document.getElementById('equal');

for (var i = 0; i < Number.length; i++) {
    Number[i].addEventListener("click", numerar);
}

function numerar(){
    console.log("working")
    result();
}

function result(){
    Result.innerHTML = Number.value;
}






