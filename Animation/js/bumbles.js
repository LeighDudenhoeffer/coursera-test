$(window).on('load', function(){
    $('.flexslider').flexslider(
        {
            animation: "slide",
            slideshowSpeed: 3000,
            direction: "horizontal",
            pauseOnHover: true,
            before: function(){
                $(".cta").css("bottom", "100%");
            },
            start: function(){
                $(".cta").animate({bottom: "5%"}, 3000, "easeOutElastic");
            },
            after: function(){
                $(".cta").animate({bottom: "5%"}, 3000, "easeOutElastic");
            }
        }
    );
});