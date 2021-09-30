const botonesGrises = document.getElementsByClassName ('calculadora__boton-gris');
const botonesNegros = document.getElementsByClassName ('calculadora__boton-negro');
const botonC = document.getElementsId('calculadora__boton-c');
const botonIgual = document.getElementById ('calculadora__boton-igual');
const botonesRojos = document.getElementsByClassName ('calculadora__boton-rojo');
var PantallaCalculadora = document.getElementById ('calculadora__pantalla');
var operacionActual = '';
var operacionAnterior ='';
var operacion = undefined;

console.log (document);

botonesGrises.forEach(function(boton){
  boton.addEventListene('click', function(){
    agregarNumero(boton.innerText);
  }
);

botonNegros = forEach(function(boton){
  boton.addEventListene('click', function(){
    selectionOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
  PantallaCalculadora();
  actualizarDisplay();
}); 

botonC.addEventListene('click', function(){
  clear();
  actualizarDisplay();
})

function selectionOperacion(op){
  if (operacionActual ==='') return
  if (operacionAnterior)
}

function agregarNumero(num){
  operacionActual=operacionAcual.toString() + num.toString();
  actualizarDisplay()
}

function clear(){
  operacionActual = '';
  operacionAnterio = '';
  operacion = Underfined; 

}

function actualizarDisplay(){
  PantallaCalculadora.value = OperacionActual;
}


