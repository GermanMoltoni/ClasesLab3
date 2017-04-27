$(document).ready(function(){
    $("#btnAlta").click(altaForm);
    $("#btnGrilla").click(mostrarGrilla);
    
});

function btnSend(){
        if($("#btnSend").val() != 'add')
            modificar();
        else
            alta();
    };
/**
 * Envia los datos del formulario al servidor y redirige al index.
 */
var alta = function alta(){
    $.ajax({
            url:'./php/administracion.php',
            type:'POST',
            cache: false,
            contentType: false,
            processData: false,
            'data':form()
        }).done(function(data){
            //window.location="./index.html";
            alert(data);
        }).fail().always();
}

/**
 * Envia el formulario modificado al servidor, luego muestra la grilla
 */
function modificar(){
    $.ajax({
            url:'./php/administracion.php',
            type:'POST',
            cache: false,
            contentType: false,
            processData: false,
            data:{form:form(),id:$("#btnAdd").val()}
        }).done(function(data){
            mostrarGrilla();
        }).fail().always();  
}










/**
 * Redibe un id a dar de baja y lo envia al servidor, luego muestra la grilla
 *  
 */
function baja(id){
    $.ajax({
            'url':'./php/administracion.php',
            'type':'POST',
             data:"baja="+JSON.stringify({'id':id})
        }).done(function(){
            mostrarGrilla();
        }
        ).fail().always();
}

/* 
*Agrega un formulario de alta a la pagina
*/
var altaForm = function(){
    $.ajax({
            'url':'./php/form.php',
            'type':'POST'
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always();
    }



/**
 * 
 * Recibe un obj js y lo muestra en un formulario.
 */
function mostrarForm(obj)
{
    $.ajax({
            'url':'./php/form.php',
            'type':'POST'
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always(function(){
            cargarForm(obj);
        });
}

/**
 * Mustra la grilla pedida al servidor
 */
var mostrarGrilla = function (){
   $.ajax({
            'url':'./php/mostrar.php',
            'type':'POST'
        }).done(function(data){
            $("#miDiv").html(data);
        }
        ).fail().always();
}






/**
 * 
 * @param {*Pre carga los datos del objeto  en el formulario} obj 
 */
function cargarForm(obj){
            $("#nombre").val(obj.nombre);
            $("#dni").val(obj.dni);
            $("#sueldo").val(obj.sueldo);
            $("#apellido").val(obj.apellido);
            $("#legajo").val(obj.legajo);
}
/**
 * Obtiene los datos del formulario y devuelve un obj formdata
 */
function form(){
    var formData = new FormData();
    formData.append('nombre',$("#nombre").val());
    formData.append('apellido',$("#apellido").val());
    formData.append('legajo',$("#legajo").val());
    formData.append('dni',$("#dni").val());
    formData.append('sueldo',$("#sueldo").val());
    formData.append('img',document.getElementById('file').files[0]);
    return formData;
}