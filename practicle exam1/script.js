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
}