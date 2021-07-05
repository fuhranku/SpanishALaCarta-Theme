<?php 
/**
 * Register menus
 * 
 * @package SpanishALaCarte
 */

 namespace SPANISHALACARTE\Inc;

 use SPANISHALACARTE\Inc\Traits\Singleton;

 class Menus{
     use Singleton;

     protected function __construct(){

        // Load class
        $this->setup_hooks();
    }

    protected function setup_hooks(){
        // Actions and filters 
        add_action( 'init', [$this, 'register_menus']);
    }

    public function register_menus(){
        register_nav_menus( [
            'salc-header-menu' => esc_html__( 'Header Menu', 'spanishalacarta' ),
            'salc-footer-menu' => esc_html__( 'Footer Menu', 'spanishalacarta' )
        ]);
    }

    public function get_menu_id($location){
        // Get all the locations
        $locations = get_nav_menu_locations();
        
        // Get object id by location
        $menu_id = $locations[$location];

        return !empty($menu_id) ? $menu_id : '';
         
    }

    public function get_child_menu_items($menu_array, $parent_id){
        $child_menus = [];

        if (!empty($menu_array) && is_array($menu_array)){
            foreach( $menu_array as $menu){
                if(intval($menu->menu_item_parent) === $parent_id){
                    array_push($child_menus, $menu);
                }
            }
        }

        return $child_menus;
    }

    public function get_active_menu_item($menu_item_id){
        if (get_the_ID() == $menu_item_id)
            return 'active';
        if (get_option( 'page_on_front' ) == $menu_item_id)
            return 'active';
        return '';
    }

 }  