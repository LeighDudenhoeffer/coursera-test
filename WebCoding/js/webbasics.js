// This function needs to be called only once and doesn't need a name.
//Clicking Hello (at the top of the page) turns it on and clicking the resulting, "Goodbye"
//turns it off again.
function sayGoodbye() {
    $("#title").html("Goodbye")
    $("#title").click(function() {
        $("#title").html("Hello!");
        $("#title").off("click");
    });
    };

function myFunction() {
    document.getElementById("paragraph").innerHTML = "A Paragraph Changed.";
};

function aFunction() {
    document.getElementById("demo1").innerHTML="Hello!!!";
    document.getElementById("demo2").innerHTML="How are you today?"
};

function upDate(previewPic){
    var src = previewPic.getAttribute("src");
    var alt = previewPic.getAttribute("alt");
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
}

function unDo(){
    document.getElementById('image').style.backgroundImage = "none";
    document.getElementById('image').innerHTML = "Hover over an image to display it in this space.";
}


// slideshow script starts here:
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var weatherslides = document.getElementsByClassName("weatherslides");

    if (n > weatherslides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = weatherslides.length}
    for (i = 0; i < weatherslides.length; i++) {
        weatherslides[i].style.display = "none";
    }

    weatherslides[slideIndex-1].style.display = "block";
}
