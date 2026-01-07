function add(number1, number2){
    let sum = 0;
    sum = number1 + number2;
    return sum;
}
console.log(add(21, 21));

function sub(number1, number2){
    let sum = 0;
    sum = number1 - number2;
    return sum;
}
console.log(sub(63, 21));

function mult(number1, number2){
    let sum = 0;
    sum = number1 * number2;
    return sum;
}
console.log(mult(21, 2));

function div(number1, number2){
    let sum = 0;
    sum = number1 / number2;
    return sum;
}
console.log(div(84, 2));

function mod(number1, number2){
    let sum = 0;
    sum = number1 % number2;
    return sum;
}
console.log(mod(42, 2));

function askUserOperation() {
    let operation = window.prompt(`Quelle opération souhaitez-vous faire ? (+, -, *, /, %)`);
    return operation;
}

function askUserFirstNumber() {
    let number1 = parseInt(window.prompt(`Choisissez un premier nombre.`));
    return number1;
}

function askUserSecondNumber() {
    let number2 = parseInt(window.prompt(`Choisissez un second nombre.`));
    return number2;
}

function calculator() {
    let operator = askUserOperation();
    let number1 = askUserFirstNumber();
    let number2 = askUserSecondNumber();
    if(operator === "+") {
        let result = add(number1, number2);
        console.log(result);
        return result;
    }
    else if(operator === "-") {
        let result = sub(number1, number2);
        console.log(result);
        return result;
    }
    else if(operator === "*") {
        let result = mult(number1, number2);
        console.log(result);
        return result;
    }
    else if(operator === "/") {
        let result = div(number1, number2);
        console.log(result);
        return result;
    }
    else if(operator === "%") {
        let result = mod(number1, number2);
        console.log(result);
        return result;
    }
}

calculator()