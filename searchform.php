<?php

/**
 * Searchform component
 * 
 * @author Frank Ponte
 * 
 */
$search_filter = array_key_exists("filter", $args) ? $args["filter"] : "post";
?>

<form action="/" method="get" class="search-form w-100 d-flex">
    <label for="search" class="sr-only">Search in <?php echo home_url('/'); ?></label>
    <input type="text" name="s" id="search" value="<?php the_search_query(); ?>" placeholder="Buscar" />
    <button type="submit">
        <i class="fas fa-search"></i>
    </button>
    <input type="hidden" value="<?php esc_attr_e($search_filter); ?>" name="post_type" id="post_type" />
</form>