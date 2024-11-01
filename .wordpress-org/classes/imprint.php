<?php

class TERMINFLIX_IMPRINT{

  public $plugin_dir;
  public $register_scripts;
  public $language;

  function get(){

    echo $this->get_html();

  }

  function get_html(){

    $r = '<h1>'.__("Imprint", "terminflix").' & '.__("Privacy", "terminflix").'</h1>';
    $r .= '<div style="margin: 10px 20px 0 2px;"><a href="https://web.bookingflix.com/imprint/" target="_blank">'.__("Imprint", "terminflix").' ('.__("Open new Browser-Tab", "terminflix").')</a></div>';
    $r .= '<div style="margin: 10px 20px 0 2px;"><a href="https://web.bookingflix.com/privacy/" target="_blank">'.__("Privacy", "terminflix").' ('.__("Open new Browser-Tab", "terminflix").')</a></div>';

    return $r;

  }
}

?>
