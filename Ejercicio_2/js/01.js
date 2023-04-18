var transporte = prompt("Introduce un transporte (auto, tren, bicicleta, motocicleta o  autobus");



if(transporte === "auto"){
 alert("Buen viaje")
} else if (transporte === "tren" || transporte === "autobus"){
    alert("No olvides llevar dinero para el transporte");
} else if (transporte === "motocicleta"){
    alert("que disfrites el viaje en motocicleta")
} else if (transporte === "bicicleta") {
    alert("Que disfrutes el viaje en bicicleta");
} else {
    alert("No seleccionaste un medio de transporte válido");
}
