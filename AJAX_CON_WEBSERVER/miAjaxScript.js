var invocation = new XMLHttpRequest();
var url = 'http://fdemaussion.pythonanywhere.com/users/';

function llamarAlServidorYProcesar(){
  if(invocation)
    {
      invocation.open('GET', url, true);
      invocation.onreadystatechange =  function() {
          if(this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(this.state);
            console.log(obj);
            console.log(this.responseText);
            for (var i = 0; i < obj.results.length; i++) {
              document.getElementById("content").innerHTML += "Username: " + obj.results[i].username + " ,</br> ";
              document.getElementById("content").innerHTML += "E-mails: " + obj.results[i].email + " ,</br></br> ";
            }
          }
      };
      invocation.send();
    }
}

document.getElementById("obtenerInfoBtn").onclick = function(){
  llamarAlServidorYProcesar();
};
