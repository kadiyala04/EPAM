function calculateProfit() {
    // Get user input for the initial deposit amount
    let initialAmount = parseFloat(prompt("Enter the initial deposit amount:"));

    // Define a fixed interest rate (e.g., 5% per year)
    const interestRate = 5; // 5%

    // Get user input for the number of years
    let years = parseInt(prompt("Enter the number of years:"));

    // Validate user input
    if (isNaN(initialAmount) || initialAmount <= 0 || isNaN(years) || years <= 0) {
        alert("Please enter valid positive numbers for deposit amount and years.");
    } else {
        // Calculate the profit using simple interest formula: Profit = (P * R * T) / 100
        let profit = (initialAmount * interestRate * years) / 100;

        // Calculate total amount after interest
        let totalAmount = initialAmount + profit;

        // Display the result
        alert(`Initial Amount: ${initialAmount.toFixed(2)}\nInterest Rate: ${interestRate}%\nYears: ${years}\nProfit: ${profit.toFixed(2)}\nTotal Amount after ${years} years: ${totalAmount.toFixed(2)}`);
    }
}
