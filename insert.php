<?php
require_once 'system/DAL.php';

$user = $_REQUEST['user'];
$data = $_REQUEST['data'];
$qry =  "INSERT INTO chats (username,data) VALUES ('$user','$data')";
$db = new DAL();
$db->insertData($qry);
$rqry =  "SELECT * FROM chats";
echo $db->getData($rqry);

?>