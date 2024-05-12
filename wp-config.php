<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'q' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$/VJd}c:RS~CSZ5}9BcShC#<5r2`oy0E{H6r.-&n/Zih&d40@aP(;zbdUdQn8[U>' );
define( 'SECURE_AUTH_KEY',  '*zzX190gx:Lt%zLPcGeTL2V ,:{Nerj@cMg[UOsTVR<3JUE>cbsRssfHsh#kJOK#' );
define( 'LOGGED_IN_KEY',    'D2?vWt[sIomD&$>cSDLDDAuzPY>XePNy2$^TC[l9X_JfG^i)Np0L~{!4j}pz$v./' );
define( 'NONCE_KEY',        '%}3?^szHCiqY;XqxFOly~Y`*pDRA,q/~zvuktASe30tV@P Ui!Gb@9m;.w`CuK [' );
define( 'AUTH_SALT',        'e4W0`JY%X$nM@%k;;qe/e(wu@AKvnf_HKN;&-2DT23a8Hqiyn[wuJ7!W&c.-5%JC' );
define( 'SECURE_AUTH_SALT', 'B}{8NVe,9wfIET.-zgod})0JdGo105}*nyQmMy)Adl&#8m!CmYi&@D|y]zY;[wHH' );
define( 'LOGGED_IN_SALT',   '?Jsb+C@ebZ#:Uwuk%Yw[/,7ClM$aA0HKT!p^=W)H,3CG)|4?uKHiG&bX^n35r~2)' );
define( 'NONCE_SALT',       '3 T/}l5&Y?+iw_Z,0O@},-<*8HX!B0?,9nQ&)2rm7vsxkOc2u#HZ uE~Lvay^;IN' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'WP_AUTO_UPDATE_CORE', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
