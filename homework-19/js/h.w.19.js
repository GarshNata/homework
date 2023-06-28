console.log("you can ignore single and double quotes like this: /'/' /\" /\"");

let userName = prompt("Enter your name", 'Name');
alert(`Your name is: ${userName}`);

let surname = prompt("Enter your surname", 'Surname');
alert(`Your full name is: ${userName} ${surname}`);

let age = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${surname}, your age is: ${age}`);

let admin = confirm("Are you admin?");
alert(`Your full name is: ${userName} ${surname}, your age is: ${age}, admin status: ${admin}`);

let data = confirm("Please enter your data");
