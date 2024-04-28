// TS240 Introduction to TypeScript | Lesson 5
// Practice Problems: Index Signatures


// Q1
/*
The output will be "false". The "User" interface declaration states that all
property types of the object should be numbers. However, when the code is
compiled from TypeScript and executed as a JavaScript file, the object's
property names are automatically converted to string values. As such,
every property key is evaluated as type string.
*/


// Q2
type User = Map<number, string>;

const obj: User = new Map();
obj.set(1, "Jane");
obj.set(2, "30");
obj.set(3, "female");

console.log(Object.keys(obj).every((key) => typeof key === "number")); // Output: true

/*
While objects will always have their property keys converted to string values,
Maps will not. JavaScript Maps are data structures that are very much like 
objects but allows keys of any type, including numbers.
*/