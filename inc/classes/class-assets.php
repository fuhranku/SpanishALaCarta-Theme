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
        wp_register_style('vendor-bundle', THEME_BUILD_CSS_URI . '/vendor.bundle.css', [], filemtime(THEME_BUILD_CSS_DIR_PATH . '/vendor.bundle.css'), 'all' );
        wp_register_style('main-bundle', THEME_BUILD_CSS_URI . '/main.bundle.css', filemtime(THEME_BUILD_CSS_DIR_PATH . '/main.bundle.css'), 'all' );
        wp_register_style(
            'homepage-bundle',
            THEME_BUILD_CSS_URI . '/homepage.bundle.css',
            [],
            filemtime(THEME_BUILD_CSS_DIR_PATH . '/homepage.bundle.css'),
            'all'
        );
        wp_register_style(
            'about-us-bundle',
            THEME_BUILD_CSS_URI . '/about_us.bundle.css',
            [],
            filemtime(THEME_BUILD_CSS_DIR_PATH . '/about_us.bundle.css'),
            'all'
        );
        wp_register_style(
            'contact-us-bundle',
            THEME_BUILD_CSS_URI . '/contact_us.bundle.css',
            [],
            filemtime(THEME_BUILD_CSS_DIR_PATH . '/contact_us.bundle.css'),
            'all'
        );
        wp_register_style(
            'blog-bundle',
            THEME_BUILD_CSS_URI . '/blog.bundle.css',
            [],
            filemtime(THEME_BUILD_CSS_DIR_PATH . '/blog.bundle.css'),
            'all'
        );
        wp_register_style(
            'single-bundle',
            THEME_BUILD_CSS_URI . '/single.bundle.css',
            [],
            filemtime(THEME_BUILD_CSS_DIR_PATH . '/single.bundle.css'),
            'all'
        );

        // Enqueue Styles
        wp_enqueue_style( 'vendor-bundle' );
        wp_enqueue_style( 'main-bundle' );
        if( is_front_page() ){
            wp_enqueue_style('homepage-bundle');
        }else if(is_home() || is_author() || is_category() || is_search()){
            wp_enqueue_style('blog-bundle');
        }else if ( get_current_template_name() === "about-us" ){
            wp_enqueue_style('about-us-bundle');
        }else if ( get_current_template_name() === "contact-us" ){
            wp_enqueue_style('contact-us-bundle');
        }else if(is_single()){
            wp_enqueue_style('single-bundle');
        }
    }

    public function register_scripts(){
        // Register Scripts
        wp_register_script('vendor-bundle', THEME_BUILD_JS_URI . '/vendor.bundle.js',
        ['jquery'],'',true);
        wp_register_script('main-bundle', THEME_BUILD_JS_URI . '/main.bundle.js',
        ['jquery'],filemtime(THEME_BUILD_JS_DIR_PATH . '/main.bundle.js'),true);
        // wp_register_script('homepage-bundle', THEME_BUILD_JS_URI . '/homepage.bundle.js',
        // ['jquery','vendor-bundle', 'main-bundle'],filemtime(THEME_BUILD_JS_DIR_PATH . '/homepage.bundle.js'),true);
        wp_register_script(
            'homepage-bundle',
            THEME_BUILD_JS_URI . '/homepage.bundle.js',
            ['jquery'],
            filemtime(THEME_BUILD_JS_DIR_PATH . '/homepage.bundle.js'),
            true
        );
        wp_register_script(
            'about-us-bundle',
            THEME_BUILD_JS_URI . '/about_us.bundle.js',
            ['jquery'],
            filemtime(THEME_BUILD_JS_DIR_PATH . '/about_us.bundle.js'),
            true
        );
        wp_register_script(
            'contact-us-bundle',
            THEME_BUILD_JS_URI . '/contact_us.bundle.js',
            ['jquery'],
            filemtime(THEME_BUILD_JS_DIR_PATH . '/contact_us.bundle.js'),
            true
        );
        wp_register_script(
            'blog-bundle',
            THEME_BUILD_JS_URI . '/blog.bundle.js',
            ['jquery'],
            filemtime(THEME_BUILD_JS_DIR_PATH . '/blog.bundle.js'),
            true
        );
        wp_register_script(
            'single-bundle',
            THEME_BUILD_JS_URI . '/single.bundle.js',
            ['jquery'],
            filemtime(THEME_BUILD_JS_DIR_PATH . '/single.bundle.js'),
            true
        );
        wp_enqueue_script('vendor-bundle');        
        wp_enqueue_script('main-bundle');
        if( is_front_page() ){
            wp_enqueue_script('homepage-bundle');
        }else if(is_home() || is_author() || is_category() || is_search()){
            wp_enqueue_script('blog-bundle');
        }else if ( get_current_template_name() === "about-us" ){
            wp_enqueue_script('about-us-bundle');
        }else if ( get_current_template_name() === "contact-us" ){
            wp_enqueue_script('contact-us-bundle');
        }else if (is_single()){
            wp_enqueue_script('single-bundle');
        }
    }
 }