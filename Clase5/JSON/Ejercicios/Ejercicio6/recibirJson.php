<?php
$arrayPersona = array();
$obj = new stdClass();
$obj->nombre="Juan";
$obj->dni=12322321;
$obj->domicilio="Av. Belgrano 1233";
array_push($arrayPersona,$obj);
$obj1 = new stdClass();
$obj1->nombre="Pedro";
$obj1->dni=12321121;
$obj1->domicilio="Av. Alsina 123";
array_push($arrayPersona,$obj1);
echo json_encode($arrayPersona);
?>