<?php
/**
 * Front page template
 * 
 * @package Hammersportmarketing
 */
get_header();

/** Content */

get_template_part('template-parts/homepage/why-us', 'Homepage Section');
get_template_part('template-parts/homepage/how-to', 'Homepage Section');
get_template_part('template-parts/homepage/nivelation-test', 'Homepage Section');
get_template_part('template-parts/homepage/storytelling', 'Homepage Section');
get_template_part('template-parts/homepage/brand-video', 'Homepage Section');
get_template_part('template-parts/homepage/testimonials', 'Homepage Section');
get_template_part('template-parts/homepage/lead-magnet', 'Homepage Section');
get_template_part('template-parts/homepage/contact-and-faq', 'Homepage Section');

get_footer();