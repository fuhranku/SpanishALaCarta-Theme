<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header( 'shop' ); 
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
get_footer( 'shop' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
