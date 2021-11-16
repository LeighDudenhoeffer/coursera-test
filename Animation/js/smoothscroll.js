$('nav ul li a').click(function(){
    var thisSection = $(this).attr('href');

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top
    }, 1800, "easeOutCirc");

});