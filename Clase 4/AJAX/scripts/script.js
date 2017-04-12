
window.addEventListener('load',inicializarEventos,false);
// Se crea el evento ya que hay que esperar a que se cargue la pagina par aque exista el boton
function inicializarEventos(){
    var button = document.getElementById('submit');
    button.addEventListener('click',load);
}
var req = new XMLHttpRequest();
function load(){
    
    req.open("GET","http://localhost/getPost.php",true);//GET(method),url_de_recurso,true(async)
    /*
        request type:
                0 no se envio
                1 open
                2 llega al servidor
                3 cuando carga la respuesta en el cliente
                4 done, respuesta completa en el cliente -> consultar estado en req.readyState
        La info esta en req.responseText
    */
    req.onreadystatechange = function recibir(){
        var miDivHTML = document.getElementById('miDivHTML');
        if(req.readyState == 4)
            miDivHTML.innerHTML = req.responseText;  
        else
            miDivHTML.innerHTML = "Cargando";
    } //Evento que recibe una funcion que evalua 
    req.send();
}