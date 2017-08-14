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
});
