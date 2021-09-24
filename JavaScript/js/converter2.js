(function () {
    "use strict";

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function () {
        var key = event.code;

        if (key === 'KeyK') {
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Kilometers will be converted when you click the CONVERT DISTANCE button";
        }
        else if (key === 'KeyM') {
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Miles will be converted when you click the CONVERT DISTANCE button";
        }
    });

    form.addEventListener('submit', function () {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            //convert M to K 1.609344
            //convert K to M 0.621371192
            if (convertType == "miles") {
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} miles converts to ${converted} kilometers.</h2>`;
            }
            else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles. </h2>`;
            }
        }

        else {
            answer.innerHTML = '<h2>Please provide a number!!</h2>';
        }
    });

})();

function refreshPage() {
    window.location.reload();
}