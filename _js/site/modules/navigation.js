/*global jQuery, _b */

( function ( win, $ ) {

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

    function showMenu() {
        $menu.removeClass( 'menu--fadeAway' );
        $body.addClass( 'preventScroll' );
        $menuToggler.attr( 'aria-expanded', true );
        toggleMenu();
    }
    function hideMenu() {
        $menu.addClass( 'menu--fadeAway' );
        $body.removeClass( 'preventScroll' );
        $menuToggler.attr( 'aria-expanded', false );
        setTimeout( toggleMenu, 500 );
    }

    $menu.on( 'click', function ( e ) {
        e.preventDefault();
        var $this = $( e.target ),
            href = $this.attr( 'href' );
        if ( href && href.startsWith( '#' ) ) {
            win.history.replaceState( '', '', href );
        }
        hideMenu();
    } );



    $menuToggler.on( 'click', _b.throttle( function () {
        menuVisible = $menuToggleCheckbox.prop( 'checked' );

        if ( !menuVisible ) {
            showMenu();
        } else {
            hideMenu();
        }

    }, 510 ) );

}( window, jQuery ) );