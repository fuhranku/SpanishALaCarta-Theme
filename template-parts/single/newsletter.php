<?php

/**
 * Single post newsletter
 *  
 * @author Frank Ponte
 * 
 */
?>

<div class="newsletter w-100 w-md-75 mx-auto p-5 my-5 bg-theme-gradient">
    <h2 class="fw-bold mb-4 text-white text-center text-md-start">
        <?php pll_e("newsletter_form_title"); ?>
    </h2>
    <p class="mb-4 text-white text-center text-md-start">
        <?php pll_e("newsletter_form_description"); ?>
    </p>
    <form action="/" class="theme-form w-100 w-md-50">
        <input type="email" name="s" id="search" value="<?php the_search_query(); ?>" placeholder="johndoe@mail.com" />
        <button type="submit">
            <?php pll_e("subscribe"); ?>
        </button>
    </form>
</div>