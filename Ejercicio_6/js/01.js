var edad = prompt("Ingrese su edad")
var pais = prompt("Ingrese su pais con la primera letra en mayuscula");


if (edad >= 18 && pais === "Guatemala") {
  alert("La persona es mayor de edad y vive en Guatemala");
} else {
  alert("La persona es menor de edad o no vive en Guatemala");
}