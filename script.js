var Result = window.document.getElementById('resultado');
var Number = window.document.getElementsByClassName('number');
var Op = window.document.getElementsByClassName('operador');
var Apagador = window.document.getElementById('apagador')
var Equal = window.document.getElementById('equal');

for (var i = 0; i < Number.length; i++) {
    Number[i].addEventListener("click", numerar);
}

function numerar(event) {
    var valueBtn = parseInt(event.target.getAttribute("data-valor"));
    result(valueBtn);
}

function result(valor1) {
    Result.innerHTML += valor1;
}
