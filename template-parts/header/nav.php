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

<nav class="navbar navbar-expand-lg navbar-dark position-absolute w-100 h-auto" id="mainNavbar">
  <div class="container">
      <!-- Logo  -->
      <?php get_template_part('template-parts/header/logo'); ?>
      <!-- Menu Toggle -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <!-- Menu -->
        <?php get_template_part('template-parts/header/menu');?>
    </div>
</div>