/*
    var nombreVariable Declaro variable
    console.log() muestra mensaje en consola
    alert() muestra un alerta en una ventana.Utilizo secuencias de escape para saltos de linea
    document.write() Escribe sobre pagina. Puedo incluir tags html
    nombreVariable = prompt("Texto") Pide al usuario por ventana 
    + utilizo para concatenar texto 
    parseint(string) Convierte un numero ingresado como string al tipo entero
    parseFloat
    isNaN(parseInt(string)) Cuando el parseo se realizo, isNaN es falso
    confirm("mensaje") Devuelve true o false 
    document.getElementById('id del tag html').value Obtengo el dato del id de la pagina html

*/
function SaludarScript()
{ 
    console.log("sdasdasd")
    //alert("Hola Script\n segunda linea")
    var ingreso = prompt("Su nombre es")
    var numero = parseInt(prompt("Ingrese Numero"))
    var texto = document.getElementById('nombre').value
    if (!isNaN(numero)) 
    {
        //document.write("Nombre:"+ingreso+"<BR> Numero:"+numero+ "Texto del input: "+texto)
        document.getElementById('idSaludo').value="HOLA"+document.getElementById('nombre').value
    }
    else
    {
        alert("No se ingreso un numero")
        if(confirm("Desea ingresar un numero correcto?"))
            numero = parseInt(prompt("Ingrese Numero"))

    }
}