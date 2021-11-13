$('nav ul li a').click(function(){
    var thisSection = $(this).attr('href');

    $('html').stop().animate({/* add animation here */}, 800);
});