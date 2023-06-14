function generarNumerosAleatorios() {
    var numeros = [];
    while (numeros.length < 100) {
      var numero = Math.floor(Math.random() * 100) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }

    for (var i = 0; i < numeros.length; i++) {
      document.write(numeros[i] + '<br>');
    }
  }
  
  generarNumerosAleatorios();