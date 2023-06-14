/*Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.*/

var texto = prompt ("Introduce el texto");

function vocales(caracter) {
    var vocales=['a','e','i','o','u'];
    return vocales.includes(caracter.toLowerCase());
}
function primeravocal(texto) {
for (let i = 0; i < texto.length; i++) {
 if (vocales(texto[i])){
    return i+ 1;
    
 }
}
return -1
}

var posicion = primeravocal(texto);
if (posicion !== -1){
    console.log ("La primer vocal es " + texto[posicion - 1] + " y se encuentra en la letra N° " + posicion );
     
}
console.log ("No se encontró ninguna vocal en el texto ingresado");