let result = document.getElementById("result");
let empty = "";
let saved = document.getElementById("save");
function addNumber(number) {
  empty += number;
  result.value = empty;
}

function addOperation(operation) {
  empty += operation;
  result.value = empty;
}
function calculate() {
  try {
    empty = eval(empty.replace("x", "*").replace(":", "/"));
    result.value = empty;
  } catch (error) {
    result.value = "Error";
    empty = "";
  }
}
function clearAll() {
  empty = "";
  result.value = "";
}
function remove() {
  let a = empty;
  empty = result.value;
  result.value = Math.floor(a / 10);
}
function root() {
  if (result.value < 0) {
    result.value = "Ошибка";
  } else {
    result.value = Math.sqrt(result.value);
  }
}
function changeMinusPlus() {
  result.value = result.value * -1;
}
function proc() {
  result.value = result.value / 100;
}
function memoryDelete() {
  saved.textContent = 0;
}
function memory() {
  saved.textContent = result.value;
}
function memoryMinus() {
  saved.textContent = result.value * -1;
}
function memoryOut() {
  result.value += saved.textContent;
}
function memoryMinus() {
  let changeAll = parseFloat(saved.textContent);
  let addAll = parseFloat(result.value) * -1;
  saved.textContent = addAll + changeAll;
}

function memory() {
  let changeAll = parseFloat(saved.textContent);
  let addAll = parseFloat(result.value);
  saved.textContent = changeAll + addAll;
}
function clearEntry() {
  result.value = 0;
  saved.textContent = 0;
}
function icon() {
  alert("Скопированно в буфер обмена !");
}
