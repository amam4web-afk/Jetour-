<?php
/**
 * Template Name: Car Show Page
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">

        <?php
        // Start the WordPress Loop.
        while ( have_posts() ) :
            the_post();

            // This is the key function. It will output whatever HTML you
            // have pasted into the WordPress editor for this specific page.
            the_content();

        endwhile; // End of the loop.
        ?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();


