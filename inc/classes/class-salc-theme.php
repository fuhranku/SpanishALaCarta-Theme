<?php

/**
 * Bootstraps the theme
 * 
 * @package SpanishALaCarte
 */

namespace SPANISHALACARTE\Inc;

use SPANISHALACARTE\Inc\Traits\Singleton;
use WP_Customize_Image_Control;

class SALC_THEME
{
	use Singleton;

	protected function __construct()
	{

		// Load class.
		Assets::get_instance();
		Menus::get_instance();
		MetaBoxes::get_instance();
		Sidebars::get_instance();

		$this->setup_hooks();
	}

	protected function setup_hooks()
	{

		/**
		 * Actions.
		 */
		add_action('after_setup_theme', [$this, 'setup_theme']);
		add_action('customize_register', [$this, 'theme_customizer_options']);

		/**
		 * Filters
		 */
		add_filter('body_class', [$this, 'theme_add_body_class']);
		add_filter('wp_generate_attachment_metadata', [$this, 'theme_generate_attachment_metadata'], 10, 2);
		add_filter('the_content', [$this, 'theme_filter_the_content_in_the_main_loop']);
		add_filter('excerpt_length', [$this, 'theme_excerpt_length']);
		/**
		 * AJAX Calls
		 */
		add_action('wp_ajax_nopriv_theme_send_contact_form', [$this, 'send_contact_form']);
		add_action('wp_ajax_theme_send_contact_form', [$this, 'send_contact_form']);
		add_action('wp_ajax_nopriv_theme_send_newsletter_form', [$this, 'send_newsletter_form']);
		add_action('wp_ajax_theme_send_newsletter_form', [$this, 'send_newsletter_form']);
		add_action('wp_ajax_nopriv_theme_send_comment_form', [$this, 'send_comment_form']);
		add_action('wp_ajax_theme_send_comment_form', [$this, 'send_comment_form']);
	}

	public function setup_theme()
	{
		/**
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

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
		add_theme_support('post-thumbnails');

		/**
		 * Register image sizes.
		 */
		add_image_size('featured-thumbnail', 350, 233, true);
		add_image_size('tiny-lazy', 100, 100, false);

		// Add theme support for selective refresh for widgets.
		/**
		 * WordPress 4.5 includes a new Customizer framework called selective refresh
		 *
		 * Selective refresh is a hybrid preview mechanism that has the performance benefit of not having to refresh the entire preview window.
		 *
		 * @link https://make.wordpress.org/core/2016/03/22/implementing-selective-refresh-support-for-widgets/
		 */
		add_theme_support('customize-selective-refresh-widgets');

		// Add default posts and comments RSS feed links to head.
		add_theme_support('automatic-feed-links');

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
		add_theme_support('editor-styles');
	}

