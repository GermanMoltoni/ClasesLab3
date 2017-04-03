function Primos()
{
    var numero = 1;
    var contadorPrimos = 0;
    while(contadorPrimos != 20)
    {
        var contador = 0;
        for(var i=1; i<=numero ; i++)
        {
            if(numero%i == 0)
                contador+=1;
            if(contador > 2)
                break;
        }
        if(contador == 2)
        {
            document.write(numero+"<BR>");
            contadorPrimos+=1;
        }    
        numero+=1;
    }   

}

Primos();