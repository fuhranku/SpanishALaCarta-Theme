<?php

/**
 * Single post comments
 *  
 * @author Frank Ponte
 * 
 */
$args = array(
    'post_id' => get_the_ID(),
    'count'   => true, // Return only the count.
    'status' => "approve",
    'max_depth' => 2
);
$comments_count = get_comments($args);
?>

<section class="container-fluid px-5 px-lg-0 my-5 py-5" id="comments-section">
    <h2 class="fw-bold">
        <?php pll_e("comments"); ?> <span>(<?php echo $comments_count; ?>)</span>
    </h2>
    <?php get_template_part("template-parts/single/comments-list", "Comment section component"); ?>
    <?php get_template_part("template-parts/single/comment-form", "Comment section component"); ?>

</section>