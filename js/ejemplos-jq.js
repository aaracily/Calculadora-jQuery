$(document).ready(function(){
    console.log("cargado");
    console.log($('#b1')); // seleccionar por id
    console.log($('btn btn-black'));// seleccionar por clases
    
    console.log($('b1').text('U')); //  settear el elemento seleccionado
   
    $('#botonEjemplo').addClass('btn-danger');
   $('#botonEjemplo').text('Aprieta');
   
   //innertext trae el contenido del elemento/ innnerhtml trare todo el elemento
   // el elemnto es de apertura y cieera y entre hay un textpfuncion .text() trae solo el contenido
   
   
   // la funcion .val() funciona con elementos sin cierre y que tiene un atributo value reemplaza la funcion .value
   console.log($('#entrada').val())

   });