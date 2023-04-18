var password1, password2;
do {
  password1 = prompt("Ingrese la contraseña:");
  password2 = prompt("Ingrese nuevamente la contraseña:");
} while (password1 !== password2);

alert("Las contraseñas coinciden. Acceso permitido.");