
// variables 
let firstNum = "";
let secondNum = "";
let operator = "";
let currentNum = "";

// query selectors 
const bigNumsDisplay = document.querySelector(".showBigNums");
const operationDisplay = document.querySelector(".showOperation");

const buttons = document.querySelectorAll(".buttons");

const percentBtn = document.querySelector(".percentBtn")
const powersBtn = document.querySelector(".powersBtn");
const addBtn = document.querySelector(".addBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const divisionBtn = document.querySelector(".divisionBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");

const equalBtn = document.querySelector(".equalBtn");
const clearButton = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");


// functions 
function operate () {
    secondNum = parseFloat(bigNumsDisplay.textContent);
    let addSum = firstNum + secondNum;
    let subSum = firstNum - secondNum;
    let timesSum = firstNum * secondNum;
    let divSum = firstNum / secondNum;

    bigNumsDisplay.textContent = "";
    operationDisplay.textContent = `${firstNum} ${operator} ${secondNum} = `;
    
    
    if (operator === "+"){
        bigNumsDisplay.textContent += addSum;
    } else if (operator === "-") {
        bigNumsDisplay.textContent += subSum;
    } else if (operator === "*") {
        bigNumsDisplay.textContent += timesSum;
    } else if (operator === "/") {
        bigNumsDisplay.textContent += divSum;
    } 
}

function displayNums() {
    currentNum =  bigNumsDisplay.textContent;
    
    bigNumsDisplay.textContent += this.textContent;
    
    if(this.textContent === "DEL") {
        operationDisplay.textContent = "";
    }
    if(this.textContent === "x^2") {
        operationDisplay.textContent = `${currentNum}^2 = `;
    }
}

function saveFirstNum() {
    firstNum = parseFloat(currentNum);
    operator = this.textContent;
    bigNumsDisplay.textContent = "";
    operationDisplay.textContent = `${currentNum} ${operator} `;
}


// click events
buttons.forEach((button) =>{
    button.addEventListener("click", displayNums);
});

clearButton.addEventListener("click", () => {
    bigNumsDisplay.textContent= "";
    operationDisplay.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
    currentNum = "";
});


deleteBtn.addEventListener("click", () => {
    bigNumsDisplay.textContent =  `${currentNum.slice(0, -1)}`;
});

powersBtn.addEventListener("click", ()=> {
    bigNumsDisplay.textContent = parseInt(currentNum) * parseInt(currentNum);
});

percentBtn.addEventListener("click", () => {
    bigNumsDisplay.textContent = parseInt(currentNum) / 100;
    operationDisplay.textContent = `${currentNum}%`;
})
equalBtn.addEventListener("click", operate);
addBtn.addEventListener("click", saveFirstNum);
subtractBtn.addEventListener("click", saveFirstNum);
divisionBtn.addEventListener("click", saveFirstNum);
multiplyBtn.addEventListener("click", saveFirstNum);

