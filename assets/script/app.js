function errorHandling(value, errorElement, errorMessage) {
  if (value > 0) {
    errorElement.innerHTML = "";
  } else {
    errorElement.innerHTML = errorMessage;
  }
}
function getValue(event) {
  let targetID = event.target.id;
  let targetClass = event.target.classList.value;
  if (targetID === "bill") {
    bill = parseFloat(event.target.value);
    errorHandling(bill, displayBillError, errorMessage);
  } else if (targetID === "tip-input") {
    tip = parseFloat(event.target.value);
    errorHandling(tip, displayTipError, errorMessage);
  } else if (targetID === "number-of-people-input") {
    people = parseFloat(event.target.value);
    errorHandling(
      people,

      displayPeopleError,
      errorMessage
    );
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
  console.log(bill);
  billInputElement.value = "";
  tipInputElement.value = "";
  numberOfPeopleInputElement.value = "";
  displayFullTip.innerHTML = "";
  displayTipForEach.innerHTML = "";
  bill = "";
  tip = "";
  people = "";
  tipTotalAmount = "";
  tipForEachPerson = "";

  console.log("clicked");
}
billInputElement.addEventListener("input", (e) => calculate(e));
tipInputElement.addEventListener("input", (e) => calculate(e));
numberOfPeopleInputElement.addEventListener("input", (e) => calculate(e));
for (let i = 0; i < tipButtonElement.length; i++) {
  tipButtonElement[i].addEventListener("click", (e) => calculate(e));
}
resetButton.addEventListener("click", reset);
