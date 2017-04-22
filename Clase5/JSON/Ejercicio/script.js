/*
    json -> [
                {'var1':1,'var2':2,'var3':"var"},
                {'var1':42,'var2':34,'var3':"var2"}
            ]
    Envio de datos de cliente a servidor:
            var obj = {'nombre':"carlos",'apellido':"Gomez",'legajo':34233};
            var myJSON = json.stringify(obj);// transforma un obj de js a texto y se manda con request
    Recibir de datos de servidor a cliente:
            var myJson = {'nombre':"carlos",'apellido':"Gomez",'legajo':34233};
            var myObj = json.parse(myJson);
 */
var req = new XMLHttpRequest();
window.addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
        var button = document.getElementById('btnSend');
        button.addEventListener('click',load);
}

function Ajax(url,method,func,dates)
{
    req.open(method,url,true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST
    req.onreadystatechange = func;
    req.send(dates);
}

function load()
{
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var json = JSON.stringify({'nombre':nombre,'apellido':apellido});
    Ajax("http://localhost/clasesLab3/Clase5/JSON/Ejercicio/php/index.php","POST",testState,"datos="+json);
    
}


function testState(){
        if(req.readyState == 4 && req.status == 200)
            document.getElementById('dates').innerHTML = req.responseText;
        else
             document.getElementById('dates').innerHTML = "Cargando";
    }