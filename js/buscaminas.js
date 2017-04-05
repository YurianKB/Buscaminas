/*var arregloImages = new Array();
function bomba (){
}
function imagenClick(imagen){
  alert("click");
}*/
var celdasBomba = document.getElementsByClassName("bomba");
var celdasVacias = document.getElementsByClassName("vacio");
var celdas1 = document.getElementsByClassName("numero1");
var celdas2 = document.getElementsByClassName("numero2")

//Función para las bombitas :D
for(var i=0; i<celdasBomba.length; i++){
  celdasBomba[i].addEventListener("click", explotar);
}
function explotar (){
  this.src = "detrasBomba.png";
  alert("Ésto ha explotado!")
}


//Función para las celdas vacías
for(var i=0; i<celdasVacias.length; i++){
  celdasVacias[i].addEventListener("click", vacio);
}
function vacio (){
  this.src = "vacio.png";
}

//for para numeros1
for(var i=0; i<celdas1.length; i++){
  celdas1[i].addEventListener("click", numeros1);
}
function numeros1 (){
  this.src = "numero1.png";
}

//for para numeros1
for(var i=0; i<celdas2.length; i++){
  celdas2[i].addEventListener("click", numeros2);
}
function numeros2 (){
  this.src = "numero2.png";
}




console.log(celdasVacias);
