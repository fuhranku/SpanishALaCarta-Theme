<?php
/**
 * Single post comments form
 *  
 * @author Frank Ponte
 * 
 */
?>

<form action="#" class="comment-form">
    <h3 class="fw-bold">Escríbenos un comentario</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper integer donec faucibus faucibus elit mauris pellentesque viverra.
    </p>
    <div class="row gy-4 mt-4">
        <div class="col-12 d-flex flex-column">
            <label for="nameInput" class="form-label fs-5 fw-bold">Nombre</label>
            <input type="text" name="nameInput" placeholder="Ingrese su nombre" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none">
                <li>Error 1</li>
                <li>Error 2</li>
            </ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="emailInput" class="form-label fs-5 fw-bold">Email</label>
            <input type="email" name="emailInput" placeholder="Ingrese su email" class="form-input">
            <ul class="error-list mt-3 small text-danger d-none">
                <li>Error 1</li>
                <li>Error 2</li>
            </ul>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="messageInput" class="form-label fs-5 fw-bold">Comentario</label>
            <textarea name="messageInput" rows="5" placeholder="Escriba su comentario" class="form-textarea"></textarea>
            <ul class="error-list mt-3 small text-danger d-none">
                <li>Error 1</li>
                <li>Error 2</li>
            </ul>
        </div>
        <button type="submit" class="btn btn-primary w-fit-content mx-auto">Publicar</button>
    </div>
</form>