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

// this is a variable, we start it at 0
var counter = 0;
// display the variable in the element "number"
$("#number").html(counter);
// when this function is called it runs everything inside the curly brackets
function count() {
    counter = counter + 1;  // firstly one is added to the variable ‘counter'
    $("#number").text(counter);  // set the h1 element (with id “number”) with the value of ‘counter'
    }
