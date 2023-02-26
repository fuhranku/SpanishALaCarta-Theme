<?php

/**
 * FAQ and contact section
 * @author FrankPonte
 */
$content = get_field("contact_and_faq_section");
$button = $content["button"];
$faqs = array_filter($content["faqs"], function ($element) {
    return $element !== null && !empty($element["title"]) && !empty($element["description"]);
});
$links = array_filter($content["links"], function ($element) {
    return $element !== null;
});
?>

<section id="faq-and-contact" class="container my-0 my-lg-5 py-5">
    <div class="row py-0 py-lg-5 my-0 my-lg-5">
        <div class="col-12 col-lg-6 pe-5 ps-5 ps-lg-0 pb-5 position-relative">
            <div class="vertical-separator d-none d-lg-block right position-absolute h-75"></div>
            <h3 class="fw-bold text-center text-lg-start">
                <?php echo $content["faq_title"]; ?>
            </h3>
            <?php foreach ($faqs as $faq) {
                get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component", [
                    "title" => $faq["title"],
                    "description" => $faq["description"],
                ]);
            } ?>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center px-5">
            <h3 class="mb-4 text-center fw-bold">
                <?php echo $content["contact_title"]; ?>
            </h3>
            <div>
                <?php echo $content["contact_description"]; ?>
            </div>
            <a href="<?php echo esc_url($button["url"]); ?>" class="btn btn-primary mb-5 mt-5">
                <?php esc_html_e($button["text"]); ?>
            </a>
            <div class="d-flex flex-row">
                <?php $last_key = array_key_last($links); ?>
                <?php foreach ($links as $idx => $link) :
                    $isLastLink = $last_key == $idx;
                ?>
                    <a href="<?php echo esc_url($link["url"]); ?>" class="social-link hvr-hang <?php echo !$isLastLink ? 'me-4' : '' ?>">
                        <i class="<?php esc_attr_e($link["icon_class"]); ?>"></i>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>