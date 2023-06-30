"use strict";

var firstSalary = prompt("Enter first month salery", 'first');
var secondSalary = prompt("Enter second month salery", 'second');
var sum = +firstSalary + +secondSalary;
alert("Your salery for 2 month is: ".concat(sum, "$"));
var bonus = +sum + 1;
alert("You have extra bonus! Your total salary was: ".concat(sum, "$ it's increase for 1$ and now it is: ").concat(bonus, "$"));
alert("Will you work next? " + (bonus >= 2000) || "Will you work next? " + (bonus < 2000));
bonus >= 2000 && alert("I'm ready to work!");
bonus < 2000 && alert("I'm out");