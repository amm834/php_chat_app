<?php
class DAL {
  private $conn;
  function __construct() {
    require_once 'DBConn.php';
    $db = DB::getInstance();
    $this->conn = $db->getConn();
  }
  public function insertData($qry) {
    $stmt = $this->conn->prepare($qry);
    $result = $stmt->execute();
  }

  public function getData($qry) {
    $rows = $this->conn->query($qry);
    $minAry = [];
    $maxAry = [];
    foreach($rows as $row) {
      $minAry['username'] = $row['username'];
      $minAry['data'] = $row['data'];
      array_push($maxAry, $minAry);
    }
    return json_encode($maxAry);
  }
}
?>