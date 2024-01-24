// droneAgencyScript.js

document.addEventListener("DOMContentLoaded", function () {
    var accountButton = document.getElementById("accountButton");
    var dropdownContent = document.getElementById("dropdownContent");

    accountButton.addEventListener("click", function (event) {
        // Toggle the display of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
        
        // Prevent the click event from propagating to document click event
        event.stopPropagation();
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function () {
        dropdownContent.style.display = "none";
    });

    // Prevent dropdown from closing when clicking inside it
    dropdownContent.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});