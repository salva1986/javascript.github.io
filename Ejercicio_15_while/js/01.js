var continuar = 'sí';
while (continuar === 'sí') {

  console.log('El programa está funcionando...');


  continuar = prompt('¿Desea continuar con el programa? (sí/no)').toLowerCase();
  while (continuar !== 'sí' && continuar !== 'no') {
    continuar = prompt('Por favor, responda "sí" o "no": ').toLowerCase();
  }
}

console.log('Fin del programa');