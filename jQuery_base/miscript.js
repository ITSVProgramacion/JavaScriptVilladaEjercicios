$(function(){
    $("p").click(function(){
        $(this).hide();
    });

    $("#p2").mouseover(function(){
      $(this).hide();
    });

    $("#p3").hover(function() {
      alert("Ha pasado por encima de P3");
    });

    //Setea el foco a los elementos input.
    $("input").focus(function() {
      $(this).css("background-color","#ccc");
      if($(this).val() == "ingrese") {
        $(this).val("");
      }
    });

    //Cambia el css de los input cuando deja de tener foco.
    $("input").blur(function() {
      $(this).css("background-color", "#fff");
    });

    //Listener para el formulario.
    $("#obtenerInfoBtn").click(function() {

      //Obtener Valores
      var nombre = $("#input1").val();
      var apellido = $("#input2").val();

      //imprimir Resultado dos formas: con text y html.
      
      //$("#imprimirResultado").text(" Nombre: "+nombre+" - Apellido: " + apellido);
      $("#imprimirResultado").html("<br> Nombre: "+nombre+"<br> Apellido: " + apellido);

      $("#input1").val("ingrese");
      $("#input2").val("ingrese");
    });

});
