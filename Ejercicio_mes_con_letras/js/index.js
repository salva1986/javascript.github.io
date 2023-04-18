let fecha = new Date();
let configurarFecha = { year: 'numeric', month: 'long', day: 'numeric'};

fecha = fecha.toLocaleDateString("es-Es", configurarFecha);
fecha = fecha.split(" ");


let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let año = document.getElementById("año");
let de = document.getElementById("de");
let de2 = document.getElementById("de2");


dia.innerHTML = fecha[0];
de.innerHTML = " de ";
mes.innerHTML = fecha[2];
de2.innerHTML = " de "
año.innerHTML = fecha[4];