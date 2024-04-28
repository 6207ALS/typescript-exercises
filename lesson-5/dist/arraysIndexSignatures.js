"use strict";
// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Arrays and Index Signatures
const customArray = ["apple", 42, "banana"];
function processCustomArray(arr) {
    if (!Array.isArray(arr))
        return [];
    return arr.filter(val => typeof val === "string")
        .map(val => val.toUpperCase());
}
let stringArr = processCustomArray(customArray);
console.log(stringArr); // Output: ["APPLE", "BANANA"]
