const errorMessage = "Must be greater than 0";
// display elements
const displayBillElement = document.getElementById("display-input");
const displayPeopleElement = document.getElementById("display-people");
const displayTipElement = document.getElementById("display-tip");
const displayFullTip = document.getElementById("full-tip");
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

function handleInput(e) {
  const input = e.target.id;
  switch (input) {
    case "bill":
      getInputValue(billInputElement, displayBillElement, displayBillError);
      break;
    case "tip-input":
      getInputValue(tipInputElement, displayTipElement, displayTipError);
      break;
    case "number-of-people-input":
      getInputValue(
        numberOfPeopleInputElement,
        displayPeopleElement,
        displayPeopleError
      );
      break;
  }
}
function getInputValue(inputElement, displayElement, errorElement) {
  console.log("id: ", inputElement.id);
  if (inputElement.value > 0) {
    errorElement.innerHTML = "";
    displayElement.innerHTML = inputElement.value;
  } else {
    errorElement.innerHTML = errorMessage;
  }
  calculateTest();
}

function calculateTest() {
  console.log("test ", tipButtonElement.value);
  if (
    billInputElement.value > 0 &&
    displayTipElement.innerHTML > 0 &&
    numberOfPeopleInputElement.value > 0
  ) {
    displayFullTip.innerHTML =
      (billInputElement.value * displayTipElement.innerHTML) / 100;
    displayResult.innerHTML =
      (billInputElement.value * displayTipElement.innerHTML) /
      100 /
      numberOfPeopleInputElement.value;
  }
  // console.log("bill: ", billInputElement.value);
  // console.log("tip input", tipInputElement.value);
  // console.log("people", numberOfPeopleInputElement.value);
}

billInputElement.addEventListener("change", handleInput);
tipInputElement.addEventListener("change", handleInput);
for (let i = 0; i < tipButtonElement.length; i++) {
  tipButtonElement[i].addEventListener("click", () => {
    tipInputElement.value = "";
    displayTipElement.innerHTML = tipButtonElement[i].value;
    calculateTest();
  });
  console.log(tipButtonElement[i].tagName);
}
numberOfPeopleInputElement.addEventListener("change", handleInput);
