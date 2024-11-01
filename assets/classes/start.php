<?php

class TERMINFLIX_START{

  public $plugin_dir;
  public $register_scripts;
  public $language;
  public $userdata;

  function get(){

    echo $this->get_html();

  }

  function get_html(){

    $r .= '<div style="margin: 10px 20px 0 2px; background-color: white; padding: 10px;">';
    $r .= '<div class="flix-col-md-12">';
    $r .= '<img src="'.$this->plugin_dir.'/assets/banner-772x250.jpg" style="max-width: 100%">';
    $r .= '<h2 class="flix-html-h2">';
    $r .= __('Bookingflix', 'terminflix');
    $r .= ' - ';
    $r .= __('Das Termin-Buchungs-Tool für Ihre Website', 'terminflix');
    $r .= '</h2>';
    $r .= '</div>';



    if($this->userdata && $this->userdata["user"]){
      $r .= $this->is_sign_in();
    } else {
      $r .= $this->not_sign_in();
    }

    $r .= '</div>';

    return $r;

  }

  function not_sign_in () {

    $r .= '<h4 class="flix-html-h4">';
    $r .= '1. ';
    $r .= __('Kalender erstellen und Account anlegen', 'terminflix');
    $r .= '</h4>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= 'Bookingflix beginnt mit dem Erstellen eines ersten Termin-Kalenders. Das geht ganz einfach über den nachfolgenden Link.';
    $r .= ' ';
    $r .= 'Um alle Services wie Einbettungscodes, Terminverwaltung, Terminerinnerungen etc. nutzen zu können ist ein Account auf Bookingflix notwendig.';
    $r .= ' ';
    $r .= 'Das Anlegen eines Accounts erfolgt automatisch im Anschluss an die Kalender-Erstellung.';
    $r .= '</div>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= '<a href="?page=quickstart_terminflix" class="button action">'.__('Einen ersten Kalender erstellen', 'terminflix').'</a>';
    $r .= '</div>';

    $r .= '<div style="margin-bottom: 5px">';
    $r .= 'Nach der Registrierung wird automatisch eine Bestätigungsmail versendet, mit der sich der Account verifizieren lässt. ';
    $r .= ' ';
    $r .= 'Mit Klick auf den Verifizierungs-Link ist der Account freigeschaltet.';
    $r .= '</div>';


    $r .= '<h4 class="flix-html-h4">';
    $r .= '2. ';
    $r .= __('Bookingflix mit '.get_bloginfo("url").' verbinden', 'terminflix');
    $r .= '</h4>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= 'Eine Verbindung zwischen Bookingflix und '.get_bloginfo("url").' herzustellen ist ganz einfach.';
    $r .= ' ';
    $r .= 'Dazu bitte kurz mit den Bookingflix-Zugangsdaten anmelden. Anschließend sind die Funktionen von Bookingflix hier verfügbar.';
    $r .= ' ';
    $r .= 'Im Dashboard lassen sich zahlreiche Einstellungen vornehmen und die gewünschten Termin-Kalender können einfach in Wordpress eingebettet werden.';
    $r .= '</div>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= '<a href="?page=signin_terminflix" class="button action">'.__('Connect to Wordpress', 'terminflix').'</a>';
    $r .= '</div>';

    return $r;
  }
  function is_sign_in () {

    $r .= '<div class="notice notice-success">';
    $r .= '';
    $r .= __('Connected', 'terminflix');
    $r .= '<br>';
    $r .= ' <a href="?page=signOut_terminflix">'.__('Sign-Out', 'terminflix').'</a>';
    $r .= '</div>';

    $r .= '<h4 class="flix-html-h4">';
    $r .= '1. ';
    $r .= __('Dashboard', 'terminflix');
    $r .= '</h4>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= 'Das Dashboard ist die zentrale Verwaltungsstelle. Hier können Kalender editiert oder neu angelegt werden. Es lassen sich einfach Terminerinnerungen erstellen sowie Kunden und anstehende Termine verwalten.';
    $r .= ' ';
    $r .= '</div>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= '<a href="?page=dashboard_terminflix" class="button action">'.__('Dashboard', 'terminflix').'</a>';
    $r .= '</div>';

    $r .= '<h4 class="flix-html-h4">';
    $r .= '2. ';
    $r .= __('Embed Code', 'terminflix');
    $r .= '</h4>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= 'Der Einbettungscode erlaubt es den gewünschten Terminkalender einzubetten. So können Termine direkt über einen Beitrag oder eine Seite auf '.get_bloginfo("url").' gebucht werden.';
    $r .= ' ';
    $r .= '</div>';
    $r .= '<div style="margin-bottom: 15px">';
    $r .= '<a href="?page=embed_terminflix" class="button action">'.__('Embed Code', 'terminflix').'</a>';
    $r .= '</div>';
    return $r;
  }

}

?>
