$(document).ready(function(){
    $('.kard-wrapper').find('.item--hover').click(function(){
        console.log('test');
        $(this).css({'background': '#fff',
            '-webkit-box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1), -5px 0px 9px -2px rgba(241,241,241,1)'});
    });
});
