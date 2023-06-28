$(function () {
    $('.main_vi .main_slide').slick({
        arrows: false,
        dots: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});