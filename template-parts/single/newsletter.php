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
        ¿Te gusta este artículo?
    </h2>
    <p class="mb-4 text-white text-center text-md-start">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
    </p>
    <form action="/" class="theme-form w-100 w-md-50">
        <input type="email" name="s" id="search" value="<?php the_search_query();?>" placeholder="johndoe@mail.com"/>
        <button type="submit">
            Suscribirse
        </button>
    </form>
    <p class="small text-white mt-2 text-center text-md-start">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliq
    </p>
</div>