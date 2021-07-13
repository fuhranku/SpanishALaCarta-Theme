<?php
/**
 * Footer's body
 * 
 * @author FrankPonte
 */
 ?>

 <div class="container-fluid bg-blue px-5 pt-5">
    <div class="container">
        <div class="row">
            <!-- Newsletter -->
            <?php get_template_part("template-parts/footer/newsletter", "Footer section"); ?>
            <!-- Brand -->
            <?php get_template_part("template-parts/footer/brand", "Footer section"); ?>
            <!-- Posts lists -->
            <?php get_template_part("template-parts/footer/posts-list", "Footer section"); ?>
            <!-- Menu -->
            <?php get_template_part( 'template-parts/footer/menu', 'Footer section'); ?>
        </div>
    </div>
</div>
