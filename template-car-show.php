<?php
/**
 * Template Name: Car Show Page
 *
 * This is the template that displays car model pages.
 *
 * @package Jetour_T2_Theme
 */

get_header();

$anchor_logo_url = get_post_meta(get_the_ID(), '_jetour_anchor_logo_url', true);
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

            <!-- Anchor Bar Placeholders -->
            <div id="anchor-pc-point" class="pc-pad" data-logo-url="<?php echo esc_url($anchor_logo_url); ?>"></div>
            <div id="anchor-mb-point" class="mb-only" data-logo-url="<?php echo esc_url($anchor_logo_url); ?>"></div>
             <div id="anchor-placeholder"></div>
			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

