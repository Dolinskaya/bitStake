function isValid(form) {
    var parent = form.parent();
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
$(document).ready(function () {
 var burger = $('.burger-drop');
    $('.burger').on('tap', function (e) {
        e.preventDefault();
        if (burger.is(':hidden')){
            burger.show();
        }else if(burger.is(':visible')){
            burger.hide();
        }
    });
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
    }
    $('a').click(function(e) {
        e.preventDefault();
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
    $('.command__slider').slick({
        autoplay: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        nextArrow: '<img src="img/arrow-next.png" alt="" class="btn-ar slick-next">',
        prevArrow: '<img src="img/arrow-prev.png" alt="" class="btn-ar slick-prev">'

    });
    $('.nav-links a').on('tap', function(){
        burger.hide();
        var to = $(this).attr('href');
        var toOffset = $(to).offset.top;
        console.log('test done');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 800);
    });
    $('.connect__form-btn').click(function (e) {
        e.preventDefault();
    })
    $('.pink .connect__form-btn').on('tap', function (e) {
        e.preventDefault();
        isValid($(this));
    });
    $('.blue .connect__form-btn').on('tap', function (e) {
        e.preventDefault();
        isValid($(this));
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
});