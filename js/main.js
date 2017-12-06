var display = document.querySelector('#display');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');

var firstNumber = null;
var selectedOperator = null;
var secondNumber = null;

digits.forEach(function(e) {
    e.addEventListener('click', handleDigitClick);
});

operators.forEach(function(e) {
    e.addEventListener('click', handleOperatorClick);
});

equals.addEventListener('click', handleEqualsClick);

clear.addEventListener('click', handleClearClick);

function handleDigitClick() {
    display.innerText += this.innerText;
}

function handleOperatorClick() {
    firstNumber = Number(display.innerText);
    selectedOperator = this.innerText;    
    display.innerText = '';    
}

function handleEqualsClick() {
    secondNumber = Number(display.innerText);
    display.innerText = calculate();
}

function handleClearClick() {
    display.innerText = '';
    firstNumber = null;
    selectedOperator = null;
    secondNumber = null;
}

function calculate() {
    switch (selectedOperator) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
        return firstNumber - secondNumber;
            break;
        case 'x':
            return firstNumber * secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
    }
}