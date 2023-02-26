<?php

/**
 * FAQ component
 * @author FrankPonte
 */
?>

<details class="faq-details">
    <summary class="py-4 d-flex justify-content-between align-items-center">
        <h5 class="fw-bold pe-5">
            <?php esc_html_e($args["title"]); ?>
        </h5>
        <i class="fas fa-angle-down arrow-down"></i>
    </summary>
    <div class="details-wrap">
        <?php echo $args["description"]; ?>
    </div>
</details>