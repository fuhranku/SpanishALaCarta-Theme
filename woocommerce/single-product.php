<?php

/**
 * Archive product template
 * 
 * @package spanischalacarte
 */
get_header();
$product = wc_get_product(get_the_ID());
?>
<div class="container mb-5">
    <article>
        <?php get_template_part("template-parts/store/single-product/product-header"); ?>
        <div class="my-5">
            <?php echo $product->get_description(); ?>
        </div>
        <div class="reviews">
            <?php echo comments_template(); ?>
        </div>
    </article>
    <?php get_template_part("template-parts/store/single-product/related-products"); ?>
</div>
<?php
get_footer();
