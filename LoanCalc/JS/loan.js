// This loan app is uses strict ECMA 5 mode.

// This script will define the calculate function that will be called by event handlers in the HTML code.
// The function coded here will read values from <input> elements and calculate loan payment info and
// display the info in the elements. It will also save the data, display links to lenders, and draw charts.

function calculate(){  //Look up the input and output elements in the document.
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");
    // Get the user's input from the input elements. Assume all is valid. Convert interest from a
    // percentage to a decimal, and convert from annual rate to monthly rate. Convert payment period in
    // years to the total number of monthly payments.
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) /100 / 12;
    var payments = parseFloat(years.value) * 12;
    // Compute the monthly payments using Math.pow which calculates powers:
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal *x* interest)/(x-1);

    // If the result is a finite number, the input data was good and can display meaningful results.
    if (isFinite(monthly)) {  //This will fill in the output fields and round to 2 decimal places.
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

        // Advertise: find and display local area lenders, but ignore network error trys.
        try {   // Catch any errors that occur within the curly braces
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        }
        catch(e) { /* And ignore the errors */ }
        }
        else { // When the result was 'Not-a-Number' or infinite, the input was incomplete or invalid.
                // Clear previously displayed output.
            payment.innerHTML = "";         // Erase the contents of these elements
            total.innerHTML = "";
            totalinterest.innerHTML = "";
            chart();                        // clears the chart if there are no arguments
        }
    }

// At this point it works fine. I'll rem out the graph until I can get it figured right.

// Pass the user input to a server-side script which will return a list of links to local lenders (zip code based).
// This part only works in theory. I'll have to learn how to do it for modernity.
function getLenders(amount, apr, years, zipcode) {
    // If the browser doesn't support the XMLHttpREquest object, do nothing
    if (!window.XMLHttpRequest) return;
    // Find the element to display the list of vendors
    if (!ad) return             // Quit if no spot for output
    // Encode the user output as query params in a URL
    var url = getLenders.php +          // Service url plus
        "?amt=" + encodeURIComponent(amount) +
        "&apr=" + encodeURIComponent(apr) +
        "&yrs=" + encodeURIComponent(years) +
        "&zip=" + encodeURIComponent(zipcode);
    // Get the contents of the URL using the XMLHttpRequest object
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.send(null);
    // register the event handler function that will be called at a later time when the server response
    // arrives
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            // If we're here, then we received a valid HTTP response
            var response = req.responseText         // HTTP response as a string
            var lenders = JSON.parse(response);     // Parse it to a JS array

            // Convert array of lender objects to HTML
            var list = "";
            for(var i = 0; i < lenders.length; i++) {
                list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name +"</a>";
            }
            // Display the returned HTML
            ad.innerHTML = "<ul>" + list + "</ul>";
        }
    }
}

// Chart the monthly loan balance, interest and equity in an HTML <canvas element>
function chart(principal, interest, monthly, payments) {
    var graph = document.getElementById("graph");
    graph.width = graph.width;      //Some magic to clear and reset the canvas element
    // if called with no arguments, or if the browser doesn't support graphics in a <canvas> element, then just return.
    if (arguments.length == 0 || !graph.getContext) return;

    // Get the context object for the canvas
    var g = graph.getContext("2d");
    var width = graph.width, height = graph.height;
    function paymentToX(n) { return n * width/payments; }
    function amountToY(a) { return height-(a * height/(monthly*payments*1.05));}

    // Payments are in a straight line from (0,0) to (payments, monthly*payments)
    g.moveTo(paymentToX(0), amountToY(0));      // starts at the lower left
    g.lineTo(paymentToX(payments), amountToY(monthly*payments));        // Draws to the upper right
    g.lineTo(paymentToX(payments), amountToY(0));       // Down to lower right
    g.closePath();      // goes back to the start
    g.fillStyle = "af88";       // Light red
    g.fill();       // fill the triangle
    g.font = "bold 12px sans-serif";
    g.fillText("Total Interest Payments", 20,20);

    // Cumulative equity non-linear and more difficult to chart
    var equity = 0;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(0));
    for(var p = 1; p <= payments; p++) {    //figure out the interest for the month
        var thisMonthsInterest = (principal-equity)*interest;
        equity += (monthly - thisMonthsInterest);
        g.lineTo(paymentToX(p), amountToY(equity));
    }
    g.lineTo(paymentToX(payments), amountToY(0));
    g.closePath();
    g.fillStyle = "green";
    g.fill();
    g.fillText("Total Equity", 20, 35);

    // Loop again, but chart the loan balance in a thick black line
    var bal = principal;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(bal));
    for(var p = 1; p <= payments; p++) {
        var thisMonthsInterest = bal * interest;
        bal -= (monthly - thisMonthsInterest);
        g.lineTo(paymentToX(p), amountToY(bal));
    }
    g.lineWidth = 3;
    g.stroke();
    g.fillStyle = "black";
    g.fillText("Loan Balance", 20, 50);

    // Now make yearly tick marks and year numbers on X axis
    g.textAlign="center";
    var y = amountToY(0);
    for(var year=1; year*12 <= payments; year++) {
        var x = paymentToX(year*12);
    g.fillRect(x-0.5, y-3, 1, 3);
    if (year == 1) g.fillText("Year", x, y-5);
    if (year % 5 == 0 && year*12 !== payments)
    g.fillText(String(year), x, y-5);
    }

    // Mark payment amounts along right edge
    g.textAlign = "right";
    g.textBaseline = "middle";
    var ticks = [monthly*payments, principal];
    var rightEdge = paymentToX(payments);
    for(var i = 0; i < ticks.length; i++) {
        var y = amountToY(ticks[i]);
        g.fillRect(rightEdge-3, y-0.5, 3, 1);
        g.fillText(String(ticks[i].toFixed(0)), rightEdge-5, y);
    }
}
