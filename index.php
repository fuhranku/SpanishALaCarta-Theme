<?php

/**
 * Main Template file
 * 
 * @package HammersportMarketing
 * 
 */
get_header();
?>
    <section id="posts-page" class="container my-5">
        <?php
            if(is_home() || is_category() || is_search()){
                get_template_part( "template-parts/blog/header","Blog component"); 
            }
        ?>
        
        <div class="blog-list d-flex flex-column align-items-center">
            <?php get_template_part( "template-parts/blog/content-title","Blog component"); ?>
            <?php get_template_part( "template-parts/blog/content","Blog component"); ?>
            <?php get_template_part( "template-parts/blog/pagination","Blog component"); ?>
        </div>
    </section>
<?php 
get_footer();