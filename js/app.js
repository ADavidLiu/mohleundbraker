$(document).ready(function () {
    
    var $header = $(".header");
    var $headerBtn = $(".header__btn");
    var $headerNav = $(".header__nav");
    var $window = $(window);

    $headerBtn.click(function() {
        $headerNav.slideToggle("fast");
    });

    var scroll;

    $window.scroll(function() {
        scroll = $window.scrollTop();
        if (scroll > 70) {
            $header.addClass("header--scrolled");
        } else {
            $header.removeClass("header--scrolled");
        }
    });

    $(".section-news__slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        appendArrows: $(".section-news__arrows"),
        appendDots: $(".section-news__dots"),
        customPaging: function(slider, i) {
            return $("<p class='paragraph paragraph--med u-color-primary u-font-2'>").text(i + 1);
        },
        prevArrow: "<div class='section-news__arrow section-news__arrow--prev'><img src='images/slider-arrow-right.png' class='section-news__arrow-icon'></div>",
        nextArrow: "<div class='section-news__arrow section-news__arrow--next'><img src='images/slider-arrow-right.png' class='section-news__arrow-icon'></div>"
    });

    var $menuItem = $(".menu__item");
    $menuItem.click(function() {
        var target = $(this).attr("data-scroll");
        var $target = $("section[data-scroll='" + target + "']");
        $.scrollTo($target, 500, {
            
        });
    });

    var $scrollSection = $("section[data-scroll]");
    $scrollSection.on('scrollSpy:enter', function() {
        var target = $(this).attr('data-scroll');
        $menuItem.removeClass("menu__item--active");
        $(".menu__item[data-scroll='" + target + "']").addClass("menu__item--active");
    });

    $scrollSection.scrollSpy();
    
});