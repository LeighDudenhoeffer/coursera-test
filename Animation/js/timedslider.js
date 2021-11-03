$(window).on('load', function(){
    "use strict";

    const imageCount = $("#slider ul li").length;
    const imageWidth = $("#slider ul li: first img").width();
    const totalWidth = (imageCount * imageWidth) + "px";

    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css("width", totalWidth);


    setInterval(slider, 3000);

    function slider(){
        counter++;

        if (counter === imageCount) {
            counter = 0;}

            leftPosition = `-${counter * imageWidth}px`;

            $("#slider ul").animate(
                { left: leftPosition }, 500, "easeInQuad");

    };

});

let mySlider = setInterval(slider, 3000);

$("#slider").mouseover(function(){ clearInterval(mySlider) });
$("#slider").mouseout(function(){ mySlider = setInterval(slider, 3000); });