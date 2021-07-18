<?php
    /**
     * Testimonials section
     * @author FrankPonte
     */
?>

<section id="testimonials" class="container-fluid px-0 my-5 py-5">
    <h2 class="text-center fw-bold mb-5">
        Hablan nuestros <span class="text-red">alumnos</span>
    </h2>
    <div class="testimonials-slider mx-auto position-relative">
        <div class="swiper-wrapper">
            <?php get_template_part("template-parts/homepage/testimonials/testimony", "Testimonials section component"); ?>
            <?php get_template_part("template-parts/homepage/testimonials/testimony", "Testimonials section component"); ?>
            <?php get_template_part("template-parts/homepage/testimonials/testimony", "Testimonials section component"); ?>
            <?php get_template_part("template-parts/homepage/testimonials/testimony", "Testimonials section component"); ?>
        </div>
        <div class="testimonials-button-prev hvr-hang d-none d-lg-flex align-items-center justify-content-center position-absolute">
            <i class="fas fa-angle-left"></i>
        </div>
        <div class="testimonials-button-next hvr-hang d-none d-lg-flex align-items-center justify-content-center position-absolute">
            <i class="fas fa-angle-right"></i>
        </div>
        <div class="testimonials-pagination d-flex justify-content-center"></div>
    </div>
</section>
