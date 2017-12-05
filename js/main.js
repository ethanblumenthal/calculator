var display = document.querySelector('#display');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');

function handleDigitClick() {
    digits.forEach(function(e) {
        e.addEventListener('click', function() {
            display.innerText += this.innerText;
        });
    });
}

function handleOperatorClick() {
    operators.forEach(function(e) {
        e.addEventListener('click', function() {
            display.innerText = '';
        });
    });
}

function handleEqualsClick() {
    equals.addEventListener('click', function() {
        display.innerText = eval(display.innerText);
    });
}

function handleClearClick() {
    clear.addEventListener('click', function() {
        display.innerText = '';
    });
}