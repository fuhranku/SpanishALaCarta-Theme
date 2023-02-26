<?php

/**
 * Single post Content
 *  
 * @author Frank Ponte
 * 
 */
get_template_part("template-parts/single/post-header");
$twitter_link = "https://twitter.com/intent/tweet?url=" . getCurrentUrl();
$facebook_link = "https://facebook.com/sharer.php?u=" . getCurrentUrl();
$linkedin_link = "https://www.linkedin.com/sharing/share-offsite/?url=" . getCurrentUrl();
?>
<div class="container-fluid px-5 px-lg-0">
    <?php the_content(); ?>
</div>
<div class="blog-title d-flex flex-wrap align-items-center justify-content-center justify-content-md-between align-self-start w-100 my-5 px-5 px-lg-0">
    <div class="title-separator d-none d-md-block"></div>
    <h3 class="fw-bold ms-0 ms-md-4 me-0 me-md-5 mb-3 mb-md-0">
        <?php pll_e("share_post_text"); ?>
    </h3>
    <div class="d-flex flex-row">
        <a href="<?php echo esc_url($twitter_link); ?>" class="share-link social-link me-4 hvr-hang">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="<?php echo esc_url($facebook_link); ?>" class="share-link social-link me-4 hvr-hang">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="<?php echo esc_url($linkedin_link); ?>" class="share-link social-link hvr-hang">
            <i class="fab fa-linkedin"></i>
        </a>
    </div>
</div>