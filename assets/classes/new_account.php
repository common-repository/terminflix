<?php

class TERMINFLIX_NEW_ACCOUNT{

  public $plugin_dir;
  public $register_scripts;
  public $language;
  public $userdata;

  function get(){

    echo $this->get_html();

  }

  function get_html(){

    $url = 'https://bookingflix.com' . '/sign-in.html';

    $r = '<iframe src="'.$url.'" style="width: 100%; height: 90vh;"></iframe>';

    return $r;

  }
}

?>
