(function () {
    "use strict";

    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', selectTab);
    }

    function selectTab(event) {

    }

}());