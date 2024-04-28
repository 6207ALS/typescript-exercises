"use strict";
// TS240 Introduction to TypeScript | Lesson 1
// Practice Problems: Explicit Typing vs Type Inference
// Q1
/*
The "concatenate" function accepts two parameters with undeclared types.
Further, the function simply returns the concatenation of the two parameter
values. The lack of type annotation can lead to unintended issues.

The solution would be utilize explicit typing and state what data types the
function expects for parameters "a" and "b". To concatenate strictly number
values, the parameters should both be declared as numbers. To concatenate
strictly string values, the parameters should both be declared as strings.
Alternatively, two separate functions can be defined to achieve both.

It should be noted that the function(s) should have an explicit return value
data type to further specify their intent.
*/ 
