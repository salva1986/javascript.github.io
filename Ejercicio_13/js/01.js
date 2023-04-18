var compra = prompt("¿Cuánto ha gastado en su compra?");

if (compra < 100) {
  alert("Lo siento, no tiene derecho a descuento.");
} else if (compra >= 100 && compra <= 300) {
  var descuento = compra * 0.05;
  alert("¡Felicitaciones! Usted tiene un descuento del 5% por un total de " + descuento + " euros. Su precio final es de " + (compra - descuento) + " euros.");
} else if (compra > 300 && compra <= 500) {
  var descuento = compra * 0.1;
  alert("¡Felicitaciones! Usted tiene un descuento del 10% por un total de " + descuento + " euros. Su precio final es de " + (compra - descuento) + " euros.");
} else if (compra > 500 && compra <= 600) {
  var descuento = compra * 0.15;
  alert("¡Felicitaciones! Usted tiene un descuento del 15% por un total de " + descuento + " euros. Su precio final es de " + (compra - descuento) + " euros.");
} else if (compra > 600) {
  var descuento = compra * 0.15;
  alert("¡Felicitaciones! Usted tiene un descuento del 15% por un total de " + descuento + " euros. Su precio final es de " + (compra - descuento) + " euros.");
} else {
  alert("Por favor, ingrese un valor numérico.");
}
