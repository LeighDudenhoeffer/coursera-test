function aFunction() {
    document.getElementById("demo1").innerHTML="Ouch! That hurts!!!";
}

document.getElementById('validate').addEventListener('click', function (evnt) {
evnt.preventDefault();



var elems = document.getElementById("picker").elements;
var elemArray = new Object();
for (var i = 0; i < elems.length; i++) {
    if (elems[i].type == "text") elemArray[elems[i].id] = elems[i].value;
}

var str = '';
Object.keys(elemArray).forEach(function (key) {
    var value = elemArray[key];
    str+=key + '   --->   ' + value + '<br>';
})

document.getElementById("result").innerHTML = str;
}, false);



var heading = document.querySelector('h3');
var myDiv = document.querySelector('roll');

box.addEventListener('mouseover', function() {
    heading.innerHTML = "The mouse is over the box!";
});

