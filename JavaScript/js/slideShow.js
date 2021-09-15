// we're keeping this inside of this function, so it doesn't mess with anything else
// we may do on this page.

(function(){
    "use strict";
    const myImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
    let currentImage = 0;

    document.getElementById('next').onclick = nextPhoto;
    document.getElementById('previous').onclick = previousPhoto;

    function nextPhoto() {
        currentImage++;
        if (currentImage > myImages.length - 1) { currentImage = 0; }
        document.getElementById('myImage').src = myImages[currentImage];
    }

    function previousPhoto() {
        currentImage--;
        if (currentImage < 0) { currentImage = myImages.length - 1; }
        document.getElementById('myImage').src = myImages[currentImage];
    }

})();
