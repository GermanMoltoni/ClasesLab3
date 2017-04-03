function MostrarNombreApellido(nombre,apellido)
{
    alert(apellido.toUpperCase()+","+nombre[0].toUpperCase()+nombre.substring(1,nombre.length).toLowerCase())
}

var string = prompt("Ingrese Nombre y Apellido");
string = string.split(" ");
MostrarNombreApellido(string[0],string[1]);