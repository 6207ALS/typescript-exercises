"use strict";
// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Index Signatures
const obj = new Map();
obj.set(1, "Jane");
obj.set(2, "30");
obj.set(3, "female");
console.log(Object.keys(obj).every((key) => typeof key === "number")); // Output: true
/*
While objects will always have their property keys converted to string values,
Maps will not. JavaScript Maps are data structures that are very much like
objects but allows keys of any type, including numbers.
*/ 
