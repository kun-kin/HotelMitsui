$('.lodging-facility-slide__inner').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.banner-page-slide').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.exclusive-slide').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.accommodation-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    asNavFor: '.accommodation-desc'
});
$('.accommodation-desc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.accommodation-slide',
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true
});

$('.slicktrip').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.spa-slide').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
});



$('.slidenews__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    centerMode: true,
    responsive: [{
        breakpoint: 768,
        settings: "unslick"
    }]
});
$('.promotion-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: "unslick"
    }]
});
$(window).resize(function() {
    $('.slidenews__list').slick('unslick')
    $('.slidenews__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        mobileFirst: true,
        centerMode: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    });
    $('.promotion-slider__inner').slick('unslick')
    $('.promotion-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        mobileFirst: true,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    });
});