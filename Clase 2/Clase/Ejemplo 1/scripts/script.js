function sumar()
{
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    if(!isNaN(numero1) && !isNaN(numero2))
        document.getElementById('resultado').value = numero1 + numero2
    else
        alert("Error en el ingreso")
}