<?php

/**
 * Home banner of theme
 * @author FrankPonte
 */
$content = get_field("banner");
$button = $content["button"];
?>

<section id="home-banner" class="position-relative site-banner d-flex align-items-center justify-content-center container-fluid">
    <?php theme_lazy_image(18671,"home-banner-shape","",756,679); ?>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start pe-5 ps-5 ps-lg-0 order-1 order-lg-0">
                <h1 class="text-blue fw-bold text-center text-lg-start">
                    <?php echo $content["title"]; ?>
                </h1>
                <h2 class="text-blue text-center text-lg-start">
                    <?php esc_html_e($content["subtitle"]); ?>
                </h2>
                <div class="fs-5 mb-5 mt-3">
                    <?php echo $content["description"]; ?>
                </div>
                <a href="<?php echo esc_url($button["url"]); ?>" class="btn btn-primary w-fit-content" target="_blank">
                    <?php esc_html_e($button["text"]); ?>
                    <i class="fas fa-angle-right ms-3"></i>
                </a>
            </div>
            <div class="col-12 col-lg-6 p-5 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                <?php theme_lazy_image($content["image"], "home-banner-design", "", 756, 679); ?>
            </div>
        </div>
    </div>
</section>