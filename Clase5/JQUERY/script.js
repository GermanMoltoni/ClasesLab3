$(document).ready(function(){
        $("#btnSend").click(function enviar(){
        //$('#dni').val(12344321);//Establece valor al text dni
        //var nombre = $('#nombre').val(); devuelve valor del input por id
        var formData = new FormData();
        formData.append("nombre", $('#nombre').val());
        formData.append("apellido", $('#legajo').val());
        $.ajax({
            url:'index.php',
            type:'POST',
            //dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            data:formData
            //data:"datos="+JSON.stringify({'nombre':$('#nombre').val(),'apellido':$('#legajo').val()}),
            /* success: function(){}// se ejecuta cuando completa correctamente la peticion,
            error: function(){}// se ejecuta cuando devuelve un error la peticion,
            complete: function(){}// se ejecuta cuando completa  la peticion*/ 
            }).done(function(data){
               $('#myDiv').html(data);
            }).fail(function(){

            }).always(function(){

            });
    });
    });




