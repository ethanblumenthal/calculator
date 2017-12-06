var display = document.querySelector('#display');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');
var equation = [];

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
    equation.push(display.innerText); 
    equation.push(this.innerText);    
    display.innerText = '';    
}

function handleEqualsClick() {
    display.innerText = calculate();
    equation = [];
}

function handleClearClick() {
    display.innerText = '';
}

function calculate() {
    switch (equation[1]) {
        case '+':
            return Number(equation[0]) + Number(equation[2]);
            break;
        case '-':
        return Number(equation[0]) - Number(equation[2]);
            break;
        case '*':
            return Number(equation[0]) * Number(equation[2]);
            break;
        case '/':
            return Number(equation[0]) / Number(equation[2]);
            break;
    }
}