<<<<<<< HEAD
function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");
    let loopResult = document.getElementById("loopResult");

    num = Number(num);

    // Check even or odd
    if (num % 2 === 0) {
        result.innerText = num + " is Even";
    } else {
        result.innerText = num + " is Odd";
    }

    // Loop from 1 to number
    let output = "";
    for (let i = 1; i <= num; i++) {
        output += i + " ";
    }

    loopResult.innerText = "Numbers: " + output;
=======
function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");
    let loopResult = document.getElementById("loopResult");

    num = Number(num);

    // Check even or odd
    if (num % 2 === 0) {
        result.innerText = num + " is Even";
    } else {
        result.innerText = num + " is Odd";
    }

    // Loop from 1 to number
    let output = "";
    for (let i = 1; i <= num; i++) {
        output += i + " ";
    }

    loopResult.innerText = "Numbers: " + output;
>>>>>>> 71be39e6e419e2c5df4b0fb762696e79d22ef9df
}