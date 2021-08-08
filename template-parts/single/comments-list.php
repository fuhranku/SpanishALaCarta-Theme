<?php
/**
 * Single post comments list
 *  
 * @author Frank Ponte
 * 
 */
?>

<ul class="comments-container my-5 px-0 px-md-3">
    <?php
        $args = array(
            'post_id' => get_the_ID() // use user_id
        );
        $comments = get_comments( $args );
        foreach ( $comments as $comment ) :
    ?>
        <li class="comment d-flex align-items-start mb-4">
            <div class="avatar me-4 d-none d-md-flex">
                <i class="fas fa-user"></i>
            </div>
            <div class="content">
                <div class="d-flex flex-wrap">
                    <h5 class="fw-bold">
                        <?php esc_html_e($comment->comment_author); ?> - &nbsp;    
                    </h5>
                    <p class="text-red">
                        <?php esc_html_e(theme_get_comment_date($comment->comment_ID));?>
                    </p>
                </div>
                <p>
                    <?php
                    printf(
                        wp_kses(
                            __( '%s'),
                            [
                                'a' => [
                                    'class' => [],
                                    'href' => []
                                ]
                            ]
                        ),
                        $comment->comment_content
                    )
                    ?>
                </p>
            </div>
        </li>
    <?php endforeach;?>
</ul>