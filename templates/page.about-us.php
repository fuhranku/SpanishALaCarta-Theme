<?php
/**
 * About us page template
 * 
 * @package Hammersportmarketing
 * Template Name: About us
 * Template Post Type: post, page
 */
get_header();

get_template_part("template-parts/about-us-page/content", "About us section");
get_template_part('template-parts/components/common/video-section', 'About us Section');
get_template_part('template-parts/components/common/contact-and-faq', 'About us Section');


get_footer();