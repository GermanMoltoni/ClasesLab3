var req = new XMLHttpRequest();
function Ajax(url,method,func,dates)
{
    req.open(method,url,true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST
    req.onreadystatechange = func;
    req.send(dates);
}

window.addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
    var btnAlta = document.getElementById('btnAdd');
    btnAlta.addEventListener('click',alta);
}

function alta(){
    
    var txtNombre = document.getElementById('nombre').value;
    var txtApellido = document.getElementById('apellido').value;
    var txtDni = document.getElementById('dni').value;
    var txtLegajo = document.getElementById('legajo').value;
    var txtSueldo = document.getElementById('sueldo').value;
    var fileImage = document.getElementById('foto').value;
    var obj = {'nombre':'txtNombre','apellido':'txtApellido','dni':txtDni,'sexo':'asd','legajo':txtLegajo,'foto':fileImage};
    Alta(obj);
}





function Alta(obj)
{
    
    Ajax("http://localhost/clasesProg3/Tp/php/administracion.php","POST",testState,"datos="+JSON.stringify(obj));
    function testState(){
        if(req.readyState == 4 && req.status == 200)
            alert(req.responseText);//document.getElementById('miDiv').innerHTML = req.responseText;
        else
             document.getElementById('miDiv').innerHTML = "Cargando";
    }
}