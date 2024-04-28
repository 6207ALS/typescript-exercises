// TS240 Introduction to TypeScript | Lesson 1
// Practice Problems: Parameter types and return types


// Q1
/*
The "initial" parameter appears to be a number. The "values" parameter appears 
to be an array of numbers. A for-loop iterates over the "values" array, with 
each value being removed from the "initial" value. The return value of the 
function should be a string, stated from the explicit return expression on 
line 6.

As such, line 1 of the provided code should be replaced with the following:
function subtract(initial: number, values: number[]): string {
}
*/

// Q2
/*
The following is logged to the console:
Alice, 30, from USA
Bob, unknown age, from Canada
Charlie, 25, from UK

In the "displayInfo" function declaration, the "age" parameter is described as
type string. The optional "age" parameter is described as type number. The
"country" parameter is described as type string with a default value of "USA".

On line 9, the "name" and "age" parameters are given the arguments "Alice" and
30, respectively. The "country" parameter is provided the default value of 
"USA".

On line 9, the "name", "age", and "country" parameters are given the arguments 
"Alice", undefined, and "Canada", respectively. The "age" parameter is given
the argument undefined, which is an accepted value for an optional parameter.

On line 9, the "name", "age", and "country" parameters are given the arguments 
"Charlie", 25, and "UK", respectively.
*/