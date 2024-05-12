<?php
/**
 * The template for displaying all single movies
 */

get_header();
?>

	<main id="primary" class="site-main container">

		<?php
		while ( have_posts() ) :
			the_post();

            get_template_part( 'template-parts/content', 'single-movie' );

		endwhile;
		?>

	</main>

<?php
get_footer();
