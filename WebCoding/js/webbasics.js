// This function only needs to be called once and doesn't need a name.
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