function parImpar(nro)
{
  return ! nro%2;

}
var numero = parseInt(prompt("Ingrese un Numero: "));
if(!isNaN(numero))
{
  if(parImpar(numero))
    alert("El numero "+numero+" Es Par, siendo "+numero+" el numero ingresado");
  else
    alert("El numero "+numero+" Es Impar, siendo "+numero+" el numero ingresado");
}
