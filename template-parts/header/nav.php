<?php 
/**
 * Header Navigation Template
 * 
 * @package Hammersportmarketing
 */
$menu_class = \SPANISHALACARTE\Inc\Menus::get_instance();
$header_menu_id = $menu_class->get_menu_id('salc-header-menu');
$header_menu = wp_get_nav_menu_items($header_menu_id);
?>

<nav class="navbar navbar-expand-lg navbar-light position-absolute w-100 h-auto" id="mainNavbar">
  <div class="container-lg px-0 px-lg-4">
    <div class="inner-container d-flex w-100 w-lg-auto px-5 px-lg-0 ">
      <!-- Logo  -->
      <?php get_template_part('template-parts/header/logo'); ?>
      <!-- Menu Toggle -->
      <button class="navbar-toggler ms-auto header-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
        <!-- Menu -->
        <div class="container-fluid px-0 menu-container">
          <?php get_template_part('template-parts/header/menu');?>
        </div>
      </div>
</div>