	public function theme_customizer_options($wp_customize)
	{

		$wp_customize->add_setting('salc_header_logo', array(
			'sanitize_callback' => 'esc_url_raw'
		));
		$wp_customize->add_setting('salc_footer_logo', array(
			'sanitize_callback' => 'esc_url_raw'
		));

		$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'salc_logo_control', array(
			'label' => 'Upload Header Logo',
			'priority' => 20,
			'section' => 'title_tagline',
			'settings' => 'salc_header_logo',
			'button_labels' => array( // All These labels are optional
				'select' => 'Select Logo',
				'remove' => 'Remove Logo',
				'change' => 'Change Logo',
			)
		)));

		$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'salc_footer_logo_control', array(
			'label' => 'Upload Footer Logo',
			'priority' => 20,
			'section' => 'title_tagline',
			'settings' => 'salc_footer_logo',
			'button_labels' => array( // All These labels are optional
				'select' => 'Select Logo',
				'remove' => 'Remove Logo',
				'change' => 'Change Logo',
			)
		)));
	}

	public function theme_add_body_class($classes)
	{
		return array_merge($classes, ['overflow-hidden']);
	}

	/**
	 * Extract the base64 encoded version of it and then add it to the database.
	 */
	public function theme_generate_attachment_metadata($metadata, $attachment_id)
	{
		// Check if the 'tiny-lazy' version exists.
		if (isset($metadata["sizes"]["tiny-lazy"])) {
			// Get the image src
			$src = wp_get_attachment_image_src($attachment_id, "tiny-lazy");
			// base64 encode the image
			$base64 = base64_encode(file_get_contents(wp_get_attachment_image_src($attachment_id, "tiny-lazy")[0]));
			// Add the base64 encoded value as a custom field to the image
			update_post_meta($attachment_id, 'base64', $base64);
		}
		return $metadata;
	}

	/**
	 * Add lazyload functionalities to images used in the_loop
	 */
	public function theme_filter_the_content_in_the_main_loop($content)
	{
		// Check if we are in the main query and in a single page
		if (is_single() && in_the_loop() && is_main_query()) {

			// Find all figure elements from the post content

			$pattern = '#<\s*?figure\b[^>]*>(.*?)</figure\b[^>]*>#s';

			if (preg_match_all($pattern, $content, $matches)) {
				foreach ($matches[0] as $index => $match) {
					// Convert the string to DOM objects so that we can access element attributes easily
					$dom = new DOMDocument();
					@$dom->loadHTML($match);

					// The figure element
					$figure = $dom->getElementsByTagName("figure")[0];
					$figureClass = $figure->attributes["class"]->value;


					// The below lines are used to extrace the size of the image.
					// The size of the image is added to the class in the form size-{size}
					$end = strpos($figureClass, " ", strpos($figureClass, "size-"));
					$end = $end ? $end : strlen($figureClass);

					$imgSize = substr($figureClass, strpos($figureClass, "size-") + 5, $end);

					// Check if image was resized
					$isResized = strpos($figureClass, "is-resized");

					// The image element
					$img = $dom->getElementsByTagName("img")[0];
					$imgAttributes = $img->attributes;

					// Store all attributes of the image to an array
					$newImageProperties = array();
					foreach ($imgAttributes as $attr) {
						$newImageProperties[$attr->name] = $attr->value;
					}

					// The below two lines are used to extract the class of the image. The class contains the id of the image.
					preg_match('/\bwp-image-\w+/', $newImageProperties["class"], $idMatch);
					$imageId = substr($idMatch[0], strlen("wp-image-"));

					// Get the base64 and mimetype of the image
					$base64 = get_post_meta($imageId, "base64")[0];
					$mimeType = get_post_mime_type($imageId);

					$image = wp_get_attachment_image_src($imageId, $imgSize);

					// These properties have to be changed since they need to be handled by lazyload
					$newImageProperties["class"] = $newImageProperties["class"] . " lazyload";
					$newImageProperties["data-src"] = $newImageProperties["src"];
					$newImageProperties["src"] = "data:image/$mimeType;base64, $base64";
					$newImageProperties["data-srcset"] = $newImageProperties["srcset"];
					$newImageProperties["srcset"] = "";

					// If the image is not resized, set the image width as width attribute
					if (!$isResized) {
						$newImageProperties["width"] = $image[1];
					}

					// Create a new image with all the original attributes

					$newImage = "<img";
					foreach ($newImageProperties as $prop => $propValue) {
						$newImage .= " $prop='$propValue'";
					}
					$newImage .= "/>";

					// Replace the old image with the new one.
					$content = str_replace($matches[1][$index], $newImage, $content);
				}
			}
		}

		return $content;
	}

	/**
	 * Change excerpt length limit
	 */
	public function theme_excerpt_length($length)
	{
		return 135;
	}

	/**
	 * Handle AJAX contact form sending
	 */
	public function send_contact_form()
	{
		// Security token verification to prevent malicious post requests
		if (check_ajax_referer('contact-submit-action', 'security')) {
			// Get data from POST request
			$formData = $_POST['form'];
			// Decode to a PHP assoaciative array and remove slashes that JS JSON.stringify creates
			$formData = json_decode(stripslashes($_POST['form']), true);
			// Data Validation stage 
			// Keys must have the same name that was used to declare it in FRONTEND JS Code
			$validation = [
				'fullName' => ["alpha", "required"],
				'email' => ["email", "required"],
				'message' => ["required"]
			];
			$errors = \SPANISHALACARTE\Inc\Validator::validate($formData, $validation);
			// If phone value is 0 and errors array is not empty then request it's invalid, don't send email
			$secret_key = "6LemoUgcAAAAALldnpnkMItwkoZ4bx27gRXxKyGe";
			$isCaptchaValid = $this->validateCaptcha($formData["captchaResponse"], $secret_key);
			if ($formData["phoneNumber"] != 0 && empty($errors)) {
				if (!$isCaptchaValid) {
					wp_send_json(null, 400);
				}
				$from = "Spanisch a la carte <no-reply@spanischalacarte.com>";
				$to = "info@spanischalacarte.com";
				$subject = "Contact form submission from spanischalacarte.com";
				$body = '
					Name: ' . $formData['fullName'] . '
					Email: ' . $formData['email'] . '
					Message: ' . $formData['message'] . '
				';
				$headers = [
					"From:" . $from,
					'Content-type: text/plain; charset=utf-8'
				];
				wp_mail($to, $subject, $body, $headers);
				wp_send_json_success($errors, 200);
			}
			wp_send_json_success($errors, 200);
			// echo json_encode($errors);
		} else {
			wp_send_json(null, 400);
		}
		wp_die();
	}

	public function send_comment_form()
	{
		// Security token verification to prevent malicious post requests
		if (check_ajax_referer('comment-submit-action', 'security')) {
			// Get data from POST request
			$formData = $_POST['form'];
			// Decode to a PHP assoaciative array and remove slashes that JS JSON.stringify creates
			$formData = json_decode(stripslashes($_POST['form']), true);
			// Data Validation stage 
			// Keys must have the same name that was used to declare it in FRONTEND JS Code
			$validation = [
				'name' => ["alpha", "required"],
				'email' => ["email", "required"],
				'message' => ["required"]
			];
			$errors = \SPANISHALACARTE\Inc\Validator::validate($formData, $validation);
			// If phone value is 0 and errors array is not empty then request it's invalid, don't send email
			$secret_key = "6LemoUgcAAAAALldnpnkMItwkoZ4bx27gRXxKyGe";
			$isCaptchaValid = $this->validateCaptcha($formData["captchaResponse"], $secret_key);
			if (empty($errors)) {
				if (!$isCaptchaValid) {
					wp_send_json(null, 400);
				}
				$comment_data = [
					'comment_post_ID' => $formData["post_id"],
					'author' => $formData["name"],
					'email' => $formData["email"],
					'comment' => $formData["message"]
				];
				$comment = wp_handle_comment_submission($comment_data);
				if (is_wp_error($comment)) {
					$error_data = intval($comment->get_error_data());
					if (!empty($error_data)) {
						error_log('<p>' . $comment->get_error_message() . '</p>');
						error_log('Comment Submission Failure \n' . var_dump(array('response' => $error_data, 'back_link' => true)));
					} else {
						error_log('Unknown error');
					}
				}
				wp_send_json_success($errors, 200);
			}
			wp_send_json_success($errors, 200);
			// echo json_encode($errors);
		} else {
			wp_send_json(null, 400);
		}
		wp_die();
	}

	public function validateCaptcha($response, $secret_key)
	{
		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
			CURLOPT_POST => 1,
			CURLOPT_POSTFIELDS => array(
				'secret' => $secret_key,
				'response' => $response
			)
		));

		$response = curl_exec($curl);
		curl_close($curl);
		$captcha_success = json_decode($response);
		if (!$captcha_success->success) {
			return false;
		}
		return true;
	}

	public function send_newsletter_form()
	{
		// Security token verification to prevent malicious post requests
		if (check_ajax_referer('footer-newsletter-submit-action', 'security')) {
			// Get data from POST request
			$formData = $_POST['form'];
			// Decode to a PHP assoaciative array and remove slashes that JS JSON.stringify creates
			$formData = json_decode(stripslashes($_POST['form']), true);
			// Data Validation stage 
			// Keys must have the same name that was used to declare it in FRONTEND JS Code
			$validation = [
				'email' => ["email", "required"],
			];
			$errors = \SPANISHALACARTE\Inc\Validator::validate($formData, $validation);
			// If phone value is 0 and errors array is not empty then request it's invalid, don't send email
			if (empty($errors)) {
				$from = "Website Spanisch a la carte <no-reply@spanischalacarte.com>";
				$to = [$formData['email'], "info@spanischalacarte.com"];
				$subject = "You are now in our subscription list!";
				$body = '
					Thank you. You are now in our subscription list.
						';
				$headers = [
					"From:" . $from,
					'Content-type: text/plain; charset=utf-8'
				];
				wp_mail($to, $subject, $body, $headers);
				wp_send_json_success($errors, 200);
			}
			wp_send_json_success($errors, 200);
			// echo json_encode($errors);
		} else {
			wp_send_json(null, 400);
		}
		wp_die();
	}
}
