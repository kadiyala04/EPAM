function filterArray() {
    let numbers = [10, -5, 20, -8, 15, 0, -2, 30];

    // Filtering out negative numbers
    let filteredNumbers = numbers.filter(num => num >= 0);

    return filteredNumbers;
}

// Function to display the output in the HTML page
function displayFilteredArray() {
    document.getElementById("output").innerText = "Filtered Array: " + filterArray().join(", ");
}
