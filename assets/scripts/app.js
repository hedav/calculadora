const defaultResult = 0;
let currentResult = defaultResult;
let historial = [];
let operacion = null;
let operador = 0;
let operando = 0;
let isOperando = false;
let isCientifica = false;

function aritmetica(){
    switch(operacion){
        case "+":
            userInput.value = operador + operando;
            break;
        case "-":
            userInput.value = operador - operando;
            break;
        case "*":
            userInput.value = operador * operando;
            break;
        case "/":
            userInput.value = operador / operando;
            break;       
    }
  }

function calcular(dijito,isSymbol){
    if(isSymbol){
        if(dijito === "="){
            aritmetica();
            isOperando = false;
        }
        else{
            operacion = dijito;
            isOperando = true;
        }
        
    }
    else{
        if(dijito == null){
            userInput.value = "";
            operador = 0;
            operando = 0;
        }
        else{
            var numConcatenados = null;
            if(!isOperando){
                numConcatenados = "" + operador + dijito;
                operador = parseInt(numConcatenados);
            }
            else{
                numConcatenados = "" + operando + dijito;
                operando = parseInt(numConcatenados);
            }
            userInput.value = parseInt(numConcatenados);
            
        }
    }
  }

  function goBack() {
    window.history.back()
  }

  function pintarhijosDeColor(){
    let contenedor = document.getElementById("calc-actions1");
    let hijos = contenedor.children;
    for(const i=0;i<hijos.length;i++){
      hijos[i].style.background='rgb(202 18 18)';
    }
  }

  function calculadoraCientifica(){
    if(!isCientifica)
    {
      let contenedor = document.getElementById("calc-actions1");
      let nuevoBoton = document.createElement('button');
      contenedor.appendChild(nuevoBoton);
      nuevoBoton.textContent = "%";
      nuevoBoton.style.backgroundColor('blue');
      isCientifica == true;
    }
  }

  function calculadoraNormal(){
    let contenedor = document.getElementById("calc-actions1");
    
    let nuevoBoton = document.createElement('button');
    contenedor.appendChild(nuevoBoton);
    
    nuevoBoton.textContent = "%";
    nuevoBoton.style.backgroundColor('blue');
  }

btn0.addEventListener('click',function() {
    calcular(0,false);
    // goBack();
  }); 
btn1.addEventListener('click',function() {
    calcular(1, false);
  });
btn2.addEventListener('click',function() {
    calcular(2, false);
  });
btn3.addEventListener('click',function() {
    calcular(3, false);
  });
btn4.addEventListener('click',function() {
    calcular(4, false);
  });
btn5.addEventListener('click',function() {
    calcular(5, false);
  });
btn6.addEventListener('click',function() {
    calcular(6, false);
  });
btn7.addEventListener('click',function() {
    calcular(7, false);
  });
btn8.addEventListener('click',function() {
    calcular(8, false);
  });
btn9.addEventListener('click',function() {
    calcular(9, false);
  });
btnclear.addEventListener('click',function() {
    calcular(null, false);
  });
addBtn.addEventListener('click',function() {
    calcular("+", true);
  });
subtractBtn.addEventListener('click',function() {
    calcular("-", true);
  });
multiplyBtn.addEventListener('click',function() {
    calcular("*", true);
  });
divideBtn.addEventListener('click',function() {
    calcular("*", true);
  });
btnEqual.addEventListener('click',function() {
    calcular("=", true);
  });
btnHistorial.addEventListener('click',function() {
  calculadoraCientifica();
});

