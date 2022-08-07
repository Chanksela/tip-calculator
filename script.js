const resultDisplayElement = document.getElementById("display-input");
const tipEachPersonElement = document.getElementById("display-tip");
const userInputElement = document.getElementById("bill");
const percentageButtonElement =
  document.getElementsByClassName("percentage-btn");
console.log(percentageButtonElement);
let userInputValue;
let buttonValue;
function billAmount() {
  userInputValue = userInputElement.value;
  resultDisplayElement.innerHTML = userInputValue;
}
// function calculateTip() {
//     tipEachPersonElement.innerText =
//       userInputValue * percentageButtonElement[i].value) / 100;
//   }
function handleBtnClick(percantageValue, percantageButton, index) {
  percantageValue.innerText =
    (userInputValue * percantageButton[index].value) / 100;
}

console.log(userInputValue);
for (let i = 0; i < percentageButtonElement.length; i++) {
  function calculateTip() {
    handleBtnClick(tipEachPersonElement, percentageButtonElement, i);
  }
  percentageButtonElement[i].addEventListener("click", calculateTip);
}
userInputElement.addEventListener("change", billAmount);
