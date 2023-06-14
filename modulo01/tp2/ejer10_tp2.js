function obtenerCantidadDias(mes) {
    var dias;
  
    switch (mes) {
      case 1: 
      case 3: 
      case 5: 
      case 7: 
      case 8: 
      case 10: 
      case 12: 
        dias = 31;
        break;
      case 4: 
      case 6: 
      case 9: 
      case 11:
        dias = 30;
        break;
      case 2: 
        dias = "28 o 29"; 
        break;
      default:
        dias = "mes inválido";
        break;
    }
  
    return dias;
  }
  
  var mes = parseInt(prompt("Ingrese el número de un mes (1-12):"));
  
  var cantidadDias = obtenerCantidadDias(mes);
  
  if (typeof cantidadDias === "number") {
    document.write("El mes " + mes + " tiene " + cantidadDias + " días.");
  } else {
    document.write("Error: " + cantidadDias);
  }