/*Crear una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
var cadena = prompt ("Ingrese la frase")
function info(cadena) {
    var resultado = "La cadena \""+cadena+"\" ";
    
if (cadena == cadena.toUpperCase()){
    console.log (resultado += " está formada solo por mayúsculas");
}
else if (cadena == cadena.toLowerCase()){
    console.log (resultado += " está formada solo por minúsculas");
}
else{ 
    console.log (resultado += " está formada por mayúsculas y minúsculas");
}
return resultado;
}

alert(info(cadena));
