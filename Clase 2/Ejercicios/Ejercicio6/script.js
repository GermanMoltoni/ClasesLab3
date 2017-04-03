var string = prompt("Ingresar Texto: ").split(" ");
var mayus = 0;
var min = 0;
for(var i=0;i<=string.length;i++)
{
    if(string[i] != undefined)
    {
        for(var j=0;j<string[i].length;j++)
        {
            if(string[i][j] == string[i][j].toUpperCase())
                mayus=+1;
            if(string[i][j] == string[i][j].toLowerCase())
                min+=1;
        }
    }
        
}
if(mayus != 0 && min != 0)
    alert("Hay mayusculas y minusculas");
else if(mayus != 0 && min ==0)
    alert("Hay Solo Mayusculas");
else
    alert("Hay solo minusculas");