if (navigator.userAgent.indexOf('Android' || 'Iphone' || 'Blackberry' || 'Webos') != -1){
    location.assign('http://bitstake.ru/m/mobile.html');
}
if( screen.width <= 320 ) {
    location.assign('http://bitstake.ru/m/mobile.html');
};
function isValid() {
    var errorBlock = '<a href="" class="validate">Поле не заполнено</a>';
    $('.field-for-validate').each(function () {
        if($(this).find('input').val() === ''){
            $(this).append(errorBlock);
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
    prevArrow: '<img src="img/arrow-prev.png" alt="" class="btn-ar slick-prev">',

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
    $('.connect__form-btn').on('click', function (e) {
        e.preventDefault();
        isValid();
    });
    $('.validate').click(function (e) {
        e.preventDefault();
    })
});
