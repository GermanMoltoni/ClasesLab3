<?php
 $jsonDecode = json_decode($_POST['datos']);
 var_dump($jsonDecode);
 echo "CodBarra:$jsonDecode->codBarra Producuto: $jsonDecode->nombre Precio: $jsonDecode->precio \n";

?>