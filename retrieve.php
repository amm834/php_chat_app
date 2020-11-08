<?php
require_once 'system/DAL.php';
$db = new DAL();
$rqry =  "SELECT * FROM chats";
echo $db->getData($rqry);

?>