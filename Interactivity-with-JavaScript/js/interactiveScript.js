// var foo = ["Thank you for looking at my page! ", " five ", 5];

// alert(foo [0]);
// alert(foo [1]);
// alert(foo [2]);

alert ("Welcome to Interactivity with JavaScript!!");

// document.write ("Welcome to Interactivity with JavaScript!!") // not the best way to use this!

console.log ("document.write isn't the best thing to use and is considered a violation of code rules!")

var name;
    name = prompt ("Enter your name: ")
    document.write (name);
	document.write ("<h1>" + name + "</h1>");
    document.write (name + 7+ "<br>");
    document.write (document.title +"<br>");
    var pars = document.getElementsByTagName ('p'); //this tells me how many paragraph elements exist on this page
    document.write (pars + "</br>");
    document.write (pars.length);
