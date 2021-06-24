// This loan app is uses strict ECMA 5 mode.

// This script will define the calculate function that will be called by event handlers in the HTML code.
// The function coded here will read values from <input> elements and calculate loan payment info and
// display the info in the elements. It will also save the data, display links to lenders, and draw charts.

function calculate(){  //Look up the input and output elements in the document.
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("years");
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

        // Save user input so it can be restored when they visit the loan calculater again.
        save(amount.value, apr.value, years.value, zipcode.value);

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

// Now save the user input as properties of the localStorage object. The storage feature may not work
// in some browsers. However, it does work over HTTP.
function save(amount, apr, years, zipcode) {
    if (window.localStorage) {  // Do this only if the browser supports it.
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

// Attempt to restore the input fields when the document first loads.
window.onload = function() {
    // this will occur only if the browser supports local storage
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById(amount).value = localStorage.loan_amount;
        document.getElementById(apr).value = localStorage.loan_apr;
        document.getElementById(years).value = localStorage.loan_years;
        document.getElementById(zipcode).value = localStorage.loan_zipcode;
    }
};

// Pass the user input to a server-side script which will return a list of links to local lenders (zip
// code based).
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
    }
