// Parallax
// http://www.jqueryscript.net/animation/Mouse-aware-Parallax-Effect-with-jQuery-and-TweenMax-Mouse-Parallax.html
$(document).ready(function($) {
    $.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2,
        {
            x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
            y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
        });

};

$(document).mousemove(function (c) {
    /*$( '#start' ).parallax( 0, c );*/
    $('#ravenPurple').parallax(-20, c);
    $('#summary').parallax(-30, c);
    $('#start-stella').parallax(-50, c);
    $('#start-kaeya').parallax(-60, c);
});
});
