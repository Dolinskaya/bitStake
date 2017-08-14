$(document).ready(function () {

    $('.burger').on('tap', function (e) {
        e.preventDefault();
        if ($('.burger-drop').is(':hidden')){
            $('.burger-drop').show();
        }else if($('.burger-drop').is(':visible')){
            $('.burger-drop').hide();
        }
    });
    var sliderLink = $('.slider a');
    var slideCount = sliderLink.length;
    var slideWidth = sliderLink.width();
    var slideHeight = sliderLink.height();
    var sliderUlWidth = slideCount * slideWidth;
    $('.slider a:last-child').prependTo('.slider');
    function moveRight() {
        $('.slider').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider a:first-child').appendTo('.slider');
            $('.slider').css('left', '');
        });
    };
    $('a').click(function (e) {
        e.preventDefault();
    })
    $('img.control_next').tap(function (e) {
        e.preventDefault();
        moveRight();
    });
    $('.tap-container').on('tap', '.kard-block__link', function(e) {
        e.preventDefault();
        $(".tap-container .kard-block__link").removeClass("active");
        $(this).toggleClass('active');
    });
    $('.kard-name-links').on('tap', '.kard-block-tab', function(e) {
        e.preventDefault();
        $(".kard-name-links .kard-block-tab").removeClass("active-links");
        $(this).toggleClass('active-links');
    });
    $('.command__slider').slick({
        autoplay: false,
        infinite: true,
        // slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        nextArrow: '<img src="img/arrow-next.png" alt="" class="btn-ar slick-next">',
        prevArrow: '<img src="img/arrow-prev.png" alt="" class="btn-ar slick-prev">'

    });
    $('.nav-links a').on('tap', function(){
        $('.burger-drop').hide();
        var to = $(this).attr('href');
        var toOffset = $(to).offset.top;
        console.log('test done');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 800);
    })

});