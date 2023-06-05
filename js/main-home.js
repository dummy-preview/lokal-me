$(document).ready(function() {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });
});

// e scroll anchor
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 200) {
            $('.nav-menu a.active1').removeClass('active1');
            $('.nav-menu a').eq(i).addClass('active1');
        }
    });
}).scroll();

// play youtube iframe
tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

var player;
var player2;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {

        videoId: 'vr9PNIigiG4',
        playerVars: {
            autoplay: 1,
            playsinline: 1,
            playlist: "vr9PNIigiG4",
            loop: 1
        },
        events: {
            onReady: onPlayerReady
        }
    });
    player2 = new YT.Player('player2', {

        videoId: 'vr9PNIigiG4',
        playerVars: {
            autoplay: 0,
            mute: 1,
            playsinline: 1,
            playlist: "psyXu-_jj0E",
            loop: 1
        },
        // events: {
        //     onReady: onPlayerReady
        // }
    });
}
var player, firstScriptTag = document.getElementsByTagName("script")[0];

function onPlayerReady(e) { e.target.mute(), e.target.playVideo() }
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);