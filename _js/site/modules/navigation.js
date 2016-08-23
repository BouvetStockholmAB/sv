/*global jQuery, _b */

( function ( $ ) {

    'use strict';

    var $menuToggleCheckbox = $( '#menuToggler' ),
        $menuToggler = $( '#menuTogglerBtn' ),
        $menu = $( '#menu' ),
        $body = $( 'body' ),
        menuVisible = false;

    function toggleMenu() {
        menuVisible = !menuVisible;
        $menuToggleCheckbox.prop( 'checked', menuVisible );
    }

    $menuToggler.on( 'click', _b.throttle( function () {
        menuVisible = $menuToggleCheckbox.prop( 'checked' );

        if ( !menuVisible ) {
            // Show menu
            $menu.removeClass( 'menu--fadeAway' );
            $body.addClass( 'preventScroll' );
            $menuToggler.attr( 'aria-expanded', true );
            toggleMenu();
        } else {
            // Hide menu
            $menu.addClass( 'menu--fadeAway' );
            $body.removeClass( 'preventScroll' );
            $menuToggler.attr( 'aria-expanded', false );
            setTimeout( toggleMenu, 500 );
        }

    }, 510 ) );

}( jQuery ) );