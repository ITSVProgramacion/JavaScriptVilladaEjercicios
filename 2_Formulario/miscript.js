//Agrego los listeners a los botones.
document.getElementById("sender").onclick = function(){
  procesarFormulario();
};

document.getElementById("clean").onclick = function(){
  limpiar();
};

/**
* Función que se ejecuta cuando se procesa el formulario.
**/
function procesarFormulario() {

  //Toma los elementos del html.
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var birthDate = document.getElementById("birthDate").value;
  var dataRow = [firstName, lastName, phone, email, birthDate];

  //Busca la tabla donde debe insertar la nueva fila.
  var table = document.getElementById("table");

  //Crea una nueva fila y setea por parametro el lugar donde debe dejarlo.
  var row = table.insertRow(table.rows.length);

  //El for "popula" ó completa cada una de las celdas de la fila con la data del array.
  for (var i = 0; i <= dataRow.length; i++) {
    row.insertCell(i).textContent = dataRow[i];
  }

}

/**
* Función que se ejecuta para limpiar el formulario.
**/
function limpiar() {
  document.getElementById("firstName").value = "Mickey";
  document.getElementById("lastName").value = "Mouse";
  document.getElementById("phone").value = "987654321";
  document.getElementById("email").value = "a@b.com";
  document.getElementById("birthDate").value = "";

  //Borra todas las filas del array menos, la fila 0 que corresponde a la cabecera de la tabla.
  for (var i = document.getElementById("table").rows.length - 1; i > 0; i--) {
      var table = document.getElementById("table").deleteRow(i);
  }
}
