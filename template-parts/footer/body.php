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
            <div class="col-3 px-5">
                <h4 class="mb-4 text-white">
                    Newsletter
                </h4>
                <p class="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </p>
                <form action="" id="footer-newsletter-form">
                    <input type="email" name="newsletterEmail" placeholder="johndoe@email.com">
                    <button class="btn btn-newsletter-submit">
                        <i class="fas fa-angle-right"></i>
                    </button>
                </form>
            </div>
            <div class="col-6 d-flex flex-column align-items-center px-5">
                <a href="/" class="mb-4">
                    <img src="<?php echo get_theme_mod('salc_footer_logo');?>" alt="" width=200 height=67>
                </a>
                <p class="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. 
                </p>
                <ul class="footer-list list-group w-75 mt-3">
                    <li class="list-group-item small py-3 px-5">
                        <i class="fas fa-envelope footer-icon me-3"></i>
                        <a href="mailto:info@spanischalacarte.com">
                            info@spanischalacarte.com
                        </a>
                    </li>
                    <li class="list-group-item small py-3 px-5">
                        <i class="fas fa-phone-alt footer-icon me-3"></i>
                        +41 78 923 6886
                    </li>
                    <li class="list-group-item small py-3 px-5">
                        <i class="fab fa-skype footer-icon me-3"></i>
                        spanischalacarte
                    </li>
                    <li class="list-group-item small py-3 px-5 justify-content-center">
                        <a href="#">EN</a>
                        <span class="px-2">-</span>
                        <a href="#">DE</a>
                        <span class="px-2">-</span>
                        <a href="#">ES</a>
                    </li>
                </ul>
            </div>
            <div class="col-3 px-5">
                <h4 class="mb-4 text-white">
                    Latest Posts
                </h4>
                <ul id="footer-posts-list" class="ps-0">
                    <li class="d-flex flex-column mb-4 py-2 px-4">
                        <a href="#">
                            <p class="fw-bold">
                                post title
                            </p>
                            <p>April 23rd, 2021</p>
                        </a>
                    </li>
                    <li class="d-flex flex-column mb-4 py-2 px-4">
                        <a href="#">
                            <p class="fw-bold">
                                post title
                            </p>
                            <p>April 23rd, 2021</p>
                        </a>
                    </li>
                    <li class="d-flex flex-column py-2 px-4">
                        <a href="#">
                            <p class="fw-bold">
                                post title
                            </p>
                            <p>April 23rd, 2021</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12">
                <?php get_template_part( 'template-parts/footer/menu', 'Footer template'); ?>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid bg-dark-blue d-flex flex-column justify-content-center align-items-center py-3">
    <p class="fw-bold fs-6 text-white">Copyright 2021 © Spanisch a la carte</p>
    <d class="d-flex-inline">
        <a href="#" class="fs-6 text-white me-4">Política de privacidad</a>
        <a href="#" class="fs-6 text-white">Términos y condiciones</a>
    </d>
</div>