function obtenerFecha() {
    hoy = new Date();
    fecha = "" + (hoy.getMonth() + 1) + " / " + hoy.getDate() + " / " + (hoy.getYear() + 1900)
    document.reloj.Fecha.value = fecha;

}

var temporizadorID = null;
var temporizadorMarcha = false;

function iniciarReloj() {
    obtenerFecha()
    tiempoFuncion();
}

function tiempoFuncion() {
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds()
    var timeValue = "" + ((hora > 12) ? hora - 12 : hora)

    timeValue += ((minutos < 10) ? ":0" : ":") + minutos
    timeValue += ((segundos < 10) ? ":0" : ":") + segundos
    timeValue += (hora >= 12) ? " P.M." : " A.M."
    document.reloj.ver.value = timeValue;

    temporizadorID = setTimeout("tiempoFuncion()", 1000);
    temporizadorMarcha = true;
}
