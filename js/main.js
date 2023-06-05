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

    $("#Uploadfile").after("<span class='file_placeholder'>Tidak ada file yang dipilih</span>");
    $('#Uploadfile').change(function() {
        if ($("#Uploadfile").val().length > 0) {
            $(".file_placeholder").empty();
            $('#Uploadfile').removeClass('vendor_logo_hide').addClass('vendor_logo');
            console.log($("#Uploadfile").val());
        } else {
            $('#Uploadfile').removeClass('vendor_logo').addClass('vendor_logo_hide');
            $("#Uploadfile").after("<span class='file_placeholder'>Tidak ada file yang dipilih</span>");
        }

    });
    // add field
    var max_fields = 10;
    var wrapper = $(".input_fields_wrap");
    var add_button = $(".add_field_button");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            // $(wrapper).append('<div><div>Rilisan ' + x + '</div> <input type="text" name="mytext[' + x + ']"/> <input type="date" name="mydate[' + x + ']"/> <select name="myselect[' + x + ']"><option>Please Select</option></select> <a href="#" class="remove_field">Remove</a> </div>');
            $(wrapper).append('<div class="input_fields_wrap"><div class="form__rilisan"><div class="form__rilisan--header"><div class="form__rilisan--title">Rilisan ' + x + '</div><div class="form__rilisan--btn"><button class="delete-rilisan remove_field"><img src="img/btn/delete-rilisan.svg" alt=""></button></div></div><div class="form__wrap"><div class="form-item m-r4"><div class="form-group"><label for="opsi">Jenis Rilisan*</label><select class="jenis-rilisan"><option value="1" >Album</option><option value="2" >Singgle</option></select></div><div class="form-group"><label for="name">Tahun Rilisan*</label><input type="text" class="form-control" id="email" name="email" required></div><div class="form-group"><label for="name">Deskripsi Singkat*</label><textarea type="text" class="form-control" id="email" name="email" required></textarea></div></div><div class="form-item"><div class="form-group"><label for="name">Nama Album*</label><input type="text" class="form-control" id="email" name="email" required></div><div class="form-group"><label for="name">Label*</label><input type="text" class="form-control" id="email" name="email" required></div><div class="form-group"><label for="name">Cover Album</label><br><input type="file" class="vendor_logo_hide" name="v_logo" id="Uploadfile"><br><span class="note-upload">Ukuran foto 1:1 atau 500x500px, max 500kb</span><br><div class="preview-input"></div></div></div></div><div class="form__lagu-title">Daftar Lagu</div><div class="form__lagu-wrap"><div class="form__lagu--item m-r4"><div class="form-group"><label for="name">Judul</label><input type="text" class="form-control" id="email" name="email" required><div class="no-form">1</div></div></div><div class="form__lagu--item"><div class="lagu-wrap"><div class="lagu-input"><input type="file" name="v_logo" id="Uploadfile1"><br></div><div><button class="add-lagu"><img src="img/btn/add-lagu.svg" alt=""></button><button class="delete-lagu"><img src="img/btn/delete-lagu.svg" alt=""></button></div></div></div></div></div></div>');
        }
    });

    $(wrapper).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });

});

