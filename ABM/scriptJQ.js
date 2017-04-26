$(document).ready(function(){
    $("#btnAlta").click(altaForm);
    $("#btnGrilla").click(mostrarGrilla);
    $("#btnAdd").click(alta);
});

var altaForm = function(){
    $.ajax({
            'url':'http://localhost/clasesLab3/ABM/php/form.php',
            'type':'POST'
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always();
}

var alta = function alta(){

    $.ajax({
            'url':'http://localhost/clasesLab3/ABM/php/administracion.php',
            'type':'POST',
            'cache': false,
            'contentType': false,
            'processData': false,
             enctype: 'multipart/form-data',
            'data':form()
        }).done(function(data){
            window.location="./index.html";
            alert("Empleado cargado");
        }
            
        ).fail().always();
}

function baja(id){
    $.ajax({
            'url':'http://localhost/clasesLab3/ABM/a.php',
            'type':'POST',
             data:id
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always();
}


var mostrarGrilla = function (){
   $.ajax({
            'url':'http://localhost/clasesLab3/ABM/php/mostrar.php',
            'type':'POST'
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always();
}

function modificar(){
$("#btnMod").click(function(){
    $.ajax({
            'url':'http://localhost/clasesLab3/ABM/php/administracion.php',
            'type':'POST',
            'cache': false,
            'contentType': false,
            'processData': false,
             enctype: 'multipart/form-data',
            'data':{form:form(),id:$("#btnModif").val()}
        }).done(function(data){
            mostrarGrilla();
        }
            
        ).fail().always();
    });  
}

function mostrarForm(obj)
{
    $.ajax({
            'url':'http://localhost/clasesLab3/ABM/php/form.php',
            'type':'POST'
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always(function(){
            cargarForm(obj);
        });
    
    //$("#sexo").val(obj.sexo);
    //$("#btnAdd").attr();

}









function cargarForm(obj){
            $("#nombre").val(obj.nombre);
            $("#dni").val(obj.dni);
            $("#sueldo").val(obj.sueldo);
            $("#apellido").val(obj.apellido);
            $("#legajo").val(obj.legajo);
}
function form(){
    var formData = new FormData();
    formData.append('nombre',$("#nombre").val());
    formData.append('apellido',$("#apellido").val());
    formData.append('legajo',$("#legajo").val());
    formData.append('dni',$("#dni").val());
    formData.append('sueldo',$("#sueldo").val());
    formData.append('img',$("#file").val());
    return formData;
}