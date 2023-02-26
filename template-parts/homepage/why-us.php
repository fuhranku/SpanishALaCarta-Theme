<?php

/**
 * Why us section
 * @author FrankPonte
 */
$content = get_field("why_us_section");
?>

<section id="why-us" class="container py-5 my-5 px-5 px-lg-0">
    <div class="row gy-4 pb-0 pb-lg-5">
        <div class="col-12 col-lg-6 pe-0 pe-lg-5 d-flex flex-column justify-content-center">
            <h2 class="fw-bold mb-4 text-center text-lg-start">
                <?php echo $content["title"]; ?>
            </h2>
            <div class="d-none d-lg-block">
                <?php echo ($content["description"]); ?>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="ratio ratio-16x9">
                <?php theme_lazy_video($content["video"], "", "shadow-red rounded"); ?>
            </div>
        </div>
        <div class="col-12 d-block d-lg-none mt-5">
            <p class="text-center">
                <?php echo ($content["description"]); ?>
            </p>
        </div>
    </div>
</section>