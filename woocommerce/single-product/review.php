<?php

/**
 * Review Comments Template
 *
 * Closing li is left out on purpose!.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/review.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.6.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
<li class="comment d-flex align-items-start my-4" id="li-comment-<?php comment_ID(); ?>">


    <?php
    /**
     * The theme_review_before hook
     */
    do_action('theme_review_before', $comment);
    ?>

    <div class="comment-text">
        <div class="content">
            <div class="d-flex flex-wrap mb-2">
                <h5 class="fw-bold mb-0">
                    <?php esc_html_e($comment->comment_author); ?> - &nbsp;
                </h5>
                <p class="text-red mb-0">
                    <?php esc_html_e(theme_get_comment_date($comment->comment_ID)); ?>
                </p>
            </div>
            <?php do_action('woocommerce_review_before_comment_meta', $comment); ?>
            <p class="mt-2">
                <?php
                printf(
                    wp_kses(
                        __('%s'),
                        [
                            'a' => [
                                'class' => [],
                                'href' => []
                            ]
                        ]
                    ),
                    $comment->comment_content
                )
                ?>
            </p>
        </div>
    </div>