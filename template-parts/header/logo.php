<?php
/**
 * Logo component template
 * 
 * @author FrankPonte
 */
    $logo_id = attachment_url_to_postid(get_theme_mod('salc_header_logo'));
 ?>


<a class="navbar-brand" href="<?php pll_home_url();?>">
    <?php theme_lazy_image($logo_id,"","",200,67); ?>
</a>
