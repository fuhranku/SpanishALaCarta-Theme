<?php

/**
 * Bootstraps the theme
 * 
 * @package SpanishALaCarte
 */

namespace SPANISHALACARTE\Inc;

use SPANISHALACARTE\Inc\Traits\Singleton;
use WP_Customize_Image_Control;

class SALC_THEME{
	use Singleton;

	protected function __construct() {

		// Load class.
		Assets::get_instance();
		Menus::get_instance();
		MetaBoxes::get_instance();
		Sidebars::get_instance();

		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'after_setup_theme', [ $this, 'setup_theme' ] );
		add_action( 'customize_register', [$this, 'theme_customizer_options'] );
		
		/**
		 * Filters
		 */
		add_filter( 'body_class', [$this, 'theme_add_body_class'] );


	}

    public function setup_theme(){
		/**
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Custom logo.
		 *
		 * @see Adding custom logo
		 * @link https://developer.wordpress.org/themes/functionality/custom-logo/#adding-custom-logo-support-to-your-theme
		 */
		add_theme_support(
			'custom-logo',
			[
				'header-text' => [
					'site-title',
					'site-description',
				],
				'height'      => 100,
				'width'       => 400,
				'flex-height' => true,
				'flex-width'  => true,
			]
		);
		/**
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * Adding this will allow you to select the featured image on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/**
		 * Register image sizes.
		 */
		add_image_size( 'featured-thumbnail', 350, 233, true );

		// Add theme support for selective refresh for widgets.
		/**
		 * WordPress 4.5 includes a new Customizer framework called selective refresh
		 *
		 * Selective refresh is a hybrid preview mechanism that has the performance benefit of not having to refresh the entire preview window.
		 *
		 * @link https://make.wordpress.org/core/2016/03/22/implementing-selective-refresh-support-for-widgets/
		 */
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Switch default core markup for search form, comment form, comment-list, gallery, caption, script and style
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			[
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			]
		);

        add_editor_style();
        add_theme_support('wp-block-styles');
        add_theme_support('align-wide');

				/**
		 * Loads the editor styles in the Gutenberg editor.
		 *
		 * Editor Styles allow you to provide the CSS used by WordPress’ Visual Editor so that it can match the frontend styling.
		 * If we don't add this, the editor styles will only load in the classic editor ( tiny mice )
		 *
		 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#editor-styles
		 */
		add_theme_support( 'editor-styles' );
    }

	public function theme_customizer_options($wp_customize){

		$wp_customize->add_setting( 'salc_header_logo', array(
			'sanitize_callback' => 'esc_url_raw'
		));
		$wp_customize->add_setting( 'salc_footer_logo', array(
			'sanitize_callback' => 'esc_url_raw'
		));
		
		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'salc_logo_control', array(
			'label' => 'Upload Header Logo',
			'priority' => 20,
			'section' => 'title_tagline',
			'settings' => 'salc_header_logo',
			'button_labels' => array(// All These labels are optional
						'select' => 'Select Logo',
						'remove' => 'Remove Logo',
						'change' => 'Change Logo',
						)
		)));

		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'salc_footer_logo_control', array(
			'label' => 'Upload Footer Logo',
			'priority' => 20,
			'section' => 'title_tagline',
			'settings' => 'salc_footer_logo',
			'button_labels' => array(// All These labels are optional
						'select' => 'Select Logo',
						'remove' => 'Remove Logo',
						'change' => 'Change Logo',
						)
		)));
	}

	public function theme_add_body_class($classes){
		return array_merge( $classes, ['overflow-hidden'] );
	}
}