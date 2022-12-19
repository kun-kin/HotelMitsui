$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    $(function() {
        // $("#date").datepicker();
        // $(".datepicker").datepicker();
        // $(".hasDatepicker").flatpickr({
        //     dateFormat: "d/m/Y"
        // });

    });
    $("#checkin_date").datepicker({
        dateFormat: "d/m/Y"
    });
    $("#checkin_date").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#reservation-checkin_date").flatpickr({
        dateFormat: "d/m/Y"
    });


    $("section.about .thumd .image1").click(function() {
        $('section.about .thumd .image1').css("z-index", "1");
        $('section.about .thumd .image2').css("z-index", "0");
    });
    $("section.about .thumd .image2").click(function() {
        $('section.about .thumd .image1').css("z-index", "0");
        $('section.about .thumd .image2').css("z-index", "1");
    });

    $(".service-list .accordion-trigger").click(function() {
        $(this).toggleClass('is-opened');
        $(this).parents('.service-list').children('.service-list__content').slideToggle();
    });

    $(".js-menu-trigger[data-menu=1]").click(function() {
        $(this).toggleClass('is-show');
        $('.js-menu-content-1').toggleClass('is-show');
        $('.js-menu-content').not($('.js-menu-content-1')).removeClass('is-show');
    });
    $(".js-menu-trigger[data-menu=2]").click(function() {
        $(this).toggleClass('is-show');
        $('.js-menu-trigger').removeClass('is-show');
        $('.js-menu-content-2').toggleClass('is-show');
        $('.js-menu-content').not($('.js-menu-content-2')).removeClass('is-show');
    });
    $(".js-menu-trigger[data-menu=3]").click(function() {
        $(this).toggleClass('is-show');
        $('.js-menu-trigger').removeClass('is-show');
        $('.js-menu-content-3').toggleClass('is-show');
        $('.js-menu-content').not($('.js-menu-content-3')).removeClass('is-show');
    });

    $(".js-menu-ac-wrapper .js-menu-ac-trigger").click(function() {
        $(this).toggleClass('is-ac-open');
        $(this).parents('.js-menu-ac-wrapper').children('.js-menu-ac-content').toggleClass('is-ac-open');
    });

    $(".js-menu-content .js-menu-close").click(function() {
        $(this).parents('.js-menu-content').removeClass('is-show');
    });

    $(".js-accordion-wrapper .contact__head .js-accordion-trigger").click(function() {
        $(this).toggleClass('is-opened');
        $(this).parent('.contact__head').parent('.js-accordion-wrapper').children('.js-accordion-content').slideToggle();
    });
    $(".js-accordion-wrapper .contact__question .js-accordion-trigger").click(function() {
        $(this).toggleClass('is-opened');
        $(this).parent('.contact__question').parent('.js-accordion-wrapper').children('.js-accordion-content').slideToggle();
    });

    $(".exp-accordion.js-accordion-wrapper .js-accordion-trigger").click(function() {
        $(this).toggleClass('is-opened');
        $(this).parent('.js-accordion-wrapper').children('.exp-accordion__content').slideToggle();
    });

});