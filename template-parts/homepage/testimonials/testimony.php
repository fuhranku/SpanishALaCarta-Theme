<?php

/**
 * Testimony component
 * @author FrankPonte
 */
$rating = $args["rating"];
$filled_star = '<i class="fas fa-star"></i>';
$empty_star = '<i class="far fa-star"></i>';
?>

<div class="swiper-slide testimonial p-5 text-white position-relative">
    <?php theme_lazy_image(18693, "testimony-quote position-absolute", "Quote icon", 80, 80); ?>
    <div class="rating d-inline-flex mb-4">
        <?php for ($i = 0; $i < $rating; $i++) {
            echo $filled_star;
        }
        for ($i = 0; $i < 5 - $rating; $i++) {
            echo $empty_star;
        }
        ?>
    </div>
    <p class="mb-4">
        <span class="fw-bold me-2 fs-3"><?php esc_html_e($args["name"]); ?>, </span>
        <span class="country fs-5"><?php esc_html_e($args["country"]); ?></span>
    </p>
    <div>
        <?php echo $args["description"]; ?>
    </div>
</div>