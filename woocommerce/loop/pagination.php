<?php
/**
 * Pagination - Show numbered pagination for catalog pages
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/pagination.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.3.1
 */

 if (!defined('ABSPATH')) {
    exit;
}
$allowed_tags = [
    'i' => [
        'class' => []
    ],
    'div' => [
        'class' => []
    ],
    'span' => [
        'class' => []
    ],
    'a' => [
        'class' => [],
        'href' => []
    ]
];
$args = [
    'before_page_number' => '<span>',
    'after_page_number' => '</span>',
    'prev_text' => '<i class="fas fa-angle-left"></i>',
    'next_text' => '<i class="fas fa-angle-right"></i>'
];

printf('<nav class="blog-pagination d-inline-flex my-5 justify-content-center">%s</nav>', wp_kses(paginate_links($args), $allowed_tags));
