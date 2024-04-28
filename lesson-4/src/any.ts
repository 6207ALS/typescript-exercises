// TS240 Introduction to TypeScript | Lesson 4
// Practice Problems: Uses of Any


// Q1
/*
There will not be any type errors raised when the provided code is compiled in
TypeScript. On line 1, the "processInput" function is defined with a single
parameter of type "any". As such, all of the arguments provided on lines 7-9
are deemed valid inputs by the TypeScript compiler. The function body definition
is completely valid as a variable of type "any" can use all of the 
methods/properties called from lines 2-4.

However, the code will throw an error during runtime. For instance, calling
processInput("hello") will throw an error as "toFixed" (line 3) is not a
method of the string data type.
*/


// Q2
function processInput(input: any) {
  if (typeof input === "string") {
		console.log(input.toUpperCase());
	} else if (typeof input === "number") {
		console.log(input.toFixed(2));
	} else if ("length" in input) {
		console.log(input.length);
	}
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3