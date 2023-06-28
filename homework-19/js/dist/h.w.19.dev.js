"use strict";

console.log("you can ignore single and double quotes like this: /'/' /\" /\"");
var userName = prompt("Enter your name", 'Name');
alert("Your name is: ".concat(userName));
var surname = prompt("Enter your surname", 'Surname');
alert("Your full name is: ".concat(userName, " ").concat(surname));
var age = prompt("How old are you?", 'Age');
alert("Your full name is: ".concat(userName, " ").concat(surname, ", your age is: ").concat(age));
var admin = confirm("Are you admin?");
alert("Your full name is: ".concat(userName, " ").concat(surname, ", your age is: ").concat(age, ", admin status: ").concat(admin));
var data = confirm("Please enter your data");