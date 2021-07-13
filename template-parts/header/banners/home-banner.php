<?php
    /**
     * Home banner of theme
     * @author FrankPonte
     */
    $content = get_field("banner");
?>

<section id="home-banner" class="position-relative site-banner d-flex align-items-center justify-content-center container-fluid">
    <img src="<?php echo THEME_BUILD_IMG_URI.'/home-banner-shape.png'?>" alt="" class="home-banner-shape">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start pe-5 ps-5 ps-lg-0 order-1 order-lg-0">
                <h1 class="text-blue fw-bold text-center text-lg-start">
                    <?php echo $content["title"];?>
                </h1>
                <p class="text-blue fs-5 mb-5 mt-3 text-center text-lg-start">
                    Clases en vivo con una profesora certificada, especializada en la didáctica del español como lengua extranjera.
                </p>
                <a href="#" class="btn btn-primary w-fit-content">
                    Clase gratis
                    <i class="fas fa-angle-right ms-3"></i>    
                </a>
            </div>
            <div class="col-12 col-lg-6 p-5 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                <img src="<?php echo THEME_BUILD_IMG_URI.'/home-banner-design.png'?>" alt="" class="home-banner-design"
                    width=756
                    height=679    
                >
            </div>
        </div>
    </div>
</section>