// slider0
var $swiper = $(".slide0");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide0", {
    spaceBetween: 20,
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
// 1
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
jQuery(function($) {
    var items = $("#content div.card");
    var numItems = items.length;
    var perPage = 8;
    items.slice(perPage).hide();

    $(".pagination-vip").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: '<',
        nextText: '>',

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
jQuery(function($) {
    var items = $("#content1 div.card1");
    var numItems = items.length;
    var perPage = 18;
    items.slice(perPage).hide();

    $(".pagination-vip1").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: '<',
        nextText: '>',

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});

jQuery(function($) {
    var items = $("#content2 div.card2");
    var numItems = items.length;
    var perPage = 12;
    items.slice(perPage).hide();

    $(".pagination-vip2").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: '<',
        nextText: '>',

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
jQuery(function($) {
    var items = $("#content3 div.card3");
    var numItems = items.length;
    var perPage = 6;
    items.slice(perPage).hide();

    $(".pagination-vip3").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: '<',
        nextText: '>',

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});



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

// open player
$('#open-player').click(function() {
    if ($('.wrapper').hasClass('wrapper-click')) {
        $('.wrapper').removeClass('wrapper-click');
    } else {
        $('.wrapper').addClass('wrapper-click');
    }
    if ($('.wrap-mp3__item').hasClass('wrap-mp3__item-click')) {
        $('.wrap-mp3__item').removeClass('wrap-mp3__item-click');
    } else {
        $('.wrap-mp3__item').addClass('wrap-mp3__item-click');
    }
    if ($('.wrap-controls').hasClass('wrap-controls-click')) {
        $('.wrap-controls').removeClass('wrap-controls-click');
    } else {
        $('.wrap-controls').addClass('wrap-controls-click');
    }
    if ($('.wrap-topbar').hasClass('wrap-topbar-click')) {
        $('.wrap-topbar').removeClass('wrap-topbar-click');
    } else {
        $('.wrap-topbar').addClass('wrap-topbar-click');
    }
    if ($('.img-area').hasClass('img-area-click')) {
        $('.img-area').removeClass('img-area-click');
    } else {
        $('.img-area').addClass('img-area-click');
    }
    if ($('.song-details').hasClass('song-details-click')) {
        $('.song-details').removeClass('song-details-click');
    } else {
        $('.song-details').addClass('song-details-click');
    }
    if ($('.wrap-mp3').hasClass('wrap-mp3-click')) {
        $('.wrap-mp3').removeClass('wrap-mp3-click');
    } else {
        $('.wrap-mp3').addClass('wrap-mp3-click');
    }
    if ($('.name').hasClass('name-click')) {
        $('.name').removeClass('name-click');
    } else {
        $('.name').addClass('name-click');
    }
    if ($('.expand_more').hasClass('icon-more-click')) {
        $('.expand_more').removeClass('icon-more-click');
    } else {
        $('.expand_more').addClass('icon-more-click');
    }
    $('.trigger-mobile').removeClass('hide-trigger');
});
$('.trigger-mobile').click(function() {
    $('.trigger-mobile').addClass('hide-trigger');

    if ($('.wrapper').hasClass('wrapper-click')) {
        $('.wrapper').removeClass('wrapper-click');
    } else {
        $('.wrapper').addClass('wrapper-click');
    }
    if ($('.wrap-mp3__item').hasClass('wrap-mp3__item-click')) {
        $('.wrap-mp3__item').removeClass('wrap-mp3__item-click');
    } else {
        $('.wrap-mp3__item').addClass('wrap-mp3__item-click');
    }
    if ($('.wrap-controls').hasClass('wrap-controls-click')) {
        $('.wrap-controls').removeClass('wrap-controls-click');
    } else {
        $('.wrap-controls').addClass('wrap-controls-click');
    }
    if ($('.wrap-topbar').hasClass('wrap-topbar-click')) {
        $('.wrap-topbar').removeClass('wrap-topbar-click');
    } else {
        $('.wrap-topbar').addClass('wrap-topbar-click');
    }
    if ($('.img-area').hasClass('img-area-click')) {
        $('.img-area').removeClass('img-area-click');
    } else {
        $('.img-area').addClass('img-area-click');
    }
    if ($('.song-details').hasClass('song-details-click')) {
        $('.song-details').removeClass('song-details-click');
    } else {
        $('.song-details').addClass('song-details-click');
    }
    if ($('.wrap-mp3').hasClass('wrap-mp3-click')) {
        $('.wrap-mp3').removeClass('wrap-mp3-click');
    } else {
        $('.wrap-mp3').addClass('wrap-mp3-click');
    }
    if ($('.name').hasClass('name-click')) {
        $('.name').removeClass('name-click');
    } else {
        $('.name').addClass('name-click');
    }
    if ($('.expand_more').hasClass('icon-more-click')) {
        $('.expand_more').removeClass('icon-more-click');
    } else {
        $('.expand_more').addClass('icon-more-click');
    }
});

// aler validaiton
var $form = $("form"),
    $successMsg = $(".alert");
$form.h5Validate();
$form.on("submit", function(e) {
    if ($form[0].checkValidity()) {
        e.preventDefault();
        $successMsg.show();
    }
});

// select
(function($) {
    var customSelect = $('select.custom-select');
    customSelect.each(function() {
        var that = $(this);
        var listID = that.attr('id'),
            groups = that.children('optgroup'),
            theOptions = "",
            startingOption = "",
            customSelect = "";
        if (groups.length) {
            groups.each(function() {
                var curGroup = $(this);
                var curName = curGroup.attr('label');
                theOptions += '<li class="optgroup">' + curName + '</li>';
                curGroup.children('option').each(function() {
                    var curOpt = $(this);
                    var curVal = curOpt.attr('value'),
                        curHtml = curOpt.html(),
                        isSelected = curOpt.attr('selected');
                    if (isSelected === 'selected') {
                        startingOption = curHtml;
                        theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                    } else {
                        theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                    }
                });
            });
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                } else {
                    theOptions = '<li data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                }
            });
        } else {
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                } else {
                    theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                }
            });
        }
        customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID + '">' + theOptions + '</ul></div> <!-- .custom-select-wrapper -->';
        $(customSelect).insertAfter(that);
    });

    var selectdd = $('.dropdown-select'),
        selectul = $('.dropdown-select-ul'),
        selectli = $('.dropdown-select-ul li');

    selectdd.on('click', function() {
        $(this).parent('.dropdown-container').toggleClass('active');
    });
    selectul.on('mouseleave', function() {
        $(this).parent('.dropdown-container').removeClass('active');
    });
    selectli.on('click', function() {
        var that = $(this);
        if (!that.hasClass('optgroup')) {
            var parentUl = that.parent('ul'),
                thisdd = parentUl.siblings('.dropdown-select'),
                lihtml = that.html(),
                livalue = that.attr('data-value'),
                originalSelect = '#' + parentUl.attr('data-role');
            parentUl.parent('.dropdown-container').toggleClass('active');
            that.siblings('li').removeClass('selected');
            that.addClass('selected');
            $(originalSelect).val(livalue);
            thisdd.children('span').html(lihtml);
        }
    });
})(jQuery);
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("tt-select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);

// tag
// const query = document.querySelector.bind(document);
// const removeComma = string => string.slice(0, string.length - 1).trim();
// const isInvalid = stringInput => {
//     const inputs = Array.from(query('.tags').children).map(input => input.firstElementChild.textContent);

//     return !/^[A-Za-z0-9]{3,}/.test(stringInput) ||
//         inputs.some(name => name === removeComma(stringInput)) ||
//         query('.tags').children.length >= 10;
// };

// function modifyTags(e) {
//     if (e.key === ',') {

//         if (isInvalid(e.target.value)) {
//             e.target.value = '';
//             return;
//         }
//         addTag(e.target.value);
//         e.target.value = '';
//     }

//     if (e.key === 'Backspace' && !e.target.value.length) {
//         deleteTag(null, query('.tags').children.length - 1);
//     }

//     query('.tags-count').textContent = `${10 - query('.tags').children.length}`;
// }
function existingTag(text) {
    var existing = false,
        text = text.toLowerCase();

    $(".tags").each(function() {
        if ($(this).text().toLowerCase() == text) {
            existing = true;
            return "";
        }
    });

    return existing;
}

$(function() {
    $(".tags-new input").focus();

    $(".tags-new input").keyup(function() {

        var tag = $(this).val().trim(),
            length = tag.length;

        if (tag.charAt(length - 1) == ',' && tag != ",") {
            tag = tag.substring(0, length - 1);

            if (!existingTag(tag)) {
                $('<li class="tags"><span>' + tag + '</span><i class="fa fa-times">X</i></i></li>').insertBefore($(".tags-new"));
                $(this).val("");
            } else

            {
                $(this).val(tag);
            }
        }
    });

    $(document).on("click", ".tags i", function() {
        $(this).parent("li").remove();
    });

});



function addTag(textValue) {
    const tag = document.createElement('div'),
        tagName = document.createElement('label'),
        remove = document.createElement('span');

    tagName.setAttribute('class', 'tag-name');
    tagName.textContent = removeComma(textValue);

    remove.setAttribute('class', 'remove');
    remove.textContent = 'X';
    remove.addEventListener('click', deleteTag);

    tag.setAttribute('class', 'tag');
    tag.appendChild(tagName);
    tag.appendChild(remove);

    query('.tags').appendChild(tag);
}

function deleteTag(e, i = Array.from(query('.tags').children).indexOf(e.target.parentElement)) {
    const index = query('.tags').getElementsByClassName('tag')[i];

    query('.tags').removeChild(index);
    query('.tags-count').textContent = `${10 - query('.tags').children.length}`;
}

function focus() {
    query('#tag').focus();
}

// query('.input').addEventListener('click', focus);
// query('#tag').addEventListener('keyup', modifyTags);

tinymce.init({
    selector: '#mytextarea'
});