function calculator() {
  const calDisplay = document.createElement("div");
  calDisplay.className = "calculatorDisplay";
  calDisplay.textContent = "Calculator";
  calDisplay.id = "calculatorData";
  document.getElementById("main").appendChild(calDisplay);

  //for screen in calculator
  const screen = document.createElement("SPAN");
  screen.id = "screen";
  screen.className = "screen";
  document.getElementById("calculatorData").appendChild(screen);
  //for all rows

  const mainRow = document.createElement("div");
  mainRow.id = "mainRow";
  mainRow.className = "mainRow";
  document.getElementById("calculatorData").appendChild(mainRow);
  //for row
  const row = document.createElement("div");
  row.id = "row";
  row.className = "row";
  document.getElementById("mainRow").appendChild(row);
  //for delet button in row
  const delet = document.createElement("button");
  delet.id = "delet";
  delet.className = "btn";
  delet.textContent = "Delete";
  delet.addEventListener("click", displayDelet);
  document.getElementById("row").appendChild(delet);

  //for clear button in row
  const clear = document.createElement("button");
  clear.id = "clear";
  clear.className = "btn";
  clear.textContent = "C";
  clear.addEventListener("click", displayClear);
  document.getElementById("row").appendChild(clear);

  //for devide button in row
  const devide = document.createElement("button");
  devide.id = "division";
  devide.className = "btn";
  devide.textContent = "/";
  devide.addEventListener("click", displayDivision);
  document.getElementById("row").appendChild(devide);

  //for multiplication button in row
  const multiply = document.createElement("button");
  multiply.id = "multiply";
  multiply.className = "btn";
  multiply.textContent = "*";
  multiply.addEventListener("click", displayMultiply);
  document.getElementById("row").appendChild(multiply);

  //for 2nd row
  const secondRow = document.createElement("div");
  secondRow.id = "2row";
  secondRow.className = "secondRow";
  document.getElementById("mainRow").appendChild(secondRow);

  // for btn in 2nd row
  const seven = document.createElement("button");
  seven.id = "seven";
  seven.className = "btn";
  seven.textContent = "7";
  seven.addEventListener("click", displaySeven);
  document.getElementById("2row").appendChild(seven);

  // for btn in 2nd row
  const eight = document.createElement("button");
  eight.id = "eight";
  eight.className = "btn";
  eight.textContent = "8";
  eight.addEventListener("click", displayEight);
  document.getElementById("2row").appendChild(eight);

  // for btn in 2nd row
  const nine = document.createElement("button");
  nine.id = "nine";
  nine.className = "btn";
  nine.textContent = "9";
  nine.addEventListener("click", displayNine);
  document.getElementById("2row").appendChild(nine);

  // for btn in 2nd row
  const subtract = document.createElement("button");
  subtract.id = "subtract";
  subtract.className = "btn";
  subtract.textContent = "-";
  subtract.addEventListener("click", displaySubtract);
  document.getElementById("2row").appendChild(subtract);

  //for 3nd row
  const thirdRow = document.createElement("div");
  thirdRow.id = "3row";
  thirdRow.className = "secondRow";
  document.getElementById("mainRow").appendChild(thirdRow);

  // for btn in 3rd row
  const four = document.createElement("button");
  four.id = "four";
  four.className = "btn";
  four.textContent = "4";
  four.addEventListener("click", displayFour);
  document.getElementById("3row").appendChild(four);

  // for btn in 3rd row
  const five = document.createElement("button");
  five.id = "five";
  five.className = "btn";
  five.textContent = "5";
  five.addEventListener("click", displayFive);
  document.getElementById("3row").appendChild(five);

  // for btn in 3rd row
  const six = document.createElement("button");
  six.id = "six";
  six.className = "btn";
  six.textContent = "6";
  six.addEventListener("click", displaySix);
  document.getElementById("3row").appendChild(six);

  // for btn in 3rd row
  const addition = document.createElement("button");
  addition.id = "add";
  addition.className = "btn";
  addition.textContent = "+";
  addition.addEventListener("click", displayAdd);
  document.getElementById("3row").appendChild(addition);

  //for 4th row
  const fourthRow = document.createElement("div");
  fourthRow.id = "4row";
  fourthRow.className = "secondRow";
  document.getElementById("mainRow").appendChild(fourthRow);

  // for btn in 4th row
  const one = document.createElement("button");
  one.id = "one";
  one.className = "btn";
  one.textContent = "1";
  one.addEventListener("click", displayOne);
  document.getElementById("4row").appendChild(one);

  // for btn in 4th row
  const two = document.createElement("button");
  two.id = "two";
  two.className = "btn";
  two.textContent = "2";
  two.addEventListener("click", displayTwo);
  document.getElementById("4row").appendChild(two);

  // for btn in 4th row
  const three = document.createElement("button");
  three.id = "three";
  three.className = "btn";
  three.textContent = "3";
  three.addEventListener("click", displayThree);
  document.getElementById("4row").appendChild(three);

  // for btn in 4th row
  const equal = document.createElement("button");
  equal.id = "equal";
  equal.className = "btn";
  equal.textContent = "=";
  equal.addEventListener("click", result);
  document.getElementById("4row").appendChild(equal);

  const zero = document.createElement("button");
  zero.id = "zero";
  zero.textContent = "0";
  zero.className = "zerobtn";

  zero.addEventListener("click", displayZero);
  document.getElementById("mainRow").appendChild(zero);
}
function addition(num1, num2) {
  const sum = num1 + num2;
  document.getElementById("screen").innerHTML = sum;
}
function subtract(num1, num2) {
  const sub = num1 - num2;
  document.getElementById("screen").innerHTML = sub;
}
function multiplication(num1, num2) {
  const multiply = num1 * num2;
  document.getElementById("screen").innerHTML = multiply;
}

