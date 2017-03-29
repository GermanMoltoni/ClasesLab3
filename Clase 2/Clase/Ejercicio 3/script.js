/*
    "elemento".onblur (manejador de EVENTO) cuando pierde foco se produce el EVENTO
    "elemento".onchange (manejador de EVENTO) pierde foco y se ejecuta cuando cambia el value


    EVENTOS PARA TECLAS
    onkeydown
    onkeyup
    onkeypress
 */
window.onload =  function()
{
    var txt = document.getElementById("texto");
    var txt1 = document.getElementById("texto1");

    txt.onblur =  function()
    {
        txt1.value = txt.value;
    }
}