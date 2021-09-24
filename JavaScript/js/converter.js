(function () {
    "use strict";

    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');

        if (distance) {
            const convertMiles = (distance * 1.609344).toFixed(3);
            // convert and round the distance to 3 decimal points

            answer.innerHTML = `<h2>${distance} miles converts to ${convertMiles} kilometers.</h2>`;
            // put the answer in the bottom div using innerHTML
        }

        else {
            answer.innerHTML = '<h2>Please provide a number!!</h2>';
            //put an error message in the bottom div
        }

    });
})();