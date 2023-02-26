<?php

/**
 * Add async or defer attributes to script enqueues
 * @param  String  $tag     The original enqueued <script src="...> tag
 * @param  String  $handle  The registered unique name of the script
 * @return String  $tag     The modified <script async|defer src="...> tag
 **/

// only on the front-end
if (!is_admin()) {
    function add_js_asyncdefer_attribute($tag, $handle)
    {
        // if the unique handle/name of the registered script has 'async' in it
        if (strpos($handle, 'async') !== false) {
            // return the tag with the async attribute
            return str_replace('<script ', '<script async ', $tag);
        }
        // if the unique handle/name of the registered script has 'defer' in it
        else if (strpos($handle, 'defer') !== false) {
            // return the tag with the defer attribute
            return str_replace('<script ', '<script defer ', $tag);
        }
        // otherwise skip
        else {
            return $tag;
        }
    }

    function add_css_asyncdefer_attribute($tag, $handle)
    {
        // if the unique handle/name of the registered script has 'async' in it
        if (strpos($handle, 'async') !== false) {
            // return the tag with the async attribute
            $link = $tag;
            if (strpos($tag, 'media=')) {
                $link = str_replace('media=\'all\'', "media=\"print\" onload=\"this.media='all'\"", $tag);
            }
                return $link;
        }
        // otherwise skip
        else {
            return $tag;
        }
    }

    add_filter('script_loader_tag', 'add_js_asyncdefer_attribute', 10, 2);
    add_filter('style_loader_tag', 'add_css_asyncdefer_attribute', 10, 2);
}
