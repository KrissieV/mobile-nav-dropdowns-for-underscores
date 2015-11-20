<?php
/*
  Plugin Name: Mobile Nav Dropdowns
  Plugin URI: http://krissievandenoord.com
  Description: Creates usability on mobile when menu items have sub-menus. When the original top level menu items is touched, it expands the sub menu and also adds a new "top level Homepage" link into the list.
  Version: 1.0
  Author: Krissie VandeNoord
  Author URI: http://krissievandenoord.com
 */
 
wp_enqueue_style( 'krissievandenoord-mobile-nav-dropdowns', plugins_url('css/mobile-nav-dropdowns.css',__FILE__) );
wp_enqueue_script( 'krissievandenoord-mobile-nav-dropdowns', plugins_url('js/mobile-nav-dropdowns.js',__FILE__), array('jquery'), '1.0.0', true );