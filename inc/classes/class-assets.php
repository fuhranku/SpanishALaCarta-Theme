<?php 
/**
 * Enqueue Theme assets
 * 
 * @package SpanishALaCarte
 */

 namespace SPANISHALACARTE\Inc;

 use SPANISHALACARTE\Inc\Traits\Singleton;

 class Assets{
     use Singleton;

     protected function __construct(){

        // Load class
        $this->setup_hooks();
    }

    protected function setup_hooks(){
        // Actions and filters 
        add_action( 'wp_enqueue_scripts',[$this, 'register_styles'] );
        add_action( 'wp_enqueue_scripts',[$this, 'register_scripts'] );

    }

    public function register_styles(){
        // Register Styles
        wp_register_style('vendor-bundle', HSM_BUILD_CSS_URI . '/vendor.bundle.css', [], filemtime(HSM_BUILD_CSS_DIR_PATH . '/vendor.bundle.css'), 'all' );
        wp_register_style('main-bundle', HSM_BUILD_CSS_URI . '/main.bundle.css', filemtime(HSM_BUILD_CSS_DIR_PATH . '/main.bundle.css'), 'all' );
        wp_register_style(
            'homepage-bundle',
            HSM_BUILD_CSS_URI . '/homepage.bundle.css',
            [],
            filemtime(HSM_BUILD_CSS_DIR_PATH . '/homepage.bundle.css'),
            'all'
        );
        // Enqueue Styles
        wp_enqueue_style( 'vendor-bundle' );
        wp_enqueue_style( 'main-bundle' );
        if( is_front_page() ){
            wp_enqueue_style('homepage-bundle');
        }
    }

    public function register_scripts(){
        // Register Scripts
        wp_register_script('vendor-bundle', HSM_BUILD_JS_URI . '/vendor.bundle.js',
        ['jquery'],'',true);
        wp_register_script('main-bundle', HSM_BUILD_JS_URI . '/main.bundle.js',
        ['jquery'],filemtime(HSM_BUILD_JS_DIR_PATH . '/main.bundle.js'),true);
        // wp_register_script('homepage-bundle', HSM_BUILD_JS_URI . '/homepage.bundle.js',
        // ['jquery','vendor-bundle', 'main-bundle'],filemtime(HSM_BUILD_JS_DIR_PATH . '/homepage.bundle.js'),true);
        wp_register_script(
            'homepage-bundle',
            HSM_BUILD_JS_URI . '/homepage.bundle.js',
            ['jquery'],
            filemtime(HSM_BUILD_JS_DIR_PATH . '/homepage.bundle.js'),
            true
        );
        wp_enqueue_script('vendor-bundle');        
        wp_enqueue_script('main-bundle');
        if( is_front_page() ){
            wp_enqueue_script('homepage-bundle');
        }
    }
 }