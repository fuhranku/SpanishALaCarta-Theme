<?php

/**
 * Main content section
 * 
 * @package Hammersportmarketing
 */
$content = get_field("content");
$button = $content["button"]
?>

<section id="main-content" class="container py-5 my-5">
    <div class="row">
        <div class="col-12 col-lg-6 order-1 order-lg-0 px-5 px-lg-0 d-flex flex-column d-lg-block justify-content-center">
            <h2 class="fw-bold mb-4 text-center text-lg-start">
                <?php echo $content["title"]; ?>
            </h2>
            <div class="text-center text-lg-start">
                <?php echo $content["copywriting"]; ?>
            </div>
            <a href="<?php echo esc_url($button["page_link"]); ?>" class="btn btn-primary mt-4 w-fit-content mx-auto">
                <?php esc_html_e($button["text"]); ?>
            </a>
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center mb-5 mb-lg-0">
            <?php theme_lazy_image($content["image"], "w-75"); ?>
        </div>
    </div>
</section>