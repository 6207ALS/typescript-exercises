// TS240 Introduction to TypeScript | Lesson 1
// Practice Problems: Primitive Types

// Q1
/*
The provided code raises an error when compiled in TypeScript. The variables
x and y are type annotated as number. The result variable, which is type
annotated as a string, is initialized the sum of x and y. A string variable 
cannot be assigned a number.
*/

// Q2
/*
The provided code will not raise an error when compiled in TypeScript. The 
variables x and y are type annotated as a number and a string, respectively. 
The 'result' string variable is initialized with the sum of the x and y 
variable values. When concatenating string values, the expression will always
evaluate to a string. As such, the result variable is intialized with the string
"22".
*/

// Q3
/*
The provided code will raise an error when compiled in TypeScript. The 
expression "x === y" on line 3 attempts to strictly compare the variables x and
y. The variables differ in types (variable "x" is a number while variable "y"
is a string) so the "===" cannot be used to compare them for equality. 
In other words, the two operands of the "===" operator must be the same type in 
TypeScript.
*/

// Q4
/*
The provided code will not raise an error when compiled in TypeScript. The
variable "result" is type annotated as Boolean and initialized with the return
value of a logical OR expression (||). The OR expression returns the first
truthy operand. In this case, the expression "x", a Boolean variable with the 
value of "true", is the return value. "true" matches the type description of 
"result".
*/

// Q5
/*
The provided code will not raise an error when compiled in TypeScript. The
variable "result" is type annotated as a Boolean variable and initialized
with the return value of a logical OR expression (||). The OR expression returns
the first truthy operand. The first operand (x && y) evaluates to "true", which
becomes the return value of the OR expression. "true" matches the type 
description of "result".
*/

// Q6
/*
The provided code will raise an error when compiled in TypeScript. On line 1,
the variable "x" is declared and type annotated as "undefined". On line 2,
the variable "x" is assigned the number 1. The number 1 does not match the type
description of "x", resulting in an error.
*/