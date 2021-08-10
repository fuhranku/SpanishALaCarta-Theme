<?php
/**
 * Post to be displayed on the blog list
 * 
 * @author Frank Ponte 
 */
$author_url = get_author_posts_url( get_the_author_meta( 'ID' ) );
?>

<article class="col-12 col-lg-4" id="post-<?php the_ID();?>">
    <?php get_template_part("template-parts/blog/post-content");?>
</article>