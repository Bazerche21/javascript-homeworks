let displayValue = '0';
let operator = null;
let firstOperand = null;
let operandPressed = false;
let errorMessage = document.getElementById('error-message');

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function addToDisplay(value) {
    if (operandPressed || errorMessage.innerText !== '' || displayValue === '0') {
        displayValue = value;
        operandPressed = false;
        errorMessage.innerText = '';
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function addDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperation(op) {
    operator = op;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        operandPressed = true;
    } else {
        calculate();
    }
    updateDisplay();
}

function calculate() {
    if (operator !== null) {
        const secondOperand = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = (firstOperand + secondOperand).toString();
                break;
            case '-':
                displayValue = (firstOperand - secondOperand).toString();
                break;
            case '*':
                displayValue = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    displayValue = (firstOperand / secondOperand).toString();
                } else {
                    displayValue = '0';
                    errorMessage.innerText = 'Error: Division by zero';
                }
                break;
        }
        operator = null;
        firstOperand = null;
        operandPressed = true;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    operator = null;
    operandPressed = false;
    firstOperand = null;
    errorMessage.innerText = '';
    updateDisplay();
}