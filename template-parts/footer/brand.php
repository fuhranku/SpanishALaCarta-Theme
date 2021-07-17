<?php
/**
 * Footer's Brand section
 * 
 * @author FrankPonte
 */
    $logo_id = attachment_url_to_postid(get_theme_mod('salc_footer_logo'));
 ?>

<div class="col-12 col-lg-6 d-flex flex-column align-items-center px-0 px-lg-5">
    <a href="<?php pll_home_url();?>" class="mb-4">
        <?php theme_lazy_image($logo_id,"","",200,67); ?>
    </a>
    <p class="text-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. 
    </p>
    <ul class="footer-list list-group w-100 mt-3 w-xl-75">
        <li class="list-group-item flex-wrap justify-content-center justify-content-lg-start small py-3 px-5">
            <i class="fas fa-envelope footer-icon me-3"></i>
            <a href="mailto:info@spanischalacarte.com" class="mt-2 mt-lg-0">
                info@spanischalacarte.com
            </a>
        </li>
        <li class="list-group-item flex-wrap justify-content-center justify-content-lg-start small py-3 px-5">
            <i class="fas fa-phone-alt footer-icon me-3"></i>
            +41 78 923 6886
        </li>
        <li class="list-group-item flex-wrap justify-content-center justify-content-lg-start small py-3 px-5">
            <i class="fab fa-skype footer-icon me-3"></i>
            spanischalacarte
        </li>
        <li class="list-group-item flex-wrap justify-content-center small py-3 px-5">
            <a href="#">EN</a>
            <span class="px-2">-</span>
            <a href="#">DE</a>
            <span class="px-2">-</span>
            <a href="#">ES</a>
        </li>
    </ul>
</div>