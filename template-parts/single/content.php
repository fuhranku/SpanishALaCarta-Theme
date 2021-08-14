<?php

/**
 * Single post Content
 *  
 * @author Frank Ponte
 * 
 */
get_template_part("template-parts/single/post-header");
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
        <a href="https://twitter.com/share?url=<?php echo get_permalink(); ?>" class="social-link me-4 hvr-hang" onclick="window.open(this.href, 'Twitter share','width=500', 'height=400');return false;">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-link me-4 hvr-hang">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="social-link hvr-hang">
            <i class="fab fa-linkedin"></i>
        </a>
    </div>
</div>