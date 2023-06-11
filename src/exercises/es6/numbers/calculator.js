//  Calculator
const buttons = document.querySelectorAll('button');
let retourner = '';
const number1 = parseInt(document.getElementById('number1').getAttribute('value'), 10);
const number2 = parseInt(document.getElementById('number2').getAttribute('value'), 10);
const result = document.getElementById('result');
console.log(number2);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        retourner = button.innerHTML;
        if (retourner === 'Add') {
            result.innerHTML = number1 + number2;
        } else if (retourner === 'Subtract') {
            result.innerHTML = number1 - number2;
        } else if (retourner === 'Multiply') {
            result.innerHTML = number1 * number2;
        } else if (retourner === 'Divide') {
            result.innerHTML = number1 / number2;
        }
    });
});
