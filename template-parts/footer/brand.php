<?php

/**
 * Footer's Brand section
 * 
 * @author FrankPonte
 */
$logo_id = attachment_url_to_postid(get_theme_mod('salc_footer_logo'));
$translations = pll_the_languages(array('raw' => 1));
?>
<div class="col-12 col-lg-6 d-flex flex-column align-items-center px-0 px-lg-5">
    <a href="<?php pll_home_url(); ?>" class="mb-4">
        <?php theme_lazy_image($logo_id, "", "", 200, 67); ?>
    </a>
    <ul class="footer-list list-group w-100 mt-3 w-xl-75">
        <li class="list-group-item flex-wrap justify-content-center justify-content-lg-start small py-3 px-5">
            <i class="fas fa-envelope footer-icon me-3"></i>
            <a href="mailto:info@spanischalacarte.com" class="mt-2 mt-lg-0">
                info@spanischalacarte.com
            </a>
        </li>
        <li class="list-group-item flex-wrap justify-content-center justify-content-lg-start small py-3 px-5">
            <i class="fas fa-phone-alt footer-icon me-3"></i>
            + 41 78 400 47 57
        </li>
        <li class="list-group-item flex-wrap justify-content-center justify-content-lg-start small py-3 px-5">
            <i class="fas fa-thumbtack footer-icon me-3"></i>
            <?php pll_e('6010 Kriens, Switzerland'); ?>
        </li>
        <li class="list-group-item flex-wrap justify-content-center small py-3 px-5">
            <a href="<?php echo esc_url($translations["en"]["url"]); ?>">EN</a>
            <span class="px-2">-</span>
            <a href="<?php echo esc_url($translations["de"]["url"]); ?>">DE</a>
            <span class="px-2">-</span>
            <a href="<?php echo esc_url($translations["es"]["url"]); ?>">ES</a>
        </li>
    </ul>
</div>