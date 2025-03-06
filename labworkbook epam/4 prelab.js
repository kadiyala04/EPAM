function reverseNumber(num) {
    let isNegative = num < 0;
    let reversedNum = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return isNegative ? -reversedNum : reversedNum;
}

// Call the function and display the output in the console
console.log(reverseNumber(12345));  // Output: 54321
console.log(reverseNumber(-56789)); // Output: -98765
