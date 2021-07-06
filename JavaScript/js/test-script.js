// var friends = ['Good afternoon, Leigh', 'I am happy for you!', 'Hey, have a peach!', 'Kiss Miss Pepper']

// alert (friends [0]);

document.getElementById("demo").innerHTML = "This is a JavaScript class!!"

// var happy = true;
// var sad = false;

// if (happy) {
//     alert (friends [3]);
// } else {
//     alert (friends [2]);
// }

// var colors = ['red', 'green', 'blue', 'yellow', 'chartreuse', 'violet'];
// var selectedColor = colors[5];

// if( selectedColor == 'red') {
//     alert ("The color is red!");
// }
// else if ( selectedColor == 'green' ) {
//     alert ("The color is green!");
// }
// else if ( selectedColor == 'blue' ) {
//     alert ("The color is blue!");
// }
// else {
//     alert ("The color is yellow!");
// }

// switch (selectedColor) {
//     case "red": alert("The color is red!");
//         break;
//     case "blue": alert("The color is blue!");
//         break;
//     case "green": alert("The color is green!");
//         break;
//     case "yellow": alert("The color is yellow!");
//         break;
//     case "chartreuse": alert("The color is chartreuse!");
//         break;
//     case "violet": alert("The color is violet!");
//         break;
//     default: alert("There was an error.")
// }
// It seems to me that switch is a better selector than if, else if, and else.....

// var goodMood = true;
// var gotSleep = true;

// if (goodMood && gotSleep ) {
//     alert ("Today is a very good day!!! Keep a smile on!");
// }
// else {
//     alert ("I'm very grabby today. Go away.")
// }

var ateBreakfast = false;
var ateLunch = false;
var ateDinner = false;

if ( ateBreakfast || ateLunch || ateDinner ) {
    alert ("I'm not starving!!");
}
else {
    alert ("I'm STARVING!!!");
}

function Hello() {
    let text = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = text.toUpperCase();
}

function Pizza() {
    let text = document.getElementById("demo3").innerHTML;
    document.getElementById("demo3").innerHTML = text.replace("cereal.", "PIZZA!")
}

function doStuff() {
    var aString = "Here is a message for anyone.";
    var bStringUpper = aString.toUpperCase();
    console.log(aString);
    console.log(bStringUpper);
}

doStuff();