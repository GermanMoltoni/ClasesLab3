<?php
if($_POST && array_key_exists("datos",$_POST))
{
    $json  = json_decode($_POST['datos']);
    echo "Nombre:".$json->nombre." Apellido:".$json->apellido;
}
?>