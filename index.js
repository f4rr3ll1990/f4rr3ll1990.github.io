$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        centerPadding: false,
        // prevArrow: $('.brand-prev'),
        // nextArrow: $('.brand-next'),
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9999,
        arrows: false,
        // prevArrow: $('.brand-prev'),
        // nextArrow: $('.brand-next'),
        dots: true,
        pauseOnHover: false,
    });


    // $('.mobile-nav_button').on('click', function () {
    //     $('.animated-icon').toggleClass('open');
    // });

    $('#navbarSupportedContent22').on('hide.bs.collapse', function () {
        $('.animated-icon').removeClass('open');
    })
    $('#navbarSupportedContent22').on('show.bs.collapse', function () {
        $('.animated-icon').addClass('open');
    })






    var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });



}); // $(document).ready