/*
    "elemento".onblur (manejador de EVENTO) cuando pierde foco se produce el EVENTO
    "elemento".onchange (manejador de EVENTO) pierde foco y se ejecuta cuando cambia el value


    EVENTOS PARA TECLAS
    onkeydown cuando se presiona la tecla se produce el evento
    onkeyup Cuando suelto la tecla se produce el cambio
    onkeypress Cuando mantengo presionada se produce  el evento
 */
window.onload =  function()
{
    var txtUno = document.getElementById("txtuno");
    var txtDos = document.getElementById("txtdos");

    // txtUno.onblur =  function() // txtUno.onchange =  function()
    // {
    //     txtDos.value = txtUno.value;
    // }
     txtUno.onchange =  function()//txtUno.onkeyup =  function()//txtUno.onkeydown =  function()
     {
         txtDos.value = txtUno.value;
     }
}
