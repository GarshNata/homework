"use strict";

function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "a=b";
  }
}

var a = prompt("Enter the number a:");
var b = prompt("Enter the number b:");
alert(maxNumber(a, b));

function reverse(number) {
  return -number;
}

var numb = prompt("Enter the number:");
alert(reverse(numb));

function three(number, count) {
  for (var i = 0; i < count; i++) {
    number += 3;
  }

  return number;
}

var number = prompt("Enter the number:");
var count = prompt("Enter the number of additions:");
alert(three(+number, +count));

function KmToM(km) {
  return km * 1000;
}

function KmToCm(km) {
  return km * 100000;
}

function getMetric(metric, km, m, cm) {
  var result;

  if (metric === "m") {
    result = m(KmToM(km));
  } else if (metric === "cm") {
    result = cm(KmToCm(km));
  }

  return result;
}

var km = prompt("Enter value in kilometers:");
var metric = prompt("Enter metric ('m' or 'cm'):");
var result = getMetric(metric, km, function (meters) {
  return meters;
}, function (centimeters) {
  return centimeters;
});
alert(result);