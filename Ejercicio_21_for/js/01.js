var numero = parseInt(prompt("Introduce un número entero:"));
var listaNumeros = "";

for (var i = numero; i >= 0; i--) {
  listaNumeros += i + ",";
}

console.log("La cuenta atrás es: " + listaNumeros.slice(0, -1));