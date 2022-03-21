
/*
function operate () {
    secondNum = parseFloat(currentWord);
    bigNumsDisplay.textContent = "";
    if (operator === "+"){
        bigNumsDisplay.textContent += firstNum + secondNum;
    } else if (operator === "-") {
        bigNumsDisplay.textContent += firstNum - secondNum;
    } else if (operator === "*") {
        bigNumsDisplay.textContent += firstNum * secondNum;
    } else if (operator === "/") {
        bigNumsDisplay.textContent += firstNum / secondNum;
    }
}


const bigNumsDisplay = document.querySelector(".showBigNums");


const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) =>{
    button.addEventListener("click", displayNums);
})
let currentWord = "";
const operationDisplay = document.querySelector(".showOperation");

function displayNums() {
    currentWord =  bigNumsDisplay.textContent;
    if (currentWord.length <15){
        bigNumsDisplay.textContent += `${this.textContent}`;
    } else {
        return bigNumsDisplay.textContent = "Reached Limit";
    }
    if(this.textContent !== "=") {
        operationDisplay.textContent += `${this.textContent}`;
    } 
    if(this.textContent === "DEL") {
        operationDisplay.textContent = "";
    }
}

const clearButton = document.querySelector(".clearBtn");
clearButton.addEventListener("click", () => {
    bigNumsDisplay.textContent= "";
    operationDisplay.textContent = "";
})

const deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", () => {
    bigNumsDisplay.textContent =  `${currentWord.slice(0, -1)}`;
})

const powersBtn = document.querySelector(".powersBtn");
powersBtn.addEventListener("click", ()=> {
    bigNumsDisplay.textContent = parseInt(currentWord) * parseInt(currentWord);
})

let firstNum = "";
let secondNum = "";
let operator = "";
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", saveFirstNum);

function saveFirstNum() {
    firstNum = parseFloat(currentWord);
    operator = this.textContent;
    bigNumsDisplay.textContent = "";
}

const subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener("click", saveFirstNum)

const divisionBtn = document.querySelector(".divisionBtn");
divisionBtn.addEventListener("click", saveFirstNum)

const multiplyBtn = document.querySelector(".multiplyBtn");
multiplyBtn.addEventListener("click", saveFirstNum)

const equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", operate)
 */

// variables 
let firstNum = "";
let secondNum = "";
let operator = "";
let currentWord = "";

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
    secondNum = parseFloat(currentWord);
    bigNumsDisplay.textContent = "";
    let addSum = firstNum + secondNum;
    let subSum = firstNum - secondNum;
    let timesSum = firstNum * secondNum;
    let divSum = firstNum / secondNum;
    
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
    currentWord =  bigNumsDisplay.textContent;
    
    bigNumsDisplay.textContent += `${this.textContent}`;
    
    
    if(this.textContent !== "=") {
        operationDisplay.textContent += `${this.textContent}`;
    } 
    if(this.textContent === "DEL") {
        operationDisplay.textContent = "";
    }
}

function saveFirstNum() {
    firstNum = parseFloat(currentWord);
    operator = this.textContent;
    bigNumsDisplay.textContent = "";
}


// click events
buttons.forEach((button) =>{
    button.addEventListener("click", displayNums);
});

clearButton.addEventListener("click", () => {
    bigNumsDisplay.textContent= "";
    operationDisplay.textContent = "";
});


deleteBtn.addEventListener("click", () => {
    bigNumsDisplay.textContent =  `${currentWord.slice(0, -1)}`;
});

powersBtn.addEventListener("click", ()=> {
    bigNumsDisplay.textContent = parseInt(currentWord) * parseInt(currentWord);
});

percentBtn.addEventListener("click", () => {
    bigNumsDisplay.textContent = parseInt(currentWord) / 100;
})
equalBtn.addEventListener("click", operate);
addBtn.addEventListener("click", saveFirstNum);
subtractBtn.addEventListener("click", saveFirstNum);
divisionBtn.addEventListener("click", saveFirstNum);
multiplyBtn.addEventListener("click", saveFirstNum);

