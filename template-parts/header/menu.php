<?php

/**
 * Menu header component template
 * 
 * @package Hammersportmarketing
 */
$menu_class = \SPANISHALACARTE\Inc\Menus::get_instance();
$header_menu_id = $menu_class->get_menu_id('salc-header-menu');
$header_menu = wp_get_nav_menu_items($header_menu_id);
$home_banner = is_front_page();
global $woocommerce;
?>

<div class="collapse navbar-collapse justify-content-end" id="headerNavbar">
    <nav class="header-menu" id="header-menu">
        <!-- Menu -->
        <?php if (!empty($header_menu) && is_array($header_menu)) : ?>
            <ul class="navbar-nav">
                <?php
                foreach ($header_menu as $menu_item) :
                    if (!$menu_item->menu_item_parent) :

                        $child_menu_items = $menu_class->get_child_menu_items($header_menu, $menu_item->ID);
                        $has_children = !empty($child_menu_items) && is_array($child_menu_items);

                        if (!$has_children) :
                ?>
                            <li class="nav-item px-2">
                                <a class="menu-link nav-link <?php echo $menu_class->get_active_menu_item($menu_item->object_id) ?>" href="<?php echo esc_url($menu_item->url); ?>">
                                    <?php echo esc_html($menu_item->title); ?>
                                </a>
                            </li>
                        <?php
                        else :
                        ?>
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-link dropdown-toggle" href="<?php echo esc_url($menu_item->url); ?>" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <?php echo esc_html($menu_item->title); ?>
                                    <i class="fas fa-angle-down arrow-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <?php
                                    foreach ($child_menu_items as $child_menu_item) :
                                        $has_children = !empty($grandchild_menu_items) && is_array($grandchild_menu_items);
                                        if (!$has_children) :
                                    ?>
                                            <li>
                                                <a class="dropdown-item" href="<?php echo esc_url($child_menu_item->url); ?>">
                                                    <?php echo esc_html($child_menu_item->title); ?>
                                                </a>
                                            </li>
                                    <?php
                                        endif;
                                    endforeach;
                                    ?>
                                </ul>
                            </li>
                <?php
                        endif;
                    endif;
                endforeach;
                ?>
            </ul>
        <?php endif; ?>
    </nav>
    <nav class="header-menu ms-0 ms-lg-4 mt-4 mt-lg-0 d-flex">
        <div class="header-menu-cart me-3 position-relative">
            <div class="cart-items-counter position-absolute small rounded-circle px-1 d-flex align-items-center justify-content-center">
                <?php esc_html_e($woocommerce->cart->cart_contents_count); ?>
            </div>
            <div class="cart-dropdown rounded-circle d-flex align-items-center justify-content-center p-3">
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
        <a href="https://calendly.com/spanischalacarte/20min" class="btn btn-header<?php echo !$home_banner ? '-alt' : ''; ?>" target="_blank">
            <?php pll_e("Trial class"); ?>
        </a>
    </nav>
</div>