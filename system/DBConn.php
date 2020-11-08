<?php

class DB{
  private  const DBHOST = "localhost";
  private const DBUSER = "root";
  private const DBPASS = "";
  private const DBNAME = "chat_app";
  private static $instance;
  private $conn;
  private function __construct(){
    try{
      $this->conn = new PDO("mysql:host=".self::DBHOST.";dbname=".self::DBNAME,self::DBUSER,self::DBPASS);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(PDO $e){
      echo $e;
    }
  }
  public static function getInstance(){
    if(!self::$instance){
      self::$instance = new DB();
    }
    return self::$instance;
  }
  public function getConn(){
    return $this->conn;
  }
}
?>