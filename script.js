var Result = window.document.getElementById('resultado');
var Number = window.document.getElementsByClassName('number');
var Operator = window.document.getElementsByClassName('operador');
var Apagador = window.document.getElementById('apagador')
var Equal = window.document.getElementById('equal');

var valueBtn = 0;   
var valueOp = 0;

//alcançar todos os elementos(números) com a classe number
for (var i = 0; i < Number.length; i++) {
    Number[i].addEventListener("click", numerar);
}

//alcançar todos os elementos(operadores) com a classe operador
for (var i = 0; i < Operator.length; i++) {
    Operator[i].addEventListener("click", Operar);
}

Equal.addEventListener('click', equar)

function numerar(event) {
    valueBtn = parseInt(event.target.getAttribute("data-valor"));
    Result.innerHTML += `${valueBtn}`;
}

function Operar(event) {
    valueOp = event.target.getAttribute("data-valor");
    Result.innerHTML += ` ${valueOp} `;
}

function equar(){
   if(valueOp == '+'){
    console.log(valueBtn + valueBtn);
   }else{
    console.log('no');
   }
   
}


