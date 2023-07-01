"use strict";

function confirm(age) {
  if (age <= 17) {
    return prompt("Do you study at school?");
  }

  if (age > 17 && age < 25) {
    return prompt("Do you study at university?");
  }

  if (age >= 25 && age < 60) {
    return prompt("Do you have a job?");
  }

  return prompt("What are you doing?");
}

var age = parseInt(prompt("Enter your age:"));
var response = confirm(age);
console.log("Answer:", response);

function taskTwo() {
  var input = prompt("Enter value CSS property Display (block, flex, grid, inline, none):");

  switch (input) {
    case "block":
      alert("Property selected display: block;");
      break;

    case "flex":
      alert("Property selected display: flex;");
      break;

    case "grid":
      alert("Property selected display: grid;");
      break;

    case "inline":
      alert("Property selected display: inline;");
      break;

    case "none":
      alert("Property selected display: none;");
      break;

    default:
      alert("Set 'display: inline-block;'");
  }
}

taskTwo();

function taskThree() {
  var input = prompt("Please enter the number");

  while (isNaN(input) || Number(input) <= 0) {
    input = prompt("Your number is incorect, please enter corect number");
  }

  var result = Number(input) * 12;
  alert(+input + " by 12 equals " + result);
}

taskThree();

for (var i = 2; i <= 50; i += 2) {
  console.log(i);
}