let firstNumber = '';
let secondNumber = '';
let equationOperator = '';
let result = 0;

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight= document.querySelector('.eight');
const nine = document.querySelector('.nine');

const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');

const removeBtn = document.querySelector('.remove');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const dotButton = document.querySelector('.dot');

const rootBtn = document.querySelector('.root');
const powBtn = document.querySelector('.power');
const piBtn = document.querySelector('.pi');

const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorTopScreen = document.querySelector('.top-screen');

const numbers = [
    {
        button: zero,
        value: 0
    }, 
    {
        button: one,
        value: 1
    }, 
    {
        button: two,
        value: 2
    }, 
    {
        button: three,
        value: 3
    }, 
    {
        button: four,
        value: 4
    }, 
    {
        button: five,
        value: 5
    }, 
    {
        button: six,
        value: 6
    }, 
    {
        button: seven,
        value: 7
    }, 
    {
        button: eight,
        value: 8
    }, 
    {
        button: nine,
        value: 9
    }, 
    {
        button: piBtn,
        value: Math.PI
    }
]

const operators = [
    {
        button: addition,
        value: '+'
    },
    {
        button: subtraction,
        value: '-'
    },
    {
        button: multiplication,
        value: '*'
    },
    {
        button: division,
        value: '/'
    },
]

// Dot Btn and Equal Btn
dotButton.addEventListener ('click', () => {
    if (calculatorScreen.textContent.includes('.')) {
        console.log('no more dot 4 u');
    } else {
        calculatorScreen.textContent += '.';
    }
})

equalBtn.addEventListener ('click', () => {
    firstNumber = calculatorTopScreen.textContent;
    secondNumber = calculatorScreen.textContent;
    makeOperation(firstNumber, secondNumber, equationOperator);
    calculatorScreen.textContent = '';
    equationOperator = '';
    result = firstNumber;
})

// Clear Btn and ClearAll Btn (remove)
removeBtn.addEventListener ('click', () => {
    calculatorScreen.textContent = '';
})

clearBtn.addEventListener ('click', () => {
    calculatorScreen.textContent = '';
    calculatorTopScreen.textContent = '';
})

// Root Btn and Power Btn
rootBtn.addEventListener('click', () => {
    if (calculatorScreen.textContent == '') {
        console.log('no number');
    } else {
        calculatorScreen.textContent = Math.pow(calculatorScreen.textContent, (1/2));
        console.log(calculatorScreen.textContent);
    }
})

powBtn.addEventListener('click', () => {
    let power;
    if (calculatorScreen.textContent == '') {
        console.log('no number');
    } else {
        calculatorScreen.textContent = Math.pow(calculatorScreen.textContent, prompt('choose pwr'));
        console.log(calculatorScreen.textContent);
    }
})

// Calculation function
function makeOperation (num1, num2, operator) {
    if (operator == '+') {
        result = +num1 + +num2;
    } else if (operator == '-') {
        result = +num1 - +num2;
    }  else if (operator == '*') {
        result = +num1 * +num2;
    }  else if (operator == '/') {
        result = +num1 / +num2;
    } else {
        result = +num2;
    }
    calculatorTopScreen.textContent = result;
    console.log(result);

}

// Creates custom listener for all numbered buttons and operator buttons
for (let i = 0; i < 11; i++) {
    addCustomListener(numbers[i].button, numbers[i].value);
}

for (let i = 0; i < 4; i++) {
    addCustomOperatorListener(operators[i].button, operators[i].value);
}

function addCustomListener (button, value) {
    button.addEventListener('click', () => {
        calculatorScreen.textContent += value;
        numberEquation = calculatorScreen.textContent;
        console.log(numberEquation);

    })
}

function addCustomOperatorListener (button, value) {
    button.addEventListener('click', () => {
        if (calculatorScreen.textContent == '') {
            equationOperator = value;
        } else {
            firstNumber = calculatorTopScreen.textContent;
            secondNumber = calculatorScreen.textContent;
            calculatorTopScreen.textContent = calculatorScreen.textContent;
            calculatorScreen.textContent = '';
            makeOperation(firstNumber, secondNumber, equationOperator);
            equationOperator = value;
        }
    })
}

// Add keyboard input

document.addEventListener ('keydown', (event) => {
    switch(event.keyCode) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            calculatorScreen.textContent += event.key;
            break;
        case 111:
        case 170:
        case 171:
        case 173:
        case 106:
        case 107:
        case 109:
            equationOperator = event.key;
            calculatorTopScreen.textContent = calculatorScreen.textContent;
            calculatorScreen.textContent = '';
    }
})