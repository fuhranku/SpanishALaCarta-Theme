<?php
/**
 * Blog header
 * 
 * @author Frank Ponte 
 */
?>

<div class="blog-header mb-5 w-100 w-md-75 mx-auto px-4 px-sm-0">
    <div class="row gy-3">
        <div class="col-12 col-lg-8 order-1 order-lg-0 d-flex d-lg-block justify-content-center">
            <?php 
                if(is_home() || is_category()){
                    get_template_part("template-parts/blog/categories-slider","Blog component");
                }
            ?>
        </div>
        <div class="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end px-0">
            <?php get_search_form(); ?>
        </div>
    </div>
</div>