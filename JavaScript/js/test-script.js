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


// It seems to me that switch is a better selector than if, else if, and else.....

// var ateBreakfast = false;
// var ateLunch = false;
// var ateDinner = false;

// if ( ateBreakfast || ateLunch || ateDinner ) {
//     alert ("I'm not starving!!");
// }
// else {
//     alert ("I'm STARVING!!!");
// }


function Hello() {
    let text = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = text.toUpperCase();
}

function Pizza() {
    let text = document.getElementById("demo3").innerHTML;
    document.getElementById("demo3").innerHTML = text.replace("cereal.", "PIZZA!")
}


function checkNum(){

    var number = prompt("Enter a whole number.", "")

        if (number < 15) {
            console.log ("You've entered a number less than 15!");
            for (var i = 0; i < 15; i++) {
            console.log (`Here is a ${i}`)
            }
        }
        else if (number > 14) {
            console.log ("You entered a big number.");
        }
        else {
            console.log ("ERROR: You did NOT enter a number!");
        }
}
checkNum();


function upperMessage (message) {
    var upperMessage = message.toUpperCase();
    console.log(upperMessage);
}

upperMessage('Here is a message!');


function addNums( num1, num2 ) {
    var sum = num1 + num2;
    console.log(`The sum is: ${sum}`);
}

addNums(329, 412);


var foods = ["Muenster", "Swiss cheese", "Turkey Sandwich", "Potato Salad", "Homemade Brownies"];
function randomInt ( min, max ) {
    // creating a random integer from min and max values.

    return Math.floor((max - min + 1 ) * Math.random()) + min;
}

document.getElementById("demo1").innerHTML = (foods [randomInt(0, 4)]); // prints to the main page.
// console.log ( foods [randomInt(0, 4) ]);  //this prints to the console.


var greeting = function() {
    console.log ("Hello from the function!");
}

// document.getElementById("demo4").innerHTML = ("Hello from the function!");
var greeting = function() {
    var name = prompt("Please tell me you name", "");
    console.log (`Hello ${name}, how are you doing today?`);
}
greeting();
// document.getElementById("demo4").innerHTML = "Hello,  how are you doing today?";
