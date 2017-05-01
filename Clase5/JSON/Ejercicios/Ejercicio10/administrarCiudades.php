<?php
//Se lee cada linea, decodificando el json porque estan individuales. Se vuelve a codificar en json un array de objetos php
if($_POST['opt'] == 'traerCiudades')
{
    $arrayJson = array();
    foreach(file("city.list.min.json") as $json)
        array_push($arrayJson,json_decode($json));
    echo json_encode($arrayJson);
}

?>