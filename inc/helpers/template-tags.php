<?php

/**
 * Custom template tags for the theme.
 *
 * @package SpanishALaCarte
 */

/**
 * Gets the thumbnail with Lazy Load.
 * Should be called in the WordPress Loop.
 *
 * @param int|null $post_id               Post ID.
 * @param string   $size                  The registered image size.
 * @param array    $additional_attributes Additional attributes.
 *
 * @return string
 */
function get_the_post_custom_thumbnail($post_id, $size = 'featured-thumbnail', $additional_attributes = [])
{
	$custom_thumbnail = '';

	if (null === $post_id) {
		$post_id = get_the_ID();
	}

	if (has_post_thumbnail($post_id)) {
		$default_attributes = [
			'loading' => 'lazy'
		];

		$attributes = array_merge($additional_attributes, $default_attributes);

		$custom_thumbnail = wp_get_attachment_image(
			get_post_thumbnail_id($post_id),
			$size,
			false,
			$attributes
		);
	}

	return $custom_thumbnail;
}

/**
 * Renders Custom Thumbnail with Lazy Load.
 *
 * @param int    $post_id               Post ID.
 * @param string $size                  The registered image size.
 * @param array  $additional_attributes Additional attributes.
 */
function the_post_custom_thumbnail($post_id, $size = 'featured-thumbnail', $additional_attributes = [])
{
	echo get_the_post_custom_thumbnail($post_id, $size, $additional_attributes);
}

function hsm_posted_on()
{
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	// Post is modified (When post published time is not equal to post modified time)
	if (get_the_time('U') !== get_the_modified_time('U')) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>
		<time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf(
		$time_string,
		esc_attr(get_the_date(DATE_W3C)),
		esc_attr(get_the_date()),
		esc_attr(get_the_modified_date(DATE_W3C)),
		esc_attr(get_the_modified_date())
	);

	$posted_on = sprintf(
		esc_html_x('Posted on %s', 'post date', 'hammersportmarketing'),
		'<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
	);

	echo '<span class="posted-one text-secondary">' . $posted_on . '</span>';
}

function hsm_posted_by()
{
	$byline = sprintf(
		esc_html_x('by %s', 'post author', 'hammersportmarketing'),
		'<span class="author vcard"><a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
	);

	echo '<span class="byline text-secondary">' . $byline . '</span>';
}

function theme_the_excerpt($trim_character_count = 0)
{

	if (0 === $trim_character_count) {
		the_excerpt();
		return;
	}

	$excerpt = wp_strip_all_tags(get_the_excerpt());
	$excerpt = substr($excerpt, 0, $trim_character_count);
	if (strlen($excerpt) > $trim_character_count - 3) {
		$excerpt = substr($excerpt, 0, strrpos($excerpt, ' '));
		echo $excerpt . '...';
	} else {
		echo $excerpt;
	}
}

function hsm_excerpt_more($more = '')
{
	if (!is_single()) {
		$more = sprintf(
			'<button><a class="hsm-read-more text-white" href="%1$s">%2$s</a></button>',
			get_permalink(get_the_ID()),
			__('Read more', 'hammersportmarketing')
		);
	}
	return $more;
}

function theme_pagination()
{

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

	printf('<nav class="blog-pagination d-inline-flex my-5">%s</nav>', wp_kses(paginate_links($args), $allowed_tags));
}

function theme_lazy_image($id, $classes = "", $alt = "", $width = null, $height = null)
{
	// Fetch the mime type and base64 value
	$mimeType = get_post_mime_type($id);
	//$base64 = get_post_meta($id, "base64")[0];
	ob_start();
	$img_url = wp_get_attachment_image_src($id, "tiny-lazy");
	$img_alt = get_post_meta($id, '_wp_attachment_image_alt', true);
?>
	<img class="<?php echo ('lazyload blur-up ' . $classes); ?>" data-sizes="auto" data-src="<?= $img_url[0]; ?>" data-srcset="<?php echo wp_get_attachment_image_srcset($id, "full"); ?>" alt="<?php echo $alt !== "" ? $alt : $img_alt ?>" <?php if ($width != null) : ?> width=<?= $width ?> <?php endif;
																																																																							if ($height != null) :
																																																																								?> height=<?= $height ?> <?php endif; ?>>
<?php
	echo ob_get_clean();
}

function theme_lazy_video($video_id, $poster_id = "", $classes = "")
{
	ob_start();
?>
	<video class="<?php echo ('lazyload ' . $classes); ?>" <?php if ($poster_id !== "") : ?> data-poster="<?php echo wp_get_attachment_url($poster_id); ?>" <?php endif; ?> preload="none" controls>
		<source src="<?php echo wp_get_attachment_url($video_id); ?>" type=video/mp4>
	</video>
<?php
	echo ob_get_clean();
}

