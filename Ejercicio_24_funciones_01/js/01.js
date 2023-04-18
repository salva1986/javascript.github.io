function esVocal(caracter) {
    caracter = caracter.toLowerCase();
  
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  // Pedir al usuario que ingrese un carácter
  var caracter = prompt('Ingrese un carácter:');
  
  // Verificar si el carácter es una vocal
  if (esVocal(caracter)) {
    alert('El carácter ingresado es una vocal.');
  } else {
    alert('El carácter ingresado no es una vocal.');
  }