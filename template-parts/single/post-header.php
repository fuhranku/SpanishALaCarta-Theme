<?php

/**
 * Single post header
 *  
 * @author Frank Ponte
 * 
 */
?>
<div class="container-fluid px-5 px-lg-0 pt-4 pb-5">
    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="fw-bold text-decoration-none text-reset">
        <i class="fas fa-angle-left me-4"></i>
        <?php pll_e("go_to_blog_btn") ?>
    </a>
    <h1 class="fw-bold my-4">
        <?php echo single_post_title(); ?>
    </h1>
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
</div>