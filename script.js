const resultElement = document.getElementById("result");
const userInputElement = document.getElementById("bill");
const percentageButtonElement =
  document.getElementsByClassName("percentage-btn");
console.log(percentageButtonElement);
let userInputValue;
let buttonValue;
function billAmount() {
  userInputValue = userInputElement.value;
  result.innerHTML = userInputValue;
}
console.log(userInputValue);
// function getButtonValue() {s}
for (let i = 0; i < percentageButtonElement.length; i++) {
  console.log(percentageButtonElement[i].value);
  percentageButtonElement[i].addEventListener("click", () => {
    console.log((userInputValue * percentageButtonElement[i].value) / 100);
  });
}
userInputElement.addEventListener("change", billAmount);
