
/*window.addEventListener('load',inicializarEventos,false);
// Se crea el evento ya que hay que esperar a que se cargue la pagina para que exista el boton
function inicializarEventos(){
    var button = document.getElementById('submit');
    button.addEventListener('click',load);
}*/

function load()
{
    var req = new XMLHttpRequest();
    req.open("GET","http://germanmoltoni.esy.es/php/mostrar.php",true);//GET(method),url_de_recurso,true(async)
    //req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST
    /*
        request type:
                0 no se envio
                1 open
                2 llega al servidor
                3 cuando carga la respuesta en el cliente
                4 done, respuesta completa en el cliente -> consultar estado en req.readyState
        La info esta en req.responseText
    */
    req.onreadystatechange = function testState(){
        if(req.readyState == 4 && req.status == 200)
            document.getElementById('miDiv').innerHTML = req.responseText;
        else
             document.getElementById('miDiv').innerHTML = "Cargando";
    }//Evento que recibe una funcion que evalua 
    req.send(null);
}