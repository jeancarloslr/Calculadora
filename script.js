var Result = window.document.getElementById('resultado');
var Number = window.document.getElementsByClassName('number');
var Operator = window.document.getElementsByClassName('operador');
var Apagador = window.document.getElementById('apagador')
var Equal = window.document.getElementById('equal');
var mensagem = window.document.getElementsByClassName('msg');

var valueBtn = "";
var valueOp = "";
var firstValue = ""; // Armazena o primeiro valor para a operação

for (var i = 0; i < Number.length; i++) {
    Number[i].addEventListener("click", numerar);
}

for (var i = 0; i < Operator.length; i++) {
    Operator[i].addEventListener("click", Operar);
}

Equal.addEventListener('click', equar);

function numerar(event) {
    valueBtn += event.target.getAttribute("data-valor");
    Result.innerHTML = valueBtn;
}

function Operar(event) {
    if (valueBtn !== "") {
        firstValue = valueBtn;
        valueOp = event.target.getAttribute("data-valor");
        Result.innerHTML = firstValue + " " + valueOp + " ";
        valueBtn = "";
    }
}
function equar() {
    if (valueBtn !== "" && firstValue !== "" && valueOp) {
        var result;       
        switch(valueOp){
            case '+':
                result = parseFloat(firstValue) + parseFloat(valueBtn);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(valueBtn);
                break;
            case 'X':
                result = parseFloat(firstValue) * parseFloat(valueBtn);
                break;
            case '/':
                result = parseFloat(firstValue) / parseFloat(valueBtn);
                break
            default:
                mensagem.innerHTML = 'Operador desconhecido';
        }      
        Result.innerHTML = result.toString();
    }
}
