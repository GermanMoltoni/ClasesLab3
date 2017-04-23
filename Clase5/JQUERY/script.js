$(document).ready(
    function(){
        $('#dni').val(12344321);//Establece valor al text dni
        
        $("#btnSend").click(
            function(){
                var nombre = $('#nombre').val();// devuelve el valor del text id
                var apellido = $('#legajo').val();
                alert($('myForm').html());
                $.ajax();
            });


    }   
   
);