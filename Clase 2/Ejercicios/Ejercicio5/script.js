function Factorial(num)
{
    if(num<=1)
        return 1;
    return num* Factorial(num-1);
}
var  numero;
do
{
numero = parseInt(prompt("Ingrese un numero: "));
}
while(isNaN(numero) || numero < 0);
document.write(Factorial(numero));