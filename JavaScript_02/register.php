<?php
$jsonArr = file_get_contents('php://input');

//$jsonArr = $_REQUEST['jsonData'];

var_dump(json_decode($jsonArr));
?>
