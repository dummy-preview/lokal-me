$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 250) {
            $(".header").addClass("fixshow");
            $(".about").addClass("spacetop");
        } else {
            $(".header").removeClass("fixshow");
            $(".about").removeClass("spacetop");
        }
    });

    $('.icon-sosmed').click(function() {
        if ($('.social').hasClass('social-show')) {
            $('.social').removeClass('social-show');
        } else {
            $('.social').addClass('social-show');
        }
    });

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // e backtotop

});
// home
// var $swiper1 = $(".swiper-container");
// var $bottomSlide1 = null;
// var $bottomSlideContent1 = null;

// var mySwiper = new Swiper(".swiper-container", {
//     spaceBetween: 1,
//     slidesPerView: 3,
//     centeredSlides: true,
//     roundLengths: true,
//     loop: true,
//     loopAdditionalSlides: 30,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//     }
// });
// slide video
var $swiper = $(".slide0");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide0", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// side
var $swiper = $(".slide1");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide1", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// 2
// var swiper = new Swiper('.slide2', {
//     loop: true,
//     pagination: ".swiper-pagination",
//     paginationClickable: true,
//     effect: "slide",
//     spaceBetween: 30,
//     speed: 1000,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

// });
var $swiper = $(".slide2");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide2", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 3
var $swiper = $(".slide3");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide3", {
    spaceBetween: 1,
    slidesPerView: 1.7,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var $swiper = $(".slide4");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide4", {
    spaceBetween: 1,
    slidesPerView: 1.5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// tab 
(function($) {
    const $tabLink = $('#tabs-section .tab-link');
    const $tabBody = $('#tabs-section .tab-body');
    let timerOpacity;
    const init = () => {
        $tabLink.off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.clearTimeout(timerOpacity);
            $tabLink.removeClass('active-tab ');
            $tabBody.removeClass('active-tab ');
            $tabBody.removeClass('active-content');
            $(this).addClass('active-tab');
            $($(this).attr('href')).addClass('active-tab');
            timerOpacity = setTimeout(() => {
                $($(this).attr('href')).addClass('active-content');
            }, 50);
        });
    };
    $(function() {
        init();
    });
})(jQuery);

// pagination
// jQuery(function($) {
//     var items = $("#content div.card");
//     var numItems = items.length;
//     var perPage = 10;
//     items.slice(perPage).hide();

//     $(".pagination-vip").pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         cssStyle: "custom-theme",

//         onPageClick: function(pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide()
//                 .slice(showFrom, showTo).show();
//         }
//     });

// });
// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

// modal post video
$(document).ready(function() {
    autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
    var triggerOpen = $("body").find('[data-tagVideo]');
    triggerOpen.click(function() {
        var theModal = $(this).data("bs-target"),
            videoSRC = $(this).attr("data-tagVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);

        $(theModal + ' .modal-overlay').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $(theModal + ' .modal-close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });

}

$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});