<?php
$obj = new stdClass();
$obj->nombre="Juan";
$obj->dni=12322321;
$obj->domicilio="Av. Belgrano 1233";

echo json_encode($obj);
?>