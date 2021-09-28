<?php

/**
 * Archive product template
 * 
 * @package spanischalacarte
 */
get_header();
// Code taken from:  https://cfxdesign.com/create-a-custom-woocommerce-product-loop-the-right-way/
if (!function_exists('wc_get_products')) {
    return;
}
if (!is_search()) {
    $paged                   = (get_query_var('paged')) ? absint(get_query_var('paged')) : 1;
    $ordering                = WC()->query->get_catalog_ordering_args();
    $ordering['orderby']     = array_shift(explode(' ', $ordering['orderby']));
    $ordering['orderby']     = stristr($ordering['orderby'], 'price') ? 'meta_value_num' : $ordering['orderby'];
    $products_per_page       = apply_filters('loop_shop_per_page', wc_get_default_products_per_row() * wc_get_default_product_rows_per_page());

    $products_query       = wc_get_products(array(
        'meta_key'             => '_price',
        'status'               => 'publish',
        'limit'                => $products_per_page,
        'page'                 => $paged,
        'paginate'             => true,
        'return'               => 'ids',
        'orderby'              => $ordering['orderby'],
        'order'                => $ordering['order'],
    ));

    wc_set_loop_prop('current_page', $paged);
    wc_set_loop_prop('is_paginated', wc_string_to_bool(true));
    wc_set_loop_prop('page_template', get_page_template_slug());
    wc_set_loop_prop('per_page', $products_per_page);
    wc_set_loop_prop('total', $products_query->total);
    wc_set_loop_prop('total_pages', $products_query->max_num_pages);
}
?>
<section id="archive-product" class="container-fluid">
    <?php get_template_part("template-parts/store/archive-product/header", "Shop page header"); ?>
    <div class="container my-5">
        <div class="row gx-5 gy-5 w-100 w-md-75 w-lg-100 mx-auto">
            <?php
            if (!is_search()) {
                if ($products_query->products) {
                    foreach ($products_query->products as $product) {
                        $post_object = get_post($product);
                        setup_postdata($GLOBALS['post'] = &$post_object);
                        get_template_part("template-parts/blog/post", "Blog component");
                    }
                    wp_reset_postdata();
                    woocommerce_pagination();
                } else {
                    get_template_part('template-parts/blog/content-none');
                }
            } else {
                if (have_posts()) :
                    while (have_posts()) : the_post();
                        get_template_part("template-parts/blog/post", "Blog component");
                    endwhile;
                else :
                    get_template_part('template-parts/blog/content-none');
                endif;
            }
            ?>
        </div>
        <?php get_template_part("template-parts/store/featured-products"); ?>
    </div>
</section>

<?php
get_footer();
