<?php
/**
 * Blog Content
 * 
 * @author Frank Ponte 
 */
?>
<div class="blog-content w-100 px-5 px-lg-0">
    <div class="row gx-5 gy-5">
        <?php 
            if(have_posts()):
                while ( have_posts() ) : the_post();
                    get_template_part( "template-parts/blog/post","Blog component"); 
                endwhile;
            else: 
                get_template_part( 'template-parts/blog/content-none' );
            endif;
        ?>
    </div>
</div>