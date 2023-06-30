$(function () {
    // $('.hamburger').on('click', function () {
    //     $(this).toggleClass('on');
    //     $('.gnb').toggleClass('on');
    // });

    // $('.gnb>ul>li>a').on('click', function (e) {
    //     if ($('.gnb').hasClass('on')) {
    //         e.preventDefault();
    //         $(this)
    //             .next()
    //             .stop()
    //             .slideToggle();
    //         }
    // });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    })

    $('.main_slide').on('init afterChange', function () {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });
    
    $('.main_vi .main_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.to_top').fadeIn(50);
        } else {
            $('.to_top').fadeOut(50);
        }
    });
});