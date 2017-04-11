

var txtColor = document.getElementById('txtColor');
var color = txtColor.value;
cambiarColor(txtColor,color);

function cambiarColor(id,color)
{
    id.onblur = function()
    {
        document.write("sadsad");
    }
}