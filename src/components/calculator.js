const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__btn");
const calculatorEqual = document.querySelector(".btn--equal");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const calculatorAc = document.querySelector(".btn--ac");

function addition(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function divdivide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const numberOne = Number(calculatorInputs[7].innerText);
const numberTwo = Number(calculatorInputs[9].innerText);

function handleClick() {
  calculatorOutput.value = addition(numberOne, numberTwo);
}
calculatorEqual.addEventListener("click", handleClick);

function acClick() {
  calculatorOutput.value = "";
}

calculatorAc.addEventListener("click", acClick);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value = calculatorInput.innerText;
  }
  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInputs.forEach(addInputEventListener.innerText);
