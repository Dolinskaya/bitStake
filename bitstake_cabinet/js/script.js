$(document).ready(function(){
    $('.items').on('click', '.item--hover', function(e){
        console.log('test');
        $(this).toggleClass('active');
        $(this).find('p').toggleClass('active-font');
        $(this).find('span').toggleClass('active-font');
    })
});
// , function(){
//     $(this).css({'background': 'none',
//         '-webkit-box-shadow': 'none',
//         '-moz-box-shadow': 'none',
//         'border-left': 'none'
//     })

// $(this).css({'background': '#fff',
//     '-webkit-box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1), -5px 0px 9px -2px rgba(241,241,241,1)',
//     '-moz-box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1), -5px 0px 9px -2px rgba(241,241,241,1)',
//     'box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1, -5px 0px 9px -2px rgba(241,241,241,1)',
//     'border-left': '5px solid #660080'
// });