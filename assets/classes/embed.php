<?php

class TERMINFLIX_EMBED{

  public $plugin_dir;
  public $register_scripts;
  public $language;
  public $userdata;

  function get(){

    wp_register_script( 'terminflix_embed', $this->plugin_dir."assets/js/embed.js", false, 1, false);
    wp_enqueue_script( 'terminflix_embed' );

    echo $this->get_html();

  }

  function get_html(){

    $r .= '<div class="wrap">';

    $r .= '<h1>'.__("Embed Code", "terminflix").'</h1>';
    $r .= '<div style="margin-bottom: 5px">';
    $r .= 'Die Bookingflix-Terminkalender können einfach in Wordpress eingettet werden. Dazu bitte folgende Shortcodes nutzen.';
    $r .= '</div>';

    $r .= '<a target="_blank" class="button" href="https://wordpress.com/de/support/wordpress-editor/bloecke/shortcode-block/">Anleitung: Wie verwendet man einen Shortcode-Block</a>';
    $r .= '<div id="flixEmbed" style="display:none">'.base64_encode(json_encode(array("user" => $this->userdata["user"], "wp" => get_current_user_id()))).'</div>';
    $r .= '</div>';


    return $r;

  }

  function get_code($atts) {
    $meta = get_user_meta($atts["user"], 'bookingflix', true);

    if($meta){
      $this->userdata = json_decode(base64_decode($meta), true);
    } else {
      return "";
    }

    $code = array(
        "data" => array(
          "load" => array(
            "user" => $this->userdata["user"],
            "ID" => $atts["id"],
            "demo" => false,
            "lang" => $atts["language"]
          )
        ),
        "saveSettings" => 'https://cal.bookingflix.com/vendor/save/' . $atts["language"] . '.js'
      );

      $embedCode = '<script>(function(a,b,c,d,e,f,g){ f=b.createElement(c);g=b.currentScript;f.async=1;f.src=d; g.parentNode.replaceChild(f,g,b);f.onload=function(){new get_cal(4).build(f,e);};})(window,document,"script","https://cal.bookingflix.com/vendor/embed.js", "' . base64_encode(json_encode($code)) . '");</script>';

    return $embedCode;
  }
}

?>
