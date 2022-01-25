let firstNumber = +prompt('What is your first number?');
let secondNumber = +prompt('What is your second number?');
let doAct = prompt('What do you want to do with numbers(+,-,*,/)?');

function mathActions(a,b,c){
    if(c === '+'){
        return sum(a, b);
    }
    else if(c === '-'){
        return minus(a, b);
    }
    else if(c === '*'){
        return multiply(a, b);
    }
    else if(c === '/'){
        return division(a, b);
    }
}
function sum(a,b){
    return a + b;
}
function minus(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
console.log(mathActions(firstNumber, secondNumber, doAct))