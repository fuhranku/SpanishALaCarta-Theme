<?php

/**
 * Single post comments form
 *  
 * @author Frank Ponte
 * 
 */
?>

<form action="#" class="comment-form">
    <h3 class="fw-bold">
        <?php pll_e("write_comment"); ?>
    </h3>
    <p>
        <?php pll_e("write_comment_description"); ?>
    </p>
    <div class="row gy-4 mt-4">
        <div class="col-12 d-flex flex-column">
            <label for="nameInput" class="form-label fs-5 fw-bold">
                <?php pll_e("name"); ?>
            </label>
            <input type="text" name="nameInput" placeholder="<?php pll_e("name_placeholder"); ?>" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none">
                <li>Error 1</li>
                <li>Error 2</li>
            </ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="emailInput" class="form-label fs-5 fw-bold">
                <?php pll_e("email"); ?>
            </label>
            <input type="email" name="emailInput" placeholder="<?php pll_e("email_placeholder"); ?>" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none">
                <li>Error 1</li>
                <li>Error 2</li>
            </ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="messageInput" class="form-label fs-5 fw-bold">
                <?php pll_e("share_comment"); ?>
            </label>
            <textarea name="messageInput" rows="5" placeholder="<?php pll_e("share_comment_placeholder"); ?>" class="form-textarea"></textarea>
            <ul class="error-list mt-3 small text-danger d-none">
                <li>Error 1</li>
                <li>Error 2</li>
            </ul>
        </div>
        <button type="submit" class="btn btn-primary w-fit-content mx-auto">
            <?php pll_e("post_comment"); ?>
        </button>
    </div>
</form>