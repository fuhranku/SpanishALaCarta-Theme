<?php
    /**
     * Nivelation test section
     * @author FrankPonte
     */
    $content = get_field("nivelation_test_section");
    $button = $content["button"];
?>

<section id="nivelation-test" class="container-fluid position-relative px-0 py-5 my-5">
    <?php theme_lazy_image(18700,"w-100 h-100 nivelation-section-shape position-absolute z-n1","",1920,793); ?>
    <div class="container pt-5 px-5 px-lg-0">
        <div class="row align-items-center pt-5 pb-0 pb-lg-5 gx-5">
            <div class="col-3">
                <?php theme_lazy_image($content["image"],"w-100 h-auto d-none d-lg-block","",403,403); ?>
            </div>
            <div class="col-12 col-lg-6 py-5 py-lg-0">
                <h2 class="fw-bold mb-4 text-white text-center text-lg-start">
                    <?php esc_html_e($content["title"]); ?>
                </h2>
                <div class="text-white text-center text-lg-start my-4 my-lg-0">
                    <?php echo $content["description"]; ?>
                </div>
            </div>
            <div class="col-12 col-lg-3 ps-0 ps-xl-5 px-0 d-flex justify-content-center justify-content-lg-start pb-5 pb-lg-0">
                <a href="<?php echo esc_url($button["url"]);?>" class="btn btn-nivelation-test fs-uppercase">
                    <?php esc_html_e($button["text"]); ?>
                    <i class="fas fa-angle-right ms-2 ms-lg-4"></i>
                </a>
            </div>
        </div>
    </div>
</section>