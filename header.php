<?php

/**
 * Header File
 * 
 * @package Hammersportmarketing
 */
?>

<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>" class="mt-0">

<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <script defer src='https://www.google.com/recaptcha/api.js'></script>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div id="page" class="site">
        <header id="mainHeader" class="site-header position-relative z-50" role="banner">
            <?php
            get_template_part('template-parts/header/nav');
            theme_get_page_banner();
            ?>
        </header>
        <div id="content" class="site-content">