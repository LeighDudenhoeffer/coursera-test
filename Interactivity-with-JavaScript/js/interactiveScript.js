// alert ("Welcome to Interactivity with JavaScript!!");

// document.write ("Welcome to Interactivity with JavaScript!!") // not the best way to use this!

console.log ("document.write isn't the best thing to use and is considered a violation of code rules!")

var name;
    name = prompt ("Enter your name: ")

alert ("Greetings, " + name + "! Welcome to JavaScript!");

function setDate() {
    document.getElementById('date').innerHTML=Date();
}
