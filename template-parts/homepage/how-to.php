<?php

/**
 * How to buy a course section
 * @author FrankPonte
 */
$content = get_field("how_to_section");
$button = $content["button"];
$steps = $content["steps"];
?>

<section id="how-to-buy-a-course" class="container d-flex flex-column align-items-center justify-content-center my-5 py-5 px-5 px-lg-0">
    <h2 class="text-center fw-bold mb-5">
        <?php echo $content["title"]; ?>
    </h2>
    <div class="row w-100 mx-auto">
        <?php
        get_template_part("template-parts/homepage/how-to/steps", "How to section", [
            "image" => $steps["step_1"]["image"],
            "title" => $steps["step_1"]["title"]
        ]);
        get_template_part("template-parts/homepage/how-to/steps", "How to section", [
            "image" => $steps["step_2"]["image"],
            "title" => $steps["step_2"]["title"]
        ]);
        get_template_part("template-parts/homepage/how-to/steps", "How to section", [
            "image" => $steps["step_3"]["image"],
            "title" => $steps["step_3"]["title"]
        ]);
        ?>
    </div>
    <a href=" <?php echo esc_url($button["url"]); ?>" class="btn btn-primary mt-5">
        <?php esc_html_e($button["text"]); ?>
    </a>
</section>