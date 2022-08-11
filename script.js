const errorMessage = "Must be greater than 0";
// display elements
const displayBillElement = document.getElementById("display-input");
const displayPercantageElement = document.getElementById("display-percantage");
const displayPeopleElement = document.getElementById("display-people");
const displayTipElement = document.getElementById("display-tip");
const displayResult = document.getElementById("result");
// errors
const displayBillError = document.getElementById("bill-error");
const displayPeopleError = document.getElementById("num-ppl-error");
// input elements
const billInputElement = document.getElementById("bill");
const percantageInputElement = document.getElementById("percentage-input");
const percentageButtonElement =
  document.getElementsByClassName("percentage-btn");
const numberOfPeopleInputElement = document.getElementById(
  "number-of-people-input"
);
// variables
let billInputValue;
let percentageValue;
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
    case "number-of-people-input":
      getInputValue(
        numOfPeopleValue,
        billInputElement,
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
  if (valueVariable > 0) {
    errorElement.innerHTML = "";
    displayElement.innerHTML = valueVariable;
  } else {
    errorElement.innerHTML = errorMessage;
  }
  calculateTest();
}

// calculate on clicking percantage buttons
function handlePercantageBtnClick(percantageValue, percantage, index) {
  console.log("Clicked Button %: ", percantage[index].value);
  percantageValue.innerText = percantage[index].value;
}
function handlePercantageInputClick(percantageValue, percantage) {
  percantageValue.innerText = percantage.value;
}
for (let i = 0; i < percentageButtonElement.length; i++) {
  function calculateTip(e) {
    console.log(e.target.classList.value);
    if (e.target.id === "percentage-input") {
      handlePercantageInputClick(displayTipElement, percantageInputElement, i);
    } else {
      handlePercantageBtnClick(displayTipElement, percentageButtonElement, i);
    }
  }

  percentageButtonElement[i].addEventListener("click", calculateTip);
  percantageInputElement.addEventListener("change", calculateTip);
}
function calculateTest() {
  if (billInputValue > 0 && numOfPeopleValue > 0) {
    displayResult.innerHTML = numOfPeopleValue * billInputValue;
  }
  // getBillAmount();
  // getNumberOfPeople();
}

function handleButtonPercantage() {
  percentageValue = percantage[index].value;
  displayPercantageElement.innerHTML = percentageValue;
}
billInputElement.addEventListener("change", handleInput);
numberOfPeopleInputElement.addEventListener("change", handleInput);
