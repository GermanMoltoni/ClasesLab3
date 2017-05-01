<?php
    
    $arrayObj = array();
    //Leo el archivo linea a linea, convierto la linea a un objeto y lo envio como un array json
    /*$archivo = fopen("auto.json","r");
    while(!feof($archivo))
    {
        array_push($arrayObj,json_decode(fgets($archivo)));
    }
    fclose($archivo);
    echo json_encode($arrayObj[0]);*/
    $file='';
    foreach(file("auto.json") as $objJson)
        $file.=$objJson;
    echo $file;
?>