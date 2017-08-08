$(document).ready(function(){
    $('.items').on('click', '.item--hover', function(){
        console.log('test');
        $(this).css({'background': '#fff',
            '-webkit-box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1), -5px 0px 9px -2px rgba(241,241,241,1)',
            '-moz-box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1), -5px 0px 9px -2px rgba(241,241,241,1)',
            'box-shadow': '0px -6px 9px -5px rgba(241,241,241,1), 0px 9px 9px -5px rgba(241,241,241,1, -5px 0px 9px -2px rgba(241,241,241,1)',
            'border-left': '5px solid #660080'
        });
        $(this).find('p').css('font-family', 'Proxima Nova Bold');
        $(this).find('span').css('font-family', 'Proxima Nova Bold');
    })
});
// , function(){
//     $(this).css({'background': 'none',
//         '-webkit-box-shadow': 'none',
//         '-moz-box-shadow': 'none',
//         'border-left': 'none'
//     })

