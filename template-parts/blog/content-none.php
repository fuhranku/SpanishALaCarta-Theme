<?php
/**
 * Blog Content None
 * 
 * @author Frank Ponte 
 */

?>

<div class="container content-none px-0">
    <p class="fs-4">
        <?php
            if(is_search() || is_product_category()){
                pll_e("no_match_text"); 
            }else if(is_shop()){
                pll_e("We're sorry. The shop is currently empty, try again later.");
            }
        ?>
    </p>
</div>