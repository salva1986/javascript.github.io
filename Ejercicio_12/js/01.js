var menu = prompt("¿Qué desea ordenar? (carne, pescado, verdura)");

switch (menu) {
  case "carne":
    alert("Excelente elección. Como bebida le ofrecemos vino tinto.");
    break;
  case "pescado":
    alert("Excelente elección. Como bebida le ofrecemos vino blanco.");
    break;
  case "verdura":
    alert("Excelente elección. Como bebida le ofrecemos agua.");
    break;
  default:
    alert("Por favor, elija carne, pescado o verdura.");
    break;
}
