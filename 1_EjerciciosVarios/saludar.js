
document.addEventListener("DOMContentLoaded", function(event) {
    saludar();
 });

/*
	Función que toma el campo nombre por parametro y muestra un mensaje según la hora del día.
*/
function saludar() {
	var url = new URLSearchParams(window.location.search);
	var parametroNombre = url.get('nombre');

	var horaDelDia = new Date().getHours();
	var saludo;

	switch(true) {
		case (horaDelDia <= 12):
			saludo = "Buen Dia ";
			break;
		case (horaDelDia > 12 && horaDelDia < 20):
			saludo = "Buenas tardes ";
			break;
		case (horaDelDia >= 20):
			saludo = "Buenas noches ";
			break;
	}

	document.getElementById("saludo").innerHTML = saludo + parametroNombre + "!";
}