function get_string_between($string, $start, $end)
{
	$string = ' ' . $string;
	$ini = strpos($string, $start);
	if ($ini == 0) return '';
	$ini += strlen($start);
	$len = strpos($string, $end, $ini) - $ini;
	return substr($string, $ini, $len);
}

function get_current_template_name()
{
	return strtolower(get_string_between(get_page_template_slug(), "page.", ".php"));
}

function theme_get_page_banner()
{
	if (is_front_page()) {
		return get_template_part('template-parts/header/banners/home-banner', 'frontpage');
	} else if (is_home()) {
		$arguments = [];
		$page_for_posts = get_option('page_for_posts');
		if (get_field("blog-banner", $page_for_posts) !== null) {
			$acf_group = get_field("blog-banner", $page_for_posts);
			$arguments = [
				"image_id" => array_key_exists("image", $acf_group) ? $acf_group["image"] : 0,
				"title" => array_key_exists("title", $acf_group) ? $acf_group["title"] : "",
				"subtitle" => array_key_exists("subtitle", $acf_group) ? $acf_group["subtitle"] : "",
			];
		}
		return get_template_part('template-parts/header/banners/common-banner', 'All pages except homepage', $arguments);
	} else if (is_shop() || is_product_category()) {
		$arguments = [
			"title" => woocommerce_page_title(false)
		];
		return get_template_part('template-parts/header/banners/common-banner', 'Woocommerce store', $arguments);
	} else {
		$page_slug = get_current_template_name() . "-";
		$ACF_banner_group_slug = $page_slug . "banner";
		$arguments = [];
		if (get_field($ACF_banner_group_slug) !== null) {
			$acf_group = get_field($ACF_banner_group_slug);
			$arguments = [
				"image_id" => array_key_exists("image", $acf_group) ? $acf_group["image"] : 0,
				"title" => array_key_exists("title", $acf_group) ? $acf_group["title"] : "No title has been set on ACF",
				"subtitle" => array_key_exists("subtitle", $acf_group) ? $acf_group["subtitle"] : "No subtitle has been set on ACF",
			];
		}
		return get_template_part('template-parts/header/banners/common-banner', 'All pages except homepage', $arguments);
	}
}

function theme_get_the_author_name()
{
	return printf('%1$s', get_the_author_meta("user_nicename"));
	// if(empty(get_the_author_meta("first_name")) || empty(get_the_author_meta("last_name"))){
	// 	return the_author_meta("display_name");
	// }
	// return printf('%1$s %2$s',get_the_author_meta("first_name"),get_the_author_meta("last_name"));
}

function theme_the_author_name()
{
	return get_the_author_meta("user_nicename");
}



function theme_blog_page_title()
{
	$query = get_queried_object();
	$title = is_category() ? $query->name : $query->labels->name;
	if (is_home()) {
		$all_posts = pll__("All posts");
		$last_word_start = strrpos($all_posts, ' ') + 1; // +1 so we don't include the space in our result
		$last_word = substr($all_posts, $last_word_start);
		$all_posts = [
			substr($all_posts, 0, $last_word_start),
			$last_word
		];
		printf('%1$s <span class="text-red">%2$s</span>', $all_posts[0], $all_posts[1]);
	} else if (is_category()) {
		printf(
			'%1$s - <span class="text-red">%2$s</span>',
			pll__("Category"),
			$title
		);
	} else if (is_author()) {
		printf(
			'%1$s - <span class="text-red">%2$s</span>',
			pll__("Author"),
			theme_the_author_name()
		);
	} else if (is_search()) {
		global $wp_query;
		printf(
			'%1$s %2$s <span class="text-red"> %3$s </span>',
			$wp_query->found_posts,
			pll__("results_found"),
			$_GET["s"]
		);
	}
}

function theme_get_the_post_date($post = null)
{
	if (pll_current_language() == "es" || pll_current_language() == "de") {
		printf('%1$s', get_the_date("d/m/y", $post));
	} else {
		printf('%1$s', get_the_date("m/d/y", $post));
	}
}

function theme_get_comment_date($comment_ID)
{
	if (pll_current_language() == "es" || pll_current_language() == "de") {
		printf('%1$s', get_comment_date("d/m/y", $comment_ID));
	} else {
		printf('%1$s', get_comment_date("m/d/y", $comment_ID));
	}
}
