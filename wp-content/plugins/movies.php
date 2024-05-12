<?php
/**
* Plugin Name: Movies
* Description: A plugin enabling the display of movie title on a webpage as blocks.
* Version: 0.1
* Author: Filip Sunjka
* Author URI: https://rs.linkedin.com/in/filip-%C5%A1unjka-36753820b
**/

class Movies_Plugin {
    public function __construct() {
        add_action('init', array($this, 'register_post_type'));
        add_action('add_meta_boxes', array($this, 'add_movie_title_meta_box'));
        add_action('save_post', array($this, 'save_movie_title_meta_box_data'));
        add_action('rest_api_init', array($this, 'register_movie_title_rest_field'));
    }

    public function register_post_type() {
        $labels = array(
            'name'               => _x( 'Movies', 'post type general name', 'movies-plugin' ),
            'singular_name'      => _x( 'Movie', 'post type singular name', 'movies-plugin' ),
            'menu_name'          => _x( 'Movies', 'admin menu', 'movies-plugin' ),
            'name_admin_bar'     => _x( 'Movie', 'add new on admin bar', 'movies-plugin' ),
            'add_new'            => _x( 'Add New', 'movie', 'movies-plugin' ),
            'add_new_item'       => __( 'Add New Movie', 'movies-plugin' ),
            'new_item'           => __( 'New Movie', 'movies-plugin' ),
            'edit_item'          => __( 'Edit Movie', 'movies-plugin' ),
            'view_item'          => __( 'View Movie', 'movies-plugin' ),
            'all_items'          => __( 'All Movies', 'movies-plugin' ),
            'search_items'       => __( 'Search Movies', 'movies-plugin' ),
            'parent_item_colon'  => __( 'Parent Movies:', 'movies-plugin' ),
            'not_found'          => __( 'No movies found.', 'movies-plugin' ),
            'not_found_in_trash' => __( 'No movies found in Trash.', 'movies-plugin' )
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array( 'slug' => 'movie' ),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => null,
            'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
            'show_in_rest'       => true,
            'rest_base'          => 'movies',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
        );

        register_post_type( 'movie', $args );
    }

    public function add_movie_title_meta_box() {
        add_meta_box(
            'movie_title_meta_box',
            __('Movie Title', 'movies-plugin'),
            array($this, 'render_movie_title_meta_box'),
            'movie',
            'normal',
            'high'
        );
    }

    public function render_movie_title_meta_box($post) {
        $movie_title = get_post_meta($post->ID, 'movie_title', true);

        ?>
        <label>Movie Title</label>
        <input type="text" id="movie_title" name="movie_title" value="<?php echo esc_attr($movie_title); ?>" placeholder="Enter Movie Title" style="width: 100%;">
        <?php
    }

    public function save_movie_title_meta_box_data($post_id) {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        if (isset($_POST['movie_title'])) {
            update_post_meta($post_id, 'movie_title', sanitize_text_field($_POST['movie_title']));
        }
    }

    public function register_movie_title_rest_field() {
        register_rest_field('movie',
            'movie_title',
            array(
                'get_callback' => array($this, 'get_movie_title_meta_field'),
                'update_callback' => null,
                'schema' => null,
            )
        );
    }

    public function get_movie_title_meta_field($object, $field_name, $request) {
        return get_post_meta($object['id'], 'movie_title', true);
    }
}

new Movies_Plugin();