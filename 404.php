<?php

/**
 * Main Template file
 * 
 * @author Frank Ponte
 * 
 */
get_header();
?>
<section id="404-page" class="container my-5">
    <div class="d-flex flex-column w-lg-50 w-md-75 w-100 mx-auto justify-content-center">
        <div class="w-lg-50 mx-auto">
            <h2 class="page-404 fw-bold text-center">404</h2>
            <p class="page-404 fw-bold not-found text-center">
                <?php esc_html_e(pll__("Not found")); ?>
            </p>
        </div>
        <p class="text-center fs-4">
            <?php esc_html_e(pll__("Sorry, we didn't find what you're looking for")); ?>
        </p>
        <a href="<?php echo get_home_url(); ?>" class="btn btn-primary w-fit-content mx-auto mt-4">
            <?php esc_html_e(pll__("Go home")); ?>
        </a>
    </div>
</section>
<?php
get_footer();
