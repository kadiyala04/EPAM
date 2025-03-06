function reverseNumber(num) {
    let isNegative = num < 0;
    let reversedNum = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return isNegative ? -reversedNum : reversedNum;
}

function reverseNum() {
    let num = document.getElementById("numInput").value;
    let reversed = reverseNumber(parseInt(num));
    document.getElementById("result").innerText = "Reversed Number: " + reversed;
}

function printResult() {
    window.print();
}
