var tabs = document.querySelectorAll('#tabs > ul > li > a');

for (var i=0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', selectTab);
}

function selectTab(event) {
    event.preventDefault();

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].removeAttribute('class');
    }

    event.target.className = 'active';

    var thisTab = event.target.getAttribute('href');
    var thisContent = document.querySelector(thisTab);

    var oldTabContent = document.querySelector('.visible');
    oldTabContent.className = 'visuallyhidden';

    oldTabContent.addEventListener('transitionend', function(){
        oldTabContent.className = 'hidden';

        thisContent.className = 'visible visually hidden';
        setTimeout(function(){
            thisContent.classList.remove('visuallyhidden');
        }, 20);
    }, {capture:false, once:true, passive:false});
}