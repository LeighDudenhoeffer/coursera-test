window.addEventListener('resize', function() {
    console.log(`The window width is ${this.window.innerWidth}`);
});

window.addEventListener(`resize`, function() {
    console.log(`The window height is ${this.window.innerHeight}`);
});


document.addEventListener('keypress', function(event) {
    alert (`the ${event.key} key was pressed!`);
});
