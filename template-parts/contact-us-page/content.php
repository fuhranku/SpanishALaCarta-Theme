<?php

/**
 * Main content section
 * 
 * @package Hammersportmarketing
 */
$content = get_field("content");
$how_can_we_help = $content["how_can_we_help"];
$links = array_filter($how_can_we_help["social_media"]["links"], function ($element) {
    return $element !== null;
});
$faqs = array_filter($content["faqs"], function ($element) {
    return $element !== null && !empty($element["title"]) && !empty($element["description"]);
});
$contact_form = $content["contact_form"];
?>

<section id="contact-us" class="container my-5 py-5">
    <div class="row gx-5">
        <div class="col-12 col-lg-6 pe-5 ps-5 ps-lg-0">
            <h2 class="fw-bold mb-4 text-center text-lg-start">
                <?php echo $how_can_we_help["title"]; ?>
            </h2>
            <p class="text-center text-lg-start">
                <?php esc_html_e($how_can_we_help["description"]); ?>
            </p>
            <div class="social-media border-top d-flex justify-content-center justify-content-md-between align-items-center flex-wrap pt-4 pb-5">
                <h5 class="fw-bold mb-4 mb-md-0">
                    <?php echo $how_can_we_help["social_media"]["title"]; ?>
                </h5>
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
                <div class="d-none d-lg-flex flex-column w-100 mt-5">
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
            </div>
        </div>
        <div class="col-12 col-lg-6 px-5">
            <form action="#" class="contact-form mt-4 p-5">
                <h5 class="fw-bold mb-4">
                    <?php esc_html_e($contact_form["title"]); ?>
                </h5>
                <div class="row gy-4">
                    <div class="col-12 d-flex flex-column">
                        <label for="nameInput" class="form-label fs-5 fw-bold">
                            <?php esc_html_e($contact_form["name_field"]["label"]); ?>
                        </label>
                        <input type="text" name="nameInput" placeholder="<?php esc_attr_e($contact_form["name_field"]["placeholder"]); ?>" class="form-input">
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex flex-column">
                        <label for="nameInput" class="form-label fs-5 fw-bold">
                            <?php esc_html_e($contact_form["phone_field"]["label"]); ?>
                        </label>
                        <input type="text" name="nameInput" placeholder="<?php esc_attr_e($contact_form["phone_field"]["placeholder"]); ?>" class="form-input">
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex flex-column">
                        <label for="emailInput" class="form-label fs-5 fw-bold">
                            <?php esc_html_e($contact_form["email_field"]["label"]); ?>
                        </label>
                        <input type="email" name="emailInput" placeholder="<?php esc_attr_e($contact_form["email_field"]["placeholder"]); ?>" class="form-input">
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex flex-column">
                        <label for="messageInput" class="form-label fs-5 fw-bold">
                            <?php esc_html_e($contact_form["email_field"]["label"]); ?>
                        </label>
                        <textarea name="messageInput" rows="5" placeholder="<?php esc_attr_e($contact_form["message_field"]["placeholder"]); ?>" class="form-textarea"></textarea>
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <button type="submit" class="btn btn-primary w-fit-content mx-auto">
                        <?php esc_html_e($contact_form["submit_button"]["title"]); ?>
                    </button>
                </div>
            </form>
            <div class="d-flex d-lg-none flex-column w-100 mt-5 py-4">
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
        </div>
    </div>
</section>