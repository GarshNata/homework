let firstSalary = prompt("Enter first month salery",'first');
let secondSalary = prompt("Enter second month salery",'second');
let sum = +firstSalary + +secondSalary;
alert (`Your salery for 2 month is: ${sum}$`);
let bonus = + sum + 1;
alert (`You have extra bonus! Your total salary was: ${sum}$ it's increase for 1$ and now it is: ${bonus}$`);
alert ("Will you work next? " + (bonus >=2000) || "Will you work next? " + (bonus <2000));
bonus >= 2000 && alert("I'm ready to work!");
bonus < 2000 && alert("I'm out");