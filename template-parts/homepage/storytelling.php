<?php

/**
 * Storytelling section
 * @author FrankPonte
 */
$content = get_field("storytelling_section");
$button = $content["button"];
?>

<section id="storytelling" class="container py-5 px-5 px-lg-0 my-5">
    <div class="row gx-5">
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <h2 class="fw-bold mb-4">
                <?php echo $content["title"]; ?>
            </h2>
            <p>
                <?php esc_html_e($content["description"]); ?>
            </p>
            <a href="<?php echo esc_url($button["url"]); ?>" class="btn btn-primary mt-4 w-fit-content d-none d-lg-block" target="_blank">
                <?php esc_html_e($button["text"]); ?>
                <i class="fas fa-angle-right ms-2 ms-lg-4"></i>
            </a>
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 d-flex d-lg-block flex-column align-items-center">
            <div class="storytelling-shapes-container position-relative d-flex flex-row flex-lg-column flex-wrap flex-lg-nowrap">
                <?php $item_1 = $content["items"]["item_1"]; ?>
                <div class="storytelling-item d-flex flex-column align-items-center justify-content-center me-lg-auto mx-auto mx-lg-0 w-100 w-md-50 p-4 p-lg-0">
                    <?php theme_lazy_image($item_1["image"], "", "Professionals icon", 100, 100); ?>
                    <h3 class="fw-bold mt-3">
                        <?php esc_html_e($item_1["title"]); ?>
                    </h3>
                    <div class="text-center">
                        <p>
                            <?php esc_html_e($item_1["description"]); ?>
                        </p>
                    </div>
                </div>
                <?php $item_2 = $content["items"]["item_2"]; ?>
                <div class="storytelling-item d-flex flex-column align-items-center justify-content-center ms-lg-auto mx-auto mx-lg-0 my-0 my-lg-4 position-relative w-100 w-md-50 p-4 p-lg-0">
                    <div class="storytelling-shape shape-1 d-none d-lg-block">
                        <?php theme_lazy_image(18696,"","",105,137); ?>
                    </div>
                    <?php theme_lazy_image($item_2["image"], "", "Students icon", 100, 100); ?>
                    <h3 class="fw-bold mt-3">
                        <?php esc_html_e($item_2["title"]); ?>
                    </h3>
                    <div>
                        <?php echo $item_2["description"]; ?>
                    </div>
                </div>
                <?php $item_3 = $content["items"]["item_3"]; ?>
                <div class="storytelling-item d-flex flex-column align-items-center justify-content-center mx-auto mx-lg-0 me-lg-auto position-relative w-100 w-md-50 p-4 p-lg-0">
                    <div class="storytelling-shape shape-2 d-none d-lg-block">
                        <?php theme_lazy_image(18695,"","",105,137); ?>
                    </div>
                    <?php theme_lazy_image($item_3["image"], "", "Goals icon", 100, 100); ?>
                    <h3 class="fw-bold mt-3">
                        <?php esc_html_e($item_3["title"]); ?>
                    </h3>
                    <div>
                        <?php echo $item_3["description"]; ?>
                    </div>
                </div>
            </div>
            <a href="<?php echo esc_url($button["url"]); ?>" class="btn btn-primary w-fit-content d-lg-none mt-5">
                <?php esc_html_e($button["text"]); ?>
                <i class="fas fa-angle-right ms-2 ms-lg-4"></i>
            </a>
        </div>
    </div>
</section>