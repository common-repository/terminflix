<?php

class TERMINFLIX_SIGNOUT{

  public $plugin_dir;
  public $register_scripts;
  public $language;
  public $userdata;

  function get(){

    wp_register_script( 'terminflix_signout', $this->plugin_dir."assets/js/signout.js", false, 1, false);
    wp_enqueue_script( 'terminflix_signout' );

    echo $this->get_html();

  }

  function get_html(){

    $r .= '<div style="margin: 10px 20px 0 2px; background-color: white; padding: 10px;">';
    $r .= '<div class="flix-col-md-12">';
    $r .= '<img src="'.$this->plugin_dir.'/assets/banner-772x250.jpg" style="max-width: 100%">';
    $r .= '<h2 class="flix-html-h2">';
    $r .= __('Bookingflix', 'terminflix');
    $r .= '</h2>';
    $r .= '</div>';

    $r .= '<form style="margin-bottom: 10px" id="flixDisconnect" data-user="'.get_current_user_id().'" action="'.$this->plugin_dir."assets/classes/post.php".'">';

    $r .= '<button type="submit" class="button action">'.__('Sign-Out', 'terminflix').'</button>';
    $r .= '</form>';
    $r .= '</div>';

    return $r;

  }
}

?>
