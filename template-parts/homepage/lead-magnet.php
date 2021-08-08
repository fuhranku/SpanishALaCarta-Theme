<?php

/**
 * Free class lead magnet section
 * @author FrankPonte
 */
$content = get_field("lead_magnet_section");
$items = $content["items"];
$button = $content["button"];
?>

<section id="free-class-lead-magnet" class="container-fluid bg-yellow my-5 py-5 position-relative z-0">
    <?php theme_lazy_image(163, "lead-magnet-shape position-absolute w-100 h-100 z-n1", "", 1900, 627); ?>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <h2 class="fw-bold mb-4 text-center text-lg-start">
                    <?php esc_html_e($content["title"]); ?>
                </h2>
                <p class="text-center text-lg-start">
                    <?php esc_html_e($content["description"]); ?>
                </p>
                <ul class="d-flex flex-row flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start flex-lg-column theme-list mt-4 mt-lg-5 ps-0 mb-4 mb-lg-0">
                    <?php $item_1 = $items["item_1"]; ?>
                    <li class="d-flex flex-row align-items-center me-3 me-lg-0">
                        <i class="<?php esc_attr_e($item_1["icon_class"]); ?> me-2 me-lg-3 fs-4 text-red"></i>
                        <span class="fw-bold">
                            <?php esc_html_e($item_1["text"]); ?>
                        </span>
                    </li>
                    <?php $item_2 = $items["item_2"]; ?>
                    <li class="d-flex flex-row align-items-center me-3 me-lg-0 my-3">
                        <i class="<?php esc_attr_e($item_2["icon_class"]); ?> me-2 me-lg-3 fs-4 text-red"></i>
                        <span class="fw-bold">
                            <?php esc_html_e($item_2["text"]); ?>
                        </span>
                    </li>
                    <?php $item_3 = $items["item_3"]; ?>
                    <li class="d-flex flex-row align-items-center ">
                        <i class="<?php esc_attr_e($item_3["icon_class"]); ?> me-2 me-lg-3 fs-4 text-red"></i>
                        <span class="fw-bold">
                            <?php esc_html_e($item_3["text"]); ?>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <a href="<?php echo esc_url($button["url"]); ?>" class="btn lead-magnet-btn" target="_blank">
                    <?php esc_html_e($button["text"]); ?>
                    <i class="fas fa-angle-right ms-2 ms-lg-4"></i>
                </a>
            </div>
        </div>
    </div>
</section>