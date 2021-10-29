window.addEventListener('load', function(){
    // How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    // How wide are the slides?
    // alert(slideCount);
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    // Total slider width
    const totalWidth = slideCount * slideWidth + 'px';
    // DOM slider element
    const slider = document.querySelector('#slider-wrapper ul');
    // Next button
    const next = document.getElementById('next');
    // Previous button
    const previous = document.getElementById('previous');

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
            // set the counter to 0
            counter = 0;
            // set the left position to 0
            leftPosition = 0;
            // move the slider into position
            slider.style.left = leftPosition;
        } else {
            // move the slider to the next slide

        }
    });

});