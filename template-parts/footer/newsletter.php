<?php
/**
 * Footer's Newsletter section
 * 
 * @author FrankPonte
 */
 ?>

<div class="col-3 px-5 d-none d-lg-block">
    <h4 class="mb-4 text-white">
        <?php pll_e("footer newsletter title"); ?>
    </h4>
    <p class="text-white">
        <?php pll_e("footer newsletter description"); ?>
    </p>
    <form id="footer-newsletter-form">
        <input type="email" name="email" placeholder="<?php pll_e("Your email"); ?>">
        <button class="btn btn-newsletter-submit">
            <i class="fas fa-angle-right"></i>
        </button>
    </form>
</div>