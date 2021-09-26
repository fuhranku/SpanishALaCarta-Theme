<?php

/**
 * Custom Shop breadcrumb
 *
 */

if (!defined('ABSPATH')) {
    exit;
}

$delimiter = " > ";

if (!empty($breadcrumb)) {

    echo $wrap_before;

    foreach ($breadcrumb as $key => $crumb) {

        echo $before;

        if (!empty($crumb[1]) && sizeof($breadcrumb) !== $key + 1) {
            echo '<a class="text-blue fw-bold" href="' . esc_url($crumb[1]) . '">' . esc_html($crumb[0]) . '</a>';
        } else {
            printf('<span class="text-red fw-bold">%1$s</span>', $crumb[0]);
        }

        echo $after;

        if (sizeof($breadcrumb) !== $key + 1) {
            echo $delimiter;
        }
    }
    echo $wrap_after;
}
