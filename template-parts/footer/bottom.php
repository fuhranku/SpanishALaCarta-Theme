<?php

/**
 * Footer's bottom
 * 
 * @author FrankPonte
 */
$menu_class = \SPANISHALACARTE\Inc\Menus::get_instance();
$menu_id = $menu_class->get_menu_id('salc-bottom-footer-menu');
$menu = wp_get_nav_menu_items($menu_id);
?>

<div class="container-fluid bg-dark-blue d-flex flex-column justify-content-center align-items-center py-3">
    <p class="fw-bold fs-6 text-white text-center text-lg-start">Copyright 2021 © Spanisch a la carte</p>
    <?php if (!empty($menu) && is_array($menu)) : ?>
        <div class="d-flex flex-wrap flex-lg-nowrap d-flex-lg-inline justify-content-center">
            <!-- Menu -->
            <ul class="navbar-nav w-100 px-5 mx-auto flex-row flex-wrap justify-content-center" id="bottom-footer-menu">
                <?php
                foreach ($menu as $menu_item) :
                    if (!$menu_item->menu_item_parent) :
                ?>
                        <li class="nav-item px-2">
                            <a class="small text-white me-2 text-center text-lg-start my-3 my-md-0" href="<?php echo esc_url($menu_item->url); ?>">
                                <?php echo esc_html($menu_item->title); ?>
                            </a>
                        </li>
                <?php
                    endif;
                endforeach;
                ?>
            </ul>
        </div>
    <?php endif; ?>
</div>