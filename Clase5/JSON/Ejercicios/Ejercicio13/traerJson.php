<?php
    
    $arrayObj = array();
    $file='';
    foreach(file("paises.json") as $objJson)
        $file.=$objJson;
    echo $file;
?>