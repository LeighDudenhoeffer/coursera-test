var treats = ["Cookie", " Brownie", " Ice cream", " M&Ms"];

function loadTreats() {
    document.getElementById("treats").innerHTML = treats;
}

function myFunction() {
    var treat = prompt("What is your favorite treat? ");
    treats[treats.length] = treat;
    document.getElementById("treats").innerHTML = treats;
}