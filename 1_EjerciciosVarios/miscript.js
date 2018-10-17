//Ejercicio 1

/**
	Detecta si se cargo el elemento html y reemplaza el elemento demo por Hola todos.
*/
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('demo').innerHTML = "Hola a todos!!!";
    init();
  });





//Ejercicio 2:

/*
	Función para cambiar el color del componente que ingresa por parametro.
*/
function init() {

	var cantCuadrados = 5;
	for(let i = 0; i < cantCuadrados; i++) {

		let div = document.createElement('div');
		//div.setAttribute('style','box');
		div.className = 'box';
		div.style.marginRight = '5px';
		div.id = i;
		//document.body.appendChild(div);
		document.getElementById('box').appendChild(div);
		div.onmouseover = function() {changeColor(div)};
	}
}

function changeColor(div) {
	if (div.style.background == 'green'){
		div.style.background = 'orange';
	}else{
		div.style.background = 'green';
	}
	console.log(div);
}


//Ejercicio 3:

/*
	Redireccionar el sitio a la página saludo.
*/
document.getElementById("sender").onclick = function(){mostrarPaginaSaludo()};

function mostrarPaginaSaludo() {
	var nombre = document.getElementById('nombre').value;
	var apellido = "Fanin";
	if (nombre == "") {
		alert("Debe completar el campo nombre");
	} else {
		window.location = "file:///C:/VILLADA/JAVASCRIPT/PrimerEjercicio/saludar.html?nombre=" + nombre;
	}
}
