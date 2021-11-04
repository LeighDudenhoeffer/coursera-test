(function () {
    'use strict';

    let counter = 1;

    function contentRotator(){
        $(`#container p:nth-child(${counter})`).fadeIn(2000, function(){
            if( $(this).is( "#container p:last-child") ){

            }
            else{
                setTimeout(function(){
                    $(`#container p:nth-child(${counter})`).fadeOut(2000, function(){});
                }, 5000);
            }
        });
    }

    contentRotator();

}());