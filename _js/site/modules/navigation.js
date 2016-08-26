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


//    $menu.find( '.menu__items' ).on( 'click', function ( e ) {
//        e.stopPropagation();
//    } );

    $menu.on( 'click', function () {
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

}( jQuery ) );