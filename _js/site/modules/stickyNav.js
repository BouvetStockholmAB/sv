/*global jQuery */

( function ( win, $ ) {

    'use strict';

    var $win          = $( win ),
        $body = $( 'body' ),
        $scrollnav    = $( '[role=banner]' ),
        scrollnav     = $scrollnav[ 0 ],
        lastPos       = win.pageYOffset,
        furthest      = lastPos,
        headState     = 'origin',
        scrollNavPos  = 0,
        dir           = '',
        lastDir       = '',
        pageScrollPos = 0,
        config        = {
            fixAt     : 56,
            breakpoint: '(min-width: 680px)'
        },
        mql,
        handleScroll;

    function normalizedScrollNavPos() {
        if ( scrollNavPos < -56 ) { return -56; }
        if ( scrollNavPos > 0 ) { return 0; }
        return scrollNavPos;
    }

    function setFollowing() {
        $body.addClass( 'fixed' );
        $scrollnav
            .addClass( 'fixed' )
            .removeClass( 'hiddenLogo' );
    }

    function followScrollUp() {
        scrollnav.style.top = scrollNavPos + 'px';
        headState           = 'following-up';
    }

    function followScrollDown() {
        scrollnav.style.top = scrollNavPos + 'px';
        headState           = 'following-down';
    }

    function showFixed() {
        $body.addClass( 'fixed' );
        $scrollnav
            .addClass( 'fixed' )
            .removeClass( 'hiddenLogo' );
        scrollnav.style.top = '0';
        headState           = 'fixed-visible';
    }

    function hideFixed() {
        $scrollnav.addClass( 'hiddenLogo' );
        scrollnav.style.top = '-56px';
        headState           = 'fixed-hidden';
    }

    function restoreToTop() {
        headState = 'origin';
        $scrollnav.animate( {
            top            : '-56px',
            backgroundColor: '#fff'
        }, {
            duration: 250,
            done    : function () {
                $body.removeClass( 'fixed' );
                scrollnav.removeAttribute( 'style' );
                $scrollnav.removeClass( 'fixed hiddenLogo' );
            }
        } );
    }

    handleScroll = function () {

        lastDir       = dir;
        lastPos       = pageScrollPos;
        pageScrollPos = window.pageYOffset;

        var diff = ( pageScrollPos - lastPos );

        scrollNavPos = scrollNavPos - diff;
        scrollNavPos = normalizedScrollNavPos();

        dir = ( diff > 0 ) ? 'down' : 'up';

        if ( dir !== lastDir && pageScrollPos > config.fixAt ) {
            setFollowing();
        }

        if ( dir === 'up' && pageScrollPos > config.fixAt ) {
            if ( scrollNavPos < 0 ) {
                followScrollUp( pageScrollPos );
                return;
            }
            if ( headState !== 'fixed-visible' ) {
                showFixed();
            }
            return;
        }

        if ( dir === 'up' ) {
            if ( headState !== 'origin' ) {
                scrollNavPos = 0;
                restoreToTop();
            }
            return;
        }

        if ( dir === 'down' ) {
            furthest = pageScrollPos;
            if ( pageScrollPos > config.fixAt ) {
                if ( scrollNavPos > -56 ) {
                    followScrollDown( pageScrollPos );
                    return;
                }
                if ( headState !== 'fixed-hidden' ) {
                    hideFixed();
                }
                return;
            }
            if ( headState !== 'origin' ) {
                scrollNavPos = 0;
                restoreToTop();
            }
        }
    };


    // Initialize for wider screens only

    function handleBreakpointChange( mql ) {
        if ( mql.matches ) {
            $win.on( 'scroll', handleScroll );
        } else {
            if ( headState !== 'origin' ) {
                scrollNavPos = 0;
                restoreToTop();
            }
            $win.off( 'scroll', handleScroll );
        }
    }

    mql = win.matchMedia( config.breakpoint );
    mql.addListener( handleBreakpointChange );
    handleBreakpointChange( mql );


}( window, jQuery ) );