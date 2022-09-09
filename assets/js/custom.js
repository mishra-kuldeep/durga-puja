// Slim Menu Initialization
$('.slimmenu').slimmenu(
    {
        resizeWidth: '767',
        collapserTitle: '',
        animSpeed: 'medium',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });

// Add class to header on scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".headersec").addClass("fixed");
    } else {
        $(".headersec").removeClass("fixed");
    }
});

// Init WOW.js and get instance
new WOW().init();


$(document).ready(function () {
    var owl = $('.puja-collection-slider .owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            400: {
                items: 1,
                margin: 0
            },
            480: {
                items: 2,
                margin: 15
            },
            768: {
                items: 2,
                margin: 15
            },
            992: {
                items: 3,
                margin: 20
            },
            1200: {
                items: 4,
                margin: 50
            },
            1600: {
                items: 4,
                margin: 60
            }
        }
    })
});
