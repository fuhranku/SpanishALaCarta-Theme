<?php 
/**
 * Theme sidebars
 * 
 * @package SpanishALaCarte
 */

 namespace SPANISHALACARTE\Inc;

 use SPANISHALACARTE\Inc\Traits\Singleton;

 class Sidebars{
     use Singleton;

     protected function __construct(){

        // Load class
        $this->setup_hooks();
    }

    protected function setup_hooks(){
        // Actions and filters 
        add_action('widgets_init', [$this, 'register_sidebars']);
    }

    public function register_sidebars(){
        register_sidebar(
            [
                'name'          => __( 'Sidebar', 'hammersportmarketing' ),
                'id'            => 'sidebar-1',
                'description'   => __('Main sidebar', 'hammersportmarketing'),
                'before_widget' => '<div id="%1$s" class="widget widget-sidebar %2$s">',
                'after_widget'  => '</div>',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            ]
        );

        register_sidebar(
            [
                'name'          => __( 'Footer', 'hammersportmarketing' ),
                'id'            => 'sidebar-2',
                'description'   => __('Footer sidebar', 'hammersportmarketing'),
                'before_widget' => '<div id="%1$s" class="widget widget-footer %2$s">',
                'after_widget'  => '</div>',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            ]
        );
    }

 }