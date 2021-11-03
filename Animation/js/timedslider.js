$(window).on('load', function(){
    "use strict";

    const imageCount = $("#slider ul li").length;
    const imageWidth = $("#slider ul li").first().width();
    const totalWidth = (imageCount * imageWidth) + "px";

    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css("width", totalWidth);

    setInterval(function(){
        counter++;

        if (counter === imageCount) {

            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", imageWidth + "px");

            leftPosition = `-${totalWidth}`;

            $("#slider ul").last().animate({ left: 0 }, 500, "easeInQuad");
            $("#slider ul").first().animate({ left: leftPosition }, 500, "easeInQuad", function(){
                $("#slider ul").first().remove();
            });

            counter = 0;

        }
        else {
            leftPosition = `-${counter * imageWidth}px`;
            $("#slider ul").animate({ left: leftPosition }, 500, "easeInQuad");
        }
    }, 2500 );

let mySlider = setInterval(mySlider, 2500);

$("#slider").mouseover(function(){clearInterval(mySlider) });
$("#slider").mouseout(function(){mySlider = setInterval(slider, 2500); });

});