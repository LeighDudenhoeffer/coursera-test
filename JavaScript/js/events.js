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



var heading = document.querySelector('h2');
var box = document.querySelector('#roll');

box.addEventListener('mouseover', function() {
    heading.innerHTML = "The mouse is over the box!";
});

box.addEventListener('mouseout', function() {
    heading.innerHTML = "The mouse has left the box!"
});

heading.addEventListener('mouseover', function() {
    heading.innerHTML = "Roll your mouse over the box!";
});


var pagetop;

window.addEventListener('scroll', function() {
    pagetop = this.window.pageYOffset;
    console.log(pagetop);
});

const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number+1);
}

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}