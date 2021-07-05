<?php
/**
 * Footer Files
 * 
 * @package Hammersportmarketing
 */
?>
    <div id="site-preloader">
        <img src="<?php echo get_theme_mod('salc_footer_logo');?>" alt="" width=300 height=100>
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