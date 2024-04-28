// TS240 Introduction to TypeScript | Lesson 1
// Practice Problems: Arrays and Tuples


// Q1
/*
The provided code will raise an error when compiled in TypeScript. On line 1,
the variable "arr" is type annotated as and initialized with an array of
strings. On line 2, the "push" method is called, attempting to push the number 5
to the 'arr' array. "arr", an array of strings, cannot accept a number as an
element.
*/

// Q2
/*
The provided code will raise an error when compiled in TypeScript. On line 1,
the variable "tuple" is declared as a tuple of two numbers. It also initialized 
with an array of two numbers. The code on line 2 attempts to push the string "3" 
to the "tuple" tuple. However, the tuple cannot accept non-number elements.
*/

// Q3
/*
The provided code will not raise an error when compiled in TypeScript. On line 
1, the variable "tuple" is declared as a tuple of two numbers. It also 
initialized with an array of two numbers. The code on line 2 attempts to push 
the string "3" to the "tuple" tuple.
While tuples are meant to have a fixed length, they are essentially arrays;
there's no such thing as a fixed-length-list-like data structure in JavaScript.
The type annotation [number, number] is equivalent to number[]. As such, pushing
additional numbers to the "tuple" tuple is acceptable. 
*/

// Q4
/*
The provided code will raise an error when compiled in TypeScript. On line 1,
the variable "tuple" is declared as a tuple of a number and a string. It also 
initialized with an array of a number and a string. The code on line 2 attempts 
to reassign the value of the first element to the string "1". However, in the 
type description, "tuple's" first element is declared as a number. While
tuples are mutable, the value must match its type declaration.
*/

// Q5
/*
const myArray: [string, string, string, boolean, string, boolean] = ...
OR
const myArray: (string | boolean)[] = ...
*/