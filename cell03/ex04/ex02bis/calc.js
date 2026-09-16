$(function () {
    $("#calculator").on("submit", function (event) {
        event.preventDefault();

        const leftText = $("#leftNumber").val();
        const rightText = $("#rightNumber").val();
        const operator = $("#operator").val();

        const leftNumber = Number(leftText);
        const rightNumber = Number(rightText);

        if (
            leftText.trim() === "" ||
            rightText.trim() === "" ||
            !Number.isInteger(leftNumber) ||
            !Number.isInteger(rightNumber) ||
            leftNumber < 0 ||
            rightNumber < 0
        ) {
            alert("Error :(");
            return;
        }

        if (
            (operator === "/" || operator === "%") &&
            rightNumber === 0
        ) {
            alert("It's over 9000!");
            return;
        }

        let result;

        if (operator === "+") {
            result = leftNumber + rightNumber;
        } else if (operator === "-") {
            result = leftNumber - rightNumber;
        } else if (operator === "*") {
            result = leftNumber * rightNumber;
        } else if (operator === "/") {
            result = leftNumber / rightNumber;
        } else {
            result = leftNumber % rightNumber;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
