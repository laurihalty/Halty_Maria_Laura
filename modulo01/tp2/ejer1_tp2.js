/*A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
multiplicación y división) realizadas con los dos elementos numéricos*/

var valores = [true,false, 2, "hola","mundo",3,"char"];
let longitud = 0;

for (let valor of valores) {
    tipo = typeof (valor);
    
    if(tipo=="string"){
        if(valor.length > longitud){
            var mayor = valor
            longitud = valor.length
        }
    }
}

console.log("el mayor es:" + mayor);

var nuevoArreglo =['hola','mundo','char'];
nuevoArreglo.sort(function(a,b){
    return a.length - b.length
});

console.log(nuevoArreglo);

console.log ("El resultado de la suma es: " + (valores[2]+valores[5]));
console.log("El resultado de la resta es: " + (valores[2]-valores[5]));
console.log("El resultado de la multiplicación es: " + (valores[2]*valores[5]));
console.log("El resultado de la división es: " + (valores[2]/valores[5]));