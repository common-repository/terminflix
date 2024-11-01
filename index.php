<?php

/**
 * @package Bookingflix
 */
/*
Plugin Name: Bookingflix
Description: Bookingflix - das Online-Termin-Tool macht Terminvereinbarungen fix! Erstellen Sie ein Online-Terminformular und binden Sie es anschießend auf Ihrer Wordpress-Website ein. Und schon können Ihre Kunden einen Termin bei Ihnen buchen - online und ganz einfach. Jetzt neu: Inklusive Ressourcen-Management (für z. B. Mitarbeiter und Räume) -- Richten Sie mehrere Kalender ein und vergeben Sie Zugriffs-Rechte an Ihre Mitarbeiter. Ihre Kunden können dann zum Beispiel Ihren Lieblings-Friseur bzw. Mitarbeiter bei der Termin-Buchung auswählen.
Version: 1.3.9
Author: bookingflix.com
Author URI: https://web.bookingflix.com/
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: Bookingflix
Domain Path: /languages

Bookingflix is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Bookingflix is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Bookingflix.
*/

class TERMINFLIX{


	function __construct(){

			// define nessessary scripts //
			$this->get_nessessary_scripts();

			// Admin Menu Section for Terminflix //
			$this->get_admin_menu();

			// Script to header -- Define different required javascript variables //
			$this->get_header_script();

			// Init Script for translation //
			$this->get_init_script();

			$this->get_script_in_front_footer();
	}

	function get_script_in_front_footer(){


	}

	function shortcode( $atts ) {

		require_once( dirname( __FILE__ ) . "/assets/classes/embed.php" );

		$embed = new TERMINFLIX_EMBED();
		$embed->plugin_dir = plugin_dir_url( __FILE__ );
		$embed->register_scripts = false;

		return $embed->get_code($atts);
	}

	function get_init_script(){

		add_action('init', array($this, 'get_translation') );
		add_shortcode( 'bookingflix', array($this, "shortcode") );
	}

	function get_translation() {

  	load_plugin_textdomain( 'terminflix', false, 'terminflix/languages' );

	}


	function get_nessessary_scripts(){

		// require_once( dirname( __FILE__ ) . "/assets/classes/register_scripts.php" );

		// $this->terminflix_register_scripts = new TERMINFLIX_REGISTER_SCRIPTS();
		// $this->terminflix_register_scripts->version = 6;
		// $this->terminflix_register_scripts->plugin_dir = plugin_dir_url( __FILE__ );

	}

	function get_admin_menu(){



		require_once( dirname( __FILE__ ) . "/assets/classes/admin_menu.php" );

		$menu = new TERMINFLIX_ADMIN_MENU();
		$menu->plugin_dir = plugin_dir_url( __FILE__ );
		$menu->register_scripts = false;
		$menu->menu_name = "terminflix";
		$menu->language = $this->get_language_short_version();

		add_action( 'admin_menu', array($menu, "get") );


	}

	function get_header_script(){


	}

	function get_language_short_version(){

		$lang = get_locale();

		$lang = explode("_", $lang);

		return $lang[0];

	}

}


new TERMINFLIX;


?>
