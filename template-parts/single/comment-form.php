<?php

/**
 * Single post comments form
 *  
 * @author Frank Ponte
 * 
 */
if (!comments_open()) return;
?>

<form class="comment-form">
    <input type="hidden" name="post_id" value="<?php the_ID(); ?>">
    <h3 class="fw-bold">
        <?php pll_e("write_comment"); ?>
    </h3>
    <p>
        <?php pll_e("write_comment_description"); ?>
    </p>
    <div class="row gy-4 mt-4">
        <div class="col-12 d-flex flex-column">
            <label for="name" class="form-label fs-5 fw-bold">
                <?php pll_e("name"); ?>
            </label>
            <input type="text" name="name" placeholder="<?php pll_e("name_placeholder"); ?>" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none" data-name="name"></ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="email" class="form-label fs-5 fw-bold">
                <?php pll_e("email"); ?>
            </label>
            <input type="email" name="email" placeholder="<?php pll_e("email_placeholder"); ?>" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none" data-name="email"></ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="message" class="form-label fs-5 fw-bold">
                <?php pll_e("share_comment"); ?>
            </label>
            <textarea name="message" rows="5" placeholder="<?php pll_e("share_comment_placeholder"); ?>" class="form-textarea"></textarea>
            <ul class="error-list mt-3 small text-danger d-none" data-name="message"></ul>
        </div>
        <div class="col-12 d-flex align-items-center mb-4 justify-content-center">
            <label class="g-recaptcha" name="g-recaptcha-response" data-sitekey="6LemoUgcAAAAAOkbePZKpvktD8Rbg9-p8LY2-Xer"></label>
        </div>
        <button type="submit" class="btn btn-primary w-fit-content mx-auto">
            <?php pll_e("post_comment"); ?>
        </button>
    </div>
</form>