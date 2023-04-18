var calificacion = prompt("Ingresa tu calificación (0-10):");

if (calificacion < 0 || calificacion > 10) {
  alert("La calificación debe estar entre 0 y 10");
} else if (calificacion < 6) {
  alert("Insuficiente");
} else if (calificacion < 8) {
  alert("Suficiente");
} else if (calificacion < 10) {
  alert("Bien");
} else {
  alert("Excelente");
}