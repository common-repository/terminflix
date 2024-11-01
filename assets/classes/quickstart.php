<?php

class TERMINFLIX_QUICKSTART{

  public $plugin_dir;
  public $register_scripts;
  public $language;

  function get(){


    echo $this->get_html();

  }

  function get_html(){


    $url = 'https://web.bookingflix.com/quickstart/';

    $r = '<iframe src="'.$url.'" style="width: 100%; height: 90vh;"></iframe>';

    return $r;
	}


}

?>
