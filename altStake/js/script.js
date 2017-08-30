function handleReplace(href){
    href = href.split('.png');
    href = href[0];
    $(this).attr(href, href +'-hover.png');
}
    $(document).ready(function () {
        $('.top-images').on('hover', 'a img', function () {
           handleReplace($(this).attr('href'));
        });
    });