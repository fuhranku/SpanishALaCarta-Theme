<?php

/**
 * Footer main menu
 * @author FrankPonte
 */
$menu_class = \SPANISHALACARTE\Inc\Menus::get_instance();
$menu_id = $menu_class->get_menu_id('salc-header-menu');
$menu = wp_get_nav_menu_items($menu_id);
?>
<div class="col-12">
    <nav class="my-5 d-flex align-items-center justify-content-center mb-4 align-items-center">
        <!-- Menu -->
        <?php if (!empty($menu) && is_array($menu)) : ?>
            <ul class="navbar-nav w-100 w-lg-50 mx-auto flex-row flex-wrap justify-content-center" id="footer-menu">
                <?php
                foreach ($menu as $menu_item) :
                    if (!$menu_item->menu_item_parent) :
                ?>
                        <li class="nav-item px-xl-4 px-3">
                            <a class="nav-link text-white text-center h6 text-decoration-underline" href="<?php echo esc_url($menu_item->url); ?>">
                                <?php echo esc_html($menu_item->title); ?>
                            </a>
                        </li>
                <?php
                    endif;
                endforeach;
                ?>
            </ul>
        <?php endif; ?>
    </nav>
</div>