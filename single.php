<?php

/**
 * Single post Template file
 * 
 * @author Frank Ponte
 * 
 */
get_header();
?>
    <div class="container px-0">
    <?php 
        if(have_posts()):
            ?>
            <div class="container-fluid py-5 px-0">
                <?php 
                while ( have_posts() ) : the_post();
                    theme_lazy_image(get_post_thumbnail_id(), "post-thumbnail mx-auto w-100 w-lg-75 d-block px-3 px-lg-0"); 

                    get_template_part( 'template-parts/single/content' );
                    
                    get_template_part("template-parts/single/related-posts");
                    get_template_part("template-parts/single/newsletter");
                    get_template_part("template-parts/single/comments");
                endwhile;
                ?>
            </div>
            <?php
        else: 
            get_template_part( 'template-parts/content-none' );
        endif;  
    ?>
    </div>
<?php 
get_footer();