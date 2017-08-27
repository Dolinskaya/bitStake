if (navigator.userAgent.indexOf('Android' || 'Iphone' || 'Blackberry' || 'Webos') != -1){
    location.assign('http://bitstake.ru/m/mobile.html');
}
if( screen.width <= 320 ) {
    location.assign('http://bitstake.ru/m/mobile.html');
};
function isValid(form) {
    var parent = form.parent().parent();
    var errorBlock = '<a href="" class="validate">Поле не заполнено</a>';
        $(parent).find($('.field-for-validate')).each(function () {
            var self = $(this);
            if(self.find('input').val() === ''){
                self.append(errorBlock);
            }else{
                self.find('.validate').remove();
            }
        });
};
$(document).ready(function(){
  $('.command__slider').slick({
    autoplay: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    nextArrow: '<img src="img/arrow-next.png" alt="" class="btn-ar slick-next">',
    prevArrow: '<img src="img/arrow-prev.png" alt="" class="btn-ar slick-prev">'

  });
    $('.nav-links').on('nav__link', 'hover', function () {
       console.log('test');
       $(this).css('color', '#9e9e9e');
    });
    $('.nav-links a').on('click', function(){
        $(".nav-links a").removeClass("nav__link--active");
        $(this).toggleClass('nav__link--active');
        var to = $(this).attr('href');
        var toOffset = $(to).offset.top;
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 800);
    });
    $('.nav__question').hover(function () {
        $(this).find('img').attr('src', 'img/col-hover.png');
    }, function () {
        $(this).find('img').attr('src', 'img/col.png');
    });
    $('.device-btn-more').hover(function () {
        console.log('hover');
       $(this).find('img').attr('src', 'img/pink-plus--hover.png');
    }, function () {
        $(this).find('img').attr('src', 'img/pink-plus.png');
    });
    $('.title-block__item').hover(function () {
        $(this).prev().attr('src', 'img/mail--hover.png');
    }, function () {
        $(this).prev().attr('src', 'img/mail.png');
    });
    $('.pink').on('click', '.connect__form-btn', function (e) {
        e.preventDefault();
        isValid($(this));
    });
    $('.blue').on('click', '.connect__form-btn', function (e) {
        e.preventDefault();
        isValid($(this));
    });
    $('.validate').click(function (e) {
        e.preventDefault();
    });
    $('form.pink .connect__form-btn').hover(function () {
        $(this).next().attr('src', 'img/reg--hover.png');
    }, function () {
        $(this).next().attr('src', 'img/reg.png');
    });
    $('form.blue .connect__form-btn').hover(function () {
        $(this).next().attr('src', 'img/reg-hover-blue.png');
    }, function () {
        $(this).next().attr('src', 'img/reg.png');
    });
    $('.invest-ing-img').hover(function () {
        $(this).attr('src','img/info--hover.png');
    }, function () {
        $(this).attr('src','img/info.png');
    });
    $(".slider-sum").slider({
        range: "min",
        min: 50,
        max: 10000,
        value: 4000,
        step: 50,
        slide: function( event, ui ) {
            $(".result-sum").html( "$" + ui.value );
        }
    });
    $(".result-sum").html( "$" + $( ".slider-sum" ).slider( "value" ));
    $('.slider-sum').slider("value");

    $(".slider").slider({
        range: "min",
        min: 30,
        max: 365,
        value: 120,
        step: 5,
        slide: function( event, ui ) {
            $(".result-date").html( ui.value +" дней");
        }
    });
    $(".result-date").html( $( ".slider").slider( "value" )+ ' дней');
    $('.slider').slider('value');


    var sliderLink = $('.slider-text a');
    var slideCount = sliderLink.length;
    var slideWidth = sliderLink.width();
    var slideHeight = sliderLink.height();
    var sliderUlWidth = slideCount * slideWidth;
    $('.slider-text a:last-child').prependTo('.slider-text');
    function moveRight() {
        $('.slider-text').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider-text a:first-child').appendTo('.slider-text');
            $('.slider-text').css('left', '');
        });
    };
    $('a').click(function(e) {
        e.preventDefault();
    });

    $('.tap-container').on('click', '.kard-block__link', function(e) {
        e.preventDefault();
        $(".tap-container .kard-block__link").removeClass("active");
        $(this).toggleClass('active');
    });
    $('.kard-name-links').on('click', '.kard-block-tab', function(e) {
        e.preventDefault();
        $(".kard-name-links .kard-block-tab").removeClass("active-links");
        $(this).toggleClass('active-links');
    });
    $('img.control_next').tap(function(e) {
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
});
