/*El factorial de un número entero positivo se define como el producto de todos los números
naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x
1.
Por ejemplo: el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero.*/

var numero = prompt("Introduce un número");
var resultado = 1


for (let i = 1; i <= numero; i++) {
    resultado *= i;
}
console.log(resultado);
alert(resultado);