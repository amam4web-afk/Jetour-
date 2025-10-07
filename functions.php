<?php
/**
 * Jetour Theme functions and definitions
 * @package Jetour_Theme
 */

if ( ! defined( '_S_VERSION' ) ) {
	define( '_S_VERSION', '1.0.0' );
}

function jetour_enqueue_assets() {
	$theme_uri = get_template_directory_uri();

    wp_enqueue_script( 'jetour-rem-js', $theme_uri . '/data/tms/website/html/js/utils/rem.js', array(), _S_VERSION, false );
	wp_enqueue_style( 'jetour-main-style', get_stylesheet_uri(), array(), _S_VERSION );

	if ( ! is_admin() ) {
		wp_deregister_script( 'jquery' );
		wp_register_script( 'jetour-jquery', $theme_uri . '/data/tms/website/html/js/utils/jquery.js', array(), '1.11.0', true );
		wp_enqueue_script( 'jetour-jquery' );
	}

	wp_enqueue_style( 'jetour-reset', $theme_uri . '/data/tms/website/html/css/reset.css', array(), _S_VERSION );
	wp_enqueue_style( 'jetour-global', $theme_uri . '/data/tms/website/html/css/global.css', array(), _S_VERSION );
	wp_enqueue_style( 'jetour-header-style', $theme_uri . '/data/tms/website/html/css/header/header.css', array(), _S_VERSION );
	wp_enqueue_style( 'jetour-footer-style', $theme_uri . '/data/tms/website/html/css/footer.css', array(), _S_VERSION );
	wp_enqueue_style( 'jetour-drive-modal', $theme_uri . '/data/tms/website/html/css/drive/drive.css', array(), _S_VERSION );
	wp_enqueue_style( 'jetour-message-style', $theme_uri . '/data/tms/website/html/css/message/message.css', array(), _S_VERSION );
	
	wp_enqueue_script( 'jetour-header-script', $theme_uri . '/js/header-script.js', array('jetour-jquery'), _S_VERSION, true );
    wp_enqueue_script( 'jetour-footer-script', $theme_uri . '/js/footer-script.js', array('jetour-jquery'), _S_VERSION, true );
    wp_enqueue_script( 'jetour-message-script', $theme_uri . '/data/tms/website/html/js/utils/message.js', array(), _S_VERSION, true );
    
    // Pass data from PHP to JavaScript
    $primary_menu_items_data = [];
    $footer_menu_items_data = [];
    $menu_locations = get_nav_menu_locations();
    if ( isset( $menu_locations['primary'] ) ) {
        $menu = wp_get_nav_menu_object( $menu_locations['primary'] );
        if ($menu) {
            $menu_items = wp_get_nav_menu_items( $menu->term_id, array( 'orderby' => 'menu_order' ) );
            $primary_menu_items_data = jetour_build_menu_tree($menu_items);
        }
    }
     if ( isset( $menu_locations['footer'] ) ) {
        $menu = wp_get_nav_menu_object( $menu_locations['footer'] );
        if ($menu) {
            $menu_items = wp_get_nav_menu_items( $menu->term_id, array( 'orderby' => 'menu_order' ) );
            foreach($menu_items as $item) {
                if ($item->menu_item_parent == 0) {
                    $footer_menu_items_data[] = [ 'title' => $item->title, 'url' => $item->url, ];
                }
            }
        }
    }
    
    $copyright_text = get_theme_mod('jetour_copyright_text', '© Copyright {year} JETOUR Auto | KAIFENG JETOUR AUTOMOBILE SALES CO.LTD');
    $copyright_text = str_replace('{year}', date('Y'), $copyright_text);

	$theme_data = array(
		'themeUri'          => $theme_uri,
        'menu'              => $primary_menu_items_data,
        'footer_menu'       => $footer_menu_items_data,
        'logo_url'          => get_theme_mod('jetour_logo'),
        'world_icon_url'    => get_theme_mod('jetour_world_icon'),
        'location_icon_url' => get_theme_mod('jetour_location_icon'),
        'database_icon_url' => get_theme_mod('jetour_database_icon'),
        'location'          => home_url('/'), 
        'copyright_text'    => $copyright_text,
        'footer_logo_url'   => get_theme_mod('jetour_footer_logo'),
        'socials'           => [
            'instagram' => ['url' => get_theme_mod('jetour_instagram_url'), 'icon' => get_theme_mod('jetour_instagram_icon'), 'hover' => get_theme_mod('jetour_instagram_icon_hover')],
            'facebook'  => ['url' => get_theme_mod('jetour_facebook_url'), 'icon' => get_theme_mod('jetour_facebook_icon'), 'hover' => get_theme_mod('jetour_facebook_icon_hover')],
            'youtube'   => ['url' => get_theme_mod('jetour_youtube_url'), 'icon' => get_theme_mod('jetour_youtube_icon'), 'hover' => get_theme_mod('jetour_youtube_icon_hover')],
            'twitter'   => ['url' => get_theme_mod('jetour_twitter_url'), 'icon' => get_theme_mod('jetour_twitter_icon'), 'hover' => get_theme_mod('jetour_twitter_icon_hover')],
        ]
	);
    wp_localize_script('jetour-header-script', 'themeData', $theme_data);
    wp_localize_script('jetour-footer-script', 'themeData', $theme_data);
    wp_localize_script('jetour-anchor-point-script', 'themeData', $theme_data);


	// --- Conditional Loading for Car Show Page Template ---
	if ( is_page_template( 'template-car-show.php' ) ) {
		
        wp_enqueue_style( 'swiper-bundle-style', $theme_uri . '/data/tms/website/html/css/swiper-bundle.min.css', array(), _S_VERSION );
        wp_enqueue_style( 'aliplayer-style', 'https://g.alicdn.com/de/prismplayer/2.9.20/skins/default/aliplayer-min.css', array(), '2.9.20' );
		wp_enqueue_style( 'jetour-anchor-point', $theme_uri . '/data/tms/website/html/css/anchorPoint/anchorPoint.css', array(), _S_VERSION );
        wp_enqueue_style( 'jetour-car-model-banner', $theme_uri . '/data/tms/website/html/css/carModel/banner.css', array(), _S_VERSION );
        wp_enqueue_style( 'jetour-car-model-color', $theme_uri . '/data/tms/website/html/css/carModel/car-color.css', array(), _S_VERSION );
		wp_enqueue_style( 'jetour-car-model-general', $theme_uri . '/data/tms/website/html/css/carModel/general.css', array(), _S_VERSION );
        wp_enqueue_style( 'jetour-car-model-spec', $theme_uri . '/data/tms/website/html/css/carModel/specification.css', array(), _S_VERSION );
		wp_enqueue_style( 'jetour-video-popup', $theme_uri . '/data/tms/website/html/css/about/video/video.css', array(), _S_VERSION );
        wp_enqueue_style( 'jetour-model-test-drive', $theme_uri . '/data/tms/website/html/css/carModel/model-test-drive.css', array(), _S_VERSION );

		wp_enqueue_script( 'gsap-js', $theme_uri . '/data/tms/website/html/js/utils/gsap-minified/gsap.min.js', array(), _S_VERSION, true );
		wp_enqueue_script( 'gsap-scrolltrigger', $theme_uri . '/data/tms/website/html/js/utils/gsap-minified/ScrollTrigger.min.js', array('gsap-js'), _S_VERSION, true );
        wp_enqueue_script( 'gsap-scrollto', $theme_uri . '/data/tms/website/html/js/utils/gsap-minified/ScrollToPlugin.min.js', array('gsap-js'), _S_VERSION, true );
        wp_enqueue_script( 'gsap-cssrule', $theme_uri . '/data/tms/website/html/js/utils/gsap-minified/CSSRulePlugin.min.js', array('gsap-js'), _S_VERSION, true );
        wp_enqueue_script( 'gsap-observer', $theme_uri . '/data/tms/website/html/js/utils/gsap-minified/Observer.min.js', array('gsap-js'), _S_VERSION, true );
        wp_enqueue_script( 'gsap-pixi', $theme_uri . '/data/tms/website/html/js/utils/gsap-minified/PixiPlugin.min.js', array('gsap-js'), _S_VERSION, true );
		wp_enqueue_script( 'swiper-bundle', $theme_uri . '/data/tms/website/html/js/utils/swiper-bundle.min.js', array(), _S_VERSION, true );
		wp_enqueue_script( 'anime-js', 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js', array(), '3.2.1', true );
        wp_enqueue_script( 'scrollreveal-js', 'https://unpkg.com/scrollreveal', array(), null, true);
        wp_enqueue_script( 'aliplayer-js', 'https://g.alicdn.com/de/prismplayer/2.9.20/aliplayer-min.js', array(), '2.9.20', true );
        wp_enqueue_script( 'jetour-model-index', $theme_uri . '/data/tms/website/html/js/model/indexNew.js', array('jetour-jquery'), _S_VERSION, true );
		wp_enqueue_script( 'jetour-car-general', $theme_uri . '/data/tms/website/html/js/en/models/general.js', array('jetour-jquery'), _S_VERSION, true );
        wp_enqueue_script( 'jetour-anchor-point-script', $theme_uri . '/js/anchor-point-script.js', array('jetour-jquery'), _S_VERSION, true );
	}
    
    if ( is_page() ) {
        $post_id = get_the_ID();
        $custom_css_files = get_post_meta($post_id, '_jetour_custom_css', true);
        if (!empty($custom_css_files)) {
            $css_files_array = explode("\n", str_replace("\r", "", $custom_css_files));
            foreach ($css_files_array as $index => $css_file) {
                $css_file = trim($css_file);
                if (!empty($css_file)) {
                    wp_enqueue_style('jetour-custom-css-' . $index, $theme_uri . '/data/tms/website/html/css/' . $css_file, array(), _S_VERSION);
                }
            }
        }
        $custom_js_files = get_post_meta($post_id, '_jetour_custom_js', true);
        if (!empty($custom_js_files)) {
            $js_files_array = explode("\n", str_replace("\r", "", $custom_js_files));
            foreach ($js_files_array as $index => $js_file) {
                $js_file = trim($js_file);
                if (!empty($js_file)) {
                    wp_enqueue_script('jetour-custom-js-' . $index, $theme_uri . '/data/tms/website/html/js/' . $js_file, array('jetour-jquery'), _S_VERSION, true);
                }
            }
        }
    }
}
add_action( 'wp_enqueue_scripts', 'jetour_enqueue_assets' );

function jetour_remove_wpautop_for_template( $content ) {
    if ( is_page_template( 'template-car-show.php' ) ) {
        remove_filter( 'the_content', 'wpautop' );
    }
    return $content;
}
add_filter( 'the_content', 'jetour_remove_wpautop_for_template', 9 );

function jetour_register_menus() {
    register_nav_menus( array( 
        'primary' => esc_html__( 'Primary Menu', 'jetour-theme' ), 
        'footer'  => esc_html__( 'Footer Menu', 'jetour-theme' ),
    ) );
}
add_action( 'init', 'jetour_register_menus' );

function jetour_add_custom_menu_fields($item_id, $item) {
    if ($item->menu_item_parent != 0) {
        wp_nonce_field('jetour_save_custom_menu_fields', 'jetour_custom_menu_nonce');
        $fields = ['pic' => 'Desktop Image URL', 'title' => 'Desktop Title Image URL', 'drive' => 'Test Drive Link', 'driveName' => 'Test Drive Link Text', 'fD' => '3D Visualizer Link', 'fDName' => '3D Visualizer Link Text', 'moreName' => 'Discover More Button Text', 'mPic' => 'Mobile Image URL', 'title_m' => 'Mobile Title Image URL'];
        foreach ($fields as $field_id => $field_label) {
            $value = get_post_meta($item_id, '_menu_item_' . $field_id, true);
            echo '<p class="description"><label>'.__($field_label, 'jetour-theme').'<br /><input type="text" class="widefat" name="menu-item-'.$field_id.'['.$item_id.']" value="'.esc_attr($value).'" /></label></p>';
        }
    }
}
add_action('wp_nav_menu_item_custom_fields', 'jetour_add_custom_menu_fields', 10, 2);

function jetour_save_custom_menu_fields($menu_id, $menu_item_db_id, $args ) {
    if (defined('DOING_AJAX') && DOING_AJAX) { return; }
    if (!isset($_POST['jetour_custom_menu_nonce']) || !wp_verify_nonce($_POST['jetour_custom_menu_nonce'], 'jetour_save_custom_menu_fields')) { return; }
    $fields = ['pic', 'title', 'drive', 'driveName', 'fD', 'fDName', 'moreName', 'mPic', 'title_m'];
    foreach ($fields as $field) {
        $key = 'menu-item-' . $field;
        if (isset($_POST[$key][$menu_item_db_id])) {
            update_post_meta($menu_item_db_id, '_menu_item_' . $field, sanitize_text_field($_POST[$key][$menu_item_db_id]));
        }
    }
}
add_action('wp_update_nav_menu_item', 'jetour_save_custom_menu_fields', 10, 3);

function jetour_build_menu_tree(array &$elements, $parentId = 0) {
    $branch = array();
    foreach ($elements as $key => &$element) {
        if ($element->menu_item_parent == $parentId) {
            $children = jetour_build_menu_tree($elements, $element->ID);
            $item_data = [ 'id' => $element->ID, 'parent_id' => $element->menu_item_parent, 'name' => $element->title, 'more' => $element->url ];
            $fields = ['pic', 'title', 'drive', 'driveName', 'fD', 'fDName', 'moreName', 'mPic', 'title_m'];
            foreach($fields as $field) { $item_data[$field] = get_post_meta($element->ID, '_menu_item_'.$field, true); }
            if ($children) { $item_data['content'] = $children; }
            $branch[] = $item_data;
            unset($elements[$key]);
        }
    }
    return $branch;
}

function jetour_customize_register($wp_customize) {
    // Header Settings
    $wp_customize->add_section('jetour_header_settings', array('title' => __('Header Settings', 'jetour-theme'),'priority' => 30,));
    $header_settings = ['logo' => 'Main Logo', 'world_icon' => 'World Icon', 'location_icon' => 'Location Icon', 'database_icon' => 'Database Icon'];
    foreach($header_settings as $id => $label) {
        $wp_customize->add_setting('jetour_'.$id, array('default' => '','sanitize_callback' => 'esc_url_raw',));
        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'jetour_'.$id.'_control', array('label' => __($label, 'jetour-theme'),'section' => 'jetour_header_settings','settings' => 'jetour_'.$id,)));
    }

    // Footer Settings
    $wp_customize->add_section('jetour_footer_settings', array('title' => __('Footer Settings', 'jetour-theme'),'priority' => 31,));
    $wp_customize->add_setting('jetour_footer_logo', array('default' => '','sanitize_callback' => 'esc_url_raw',));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'jetour_footer_logo_control', array('label' => __('Footer Logo', 'jetour-theme'),'section' => 'jetour_footer_settings','settings' => 'jetour_footer_logo',)));
    $wp_customize->add_setting('jetour_copyright_text', array('default'   => '© Copyright {year} JETOUR Auto | KAIFENG JETOUR AUTOMOBILE SALES CO.LTD','sanitize_callback' => 'wp_kses_post',));
    $wp_customize->add_control('jetour_copyright_text_control', array('label'    => __('Copyright Text ({year} will be replaced)', 'jetour-theme'),'section'  => 'jetour_footer_settings','settings' => 'jetour_copyright_text','type'     => 'textarea',));
    
    // Social Media Settings
    $wp_customize->add_section('jetour_social_settings', array('title' => __('Social Media', 'jetour-theme'), 'priority' => 32));
    $socials = ['instagram', 'facebook', 'youtube', 'twitter'];
    foreach($socials as $social){
        $wp_customize->add_setting('jetour_'.$social.'_url', array('default' => '', 'sanitize_callback' => 'esc_url_raw'));
        $wp_customize->add_control('jetour_'.$social.'_url_control', array('label' => __(ucfirst($social) . ' URL', 'jetour-theme'), 'section' => 'jetour_social_settings', 'settings' => 'jetour_'.$social.'_url', 'type' => 'url'));
        $wp_customize->add_setting('jetour_'.$social.'_icon', array('default' => '', 'sanitize_callback' => 'esc_url_raw'));
        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'jetour_'.$social.'_icon_control', array('label' => __(ucfirst($social) . ' Icon', 'jetour-theme'), 'section' => 'jetour_social_settings', 'settings' => 'jetour_'.$social.'_icon')));
        $wp_customize->add_setting('jetour_'.$social.'_icon_hover', array('default' => '', 'sanitize_callback' => 'esc_url_raw'));
        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'jetour_'.$social.'_icon_hover_control', array('label' => __(ucfirst($social) . ' Icon (Hover)', 'jetour-theme'), 'section' => 'jetour_social_settings', 'settings' => 'jetour_'.$social.'_icon_hover')));
    }
}
add_action('customize_register', 'jetour_customize_register');

