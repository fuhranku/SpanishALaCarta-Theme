<?php

/**
 * Featured products slider
 * @author Frank Ponte
 * @package spanischalacarte
 */
$args = array(
    'post_type'           => 'product',
    'posts_per_page'      => $products,
    'orderby'             => $orderby,
    'order'               => $order == 'asc' ? 'asc' : 'desc',
    'post__in'            => wc_get_featured_product_ids(),
);

$loop = new WP_Query($args);
if (!$loop->have_posts()) return;
?>

<section class="featured-products">
    <div class="d-flex justify-content-between align-items-center align-self-start w-100 my-5 px-5 px-lg-0">
        <h2 class="fw-bold me-5">
            Featured products
        </h2>
        <div class="title-separator"></div>
    </div>
    <div class="featured-products related-posts px-0 d-flex align-items-center justify-content-between">
        <div class="inner-container order-1 mx-4">
            <div class="swiper-wrapper">
                <?php
                while ($loop->have_posts()) {
                    $loop->the_post();
                ?>
                    <article class="swiper-slide related-post">
                        <?php get_template_part("template-parts/blog/post-content"); ?>
                    </article>
                <?php
                }
                wp_reset_postdata();
                ?>
            </div>
        </div>
        <div class="categories-button-prev d-none d-lg-flex align-items-center justify-content-center fs-3">
            <i class="fas fa-angle-left"></i>
        </div>
        <div class="categories-button-next d-none d-lg-flex align-items-center justify-content-center order-2 fs-3">
            <i class="fas fa-angle-right"></i>
        </div>
</section>