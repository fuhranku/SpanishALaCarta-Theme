<?php
    /**
     * FAQ and contact section
     * @author FrankPonte
     */
?>

<section id="faq-and-contact" class="container my-0 my-lg-5 py-5">
    <div class="row py-0 py-lg-5 my-0 my-lg-5">
        <div class="col-12 col-lg-6 pe-5 ps-5 ps-lg-0 pb-5 position-relative">
            <div class="vertical-separator d-none d-lg-block right position-absolute h-75"></div>
            <h3 class="fw-bold text-center text-lg-start">
                Preguntas <span class="text-red">frecuentes</span>
            </h3>
            <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
            <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
            <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
            <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center px-5">
            <h3 class="mb-4 text-center fw-bold">
                Contacta con <span class="text-red">nosotros</span>
            </h3>
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
            </p>
            <a href="#" class="btn btn-primary mb-5">
                Contactar ahora
            </a>
            <div class="d-flex flex-row">
                <a href="#" class="social-link me-4 hvr-hang">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-link me-4 hvr-hang">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="#" class="social-link me-4 hvr-hang">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="social-link hvr-hang">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
</section>