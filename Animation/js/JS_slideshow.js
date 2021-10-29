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
    const previous = document.getElementById('previous');
});