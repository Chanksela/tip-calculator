// display elements
const displayBillElement = document.getElementById("display-input");
const displayPercantageElement = document.getElementById("display-percantage");
const displayPeopleElement = document.getElementById("display-people");
const displayTipElement = document.getElementById("display-tip");
const displayBillError = document.getElementById("bill-error");
// input elements
const userInputElement = document.getElementById("bill");
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
// get bill amount
function getBillAmount() {
  billInputValue = userInputElement.value;
  console.log(billInputValue);
  if (billInputValue > 0) {
    displayBillElement.innerHTML = billInputValue;
  } else {
    displayBillError.innerHTML = "input must be greater than 0";
  }
}

// get percentage
function getPercantage() {
  percentageValue = percentageButtonElement.value;
  displayPercantageElement.innerHTML = percentageValue;
}
// get ppl amount
function getNumberOfPeople() {
  numOfPeopleValue = numberOfPeopleInputElement.value;
  displayPeopleElement.innerHTML = numOfPeopleValue;
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
    if (e.target.id === "percentage-input") {
      handlePercantageInputClick(displayTipElement, percantageInputElement, i);
    } else {
      handlePercantageBtnClick(displayTipElement, percentageButtonElement, i);
    }
  }

  percentageButtonElement[i].addEventListener("click", calculateTip);
  percantageInputElement.addEventListener("change", calculateTip);
}

function handleButtonPercantage() {
  percentageValue = percantage[index].value;
  displayPercantageElement.innerHTML = percentageValue;
}
userInputElement.addEventListener("change", getBillAmount);
numberOfPeopleInputElement.addEventListener("change", getNumberOfPeople);
