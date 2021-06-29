var friends = ['Good afternoon, Leigh', 'I am happy for you!', 'Hey, have a peach!', 'Kiss Miss Pepper']

alert (friends [0]);

document.getElementById("demo").innerHTML = "This is not my First JavaScript!"

var happy = true;
var sad = false;

if (happy) {
    alert (friends [3]);
} else {
    alert (friends [2]);
}

var colors = ['red', 'green', 'blue', 'yellow', 'chartreuse', 'violet'];
var selectedColor = colors[5];

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

switch (selectedColor) {
    case "red": alert("The color is red!");
        break;
    case "blue": alert("The color is blue!");
        break;
    case "green": alert("The color is green!");
        break;
    case "yellow": alert("The color is yellow!");
        break;
    case "chartreuse": alert("The color is chartreuse!");
        break;
    case "violet": alert("The color is violet!");
        break;
    default: alert("There was an error.")
}