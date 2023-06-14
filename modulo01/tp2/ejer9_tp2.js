var promedioFinal = calcularPromedio(notas);
var imprimirResultado = promedioFinal
function promedio(notas) {
    var suma = 0;   
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    var promedio = suma / notas.length;
    return promedio;
}

function Resultado(promedio) {
    if (promedio < 5) {
      document.write("Reprobado");
    } else if (promedio >= 6 && promedio <= 8) {
      document.write("Aprobado");
    } else {
      document.write("Sobresaliente");
    }
  }
  
  var notas = [];
  
  for (var i = 1; i <= 3; i++) {
    var nota = parseInt(prompt("Ingresa la nota del alumnx " + i + ":"));
    while (nota < 0 || nota > 10) {
      nota = parseInt(prompt("Ingresa una nota válida (entre 0 y 10):"));
    }
    notas.push(nota);
  }  
  