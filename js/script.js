if (navigator.userAgent.indexOf('Android' || 'Iphone' || 'Blackberry' || 'Webos') != -1){
    location.assign('http://bitstake.ru/m/mobile.html');
}
if( screen.width <= 320 ) {
    location.assign('http://bitstake.ru/m/mobile.html');
};
$(document).ready(function(){
  $('.command__slider').slick({
    autoplay: false,
    infinite: true,
    // slidesToShow: 1,
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
});
