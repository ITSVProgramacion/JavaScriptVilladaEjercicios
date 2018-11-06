//Defino las variables que voy a utilizar.
var dataEvent = { eventName : "Super Evento Fantastico!",
                eventPrice : 2000,
                eventDate : "2018-11-10",
                eventTime : "09:00:00"};
var ticketsArray = [];
var numTicket = 0;

//Listener del botón COMPRAR
document.getElementById("purchaseBtn").onclick = function(){
  var json = generarJSONDesdeFormulario();
  ticketsArray.push(json);
  printTicket();
}

/**
* Función que genera una colección de datos a partir de un formulario.
**/
function generarJSONDesdeFormulario() {

  var obj = {"name": document.getElementById("name").value,
            "lastname": document.getElementById("lastname").value,
            "dni": document.getElementById("dni").value,
            "seat": document.getElementById("seat").value,
            "rowSelector": document.getElementById("rowSelector").value,
            "sectorSelector": document.getElementById("sectorSelector").value };

  //** OTRA FORMA DE HACER ESTO, ES DE ESTA MANERA:
  //Declaro obj es el JSON que voy a devolver y elements, obtiene todos los datos del formulario html.
  /*var obj = {};
  var elements = form.querySelectorAll("input, select, textarea");

  //Seteo cada elemento a obj con la estructura "nombre:valor,".
  for (var i = 0 ; i < elements.length ; i++) {
    var element = elements[i];
    if (element.name) {
      obj[element.name] = element.value;
    }
  }*/
  //**

  //Devuelvo el objeto como String.
  return JSON.stringify(obj);
}

/**
* Función que imprime en un DIV los tickets que se van generando.
**/
function printTicket() {
  //Controlo el numero de ticket a impirmir.
  if (numTicket == 0) {
    numTicket = 1;
  } else {
    numTicket++;
  }

  //Obtengo el objeto JSON de los datos del comprardor.
  var data = JSON.parse(ticketsArray[numTicket-1]);

  //Genero el div con el nuevo ticket a imprimit.
  var divContent = '<div id="ticket" class="ticket">';
  divContent += '<label name="ticketNumber">N ' + numTicket + '</label></br></br>';
  divContent += '<div name="eventTitle" class="eventTitle">'+ dataEvent.eventName + '</div></br>';
  divContent += '<p name="eventDate" class="alignRight">' + dataEvent.eventDate + ' - ' + dataEvent.eventTime + '</p></br>';
  divContent += '<p name="personName">Nombre: ' + data.name + ' ' + data.lastname + '</p><p name="DNI">DNI: ' + data.dni + '</p>';
  divContent += '</br><p name="labelAsientoFilaSector">Asiento - Fila - Sector</p><div class="row">';
  divContent += '<div class="column seatRawSectorPrice" name="dataSeatRawSector">' + data.seat + ' - ' + data.rowSelector + ' - ' + data.sectorSelector + '</div><div class="column seatRawSectorPrice alignRight" name="price">$' + dataEvent.eventPrice + '.-</div>';
  divContent += '</div></div>';

  //Agrego el nuevo ticket al html
  document.getElementById('ticketPrinter').innerHTML += divContent;
}
