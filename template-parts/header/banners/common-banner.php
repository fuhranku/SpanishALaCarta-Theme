<?php

/**
 * Generic banner
 * @author Frank Ponte
 */
$image_id = array_key_exists("image_id", $args) ? $args['image_id'] : 0;
$title = array_key_exists("title", $args) ? $args['title'] : get_the_title();
$subtitle = array_key_exists("subtitle", $args) ? $args['subtitle'] : "";
if (is_category()) {
    $title = pll__("Category") . " - " . pll__("Archive");
} else if (is_author()) {
    $title = pll__("Author") . " - " . pll__("Archive");
} else if (is_search()) {
    $title = pll__("Search") . " - " . pll__("Archive");
} else if (is_single() || is_product()) {
    $title = "";
}
// else if (get_post_type() === 'post' || is_product() || $title === "") {
//     $title = "";
// } else if (get_current_template_name() === "theme-empty" || basename(get_page_template()) === 'page.php' || is_shop() || $title === "") {
//     $title = get_the_title();
// }
?>

<section class="common-banner position-relative d-flex flex-column justify-content-center align-items-center px-5 pb-5 z-n1">
    <?php theme_lazy_image($image_id, "banner-img w-100 h-100 position-absolute z-n1"); ?>
    <?php theme_lazy_image(176, "wave-shape position-absolute"); ?>
    <h1 class="mt-5 fw-bold text-center text-white"><?php echo $title ?></h1>
    <p class="text-white text-center fs-4"><?php echo $subtitle; ?></p>
</section>