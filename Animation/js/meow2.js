(function () {
    'use strict';

    $('ul li ul').hide();
    $('.menulink').click(function () {
        var thisMenu = $(this).next('ul');
        $('ul li ul').not(thisMenu).hide();
        thisMenu.toggle(); /* We don't need to use loops in jQuery because all of the
            code is already written for us.*/
    });

})();