<?php 
    /**
     * Footer main menu
     * @author FrankPonte
     */
    $menu_class = \SPANISHALACARTE\Inc\Menus::get_instance();
    $menu_id = $menu_class->get_menu_id('salc-header-menu');
    $menu = wp_get_nav_menu_items($menu_id);
?>

<nav class="my-5 d-flex align-items-center justify-content-center mb-4">
    <!-- Menu -->
    <?php if(!empty($menu) && is_array($menu)):?>
        <ul class="navbar-nav w-50 mx-auto flex-row justify-content-center" id="footer-menu">
        <?php 
            foreach ($menu as $menu_item):
                if(!$menu_item->menu_item_parent):

                    $child_menu_items = $menu_class->get_child_menu_items($menu, $menu_item->ID);
                    ?>
                        <li class="nav-item px-xl-4">
                            <a class="nav-link text-white text-center h6 text-decoration-underline" href="<?php echo esc_url($menu_item->url);?>">
                                <?php echo esc_html( $menu_item->title); ?>
                            </a>
                        </li>
                    <?php
                endif;
            endforeach;
        ?>
        </ul>
    <?php endif; ?>
</nav>