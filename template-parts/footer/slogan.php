<?php

/**
 * Footer's Slogan
 * 
 * @author FrankPonte
 */
$slogan = pll__("footer slogan");
$last_word_start = strrpos($slogan, ' ') + 1; // +1 so we don't include the space in our result
$last_word = substr($slogan, $last_word_start);
$slogan = [
    substr($slogan, 0, $last_word_start),
    $last_word 
]
?>

<div class="container-fluid bg-yellow py-4" id="footer-slogan">
    <h2 class="h1 text-blue fst-italic text-center fw-bold">
        <?php esc_html_e($slogan[0]); ?>
        <span class="text-red">
            <?php esc_html_e($slogan[1]); ?>
        </span>
    </h2>
</div>