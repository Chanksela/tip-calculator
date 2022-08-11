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
function getValue(event) {
  let target = event.target.id;
  console.log(target);
  if (target === "bill") {
    bill = parseFloat(event.target.value);
    displayBillElement.innerHTML = bill;
  } else if (target === "tip-input") {
    tip = parseFloat(event.target.value);
    displayTipElement.innerHTML = tip;
  } else if (target === "number-of-people-input") {
    people = parseFloat(event.target.value);
    displayPeopleElement.innerHTML = people;
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
  displayFullTip.innerHTML = parseFloat(tipAmount);
}
billInputElement.addEventListener("input", (e) => calculate(e));
tipInputElement.addEventListener("input", (e) => calculate(e));
numberOfPeopleInputElement.addEventListener("input", (e) => calculate(e));
