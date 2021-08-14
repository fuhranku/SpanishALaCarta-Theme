<?php

/**
 * Searchform component
 * 
 * @author Frank Ponte
 * 
 */
?>

<form action="/" method="get" class="search-form w-100 d-flex">
    <label for="search" class="sr-only">Search in <?php echo home_url( '/' ); ?></label>
    <input type="text" name="s" id="search" value="<?php the_search_query();?>" placeholder="Buscar" />
    <button type="submit">
        <i class="fas fa-search"></i>
    </button>
    <?php if(is_home() || is_search() || is_author()):?>
        <input type="hidden" value="post" name="post_type" id="post_type" />
    <?php endif; ?>
</form>