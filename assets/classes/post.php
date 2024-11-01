<?php

$data = dirname( dirname( dirname( dirname( dirname( dirname(  __FILE__ ) ) ) ) ) );

require_once( $data . '/wp-config.php' );
require_once( $data . '/wp-includes/wp-db.php' );

class TERMINFLIX_POST {

  public $post;

  function callback ($action) {

    $this->$action();

  }

  function setConnect() {

    $this->setDisconnect();
    add_user_meta( $this->post["wp"], 'bookingflix', base64_encode(json_encode(array('user' => $this->post["user"], 'email' => $this->post["email"]))), 1 );

  }

  function setDisconnect() {
    delete_user_meta( $this->post["wp"], 'bookingflix' );
  }
}

if($_POST["action"]){
  $p = new TERMINFLIX_POST;
  $p->post = $_POST["data"];
  $p->callback($_POST["action"]);
}

?>
