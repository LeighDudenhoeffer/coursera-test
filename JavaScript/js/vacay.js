var detailsForm = document.querySelector("#destination_details_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;


    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.element[i].value = "";
    }

    // create card here....

    var wishListContainer = document.getElementById('title');

}