var display = document.querySelector('#display');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');

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
    display.innerText += this.innerText;    
}

function handleEqualsClick() {
    display.innerText = eval(display.innerText);
}

function handleClearClick() {
    display.innerText = '';
}