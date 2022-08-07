const resultDisplayElement = document.getElementById("display-input");
const tipEachPersonElement = document.getElementById("display-tip");
const percantageInputElement = document.getElementById("input-percentage-btn");
const userInputElement = document.getElementById("bill");
const percentageButtonElement =
  document.getElementsByClassName("percentage-btn");
console.log(percentageButtonElement);
let userInputValue;
let buttonValue;

// save and display bill input value
function billAmount() {
  userInputValue = userInputElement.value;
  resultDisplayElement.innerHTML = userInputValue;
}

// calculate on clicking percantage buttons
function handleBtnClick(percantageValue, percantageButton, index, e) {
  percantageValue.innerText =
    (userInputValue * percantageButton[index].value) / 100;
}
function test(percantageValue, percantageButton, index, e) {
  percantageValue.innerText = (userInputValue * percantageButton.value) / 100;
}
console.log(userInputValue);
for (let i = 0; i < percentageButtonElement.length; i++) {
  function calculateTip(e) {
    if (e.target.id === "input-percentage-btn") {
      test(tipEachPersonElement, percantageInputElement, i);
    } else {
      handleBtnClick(tipEachPersonElement, percentageButtonElement, i);
    }
  }
  percentageButtonElement[i].addEventListener("click", calculateTip);
  percantageInputElement.addEventListener("change", calculateTip);
}
userInputElement.addEventListener("change", billAmount);
