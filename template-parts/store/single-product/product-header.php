<?php

/**
 * Single product header
 * @author Frank Ponte
 * @package spanischalacarte
 */
$product = wc_get_product(get_the_ID());
?>

<div class="product-header bg-gray px-3 py-5 px-lg-5 rounded-3 shadow">
    <div class="row">
        <div class="col-12 col-lg-6 order-1 order-lg-0 mt-4 mt-lg-0">
            <?php woocommerce_breadcrumb(); ?>
            <h1 class="fw-bold">
                <?php the_title(); ?>
            </h1>
            <?php if ($product->get_rating_count() !== 0) : ?>
                <div class="d-flex align-items-center">
                    <?php echo wc_get_rating_html($product->get_average_rating()); ?>
                    <span class="small fw-bold ms-1">
                        <?php printf('(%1$s)', $product->get_rating_count()); ?>
                    </span>
                </div>
            <?php else : ?>
                <div class="fw-bold text-disabled">
                    <?php pll_e("No rating yet"); ?>
                </div>
            <?php endif; ?>
            <p>
                <?php the_excerpt(); ?>
            </p>
            <?php echo do_shortcode("[product_additional_information]"); ?>
            <h2 class="price px-3 py-2 text-center text-lg-start">
                <?php
                $currency_symbol = get_woocommerce_currency_symbol();
                $bold_class = empty($product->get_sale_price()) ? "fw-bold" : "text-line-through text-disabled";
                /*if (!$product->is_type('variable')) {*/
                    if (!empty($product->get_sale_price())) {
                        printf(
                            '<span class="me-3 fw-bold"><span class="text-red">%1$s</span>%2$s</span>',
                            $currency_symbol,
                            $product->get_sale_price()
                        );
                    }
                    printf(
                        '<span class="%3$s">%1$s%2$s</span>',
                        $currency_symbol,
                        $product->get_regular_price(),
                        $bold_class
                    );
                /*}*/
                ?>
            </h2>
            <?php /*
            if ($product->is_type('variable')) {
                woocommerce_variable_add_to_cart();
            }*/
            ?>
            <?php /*if (!$product->is_type('variable')) :*/ ?>
                <div class="d-flex my-3 flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start">
                    <a href="<?php echo esc_url(home_url("/") . "checkout/?add-to-cart=" . get_the_ID()); ?>" class="btn btn-primary me-md-3">
                        <?php pll_e("Buy now"); ?>
                    </a>
                    <a href="<?php echo esc_url($product->add_to_cart_url()); ?>" class="btn btn-header-alt mt-3 mt-md-0">
                        <?php pll_e("Add to cart"); ?>
                    </a>
                </div>
            <?php /*endif;*/ ?>
        </div>
        <div class="col-12 col-lg-6">
            <?php theme_lazy_image(get_post_thumbnail_id(), "w-100 object-fit-cover rounded-3"); ?>
        </div>
    </div>
</div>