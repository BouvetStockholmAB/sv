/*global jQuery */

( function ( win, doc, $ ) {

    'use strict';

    var $expArticles = $( '.js-expanding-article' );

    function setSrcSet( $img ) {
        if ( $img.data( 'hasSrcSet' ) ) {
            return;
        }
        $img.attr( {
            'srcset': $img.data( 'srcset' ),
            'sizes' : $img.data( 'sizes' )
        } )
            .removeAttr( 'data-srcset' )
            .removeAttr( 'data-sizes' );
        $img.data( 'hasSrcSet', true );
    }

    $expArticles.on( 'click', function ( e ) {

        e.preventDefault();

        var $this         = $( this ),
            $container    = $this.closest( '.ct' ),
            $article      = $this.find( '.js-article' ).clone().removeClass( 'js-visuallyhidden' ),
            id, $articleContainer, articleCtId, href,
            articleItemId = $this.attr( 'id' ).replace( 'featured', '' );

        id = $container.attr( 'id' );
        articleCtId = id + '-article',
            href = '#' + articleCtId;

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

        setSrcSet( $articleContainer.find( '.featureArticle__screen' ) );

        $.smoothScroll( {
            scrollTarget: href
        } );

        win.history.replaceState( '', '', href + articleItemId );

    } );

    $( '.ct' ).on( 'click', '.featureArticle__close__btn', function ( e ) {
        e.preventDefault();
        var $articleContainer = $( this ).closest( '.ct' ),
            $container, id, articleCtId, href;

        articleCtId = $articleContainer.attr( 'id' );
        id          = articleCtId.replace( '-article', '' );
        href        = '#' + id;

        $container = $( href );

        $articleContainer.hideVertical();

        $container.find( '.active' ).removeClass( 'active' );

        $.smoothScroll( {
            scrollTarget: href
        } );

        win.history.replaceState( '', '', href );

    } );

    function openOnLoad() {
        var hash = win.location.hash,
            $article;
        if ( hash && hash.startsWith( '#feature-' ) ) {
            $article = $( '#featured-' + hash.substr( 19 ) );
            if ( $article.exists() ) {
                $article.click();
            }
        }
    }

    $( openOnLoad );


}( window, document, jQuery ) );