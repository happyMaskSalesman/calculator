let lastWas = false;
let operated = false;
let ansOne = null;
let ansTwo = null;
let operation = '';

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => buttonPress(e));
});


//functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(name, a, b) {
    if(name === '+') {
        return add(Number(a), Number(b));
    } else if(name === '-') {
        return subtract(Number(a), Number(b));
    } else if(name === '*') {
        return multiply(Number(a), Number(b));
    } else if(name === '/') {
        return divide(Number(a), Number(b));
    }
};

function buttonPress(e) {
    const display = document.querySelector('.display');
    let buttonText = e.target.textContent;

    if (operated == true) display.textContent = '';

    if(lastWas == false &&  (buttonText === '.' || (buttonText >= '0' && buttonText <= '9'))) {

        if(display.textContent === '0') display.textContent = '';
        operated = false;
        display.textContent += buttonText;
        ansOne = display.textContent; 

    }  else if(ansTwo === null && (buttonText === '-' || buttonText === '+' || buttonText === '*' || buttonText === '/')) {
        operated = false;
        operation = buttonText;
        lastWas = true;

    } else if (ansTwo !== null && (buttonText === '=' || buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/')) {
        display.textContent = operate(operation, ansOne, ansTwo);
        operation = buttonText;
        ansOne = display.textContent;
        ansTwo = null;
        operated = true;

    } else if (lastWas == true &&  (buttonText === '.' || (buttonText >= '0' && buttonText <= '9'))) {
        if (display.textContent === ansOne) display.textContent = '';
        operated = false;
        display.textContent += buttonText;
        ansTwo = display.textContent;

    } else if (buttonText === 'Clear') {
        display.textContent = '0';
        lastWas = false;
        operated = false;
        ansOne = null;
        ansTwo = null;
        operation = '';

    } else if (buttonText == 'Del') {
        display.textContent = display.textContent.slice(0, -1);
    };

};