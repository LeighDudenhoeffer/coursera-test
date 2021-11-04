(function () {
    'use strict';

    let counter = 1;

    function contentRotator(){
        $(`#container p:nth-child(${counter})`).fadeIn(2000, function(){

        });
    }

    contentRotator();

}());