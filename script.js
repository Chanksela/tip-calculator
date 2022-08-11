let bill;
let tip;
let people;
let tipTotalAmount;
let tipForEachPerson;
const errorMessage = "Must be greater than 0";
// display elements
const displayBillElement = document.getElementById("display-input");
const displayPeopleElement = document.getElementById("display-people");
const displayTipElement = document.getElementById("display-tip");
const displayFullTip = document.getElementById("full-amount");
const displayTipForEach = document.getElementById("tip-for-each");
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
function errorHandling(value, element, errorElement, errorMessage) {
  if (value > 0) {
    errorElement.innerHTML = "";
    element.innerHTML = value;
  } else {
    errorElement.innerHTML = errorMessage;
  }
}
function getValue(event) {
  let targetID = event.target.id;
  let targetClass = event.target.classList.value;
  if (targetID === "bill") {
    bill = parseFloat(event.target.value);
    errorHandling(bill, displayBillElement, displayBillError, errorMessage);
  } else if (targetID === "tip-input") {
    tip = parseFloat(event.target.value);
    errorHandling(tip, displayTipElement, displayTipError, errorMessage);
  } else if (targetID === "number-of-people-input") {
    people = parseFloat(event.target.value);
    errorHandling(
      people,
      displayPeopleElement,
      displayPeopleError,
      errorMessage
    );
  } else if (targetClass === "tip-btn") {
    tipInputElement.value = "";
    tip = parseFloat(event.target.value);
    errorHandling(tip, displayTipElement, displayTipError, errorMessage);
  }
}
function calculate(e) {
  getValue(e);
  if (bill > 0 && tip > 0) {
    tipTotalAmount = bill + (bill * tip) / 100;
    displayFullTip.innerHTML = tipTotalAmount;
  }
  if (bill > 0 && tip > 0 && people > 0) {
    tipForEachPerson = tipTotalAmount / people;
    displayTipForEach.innerHTML = tipForEachPerson;
  }
}
billInputElement.addEventListener("input", (e) => calculate(e));
tipInputElement.addEventListener("input", (e) => calculate(e));
numberOfPeopleInputElement.addEventListener("input", (e) => calculate(e));
for (let i = 0; i < tipButtonElement.length; i++) {
  tipButtonElement[i].addEventListener("click", (e) => calculate(e));
}
