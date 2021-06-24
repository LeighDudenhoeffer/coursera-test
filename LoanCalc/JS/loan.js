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

        //Save user input so it can be restored when they visit the loan calculater again.
        save(amount.value, apr.value, years.value, zipcode.value);

    }
}