function jetour_add_assets_meta_box() {
    add_meta_box('jetour_assets_meta_box', __('Page-Specific Assets', 'jetour-theme'), 'jetour_assets_meta_box_callback', 'page', 'normal', 'high');
}
add_action('add_meta_boxes', 'jetour_add_assets_meta_box');

function jetour_assets_meta_box_callback($post) {
    wp_nonce_field('jetour_save_assets_meta_box_data', 'jetour_assets_meta_box_nonce');
    $custom_css = get_post_meta($post->ID, '_jetour_custom_css', true);
    $custom_js = get_post_meta($post->ID, '_jetour_custom_js', true);
    $anchor_logo = get_post_meta($post->ID, '_jetour_anchor_logo_url', true);
    echo '<p>Enter paths relative to the theme\'s `data/tms/website/html/` folder.</p>';
    echo '<label>'.__('Custom CSS Files (e.g., css/carModel/t2.css)', 'jetour-theme').'</label> ';
    echo '<textarea name="jetour_custom_css" rows="4" style="width:100%;">' . esc_textarea($custom_css) . '</textarea>';
    echo '<br/><br/><label>'.__('Custom JS Files (e.g., js/en/models/t2.js)', 'jetour-theme').'</label> ';
    echo '<textarea name="jetour_custom_js" rows="4" style="width:100%;">' . esc_textarea($custom_js) . '</textarea>';
    echo '<br/><br/><label>'.__('Anchor Bar Logo URL', 'jetour-theme').'</label> ';
    echo '<input type="text" name="jetour_anchor_logo_url" value="' . esc_attr($anchor_logo) . '" style="width:100%;" />';
}

function jetour_save_assets_meta_box_data($post_id) {
    if (!isset($_POST['jetour_assets_meta_box_nonce']) || !wp_verify_nonce($_POST['jetour_assets_meta_box_nonce'], 'jetour_save_assets_meta_box_data') || (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) || !current_user_can('edit_page', $post_id)) { return; }
    if (isset($_POST['jetour_custom_css'])) { update_post_meta($post_id, '_jetour_custom_css', sanitize_textarea_field($_POST['jetour_custom_css'])); }
    if (isset($_POST['jetour_custom_js'])) { update_post_meta($post_id, '_jetour_custom_js', sanitize_textarea_field($_POST['jetour_custom_js'])); }
    if (isset($_POST['jetour_anchor_logo_url'])) { update_post_meta($post_id, '_jetour_anchor_logo_url', sanitize_text_field($_POST['jetour_anchor_logo_url'])); }
}
add_action('save_post', 'jetour_save_assets_meta_box_data');

