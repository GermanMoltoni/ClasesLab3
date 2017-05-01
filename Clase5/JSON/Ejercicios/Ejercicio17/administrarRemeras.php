<?php
    if(array_key_exists('opt',$_POST) && $_POST['opt'] == 'AgregarRemera')
    {
        $file='';
        foreach(file("remeras.json") as $objJson)
            $file.=$objJson;
        $arrayObj = json_decode($file);
        array_push($arrayObj,json_decode($_POST['dato']));
        echo json_encode($arrayObj);
        $archivo = fopen("remeras.json","w");
        fwrite($archivo,json_encode($arrayObj));
        fclose($archivo);
    }
?>