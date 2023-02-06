<?php

/**
 * Single post related
 *  
 * @author Frank Ponte
 * 
 */
$related = new WP_Query([
    'category__in' => wp_get_post_categories($post->ID),
    'numberposts'  => 9,
    'post__not_in' => array($post->ID),
    'post_type'    => 'product'
]);

if (!$related->have_posts()) return;

$related_post_title = explode(" ", pll__("related_products"));
?>

<section id="related-posts" class="px-4 px-lg-0">
    <h2 class="fw-bold mb-4">
        <?php printf('%1$s <span class="text-red">%2$s</span>', $related_post_title[0], $related_post_title[1]); ?>
    </h2>
    <div class="related-posts container-fluid px-0 d-flex align-items-center justify-content-between">
        <div class="inner-container order-1 mx-4">
            <div class="swiper-wrapper">
                <?php
                if ($related->have_posts()) {
                    while ($related->have_posts()) {
                        $related->the_post();
                ?>
                        <article class="swiper-slide related-post">
                            <?php get_template_part("template-parts/blog/post-content"); ?>
                        </article>
                <?php
                    }
                    wp_reset_postdata();
                }
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