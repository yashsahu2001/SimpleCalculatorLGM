function appendChar(char) {
    document.getElementById("result").value += char;
}

function calculate() {
    let expression = document.getElementById("result").value;
    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLastChar() {
    let currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult.slice(0, -1);
}
