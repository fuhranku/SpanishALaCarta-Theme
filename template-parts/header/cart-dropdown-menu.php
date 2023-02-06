<?php

/**
 * Cart dropdown menu
 * @package spanischalacarte
 * @author Frank Ponte
 */
$cart_object = WC()->cart;
$items = $cart_object->get_cart();
?>

<div class="cart-dropdown-menu position-absolute bg-white p-4 rounded shadow d-flex flex-column align-items-center d-none">
    <?php if ($cart_object->get_cart_contents_count() > 0) : ?>
        <ul class="dropdown-cart-list px-0 align-self-start">
            <?php
            $product_count = 1;
            foreach ($items as $item => $values) :
                if ($product_count > 2) break;
                $_product =  wc_get_product($values['data']->get_id());
            ?>
                <li class="dropdown-cart-item d-flex align-items-center">
                    <?php theme_lazy_image(get_post_thumbnail_id($_product->get_id()), "rounded me-4 object-fit-cover", "", 80, 80); ?>
                    <div class="content d-flex flex-column">
                        <div class="heading d-flex align-items-center">
                            <h4 class="fs-6 mb-0 me-3">
                                <?php esc_html_e($_product->get_title()); ?>
                            </h4>
                            <?php
                            $terms = get_the_terms($_product->get_id(), 'product_cat');
                            printf(
                                '<div href="%1$s" class="product-category small rounded px-3 py-1 fw-bold">
                                            %2$s
                                        </div>',
                                get_term_link($terms[0]->term_id, 'product_cat'),
                                $terms[0]->name
                            );
                            ?>
                        </div>
                        <div class="meta">
                            <span class="quantity">
                                <?php esc_html_e($values["quantity"]); ?>
                            </span>
                            &nbsp;-&nbsp;
                            <span class="price">
                                <?php esc_html_e(get_woocommerce_currency_symbol()); ?>
                                <?php esc_html_e(get_post_meta($values['product_id'], '_price', true)); ?>
                            </span>
                        </div>
                    </div>
                </li>
            <?php
                $product_count++;
            endforeach;
            ?>

        </ul>
        <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class=" btn btn-cart-dropdown">
            <?php esc_html_e(pll__("See more")); ?> &darr;
        </a>
        <div class="h-separator bg-primary w-100 my-4"></div>
        <div class="d-flex flex-column align-items-center">
            <h4>
                <?php esc_html_e(pll__("Subtotal")); ?>:
                <span class="subtotal">
                    <?php esc_html_e(get_woocommerce_currency_symbol()); ?>
                    <?php esc_html_e($cart_object->get_cart_contents_total()); ?>
                </span>
            </h4>
            <a href="<?php echo esc_url(wc_get_checkout_url()); ?>" class="btn btn-secondary my-3 text-white">
                <?php esc_html_e(pll__("Pay now")); ?>
            </a>
            <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class="btn btn-cart-dropdown">
                <?php esc_html_e(pll__("Cart")); ?>
            </a>
        </div>
    <?php else : ?>
        <div class="d-flex flex-column justify-content-center align-items-center p-4">
            <h3 class="fs-5">
                <?php esc_html_e(pll__("Your cart is empty")); ?>
            </h3>
            <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class="btn btn-secondary mt-3 text-white">
                <?php esc_html_e(pll__("Shop now")); ?>
            </a>
        </div>
    <?php endif; ?>
</div>