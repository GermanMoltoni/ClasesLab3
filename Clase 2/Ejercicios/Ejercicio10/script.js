function mostrarMes()
{
    var arrayMes= new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiempre","Octubre","Noviembre","Diciembre");
    var tabla="<table border=1>";
    for(var i=0;i<arrayMes.length;i++)
    {
        if(document.getElementById('mes').checked && document.getElementById('nroMes').checked)
            tabla+="<tr><td>"+arrayMes[i]+"</td><td>"+(i+1)+"</td></tr>";
        else if(document.getElementById('mes').checked)
            tabla+="<tr><td>"+arrayMes[i]+"</td></tr>";
        else if(document.getElementById('nroMes').checked)
            tabla+="<tr><td>"+(i+1)+"</td></tr>";
    }
    tabla+="</table>";
    document.write(tabla);
}
 