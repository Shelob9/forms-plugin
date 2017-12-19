<?php
/**
 * Plugin Name:     Forms Plugin
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     forms-plugin
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Forms_Plugin
 */

define( "FORMPLUGIN_VERSION", "0.1.0" );
add_action( 'enqueue_block_editor_assets', function () {
    $blocks = file_get_contents( __DIR__ .'/blocks.json');
    $dir =  '/client/blocks/dist';
    $block_js = $dir. '/main.js';
    $editor_css = 'main.css';
    wp_enqueue_script( 'formsplugin', plugins_url( $block_js, __FILE__ ), array(
        'wp-blocks',
        'wp-i18n',
        'wp-element',
    ), FORMPLUGIN_VERSION );

    /**wp_enqueue_style( 'formsplugin', plugins_url( $editor_css, __FILE__ ), array(
        'wp-blocks',
    ), filemtime( "$dir/$editor_css" ) );**/
} );

