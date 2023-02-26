<?php
/**
 * Footer's Post Lists section
 * 
 * @author FrankPonte
 */
$recent_posts = wp_get_recent_posts(array(
    'numberposts' => 3, // Number of recent posts thumbnails to display
    'post_status' => 'publish', // Show only the published posts
    'language' => get_locale()
));

 ?>

<div class="col-3 px-5 d-none d-lg-block">
    <h4 class="mb-4 text-white">
        <?php pll_e("footer latest posts title"); ?>
    </h4>
    <ul id="footer-posts-list" class="ps-0">
        <?php foreach( $recent_posts as $post_item ) : ?>
            <li class="d-flex flex-column mb-4 py-2 px-4">
                <a href="<?php echo get_permalink($post_item['ID']) ?>">
                    <p class="fw-bold">
                        <?php echo $post_item['post_title'] ?>
                    </p>
                    <p>
                        <?php theme_get_the_post_date($post_item) ?>
                    </p>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>