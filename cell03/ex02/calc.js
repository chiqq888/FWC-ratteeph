const calculator = document.getElementById("calculator");

calculator.addEventListener("submit", function (event) {
    event.preventDefault();

    const leftText = document.getElementById("leftNumber").value;
    const rightText = document.getElementById("rightNumber").value;
    const operator = document.getElementById("operator").value;

    const leftNumber = Number(leftText);
    const rightNumber = Number(rightText);

    /* ตรวจว่ากรอกข้อมูลและเป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป */
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

    /* ห้ามหารหรือ Modulo ด้วย 0 */
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
        
    } else if (operator === "%") {
        result = leftNumber % rightNumber;
    }

    alert(result);
    console.log(result);
});


/* แจ้งเตือนทุก 30 วินาที */
setInterval(function () {
    alert("Please, use me...");
}, 30000);