<?php
/**
 * Generic banner
 * @author Hammersportmarketing
 */
$image_id = array_key_exists("image_id",$args) ? $args['image_id']: 0;
$title = array_key_exists("title",$args) ? $args['title']: "Title has not been set on ACF";
$subtitle = array_key_exists("subtitle",$args) ? $args['subtitle']: "Subtitle has not been set on ACF";
?>

<section class="common-banner position-relative d-flex flex-column justify-content-center align-items-center px-5 pb-5 z-n1">
    <?php theme_lazy_image($image_id,"banner-img w-100 h-100 position-absolute z-n1"); ?>
    <?php theme_lazy_image(176, "wave-shape position-absolute"); ?>
    <h1 class="mt-5 fw-bold text-center text-white"><?php echo $title ?></h1>
    <p class="text-white text-center fs-4"><?php echo $subtitle; ?></p>
</section>