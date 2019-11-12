var xhttp = new XMLHttpRequest();

document.getElementById("obtenerInfoBtn").onclick = function(){

  xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        console.log(obj);
        console.log(this.responseText);
        //console.log(obj.data.eventTime);
        document.getElementById("content").innerHTML = obj.data.eventName;
      }
  };

  xhttp.open('GET', 'https://itsvprogramacion.github.io/JavaScriptVilladaEjercicios/AJAX/data.json', true);
  xhttp.send();

};
