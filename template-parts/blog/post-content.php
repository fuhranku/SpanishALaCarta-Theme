<?php

/**
 * Post content (used in multiple places)
 * 
 * @author Frank Ponte 
 */
$author_url = get_author_posts_url(get_the_author_meta('ID'));
if (is_shop() || is_product_category() || is_product()) {
    $product_cat = wc_get_product_category_list(get_the_ID(), "");
    $product = wc_get_product(get_the_ID());
}
?>
<?php if (has_post_thumbnail()) : ?>
    <a href="<?php echo esc_url(get_the_permalink()); ?>">
        <?php theme_lazy_image(get_post_thumbnail_id(), "post-featured-image w-100 h-auto object-fit-cover"); ?>
    </a>
<?php endif; ?>
<div class="content py-4">
    <div class="d-flex align-items-center flex-wrap">
        <?php
        printf(
            '<a href="%1$s" class="post-title">
        <h4 class="fw-bold mb-2 me-3">
        %2$s
        </h4>
        </a>',
            esc_url(get_the_permalink()),
            wp_kses_post(get_the_title())
        );
        ?>
        <?php if (is_shop() || is_product_category() || is_product()) {
            global $post;
            $terms = get_the_terms($post->ID, 'product_cat');
            foreach ($terms as $term) {
                printf(
                    '<a href="%1$s" class="product-category small rounded px-3 py-1 fw-bold mb-2">
                    %2$s
                </a>',
                    get_term_link($term->term_id, 'product_cat'),
                    $term->name
                );
            }
        } ?>
    </div>
    <?php
    if (is_shop() || is_product_category() || is_product()) :
        if ($product->get_rating_count() !== 0) : ?>
            <div class="d-flex align-items-center mb-2">
                <?php echo wc_get_rating_html($product->get_average_rating()); ?>
                <span class="small fw-bold ms-1">
                    <?php printf('(%1$s)', $product->get_rating_count()); ?>
                </span>
            </div>
        <?php else : ?>
            <div class="fw-bold text-disabled">No rating yet.</div>
    <?php
        endif;
    endif;
    ?>
    <?php if (!is_shop() && !is_product_category() && !is_product()) : ?>
        <div class="post-excerpt d-inline-flex align-items-center flex-wrap justify-content-start">
            <div class="post-author me-3">
                <a href="<?php echo esc_url($author_url); ?>" class="d-inline-flex align-items-center">
                    <div class="avatar me-3">
                        <i class="fas fa-user"></i>
                    </div>
                    <?php theme_get_the_author_name(); ?>
                </a>
            </div>
            <div class="post-date">
                <div class="d-inline-flex align-items-center ms-0 ms-sm-5">
                    <i class="calendar-icon far fa-calendar me-3"></i>
                    <?php theme_get_the_post_date(); ?>
                </div>
            </div>
        </div>
    <?php endif; ?>
    <div class="post-description <?php echo !is_shop() && !is_product_category() && !is_product() ? "my-4" : "mb-4"; ?>">
        <p>
            <?php theme_the_excerpt(135); ?>
        </p>
    </div>
    <?php
    if (!is_shop() && !is_product_category() && !is_product()) :
        printf(
            '<a href="%1$s" class="post-read-more fw-bold">
            %2$s
            <i class="fas fa-angle-right ms-3"></i>
            </a>',
            get_the_permalink(),
            pll__("read_more")
        );
    else : ?>
        <div class="d-flex justify-content-center justify-content-md-between align-items-center flex-wrap">
            <div class="product-price px-3 py-2 rounded">
                <?php
                $currency_symbol = get_woocommerce_currency_symbol();
                $bold_class = empty($product->get_sale_price()) ? "fw-bold" : "text-line-through text-disabled";
                printf(
                    '<span class="%3$s">%1$s%2$s</span>',
                    $currency_symbol,
                    $product->get_regular_price(),
                    $bold_class
                );
                if (!empty($product->get_sale_price())) {
                    printf(
                        '<span class="ms-3 fw-bold">%1$s%2$s</span>',
                        $currency_symbol,
                        $product->get_sale_price()
                    );
                }
                ?>
            </div>
            <a href="<?php echo esc_url($product->add_to_cart_url()); ?>" class="btn btn-add-to-cart">
                <i class="fas fa-shopping-cart me-4"></i>
                Add to cart
            </a>
        </div>
    <?php endif; ?>
</div>