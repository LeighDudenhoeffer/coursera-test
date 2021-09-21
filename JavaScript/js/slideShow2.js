(function () {
    "use strict";

    let currentImage = 0;
    const myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    function swapImage() {
        const newSlide = document.createElement('img');
        newSlide.src = `images/${myImages[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]); // This will remove the bottom most child. This is necessary
            // because every time we click the link, it adds one more and this fills up the DOM.
        }
    }

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImage++;
        if (currentImage > myImages.length - 1) { currentImage = 0; }

        swapImage();
    });

    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImage--;
        if (currentImage < 0) { currentImage = myImages.length - 1 }

        swapImage();
    });
})();