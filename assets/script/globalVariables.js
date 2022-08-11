// global variables
let bill;
let tip;
let people;
let tipTotalAmount;
let tipForEachPerson;
const errorMessage = "Must be greater than 0";
// display elements
const displayFullTip = document.getElementById("full-amount");
const displayTipForEach = document.getElementById("tip-for-each");
// errors
const displayBillError = document.getElementById("bill-error");
const displayTipError = document.getElementById("tip-error");
const displayPeopleError = document.getElementById("num-ppl-error");
// input elements && buttons
const billInputElement = document.getElementById("bill");
const tipInputElement = document.getElementById("tip-input");
const tipButtonElement = document.getElementsByClassName("tip-btn");
const numberOfPeopleInputElement = document.getElementById(
  "number-of-people-input"
);
const resetButton = document.getElementById("reset");
