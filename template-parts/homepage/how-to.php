<?php
    /**
     * How to buy a course section
     * @author FrankPonte
     */
    $content = get_field("how_to_section");
    $button = $content["button"];
?>

<section id="how-to-buy-a-course" class="container d-flex flex-column align-items-center justify-content-center my-5 py-5 px-5 px-lg-0">
    <h2 class="text-center fw-bold mb-5">
        <?php echo $content["title"]; ?>
    </h2>
    <div class="d-none d-lg-block my-5 w-100">
        <?php theme_lazy_image(144,"w-100 h-auto d-none d-lg-block","",1589,354); ?>
    </div>
    <div class="d-block d-lg-none w-100 w-md-75 mx-auto my-4">
        <div class="row gx-5 gy-4">
            <div class="col-6">
                <?php theme_lazy_image(151,"w-100 h-auto","",130,102); ?>
            </div>
            <div class="col-6">
                <?php theme_lazy_image(150,"w-100 h-auto","",130,102); ?>
            </div>
            <div class="col-6">
                <?php theme_lazy_image(149,"w-100 h-auto","",130,102); ?>
            </div>
            <div class="col-6">
                <?php theme_lazy_image(152,"w-100 h-auto","",130,102); ?>
            </div>
        </div>
    </div>
    <a href=" <?php echo esc_url($button["url"]); ?>" class="btn btn-primary mt-5">
        <?php esc_html_e($button["text"]); ?>
    </a>
</section>