var numero1 = parseInt(prompt("Ingresa el primer número:"));
var numero2 = parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
  alert(`El número ${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
  alert(`El número ${numero2} es mayor que ${numero1}`);
} else {
  alert("Los números son iguales");
}
