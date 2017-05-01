<?php
    if(array_key_exists('opt',$_POST) && $_POST['opt'] == 'traerRemerasFiltradas')
    {$arrayObj = array();
    $file='';
    foreach(file("remeras.json") as $objJson)
        $file.=$objJson;
    echo $file;}
?>