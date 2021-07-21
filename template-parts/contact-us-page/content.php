<?php
/**
 * Main content section
 * 
 * @package Hammersportmarketing
 */
?>

<section id="contact-us" class="container my-5 py-5">
    <div class="row gx-5">
        <div class="col-12 col-lg-6 pe-5 ps-5 ps-lg-0">
            <h2 class="fw-bold mb-4 text-center text-lg-start">
                ¿Cómo podemos <span class="text-red">ayudarte?</span>
            </h2>
            <p class="text-center text-lg-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
            </p>
            <div class="social-media border-top d-flex justify-content-center justify-content-md-between align-items-center flex-wrap pt-4 pb-5">
                <h5 class="fw-bold mb-4 mb-md-0">
                    Redes Sociales
                </h5>
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
            <div class="d-none d-lg-flex flex-column w-100 mt-5">
                <h3 class="fw-bold text-center text-lg-start">
                    Preguntas <span class="text-red">frecuentes</span>
                </h3>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
            </div>
            </div>
        </div>
        <div class="col-12 col-lg-6 px-5">
            <form action="#" class="contact-form mt-4 p-5">
                <h5 class="fw-bold mb-4">
                    Escríbenos un mensaje
                </h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper integer donec faucibus faucibus elit mauris pellentesque viverra.
                </p>
                <div class="row gy-4">
                    <div class="col-12 d-flex flex-column">
                        <label for="nameInput" class="form-label fs-5 fw-bold">Nombre</label>
                        <input type="text" name="nameInput" placeholder="Ingrese su nombre" class="form-input">
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex flex-column">
                        <label for="nameInput" class="form-label fs-5 fw-bold">Teléfono</label>
                        <input type="text" name="nameInput" placeholder="Ingrese su nombre" class="form-input">
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex flex-column">
                        <label for="emailInput" class="form-label fs-5 fw-bold">Email</label>
                        <input type="email" name="emailInput" placeholder="Ingrese su email" class="form-input">
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex flex-column">
                        <label for="messageInput" class="form-label fs-5 fw-bold">Mensaje</label>
                        <textarea name="messageInput" rows="5" placeholder="Escriba su mensaje" class="form-textarea"></textarea>
                        <ul class="error-list mt-3 small text-danger d-none">
                            <li>Error 1</li>
                            <li>Error 2</li>
                        </ul>
                    </div>
                    <button type="submit" class="btn btn-primary w-fit-content mx-auto">Enviar mensaje</button>
                </div>
            </form>
            <div class="d-flex d-lg-none flex-column w-100 mt-5 py-4">
                <h3 class="fw-bold text-center text-lg-start">
                    Preguntas <span class="text-red">frecuentes</span>
                </h3>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
                <?php get_template_part("template-parts/components/common/contact-and-faq/faq", "Contact & FAQ component"); ?>
            </div>
        </div>
    </div>
</section>