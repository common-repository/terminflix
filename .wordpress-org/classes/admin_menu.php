<?php

class TERMINFLIX_ADMIN_MENU{

  public $plugin_dir;
  public $register_scripts;
  public $menu_name;
  public $language;
  public $userdata;

  function get(){

    $meta = get_user_meta(1, 'bookingflix', true);
    if($meta){
      $this->userdata = json_decode(base64_decode($meta), true);
    }

    if($meta && $this->userdata && $this->userdata["user"]){
      $this->get_dashboard();
      $this->get_embed();
      $this->get_shared();
      $this->get_signout();
    } else {
      $this->get_quickstart();
      $this->get_new_account();
    }
    $this->get_imprint();

  }


  function get_quickstart(){

    require_once( dirname(__FILE__) . "/quickstart.php" );

    $quickstart = new TERMINFLIX_QUICKSTART();
    $quickstart->plugin_dir = $this->plugin_dir;
    $quickstart->register_scripts = $this->register_scripts;
    $quickstart->language = $this->language;

    add_menu_page(
           "Bookingflix",
           "Bookingflix",
           "edit_posts",
           $this->menu_name,
           array($quickstart, "get"),
           $this->plugin_dir."/assets/menu-icon.png",
           6
       );

  }

  function get_new_account(){

    require_once( dirname(__FILE__) . "/new_account.php" );

    $newAccount = new TERMINFLIX_NEW_ACCOUNT();
    $newAccount->plugin_dir = $this->plugin_dir;
    $newAccount->register_scripts = $this->register_scripts;
    $newAccount->language = $this->language;

    add_submenu_page(

          $this->menu_name,
          __('Create new Account', 'terminflix'),
          __('Create new Account', 'terminflix'),
          "edit_posts",
          "new_account_".$this->menu_name,
          array($newAccount, "get")

      );

  }

  function get_imprint(){

    require_once( dirname(__FILE__) . "/imprint.php" );

    $imprint = new TERMINFLIX_IMPRINT();
    $imprint->plugin_dir = $this->plugin_dir;
    $imprint->register_scripts = $this->register_scripts;
    $imprint->language = $this->language;

    add_submenu_page(

          $this->menu_name,
          __('Imprint', 'terminflix' ),
          __( 'Imprint', 'terminflix' ),
          "edit_posts",
          "imprint_".$this->menu_name,
          array($imprint, "get")

      );

  }

  function get_dashboard(){

    require_once( dirname(__FILE__) . "/dashboard.php" );

    $dashboard = new TERMINFLIX_DASHBOARD();
    $dashboard->plugin_dir = $this->plugin_dir;
    $dashboard->register_scripts = $this->register_scripts;
    $dashboard->language = $this->language;
    $dashboard->userdata = $this->userdata;

    add_menu_page(
           "Bookingflix",
           "Bookingflix",
           "edit_posts",
           $this->menu_name,
           array($dashboard, "get"),
           $this->plugin_dir."/assets/menu-icon.png",
           6
       );

  }

  function get_shared(){

    require_once( dirname(__FILE__) . "/shared.php" );

    $shared = new TERMINFLIX_SHARED();
    $shared->plugin_dir = $this->plugin_dir;
    $shared->register_scripts = $this->register_scripts;
    $shared->language = $this->language;
    $shared->userdata = $this->userdata;

    add_submenu_page(

          $this->menu_name,
          __('Shared Calendars', 'terminflix' ),
          __('Shared Calendars', 'terminflix' ),
          "edit_posts",
          "shared_".$this->menu_name,
          array($shared, "get")

      );

  }

  function get_signout(){

    require_once( dirname(__FILE__) . "/sign_out.php" );

    $signout = new TERMINFLIX_SIGNOUT();
    $signout->plugin_dir = $this->plugin_dir;
    $signout->register_scripts = $this->register_scripts;
    $signout->language = $this->language;

    add_submenu_page(

          $this->menu_name,
          __('Sign-Out', 'terminflix' ),
          __('Sign-Out', 'terminflix' ),
          "edit_posts",
          "signOut_".$this->menu_name,
          array($signout, "get")

      );

  }

  function get_embed(){

    require_once( dirname(__FILE__) . "/embed.php" );

    $embed = new TERMINFLIX_EMBED();
    $embed->plugin_dir = $this->plugin_dir;
    $embed->register_scripts = $this->register_scripts;
    $embed->language = $this->language;
    $embed->userdata = $this->userdata;

    add_submenu_page(

          $this->menu_name,
          __('Embed Code', 'terminflix' ),
          __('Embed Code', 'terminflix' ),
          "edit_posts",
          "embed_".$this->menu_name,
          array($embed, "get")

      );

  }

}

?>
