<?php
    $archivo = fopen("auto.json","r");
    $arrayObj = array();
    /*while(!feof($archivo))
    {
        array_push($arrayObj,json_decode(fgets($archivo)));
    }
    fclose($archivo);*/
    foreach(file("auto.json") as $objJson)
        array_push($arrayObj,json_decode($objJson));
    var_dump($arrayObj);
?>