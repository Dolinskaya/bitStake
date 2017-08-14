if (navigator.userAgent.indexOf('Android' || 'iphone' || 'blackberry' || 'webos') != -1){
    location.assign('http://m.bitstake.ru');
}
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
