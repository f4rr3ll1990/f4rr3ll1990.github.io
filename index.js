function isHovered(selector) {
    return $(selector + ":hover").length > 0
}

if (localStorage.getItem("category_grid") === null) {
    console.log("LocalStorage init")
    localStorage.setItem("category_grid", "grid")
}
if (localStorage.getItem("category_grid") == "grid") {
    $(".cat-product-col").removeClass('col-line')
    $(".cat-product-col").removeClass('col-lg-12')
    $(".cat-product-col").addClass('col-lg-3')
    $(".cat-product-col").addClass('col-grid')
}
if (localStorage.getItem("category_grid") == "line") {
    $(".cat-product-col").removeClass('col-lg-3')
    $(".cat-product-col").removeClass('col-grid')
    $(".cat-product-col").addClass('col-lg-12')
    $(".cat-product-col").addClass('col-line')
}

$(document).ready(function () {

    // MOBILE NAV
    $('#mob-nav_collapsable').on('hide.bs.collapse', function () {
        $('.animated-icon').removeClass('open');
    })
    $('#mob-nav_collapsable').on('show.bs.collapse', function () {
        $('.animated-icon').addClass('open');
    })

    // ACCORDION MENU
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.category');
            links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown).parent().addClass('open');
        };

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.sub-menu').each().not($next).slideUp().parent().removeClass('open');
            }
        };

        var accordiontop = new Accordion($('#mobile-accordion-top'), false);
        var accordionbottom = new Accordion($('#mobile-accordion-bottom'), false);
        // var accordionbottom = new Accordion($('#category-left_links'), false);
    });

    // DESKTOP MENU
    $(".hidden-menu_trigger").on("mouseenter", function () {
        // console.log("hidden-menu_trigger mouseenter")
        $(this).addClass("hidden-menu_hovered")
        $(this).parent().find(".hidden-menu_wrap").addClass("showed-menu")

        $(this).on("mouseleave", function () {
            // console.log("hidden-menu_hovered leave")
            if (!isHovered('.hidden-menu_wrap')) {
                // setTimeout(function() {
                $(".showed-menu").removeClass("showed-menu")
                $(".hidden-menu_hovered").removeClass("hidden-menu_hovered")
                // }, 1000)
            }
        })

        $(this).parent().find(".hidden-menu_wrap").on("mouseleave", function () {
            // console.log("showed-menu leave")
            if (!isHovered('.hidden-menu_hovered')) {
                // setTimeout(function() {
                $(".showed-menu").removeClass("showed-menu")
                $(".hidden-menu_hovered").removeClass("hidden-menu_hovered")
                // }, 1000)
            }
        })
    })

    // Sticky navbar
    var $navbar = $("#navbar")
    if($navbar.length) {
        var y_pos = $navbar.offset().top
        var height = $navbar.height()
    
        $(document).scroll(function () {
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
        })
    }

    var $mobnavbar = $("#mob-nav")
    if($mobnavbar.length) {
        var y_pos = $mobnavbar.offset().top
        var height = $mobnavbar.height()
    
        $(document).scroll(function () {
            var scrollTop = $(this).scrollTop();
    
            if (scrollTop > y_pos + height) {
                $mobnavbar.addClass("navbar-fixed").animate({
                    top: 0
                });
            } else if (scrollTop <= y_pos) {
                $mobnavbar.removeClass("navbar-fixed").clearQueue().animate({
                    top: "-48px"
                }, 0);
            }
        })
    }


    // HOME HERO
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


    // HOME BRANDS SLIDER
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

    $('.articles-section_cardwrap').slick({
        slidesToShow: 4,
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
            breakpoint: 1440,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.user-history_slider').slick({
        slidesToShow: 5,
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
            breakpoint: 1440,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.mobile-slideshow').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9999,
        arrows: true,
        // prevArrow: $('.brand-prev'),
        // nextArrow: $('.brand-next'),
        dots: true,
        pauseOnHover: false,
        centerMode: true,
    });

    // Scrollable Breadcrumbs
    var $scrollableBreadcrumbs = $(".scrollableBreadcrumbs")
    $scrollableBreadcrumbs.scrollLeft($scrollableBreadcrumbs[0].scrollWidth)


    // Category grid/line view
    $("#cat-line").click(function () {
        $(".cat-product-col").removeClass('col-lg-3')
        $(".cat-product-col").removeClass('col-grid')
        $(".cat-product-col").addClass('col-lg-12')
        $(".cat-product-col").addClass('col-line')
        localStorage.setItem("category_grid", "line")
    })

    $("#cat-grid").click(function () {
        $(".cat-product-col").removeClass('col-line')
        $(".cat-product-col").removeClass('col-lg-12')
        $(".cat-product-col").addClass('col-lg-3')
        $(".cat-product-col").addClass('col-grid')
        localStorage.setItem("category_grid", "grid")
    })




    // Product images
    $(".product-small_image").click(function () {
        // console.log($(this).find("img").attr("src"))
        $(".product-small_image").removeClass("active-image")
        $(this).addClass("active-image")
        $(".product-big_image img").attr("src", $(this).find("img").attr("src"))
    })



    // Product qtty
    var buttonPlus = $(".qty-btn-plus");
    var buttonMinus = $(".qty-btn-minus");
    var incrementPlus = buttonPlus.click(function () {
        var $n = $(this)
            .parent(".qty-container")
            .find(".input-qty");
        $n.val(Number($n.val()) + 1);
    });
    var incrementMinus = buttonMinus.click(function () {
        var $n = $(this)
            .parent(".qty-container")
            .find(".input-qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });



    // Product tab buttons
    $('.pills-options_btn-col .btn').click(function () {
        $('#pills-options-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.recomended-row_title-col .btn').click(function () {
        $('#pills-accessories-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })

    $('.product-sticky_view').click(function () {
        $('#pills-main-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.product-sticky_options').click(function () {
        $('#pills-options-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.product-sticky_accetories').click(function () {
        $('#pills-accessories-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.product-sticky_reviews').click(function () {
        $('#pills-reviews-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })

    $('.mobile-hiddennav_view').click(function () {
        $('#pills-main-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.mobile-hiddennav_options').click(function () {
        $('#pills-options-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.mobile-hiddennav_accetories').click(function () {
        $('#pills-accessories-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })
    $('.mobile-hiddennav_reviews').click(function () {
        $('#pills-reviews-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })

    $('.revtab-link').click(function () {
        $('#pills-reviews-tab').tab('show')
        $("#product-tab").get(0).scrollIntoView({ behavior: 'smooth' })
    })

    // 
    $('#pills-main-tab').on('shown.bs.tab', function (event) {
        $('.product-char_preview').show()
    })
    $('#pills-main-tab').on('hidden.bs.tab', function (event) {
        $('.product-char_preview').hide()
    })

    var stickymobile = $('.stickymobile')
    if(stickymobile.length) {
        var stickyTop = stickymobile.offset().top
        $(window).scroll(function () {
            var windowTop = $(window).scrollTop()
            if (stickyTop < windowTop) {
                // $('.stickymobile').css('position', 'fixed')
                $('.stickymobile').addClass("product-sticky-mobile-nav")
            } else {
                // $('.stickymobile').css('position', 'relative')
                $('.stickymobile').removeClass("product-sticky-mobile-nav")
            }
        })
    }

}) // $(document).ready

