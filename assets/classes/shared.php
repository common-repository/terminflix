<?php

class TERMINFLIX_SHARED{

  public $plugin_dir;
  public $register_scripts;
  public $language;
  public $userdata;

  function get(){

    echo $this->get_html();

  }

  function get_html(){

    $data = array(
      'redirect' => 'https://bookingflix.com/dashboard.html',
      'user' => $this->userdata['user'],
      'date' => time() * 1000
    );

    $url = 'https://bookingflix.com' . '/shares/s/' . base64_encode( base64_encode( base64_encode( $this->userdata["email"] ) ) );

    $r = '<iframe src="'.$url.'" style="width: 100%; height: 90vh;"></iframe>';

    return $r;

  }
}

?>
