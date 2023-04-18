var terminar = 'no';
while (terminar !== 'SI') {

  console.log('El programa está funcionando...');

  terminar = prompt('¿Desea terminar el programa? (SI/no)').toUpperCase();
}

console.log('Fin del programa');