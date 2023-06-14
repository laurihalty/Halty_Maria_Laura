
function invertirTexto(texto) {
    var textoInvertido = "";
    for (var i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto.charAt(i);
    }
    return textoInvertido;
  }
  
  
  var textoOriginal = prompt ("Ingrese el texto");
  var textoInvertido = invertirTexto(textoOriginal);
  console.log(textoInvertido);