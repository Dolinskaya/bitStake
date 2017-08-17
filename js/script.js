if (navigator.userAgent.indexOf('Android' || 'Iphone' || 'Blackberry' || 'Webos') != -1){
    location.assign('http://bitstake.ru/m/mobile.html');
}
if( screen.width <= 320 ) {
    location.assign('http://bitstake.ru/m/mobile.html');
};
function isValid(form) {
    var parent = form.parent();
    var color = parent.data();
    color = color.color;
    var errorBlock = '<a href="" class="validate '+color+'">Поле не заполнено</a>';
    if(parent.hasClass('pink')){
        $(parent).find($('.field-for-validate')).each(function () {
            var self = $(this);
                if(self.find('input').val() === ''){
                    self.append(errorBlock);
                }else{
                    self.find('.validate').remove();
                }
            });
    } else{
        $(parent).find($('.field-for-validate')).each(function () {
            var self = $(this);
            if(self.find('input').val() === ''){
                self.append(errorBlock);
            }else{
                self.find('.validate').remove();
            }
        });
    }
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
    $('.pink .connect__form-btn').on('click', function (e) {
        e.preventDefault();
        isValid($(this));
    });
    $('.blue .connect__form-btn').on('click', function (e) {
        e.preventDefault();
        isValid($(this));
    });
    $('.validate').click(function (e) {
        e.preventDefault();
    });
    $('.pink .connect__form-btn').hover(function () {
        $(this).next().attr('src', 'img/reg--hover.png');
    }, function () {
        $(this).next().attr('src', 'img/reg.png');
    });
    $('.invest-ing-img').hover(function () {
        $(this).attr('src','img/info--hover.png');
    }, function () {
        $(this).attr('src','img/info.png');
    });
});
