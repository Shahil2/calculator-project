document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let firstOperand = null;
    let secondOperand = false;
    let currentOperation = null;

    window.clearDisplay = function() {
        display.textContent = '0';
        firstOperand = null;
        secondOperand = false;
        currentOperation = null;
    };

    window.appendNumber = function(number) {
        if (display.textContent === '0' || secondOperand) {
            display.textContent = number;
            secondOperand = false;
        } else {
            display.textContent += number;
        }
    };

    window.setOperation = function(operation) {
        if (currentOperation && !secondOperand) {
            calculateResult();
        }
        firstOperand = parseFloat(display.textContent);
        currentOperation = operation;
        secondOperand = true;
    };

    window.calculateResult = function() {
        if (currentOperation === null) return;
        let result;
        const secondOperandValue = parseFloat(display.textContent);
        switch (currentOperation) {
            case '+':
                result = firstOperand + secondOperandValue;
                break;
            case '-':
                result = firstOperand - secondOperandValue;
                break;
            case '*':
                result = firstOperand * secondOperandValue;
                break;
            case '/':
                result = firstOperand / secondOperandValue;
                break;
            default:
                return;
        }
        display.textContent = result;
        firstOperand = result;
        currentOperation = null;
        secondOperand = false;
    };
});
