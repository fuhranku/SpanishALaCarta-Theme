<?php
/**
 * Blog Categories slider
 * 
 * @author Frank Ponte 
 */

$categories = get_categories([
    'orderby' => 'name',
    'order'   => 'ASC',
    'parent'  => 0
]);
?>

<div class="categories-slider me-0 me-lg-5 d-flex align-items-center justify-content-between">
    <div class="inner-container order-1 mx-4">
        <div class="swiper-wrapper">
            <a 
                href="<?php echo esc_url(get_the_permalink(pll_get_post(get_option( 'page_for_posts' ))));?>" 
                class="swiper-slide category-slide me-4 <?php echo is_home() ? 'active' : '';?>"
            >
                <?php pll_e("All posts"); ?>
            </a>
            <?php
                $query = get_queried_object();
                foreach ( $categories as $category ) {
                    $active = $query->slug === $category->slug ? 'active': '';
                    printf(
                    '<a href="%1$s" class="swiper-slide category-slide %2$s">
                        %3$s
                    </a>',
                    esc_url(get_category_link( $category )),
                    $active,
                    esc_html($category->name)
                    );
                }
            ?>
        </div>
    </div>
    <div class="categories-button-prev d-none d-lg-flex align-items-center justify-content-center">
            <i class="fas fa-angle-left"></i>
    </div>
    <div class="categories-button-next d-none d-lg-flex align-items-center justify-content-center order-2">
        <i class="fas fa-angle-right"></i>
    </div>
</div>