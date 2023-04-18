var letra = prompt("Por favor, introduce una letra:");
var numero = parseInt(prompt("Por favor, introduce un número:"));

var cadena = "";

for (var i = 0; i < numero; i++) {
  cadena += letra;
}

alert("La cadena resultante es: " + cadena);