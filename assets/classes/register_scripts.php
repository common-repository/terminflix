<?php

class TERMINFLIX_REGISTER_SCRIPTS{

  public $plugin_dir;
  public $version;


  function get(){


		wp_register_script( "swal", $this->plugin_dir."assets/js/swal.min.js", false, $this->version, true );
		wp_enqueue_script( "swal" );

		wp_register_script( "terminflix", $this->plugin_dir."assets/js/script.js", false, $this->version, true );
		wp_enqueue_script( "terminflix" );

		wp_register_script( "terminflix_start", $this->plugin_dir."assets/js/start.js", false, $this->version, true );
		wp_enqueue_script( "terminflix_start" );

	}

}

?>
