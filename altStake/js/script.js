function handleReplace(href){
    href = href.split('.png');
    href = href[0];
    $(this).attr(href, href +'-hover.png');
}
    $(document).ready(function () {
        $('.top-images').on('hover', 'a img', function () {
            console.log('test upgrade!')
           handleReplace($(this).attr('href'));
        });
    });


// $( document ).ready(function() {
//     console.log( "ready!" );
// });