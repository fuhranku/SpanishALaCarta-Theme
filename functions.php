<?php 
/**
 *   Theme functions.
 *  
 *  @package SpanishALaCarte
 */
// echo '<pre>';
// print_r($path);
// wp_die();
if (!defined('THEME_DIR_PATH')){
    define('THEME_DIR_PATH', untrailingslashit( get_template_directory() ));
}

if (!defined('THEME_DIR_URI')){
    define('THEME_DIR_URI', untrailingslashit( get_template_directory_uri() ));
}

if (!defined('THEME_BUILD_URI')){
    define('THEME_BUILD_URI', untrailingslashit( get_template_directory_uri()) . '/assets/build');
}

if (!defined('THEME_BUILD_JS_URI')){
    define('THEME_BUILD_JS_URI', untrailingslashit( get_template_directory_uri()) . '/assets/build/js');
}

if (!defined('THEME_BUILD_JS_DIR_PATH')){
    define('THEME_BUILD_JS_DIR_PATH', untrailingslashit( get_template_directory() ) .  '/assets/build/js');
}

if (!defined('THEME_BUILD_IMG_URI')){
    define('THEME_BUILD_IMG_URI', untrailingslashit( get_template_directory_uri()) . '/assets/build/images');
}

if (!defined('THEME_BUILD_CSS_URI')){
    define('THEME_BUILD_CSS_URI', untrailingslashit( get_template_directory_uri()) . '/assets/build/css');
}

if (!defined('THEME_BUILD_CSS_DIR_PATH')){
    define('THEME_BUILD_CSS_DIR_PATH', untrailingslashit( get_template_directory() ) .  '/assets/build/css');
}

require_once THEME_DIR_PATH . '/inc/helpers/autoloader.php';
require_once THEME_DIR_PATH . '/inc/helpers/template-tags.php';
require_once THEME_DIR_PATH . '/inc/helpers/strings-register.php';
require_once THEME_DIR_PATH . '/inc/helpers/async-loader.php';

function salc_get_theme_instance(){
    \SPANISHALACARTE\Inc\SALC_THEME::get_instance();
}
salc_get_theme_instance();
?>