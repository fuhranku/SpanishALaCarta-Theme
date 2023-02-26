<?php

/**
 * Contact Form
 * 
 * @package spanischalacarte
 * @author Frank Ponte
 */

$content = get_field("content");
$contact_form = $content["contact_form"];
?>

<form class="contact-form mt-4 p-5" id="contact-form">
    <h5 class="fw-bold mb-4">
        <?php esc_html_e($contact_form["title"]); ?>
    </h5>
    <div class="row gy-4">
        <div class="col-12 d-flex flex-column">
            <label for="fullName" class="form-label fs-5 fw-bold">
                <?php esc_html_e($contact_form["name_field"]["label"]); ?>
            </label>
            <input type="text" name="fullName" placeholder="<?php esc_attr_e($contact_form["name_field"]["placeholder"]); ?>" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none" data-name="fullName"></ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="phoneNumber" class="form-label fs-5 fw-bold">
                <?php esc_html_e($contact_form["phone_field"]["label"]); ?>
            </label>
            <input type="tel" name="phoneNumber" id="contact-form-tel" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none" data-name="phoneNumber"></ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="email" class="form-label fs-5 fw-bold">
                <?php esc_html_e($contact_form["email_field"]["label"]); ?>
            </label>
            <input type="email" name="email" placeholder="<?php esc_attr_e($contact_form["email_field"]["placeholder"]); ?>" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none" data-name="email"></ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="message" class="form-label fs-5 fw-bold">
                <?php esc_html_e($contact_form["message_field"]["label"]); ?>
            </label>
            <textarea name="message" rows="5" placeholder="<?php esc_attr_e($contact_form["message_field"]["placeholder"]); ?>" class="form-textarea"></textarea>
            <ul class="error-list mt-3 small text-danger d-none" data-name="message"></ul>
        </div>
        <div class="col-12 d-flex align-items-center mb-4">
            <label class="g-recaptcha" name="g-recaptcha-response" data-sitekey="6LemoUgcAAAAAOkbePZKpvktD8Rbg9-p8LY2-Xer"></label>
        </div>
        <button type="submit" class="btn btn-primary w-fit-content mx-auto">
            <?php esc_html_e($contact_form["submit_button"]["title"]); ?>
        </button>
    </div>
</form>