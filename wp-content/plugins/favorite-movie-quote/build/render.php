<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	$quote = isset( $attributes['quote'] ) ? $attributes['quote'] : '';
	echo '<p class="favorite-movie-quote">' . esc_html( $quote ) . '</p>';
	?>
</p>
