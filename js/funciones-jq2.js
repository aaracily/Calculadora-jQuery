var botonesNum = document.getElementsByClassName('btn btn-dark');
var tresultado = document.getElementById('resultado');

for (let i = 0; i < botonesNum.length; i++) {
    const element = botonesNum[i];
    element.addEventListener('click', function() {putNumber(element.innerText)});
}

function putNumber(valor) {
    tresultado.value += valor;
}

var botonesOperacion = document.getElementsByClassName('btn btn-primary');

for (let i = 0; i < botonesOperacion.length; i++) {
    const element = botonesOperacion[i];
    element.addEventListener('click', function() {
        if (element.innerText === "^2") {
            tresultado.value = Math.pow(eval(tresultado.value), 2);
        } else {
            putOperador(element.innerText)
        }
    })
}

function putOperador(op) {
    if (validarOperador(op)) {
        tresultado.value += op;
    } else {
        tresultado.value = 'Error, limpie y digite nuevamente';
    }
}

function validarOperador(op) {
    if (op === '(' || op === ')') {
        // verificar si hay un número o un paréntesis de apertura antes
        const ultimoChar = tresultado.value.charAt(tresultado.value.length - 1);
        if (!isNaN(ultimoChar) || ultimoChar === '(' || ultimoChar === '') {
            return true;
        } else {
            return false;
        }
    } else if (op === '()' || op === '^2' || op === '√') {
        // verificar si hay un número antes
        const ultimoChar = tresultado.value.charAt(tresultado.value.length - 1);
        if (!isNaN(ultimoChar)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

var blimpiar = document.getElementById('bclean');
blimpiar.addEventListener('click', function() {clean()});

function clean() {    
    tresultado.value='';
}

var bIgual = document.getElementById('bequal');
bIgual.addEventListener('click', function() {
    if (validarOperacion()) {
        if (tresultado.value.includes("^2")) {
            tresultado.value = Math.pow(eval(tresultado.value.replace("^2", "")), 2);
        }else if(tresultado.value.includes("√")){
            tresultado.value = Math.sqrt(eval(tresultado.value.replace("√","")));
        }
        else {
            tresultado.value = eval(tresultado.value);
        }
        
    } else {
        tresultado.value = "Error, limpie y digite nuevamente";
    }
});

if (botonesNum/0) {
    tresultado.value='Infinity';
}

function validarOperacion() {
    const operadores = ["+", "-", "*", "/", "(", ")", "" ,"√"];
    const expresion = tresultado.value;

    // Verificar si hay dos operadores juntos
    for (let i = 0; i < expresion.length - 1; i++) {
        const char1 = expresion.charAt(i);
        const char2 = expresion.charAt(i + 1);
        if (operadores.includes(char1) && operadores.includes(char2)) {
            return false;
        }
    }

    // Verificar si hay un operador al final
    const ultimoChar = expresion.charAt(expresion.length - 1);
    if (operadores.includes(ultimoChar)) {
        return false;
    }

    // Verificar si hay un número después del símbolo de raíz cuadrada (√)
    if (expresion.includes('√')) {
        const index = expresion.indexOf('√');
        const siguienteChar = expresion.charAt(index + 1);
        if (isNaN(siguienteChar)) {
            return false;
        }
    }

    // Verificar si hay un número dentro de los paréntesis en ()
    if (expresion.includes('()')) {
        const index = expresion.indexOf('()');
        const anteriorChar = expresion.charAt(index - 1);
        const siguienteChar = expresion.charAt(index + 2);
        if (isNaN(anteriorChar) || isNaN(siguienteChar)) {
            return false;
        }
    }

    return true;
}