<?php

/**
 * Archive page header
 * @author Frank Ponte
 * @package spanischalacarte
 */
$page_subtitle = function () {
    global $wp_query;
    if (is_shop()) {
        return pll__("All products");
    }
    if (is_product_category()) {
        return $wp_query->get_queried_object()->name;
    }
};
?>

<nav id="archive-product-nav" class="container-fluid bg-gray">
    <div class="container bg-gray d-flex justify-content-between py-4 flex-wrap flex-lg-nowrap">
        <h4 class="fw-bold mb-4 mb-lg-0">
            <?php esc_html_e($page_subtitle()); ?>
        </h4>
        <div class="right-menu d-flex flex-wrap flex-lg-nowrap">
            <?php do_action('theme_wc_show_ordering'); ?>
            <?php get_template_part("template-parts/store/archive-product/currency-switcher", "Woocommerce component", [
                "classes" => "mx-lg-3 ps-2 pe-3 my-3 my-lg-0"
            ]); ?>
            <?php get_search_form([
                "filter" => "product"
            ]); ?>
        </div>
    </div>

</nav>