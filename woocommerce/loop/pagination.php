<?php

/**
 * Pagination - Show numbered pagination for catalog pages
 *
 */

if (!defined('ABSPATH')) {
    exit;
}

// $total   = isset($total) ? $total : wc_get_loop_prop('total_pages');
// $current = isset($current) ? $current : wc_get_loop_prop('current_page');
// $base    = isset($base) ? $base : esc_url_raw(str_replace(999999999, '%#%', remove_query_arg('add-to-cart', get_pagenum_link(999999999, false))));
// $format  = isset($format) ? $format : '';

// if ($total <= 1) {
//     return;
// }
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
