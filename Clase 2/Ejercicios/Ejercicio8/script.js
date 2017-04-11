var cadena = "La ruta nos aporto otro paso natural";
var palindromo='';
var cadena1 = cadena.split(' ').join('').toLowerCase();
for(var i=cadena1.length-1;i>=0;i--)
    palindromo+=cadena1[i];
if(palindromo == cadena1)
    document.write("La Frase: '"+cadena+"' es un palindromo");