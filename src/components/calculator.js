const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__btn");
const calculatorEqual = document.querySelector(".btn--equal");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const calculatorAc = document.querySelector(".btn--ac");

import { addition, subtract, divide, multiply } from "./math.js";

let numberOne = 0;
let numberTwo = 0;

function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
}

calculatorEqual.addEventListener("click", handleResultClick);

function acClick() {
  calculatorOutput.value = "";
}

calculatorAc.addEventListener("click", acClick);

function addInputEventListener(calculatorInput) {
  console.log("addInputEventListener", calculatorInput.innerText);

  function handleClickEvent() {
    calculatorOutput.value = calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleClickEvent);
}

calculatorInputs.forEach(addInputEventListener);
