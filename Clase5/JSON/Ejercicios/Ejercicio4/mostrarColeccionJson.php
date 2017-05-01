<?php
 $jsonDecode = json_decode($_POST['datos']);
 var_dump($jsonDecode);
 $string = '';
 foreach($jsonDecode as $json)
 {
     $string.="CodBarra:$json->codBarra Producuto: $json->nombre Precio: $json->precio \n";
 }
 echo $string;
?>