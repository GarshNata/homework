function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "a=b";
  }
}
let a = prompt("Enter the number a:");
let b = prompt("Enter the number b:");
alert(maxNumber(a, b));


function reverse(number) {
  return -number;
}
let numb = prompt("Enter the number:");
alert(reverse(numb));


function three(number, count) {
  for (let i = 0; i < count; i++) {
    number += 3;
  }
  return number;
}
let number = prompt("Enter the number:");
let count = prompt("Enter the number of additions:");
alert(three(+number, +count));


function KmToM(km) {
  return km * 1000;
}
function KmToCm(km) {
  return km * 100000;
}
function getMetric(metric, km, m, cm) {
  let result;
  if (metric === "m") {
    result = m(KmToM(km));
  } else if (metric === "cm") {
    result = cm(KmToCm(km));
  }
  return result;
}
let km = prompt("Enter value in kilometers:");
let metric = prompt("Enter metric ('m' or 'cm'):");
let result = getMetric(metric, km, function(meters) {
  return meters;
}, function(centimeters) {
  return centimeters;
});
alert(result);