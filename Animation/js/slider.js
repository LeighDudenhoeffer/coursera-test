$(window).on('load', function(){
    "use strict";

    const imageCount = $("#slider ul li").length;
    const imageWidth = $("#slider ul li img").first() .width();
    // const totalWidth = (imageCount * imageWidth) + "px";

    // alert(totalWidth);

    let leftPosition = 0;
    let counter = 0;

    $("#slider ul").css("width", totalWidth);

    $("#next").click(function(){
        counter++;
        leftPosition = `-${counter * imageWidth}px`;
        $("slider ul").animate( {left:leftPosition}, 700, "easeInQuad");
    });

});