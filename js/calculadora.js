$(document).ready(function(){
    console.log("pasa por aqui");
              //$('#b1').text('uno');
      function putInResult(value){
          //toma el valor que entra comom parametro y se los lleva al id resultado
          $("#resultado").val(value); 
      }
          //putInResult(22); 
      
      //quiero apretar cualquier btn numerico, concatenar su valor a la caja de resulatdo
       function puchNum(value){
          //recibe un valor y lo concatena a la caja de resultado, luego lo envia a la funcion put
              var concatenado = $("#resultado").val() + value;
              putInResult(concatenado);
         
      }
  
  //console.log($(".btn.btn-dark"));
  $(".btn.btn-dark")
      .add(".btn.btn-primary")
          .on("click", function(){ puchNum(this.innerText)})
  $("#bclean")
      .on("click", function (){putInResult(" ")});
  $("#bequal")
      .on("click", function () {
          try{
              const expresion = $("#resultado").val();
              if (expresion.includes('/0')) {
                  // Si la ecuación incluye una división por cero, mostrar el mensaje de error
                  putInResult("Error, limpie y digite nuevamente");
                  return;
              }
              putInResult(eval(expresion));
          }catch(err){
              $("#resultado").val("Error, limpie y digite nuevamente");
          }
          // putInResult( eval($("#resultado").val()))
           });
  //selecciono el elemento , le asigno on, funcion anonima
    
  
  });

























