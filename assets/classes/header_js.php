<?php

class TERMINFLIX_HEADER_JS{

  public $plugin_dir;

  function get(){

    echo $this->script();

  }

  function script(){

    $r = '<script type="text/javascript">';
    $r .= $this->get_define_nessesary_script_vars();
		$r .= $this->get_flix_logo();
		$r .= $this->get_define_bootstrap_var();
		$r .= $this->get_define_jquery();
    $r .= '</script>';

		return $r;

	}

  function get_define_jquery(){

    return 'if(typeof jQuery != "undefined") { $ = jQuery; }';

  }

  function get_define_bootstrap_var(){

    return 'var BOOTSTRAP_NAMESPACE = "flix";';

  }

  function get_flix_logo(){

    $r = 'var FLIX_LOGO = \'';
		$r .= '<span class="flix-Logo-Terminflix"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span><span class="path62"></span><span class="path63"></span><span class="path64"></span><span class="path65"></span></span>';
		$r .= '\';';

    return $r;
  }

  function get_define_nessesary_script_vars(){

    return 'var FLIX_URLS = {
      "embed": "'.$this->plugin_dir.'assets/js/",
      "flix": "https://terminflix.de/",
      "cdn": "'.$this->plugin_dir.'/assets/",
      "api": "https://api.terminflix.de/",
      "hit_url": "https://hitklick.com/",
      "hit_api": "https://api.hitklick.com/",
      "tinymce": "https://terminflix.de/assets/js/tinymce/tinymce.min.js",
      "tinymce_jquery": "https://terminflix.de/assets/js/tinymce.main.jquery.js",
      "swal": "'.$this->plugin_dir.'assets/js/swal.min.js"
    };';

  }

}

?>