function division(num1, num2) {
  const divide = num1 / num2;
  document.getElementById("screen").innerHTML = divide;
}

function delet() {
  screen.value += screen.value.slice(0, -1);
}

function result() {
  const resultDisplay = document.getElementById("screen").innerHTML;
  const resultAdd = resultDisplay.split("+");
  if (resultAdd.length === 2) {
    const number1 = parseInt(resultAdd[0]);
    const number2 = parseInt(resultAdd[1]);
    addition(number1, number2);
  }
  const resultSub = resultDisplay.split("-");
  if (resultSub.length === 2) {
    const number1 = parseInt(resultSub[0]);
    const number2 = parseInt(resultSub[1]);
    subtract(number1, number2);
  }
  const resultMul = resultDisplay.split("*");
  if (resultMul.length === 2) {
    const number1 = parseInt(resultMul[0]);
    const number2 = parseInt(resultMul[1]);
    multiplication(number1, number2);
  }
  const resultDiv = resultDisplay.split("/");
  if (resultDiv.length === 2) {
    const number1 = parseInt(resultDiv[0]);
    const number2 = parseInt(resultDiv[1]);
    division(number1, number2);
  }
}

function displaySeven() {
  const seven = document.getElementById("seven").innerHTML;
  document.getElementById("screen").innerHTML += seven;
}

function displayEight() {
  const eight = document.getElementById("eight").innerHTML;
  document.getElementById("screen").innerHTML += eight;
}

function displayNine() {
  const nine = document.getElementById("nine").innerHTML;
  document.getElementById("screen").innerHTML += nine;
}

function displaySix() {
  const six = document.getElementById("six").innerHTML;
  document.getElementById("screen").innerHTML += six;
}
function displayFive() {
  const five = document.getElementById("five").innerHTML;
  document.getElementById("screen").innerHTML += five;
}

function displayFour() {
  const four = document.getElementById("four").innerHTML;
  document.getElementById("screen").innerHTML += four;
}

function displayThree() {
  const three = document.getElementById("three").innerHTML;
  document.getElementById("screen").innerHTML += three;
}
function displayTwo() {
  const two = document.getElementById("two").innerHTML;
  document.getElementById("screen").innerHTML += two;
}

function displayZero() {
  const zero = document.getElementById("zero").innerHTML;
  document.getElementById("screen").innerHTML += zero;
}

function displayOne() {
  const one = document.getElementById("one").innerHTML;
  document.getElementById("screen").innerHTML += one;
}
function displayAdd() {
  const add = document.getElementById("add").innerHTML;
  document.getElementById("screen").innerHTML += add;
}
function displaySubtract() {
  const sub = document.getElementById("subtract").innerHTML;
  document.getElementById("screen").innerHTML += sub;
}
function displayMultiply() {
  const multiply = document.getElementById("multiply").innerHTML;
  document.getElementById("screen").innerHTML += multiply;
}
function displayDivision() {
  const division = document.getElementById("division").innerHTML;
  document.getElementById("screen").innerHTML += division;
}

function displayClear() {
  document.getElementById("screen").innerHTML = "";
}
function displayDelet() {
  const numbers = document.getElementById("screen").innerHTML;
  document.getElementById("screen").innerHTML = numbers.slice(0, -1);
}
