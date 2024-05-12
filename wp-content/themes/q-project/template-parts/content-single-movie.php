<?php
/**
 * The template part for displaying single movie content
 */

?>

<article id="post-<?php the_ID(); ?>">
    <h1><?php echo the_title() ?></h1>
    <?php echo the_content() ?>
    <hr>
    <h2>Movie title: <?php echo get_post_meta( get_the_ID(), 'movie_title', true );?></h2>
</article>