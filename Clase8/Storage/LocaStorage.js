//Vive por mucho tiempo hasta indicarlo.
//Tengo que agregar boton de logout para borrar de storage los datos.

if(typeof(Storage) != "undefined")
{
    localStorage.setItem("autor","Mariano");// localStorage.actor="mariano";
    var autor = localStorage.getItem("autor"); //autor = localStorage.actor;
    localStorage.removeItem("autor");
}
else
    alert("No esta instalado");