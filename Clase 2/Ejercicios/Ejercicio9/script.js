function calcular()
{
    var num1 = parseFloat(document.getElementById('txt1').value);
    var num2 = parseFloat(document.getElementById('txt2').value);
    var opt;
    var ret;
    if(!isNaN(num1) && !isNaN(num2))
    {
        if(document.getElementById('sum').checked)
            opt = 1;
        else if(document.getElementById('res').checked)
            opt = 2;
        else if(document.getElementById('mul').checked)
            opt = 3;
        else if(document.getElementById('div').checked)
            opt = 4;
        switch(opt)
        {
            case 1:
              ret = num1 + num2;
              break;
            case 2:
                ret = num1 - num2;
                break;
            case 3:
                ret = num1 * num2;
                break;
            case 4:
                ret = num1 / num2;
                break;
        }
        alert("El resultado es: "+ret);
    }
    else
        alert("Ingrese Numeros correctos");
    
}