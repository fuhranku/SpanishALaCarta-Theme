<?php
    /**
     * Brand video section
     * @author FrankPonte
     */
    $content = get_field("video_section");
?>

<section id="brand-video" class="container-fluid my-5 px-0 py-5">
    <div class="w-100 w-lg-50 mx-auto px-5 px-lg-0">
        <h2 class="text-center fw-bold mb-4">
            <?php echo $content["title"]; ?>
        </h2>
        <p class="text-center">
            <?php esc_html_e($content["description"]); ?>
        </p>
    </div>
    <div class="container-fluid px-0 position-relative my-5">
        <?php theme_lazy_image(4073,"w-100 h-100 section-shape position-absolute z-n1","",1920,438); ?>
        <div class="container d-flex justify-content-center align-items-center">
            <div class="ratio ratio-16x9 w-100 w-lg-75">
                <?php theme_lazy_video($content["video"],"", "rounded"); ?>
            </div>
        </div>
    </div>
</section>