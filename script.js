const errorMessage = "Must be greater than 0";
// display elements
const displayBillElement = document.getElementById("display-input");
const displayPeopleElement = document.getElementById("display-people");
const displayTipElement = document.getElementById("display-tip");
const displayResult = document.getElementById("result");
// errors
const displayBillError = document.getElementById("bill-error");
const displayTipError = document.getElementById("tip-error");
const displayPeopleError = document.getElementById("num-ppl-error");
// input elements
const billInputElement = document.getElementById("bill");
const tipInputElement = document.getElementById("tip-input");
const tipButtonElement = document.getElementsByClassName("tip-btn");
const numberOfPeopleInputElement = document.getElementById(
  "number-of-people-input"
);
// variables
let billInputValue;
let tipValue;
let numOfPeopleValue;

function handleInput(e) {
  const input = e.target.id;
  switch (input) {
    case "bill":
      getInputValue(
        billInputValue,
        billInputElement,
        displayBillElement,
        displayBillError
      );
      break;
    case "tip-input":
      getInputValue(
        tipValue,
        tipInputElement,
        displayTipElement,
        displayTipError
      );
      break;
    case "number-of-people-input":
      getInputValue(
        numOfPeopleValue,
        numberOfPeopleInputElement,
        displayPeopleElement,
        displayPeopleError
      );
      break;
  }
}
function getInputValue(
  valueVariable,
  inputElement,
  displayElement,
  errorElement
) {
  valueVariable = inputElement.value;
  if (inputElement.value > 0) {
    errorElement.innerHTML = "";
    displayElement.innerHTML = valueVariable;
  } else {
    errorElement.innerHTML = errorMessage;
  }
  calculateTest();
}

function calculateTest() {
  console.log("bill: ", billInputElement.value);
  console.log("tip", tipInputElement.value);
  console.log("people", numberOfPeopleInputElement.value, numOfPeopleValue);
}

billInputElement.addEventListener("change", handleInput);
tipInputElement.addEventListener("change", handleInput);
numberOfPeopleInputElement.addEventListener("change", handleInput);
