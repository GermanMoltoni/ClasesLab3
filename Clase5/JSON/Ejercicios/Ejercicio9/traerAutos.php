<?php
    $archivo = fopen("autos.json","r");
    $arrayObj = array();
    $file='';// Se lee y se envia porque el archivo tiene un array json
    while(!feof($archivo))
       $file.= fgets($archivo);
    fclose($archivo);
    echo $file;
?>