<?php
/**
 * Footer Files
 * 
 * @package Hammersportmarketing
 */
    $logo_id = attachment_url_to_postid(get_theme_mod('salc_footer_logo'));
?>
    <div id="site-preloader">
        <?php theme_lazy_image($logo_id,"site-logo","",300,100); ?>
        <img src="<?php echo THEME_BUILD_IMG_URI . '/preloader.svg' ?>" width="50" height="50"></img>
    </div>
        <Footer>
            <?php get_template_part('template-parts/footer/slogan'); ?>
            <?php get_template_part('template-parts/footer/body'); ?>
            <?php get_template_part('template-parts/footer/bottom'); ?>
        </Footer>
        <?php wp_footer(); ?>
    </div>
</div>
</body>
</html>