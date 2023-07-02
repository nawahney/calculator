let numOne;
let operator;
let numTwo;

function add(one, two) {
    return one + two;
}

function subtract(one, two) {
    return one - two;
}

function multiply(one, two) {
    return one * two;
}

function divide(one, two) {
    return one / two;
}

function operate(one, oper, two) {
    if (oper == "+") {
        return add(one, two);
    }

    else if (oper == "-") {
        return subtract(one, two);
    }

    else if (oper == "*") {
        return multiply(one, two);
    }

    else if (oper == "/") {
        return divide(one, two);
    }

    else {
        return ("Invalid operation.");
    }
}


//for each number button, add it's div content to the display

let content = document.querySelector(".inner-content");

let nums = document.querySelectorAll(".number");
let addOper = document.querySelector(".add");
let subOper = document.querySelector(".sub");
let multOper = document.querySelector(".mult");
let diviOper = document.querySelector(".divi");
let equals = document.querySelector(".equals");

let allClear = document.querySelector(".ac");
let clear = document.querySelector(".c");

nums.forEach(num => {
    num.addEventListener("click", () => {
        if (content.textContent.length <= 10) {
            if (content.textContent == "NaN") {
                content.textContent = num.textContent;
            }

            else {
                if (content.textContent.includes(".")) {
                    if ((num.textContent != ".")) {
                        content.textContent += num.textContent;
                    }
                }

                else {
                    content.textContent += num.textContent;
                }
            }
        }
    });
});

allClear.addEventListener("click", () => {
    content.textContent = "";
});

clear.addEventListener("click", () => {
    if (content.textContent == "NaN") {
        content.textContent = "";
    }

    else {
        content.textContent = content.textContent.substring(0, content.textContent.length - 1);
    }
});

//on operation, store content in variable then on equal take current
//content and do operation

let numberOne;
let numberTwo;

let addBool = false;
let subBool = false;
let multBool = false;
let diviBool = false;

addOper.addEventListener("click", () => {
    numberOne = parseFloat(content.textContent);
    console.log(numberOne + " | one");
    content.textContent = "";
    addBool = true;
});

subOper.addEventListener("click", () => {
    numberOne = parseFloat(content.textContent);
    console.log(numberOne + " | one");
    content.textContent = "";
    subBool = true;
});

multOper.addEventListener("click", () => {
    numberOne = parseFloat(content.textContent);
    console.log(numberOne + " | one");
    content.textContent = "";
    multBool = true;
});

diviOper.addEventListener("click", () => {
    numberOne = parseFloat(content.textContent);
    console.log(numberOne + " | one");
    content.textContent = "";
    diviBool = true;
});

equals.addEventListener("click", () => {
    numberTwo = parseFloat(content.textContent);
    console.log(numberTwo + " | two");

    if (addBool == true) {
        if (add(numberOne, numberTwo) > 999999999) {
            content.textContent = "NaN";
        }

        else {
            content.textContent = +add(numberOne, numberTwo).toFixed(3);
        }

        addBool = false;
    }

    else if (subBool == true) {
        content.textContent = +subtract(numberOne, numberTwo).toFixed(3);
        subBool = false;
    }

    else if (multBool == true) {
        if (multiply(numberOne, numberTwo) > 999999999) {
            content.textContent = "NaN";
        }

        else {
            content.textContent = +multiply(numberOne, numberTwo).toFixed(3);
        }

        multBool = false;
    }

    else if (diviBool == true) {
        content.textContent = +divide(numberOne, numberTwo).toFixed(3);
        diviBool = false;
    }
});