<?php

class TERMINFLIX_SUPPORT{

  public $plugin_dir;
  public $register_scripts;
  public $language;

  function get(){

    $this->register_scripts->get();

    echo $this->get_html();

  }

  function get_html(){

    $r = '<div style="margin: 10px 20px 0 2px;"><div class="flix-html-html" data-flix-support-center data-flix-language="'.$this->language.'" data-language="'.$this->language.'"></div></div>';

    return $r;

  }
}

?>
