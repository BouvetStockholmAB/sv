/*global jQuery */

( function ( doc, $ ) {

    'use strict';

    var $expArticles = $( '.js-expanding-article' );


    $expArticles.on( 'click', function () {

        var $this = $( this ),
            $container = $this.closest( '.ct' ),
            $article = $this.find( '.js-article' ).clone().removeClass( 'visuallyhidden' ),
            id, $articleContainer, articleCtId;

        id = $container.attr( 'id' );
        articleCtId = id + '-article';

        $articleContainer = $( doc.getElementById( articleCtId ) );

        if ( !$articleContainer.exists() ) {
            $articleContainer = $( '<div id="' + articleCtId + '" class="ct ct--std" />' );
            $container.after( $articleContainer );
        }

        $this.closest( '.ct' ).find( '.active' ).removeClass( 'active' );
        $this.addClass( 'active' );
        $articleContainer.html( $article );

        $.smoothScroll( {
            scrollTarget: '#' + articleCtId
        } );

    } );

}( document, jQuery ) );