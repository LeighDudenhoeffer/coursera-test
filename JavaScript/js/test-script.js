var friends = ['Jack', 'Jill', 'Judith', 'Terrence']

alert (friends [3])


if (1 != 2) {
    alert ("If you're not seeing this, we have bigger problems than JavaScript.");
    // 1 is never equal to 2, so we should always see this alert.
}

if (1 == 2) {
    alert ("If you're seeing this, we have bigger problems than JavaScript!");
    // 1 is NOT equal to 2, so this code will never run.
}

var test = "testing";
if ( test != "testing") {
    alert ("You haven't change anything."); // == and = will return this message
} else {
    alert ("You've changed something!") // != will return this message
}
