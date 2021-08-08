<?php
/**
 * Post content (used in multiple places)
 * 
 * @author Frank Ponte 
 */
$author_url = get_author_posts_url( get_the_author_meta( 'ID' ) );
?>

<a href="<?php echo esc_url(get_the_permalink());?>">
    <?php theme_lazy_image(222, "post-featured-image w-100 h-auto object-fit-cover"); ?>
</a>
<div class="content py-4">
    <?php 
        printf(
            '<a href="%1$s" class="post-title">
                <h4 class="fw-bold mb-3">
                    %2$s
                </h4>
                </a>',
            esc_url( get_the_permalink() ),
            wp_kses_post( get_the_title() )
        );
    ?>
    <div class="post-excerpt d-inline-flex align-items-center flex-wrap justify-content-start">
        <div class="post-author me-3">
            <a href="<?php echo esc_url($author_url);?>" class="d-inline-flex align-items-center">
                <div class="avatar me-3">
                    <i class="fas fa-user"></i>
                </div>
                <?php theme_get_the_author_name(); ?>
            </a>
        </div>
        <div class="post-date">
            <div class="d-inline-flex align-items-center ms-0 ms-sm-5">
                <i class="calendar-icon far fa-calendar me-3"></i>
                <?php theme_get_the_post_date();?>
            </div>
        </div>
    </div>
    <div class="post-description my-4">
        <p>
            <?php theme_the_excerpt(135);?>
        </p>
    </div>
    <?php
        printf(
            '<a href="%1$s" class="post-read-more fw-bold">
                %2$s
                <i class="fas fa-angle-right ms-3"></i>
            </a>',
            get_the_permalink(),
            "Leer más"
        );
    ?>
</div>