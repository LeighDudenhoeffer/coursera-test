(function(){
    "use strict";

    function hideSubmenus() {
        var submenus = document.querySelectorAll("ul li ul");

        for (var i = 0; i < submenus.length; i++) {
            submenus[i].className = "hide-menu";
        }
    }

    hideSubmenus();
    var menuLinks = document.querySelectorAll('.menulink');

    for (var i = 0; i < menuLinks.length; i++) {

        menuLinks[i].addEventListener('click', function (event) {
            event.preventDefault();

            var thisMenu = this.parentNode.querySelector('ul');

            if (thisMenu.classList.contains('hide-menu')) {
                hideSubmenus();
                thisMenu.className = "show-menu";
            }

            else {
                thisMenu.className = "hide-menu";
            }
        });
    }

}());