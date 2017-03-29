/*
    document.getElementsByTagName('tag') devuelve un array del tag que se pasa.
    document.getElementsByTagName('tag').innerHTML= "texto" Podemos insertar algo en html, permite ingresar contenido en tiempo de ejecucion
    window.onload (EVENTO) Se lanza cuando la pagina se termino de cargar
    document.getElementsByClassName() Etiquetas de distinto tipo con mismo nombre de clase.
    
*/
window.onload = function () //funcion anonima
{
    var parrafos = document.getElementsByTagName('p')
    for(var i=0;i<parrafos.length;i++)
    {
        parrafos[i].innerHTML="Parrafo "+i
    }
    //var clases = document.getElementsByClassName('')
}
