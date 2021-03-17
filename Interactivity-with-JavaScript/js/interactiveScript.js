// alert ("Welcome to Interactivity with JavaScript!!");

// document.write ("Welcome to Interactivity with JavaScript!!") // not the best way to use this!

console.log ("document.write isn't the best thing to use and is considered a violation of code rules!")

// function setDate() {
//     document.getElementById('date').innerHTML=Date();
// }

function displayDate() {
    document.getElementById("demo").innerHTML=Date();
}

function message(msg) {
    document.getElementById('output').innerHTML = msg + " event";
}
