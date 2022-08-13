function checkReset() {
  if (tip > 0 || bill > 0 || people > 0) {
    resetButton.disabled = false;
    resetButton.classList = "reset-enabled";
  } else {
    resetButton.disabled = true;
    resetButton.classList = "reset-disabled";
  }
}
console.log(tip);
function errorHandling(value, errorElement, errorMessage) {
  checkReset();
  if (value > 0) {
    errorElement.innerHTML = "";
  } else {
    errorElement.innerHTML = errorMessage;
  }
}
function getValue(event) {
  const targetID = event.target.id;
  const targetClass = event.target.classList.value;
  if (targetID === "bill") {
    bill = parseFloat(event.target.value);
    errorHandling(bill, displayBillError, errorMessage);
  } else if (targetID === "tip-input") {
    tip = parseFloat(event.target.value);
    errorHandling(tip, displayTipError, errorMessage);
  } else if (targetID === "number-of-people-input") {
    people = parseFloat(event.target.value);
    errorHandling(people, displayPeopleError, errorMessage);
  } else if (targetClass === "tip-btn") {
    tipInputElement.value = "";
    tip = parseFloat(event.target.value);
    errorHandling(tip, displayTipError, errorMessage);
  }
}
function calculate(e) {
  getValue(e);
  if (bill > 0) {
    tipTotalAmount = bill;
    displayFullTip.innerHTML = "$" + tipTotalAmount.toFixed(2);
  }
  if (bill > 0 && tip > 0) {
    tipTotalAmount = bill + (bill * tip) / 100;
    displayFullTip.innerHTML = "$" + tipTotalAmount.toFixed(2);
  }
  if (bill > 0 && tip > 0 && people > 0) {
    tipForEachPerson = tipTotalAmount / people;
    displayTipForEach.innerHTML = "$" + tipForEachPerson.toFixed(2);
  }
}

function reset() {
  const tipAmount = 0;
  const tipForEach = 0;
  for (const error of displayError) {
    error.innerHTML = "";
  }
  billInputElement.value = "";
  tipInputElement.value = "";
  numberOfPeopleInputElement.value = "";
  displayFullTip.innerHTML = "$" + tipAmount.toFixed(2);
  displayTipForEach.innerHTML = "$" + tipForEach.toFixed(2);
  bill = "";
  tip = "";
  people = "";
  tipTotalAmount = "";
  tipForEachPerson = "";
  checkReset();
}
// check if reset must be enabled
checkReset();

billInputElement.addEventListener("input", (e) => calculate(e));
tipInputElement.addEventListener("input", (e) => calculate(e));
numberOfPeopleInputElement.addEventListener("input", (e) => calculate(e));
for (const btn of tipButtonElement) {
  btn.addEventListener("click", (e) => calculate(e));
}
resetButton.addEventListener("click", reset);
