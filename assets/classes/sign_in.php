<?php

class TERMINFLIX_SIGN_IN{

  public $plugin_dir;
  public $register_scripts;
  public $language;

  function get(){

    wp_register_script( 'terminflix_signIn', $this->plugin_dir."assets/js/signin.js", false, 1, false);
    wp_enqueue_script( 'terminflix_signIn' );

    echo $this->get_html();

  }

  function get_html(){

		$r .= '<div style="margin: 10px 20px 0 2px; padding: 10px;">';
    $r .= '<div class="flix-col-md-12">';
    $r .= '<img src="'.$this->plugin_dir.'/assets/banner-772x250.jpg" style="max-width: 100%">';
    $r .= '<h2 class="flix-html-h2">';
    $r .= __('Bookingflix', 'terminflix');
    $r .= ' <--> ';
    $r .= ' '.get_bloginfo("url").' ';
    $r .= '</h2>';
    $r .= '</div>';

    $r .= '<div style="margin-bottom: 15px">';
    $r .= 'Eine Verbindung zwischen Bookingflix und '.get_bloginfo("url").' herzustellen ist ganz einfach.';
    $r .= ' ';
    $r .= 'Dazu bitte kurz mit den Bookingflix-Zugangsdaten anmelden. Anschließend sind die Funktionen von Bookingflix hier verfügbar.';
    $r .= ' ';
    $r .= 'Im Dashboard lassen sich zahlreiche Einstellungen vornehmen und die gewünschten Termin-Kalender können einfach in Wordpress eingebettet werden.';
    $r .= '<br><br>';
    $r .= 'Noch keinen Account? ';
    $r .= '<a href="?page=quickstart_terminflix">'.__('Create first Calendar', 'terminflix').'</a>';
    $r .= '</div>';

    $r .= '<form style="margin-bottom: 10px" id="flixConnect" data-user="'.get_current_user_id().'" action="'.$this->plugin_dir."assets/classes/post.php".'">';
    $r .= '<div style="margin-bottom: 10px">';
    $r .= '<label for="user" style="display: block; margin-bottom: 5px">'.__('Username', 'terminflix').'</label>';
    $r .= '<input name="username" id="user" type="text">';
    $r .= '</div>';
    $r .= '<div style="margin-bottom: 10px">';
    $r .= '<label for="password" style="display: block; margin-bottom: 5px">'.__('Password', 'terminflix').'</label>';
    $r .= '<input name="password" id="password" type="password">';
    $r .= '</div>';
    $r .= '<button type="submit" class="button action">'.__('Sign-In', 'terminflix').'</button>';
    $r .= '</form>';
    $r .= '<div style="margin-bottom: 10px; display: none;" id="flixSuccess">';
    $r .= __('saved', 'terminflix');
    $r .= '</div>';
    $r .= '</div>';

		return $r;
	}


}

?>
