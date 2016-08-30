/*global jQuery */

( function ( doc, $ ) {

    'use strict';

    var $expArticles = $( '.js-expanding-article' );

    $expArticles.on( 'click', function ( e ) {

        e.preventDefault();

        var $this      = $( this ),
            $container = $this.closest( '.ct' ),
            $article   = $this.find( '.js-article' ).clone().removeClass( 'visuallyhidden' ),
            id, $articleContainer, articleCtId;

        id          = $container.attr( 'id' );
        articleCtId = id + '-article';

        $articleContainer = $( doc.getElementById( articleCtId ) );

        if ( !$articleContainer.exists() ) {
            $articleContainer = $( '<div id="' + articleCtId + '" class="ct ct--std" />' );
            $container.after( $articleContainer );
        }

        $this.closest( '.ct' ).find( '.active' ).removeClass( 'active' );
        $this.addClass( 'active' );
        $articleContainer
            .hide()
            .html( $article )
            .showVertical();

        $.smoothScroll( {
            scrollTarget: '#' + articleCtId
        } );

    } );

    $( '.ct' ).on( 'click', '.featureArticle__close__btn', function ( e ) {
        e.preventDefault();
        var $articleContainer = $( this ).closest( '.ct' ),
            $container, id, articleCtId;

        articleCtId = $articleContainer.attr( 'id' );
        id = articleCtId.replace( '-article', '' );

        $container = $( '#' + id );

        $articleContainer.hideVertical();

        $container.find( '.active' ).removeClass( 'active' );

        $.smoothScroll( {
            scrollTarget: '#' + id
        } );

    } );


}( document, jQuery ) );