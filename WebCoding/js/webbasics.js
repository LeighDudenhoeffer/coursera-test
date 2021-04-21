function myFunction() {
    document.getElementById("paragraph").innerHTML = "A Paragraph Changed.";
}

function aFunction() {
    document.getElementById("demo1").innerHTML="Hello!!!";
    document.getElementById("demo2").innerHTML="How are you today?"
}

$("#title").click(function() {
    $("#title").html("Hello!");
    $("#title").off("click");
});