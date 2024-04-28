"use strict";
// TS240 Introduction to TypeScript | Lesson 1
// Practice Problems: Working with built-in JS methods
// Q1
function convertToNumbers(arr) {
    return arr.map(val => +val);
}
const numbersInStringFormat = ["10", "20", "30", "40"];
console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
