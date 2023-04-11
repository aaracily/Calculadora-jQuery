$(document).ready(function(){
    console.log("pasa por aqui");
            
    function putInResult(value){
        $("#resultado").val(value); 
    }
      
    function puchNum(value){
        var currentVal = $("#resultado").val();
        var lastChar = currentVal[currentVal.length - 1];
        
        if (lastChar === "^" || lastChar === "√") {
            // Si el último carácter ingresado es "^" o "√", esperar una expresión dentro de paréntesis
            if (lastChar === "√") {
                putInResult(currentVal + value);
            } else {
                putInResult(currentVal + "(" + value + ")");
            }
        } else {
            var concatenado = currentVal + value;
            putInResult(concatenado);
        }
    }
    
    // Función para elevar al cuadrado
    function squared(value) {
        return Math.pow(value, 2);
    }
    
    // Función para calcular la raíz cuadrada
    function squareRoot(value) {
        return Math.sqrt(value);
    }
  
    $(".btn.btn-dark").add(".btn.btn-primary").on("click", function(){
        puchNum(this.innerText);
    });
    
    $("#bclean").on("click", function (){
        putInResult("");
    });
    
    $("#bequal").on("click", function () {
        try{
            const expresion = $("#resultado").val();
            if (expresion.includes('/0')) {
                putInResult("Error, limpie y digite nuevamente");
                return;
            }
            
            // Reemplazar "^2" con la función squared() y "√" con la función squareRoot() antes de evaluar la expresión
            expresionParsed = expresion.replace(/(\d+)\^2/g, "squared($1)").replace(/√(\d+)/g, "squareRoot($1)");
            putInResult(eval(expresionParsed));
        } catch(err){
            $("#resultado").val("Error, limpie y digite nuevamente");
        }
    });
});
























