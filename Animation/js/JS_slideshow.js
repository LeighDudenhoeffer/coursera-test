window.addEventListener('load', function(){
    // How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    // How wide are the slides?
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    // Total slider width
    const totalWidth = slideCount * slideWidth + 'px';
    // DOM slider element
    const slider = document.querySelector('#slider-wrapper ul');
    // Next button
    const next = document.getElementById('next');
    // Previous button
    const previous = document.getElementById('prev');

    // Upper left corner of the slider
    let leftPosition = 0;
    // slide counter
    let counter = 0;
    // Set the width of the slider (also in the css)
    slider.style.width = totalWidth;

    next.addEventListener('click', function(event){
        event.preventDefault();

        counter++;
        if (counter === slideCount) {
            counter = 0;
        }
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
    });

    previous.addEventListener('click', function(event) {
        event.preventDefault();

        counter--;
        if (counter < 0 ) {counter = slideCount - 1;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

});